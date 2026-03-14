#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import ts from 'typescript';
import { writeJsonFile } from '../shared/io/index.js';

type Primitive = string | number | boolean;

type TokenTypeEntry = Primitive[] | string;

type TokensIndexReport = {
  generatedAt: string;
  keys: string[];
  constants: Record<string, unknown>;
  types: Record<string, TokenTypeEntry>;
  architecture: string[];
  information: string[];
  interaction: string[];
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '../..');
const TOKENS_DIR = path.join(ROOT_DIR, 'src/lib/design-system/tokens');
const ROOT_INDEX_FILE = path.join(TOKENS_DIR, 'index.ts');
const OUTPUT_FILE = path.join(ROOT_DIR, 'src/lib/json/tokens/index.json');
const TOKEN_GROUPS = ['architecture', 'information', 'interaction'] as const;
type TokenGroup = (typeof TOKEN_GROUPS)[number];

function parseRootIndexExports(): { constantNames: Set<string>; typeNames: Set<string> } {
  const content = fs.readFileSync(ROOT_INDEX_FILE, 'utf-8');
  const constantNames = new Set<string>();
  const typeNames = new Set<string>();

  const constMatches = content.matchAll(/export\s*\{([^}]+)\}\s*from/gm);
  for (const match of constMatches) {
    const names = match[1]
      .split(',')
      .map((item) => item.trim())
      .map((item) => item.split(/\s+as\s+/).at(-1)?.trim() ?? '')
      .filter(Boolean);
    for (const name of names) constantNames.add(name);
  }

  const typeMatches = content.matchAll(/export\s+type\s*\{([^}]+)\}\s*from/gm);
  for (const match of typeMatches) {
    const names = match[1]
      .split(',')
      .map((item) => item.trim())
      .map((item) => item.split(/\s+as\s+/).at(-1)?.trim() ?? '')
      .filter(Boolean);
    for (const name of names) typeNames.add(name);
  }

  return { constantNames, typeNames };
}

function listTokenFiles(): string[] {
  const files: string[] = [];

  for (const group of TOKEN_GROUPS) {
    const dir = path.join(TOKENS_DIR, group);
    if (!fs.existsSync(dir)) continue;

    for (const name of fs.readdirSync(dir)) {
      if (!name.endsWith('.ts') || name === 'index.ts') continue;
      files.push(path.join(dir, name));
    }
  }

  return files;
}

function collectExportNameDuplicates(files: string[]): Record<string, string[]> {
  const occurrences: Record<string, string[]> = {};

  for (const filePath of files) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const sourceFile = ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true);
    const relPath = path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');

    const add = (name: string, node: ts.Node): void => {
      const { line } = sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile));
      const loc = `${relPath}:${line + 1}`;
      occurrences[name] = [...(occurrences[name] ?? []), loc];
    };

    ts.forEachChild(sourceFile, (node) => {
      const hasExport = (node as ts.Node & { modifiers?: ts.NodeArray<ts.ModifierLike> }).modifiers?.some(
        (m) => m.kind === ts.SyntaxKind.ExportKeyword
      );
      if (!hasExport) return;

      if (ts.isVariableStatement(node)) {
        for (const declaration of node.declarationList.declarations) {
          if (ts.isIdentifier(declaration.name)) {
            add(declaration.name.text, declaration.name);
          }
        }
        return;
      }

      if (
        ts.isTypeAliasDeclaration(node) ||
        ts.isInterfaceDeclaration(node) ||
        ts.isEnumDeclaration(node) ||
        ts.isFunctionDeclaration(node) ||
        ts.isClassDeclaration(node)
      ) {
        if (node.name) add(node.name.text, node.name);
      }
    });
  }

  return Object.fromEntries(
    Object.entries(occurrences).filter(([, places]) => places.length > 1)
  );
}

function extractLiteralValues(type: ts.Type, checker: ts.TypeChecker): Primitive[] | null {
  const queue: ts.Type[] = [type];
  const values: Primitive[] = [];
  const seen = new Set<number>();

  while (queue.length > 0) {
    const current = queue.shift();
    if (!current) continue;
    if (seen.has(current.id)) continue;
    seen.add(current.id);

    if (current.isUnion()) {
      queue.push(...current.types);
      continue;
    }

    if (current.isStringLiteral()) {
      values.push(current.value);
      continue;
    }

    if (current.isNumberLiteral()) {
      values.push(current.value);
      continue;
    }

    if ((current.flags & ts.TypeFlags.BooleanLiteral) !== 0) {
      const text = checker.typeToString(current);
      if (text === 'true') values.push(true);
      if (text === 'false') values.push(false);
      continue;
    }

    return null;
  }

  return values.length > 0 ? [...new Set(values)] : null;
}

async function collectConstants(
  files: string[],
  expected: Set<string>
): Promise<{
  constants: Record<string, unknown>;
  declaredIn: Record<string, string>;
}> {
  const constants: Record<string, unknown> = {};
  const declaredIn: Record<string, string> = {};

  for (const filePath of files) {
    const relativeFile = path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');
    const module = (await import(pathToFileURL(filePath).href)) as Record<string, unknown>;

    for (const [name, value] of Object.entries(module)) {
      if (!expected.has(name)) continue;
      if (name in constants) {
        throw new Error(`Duplicate key detected in constants: ${name}`);
      }
      constants[name] = value;
      declaredIn[name] = relativeFile;
    }
  }

  return { constants, declaredIn };
}

function collectTypes(
  files: string[],
  expected: Set<string>
): {
  types: Record<string, TokenTypeEntry>;
  declaredIn: Record<string, string>;
} {
  const normalizedFileSet = new Set(files.map((filePath) => path.resolve(filePath).toLowerCase()));
  const program = ts.createProgram(files, {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    strict: false,
    skipLibCheck: true
  });
  const checker = program.getTypeChecker();
  const types: Record<string, TokenTypeEntry> = {};
  const declaredIn: Record<string, string> = {};

  for (const sourceFile of program.getSourceFiles()) {
    const normalizedSourcePath = path.resolve(sourceFile.fileName).toLowerCase();
    if (!normalizedFileSet.has(normalizedSourcePath)) continue;
    const relativeFile = path.relative(ROOT_DIR, sourceFile.fileName).replace(/\\/g, '/');

    ts.forEachChild(sourceFile, (node) => {
      const isSupportedTypeNode =
        ts.isTypeAliasDeclaration(node) ||
        ts.isInterfaceDeclaration(node) ||
        ts.isEnumDeclaration(node);
      if (!isSupportedTypeNode) return;

      const hasExport = node.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword);
      if (!hasExport) return;

      const name = node.name.text;
      if (!expected.has(name)) return;
      if (name in types) {
        throw new Error(`Duplicate key detected in types: ${name}`);
      }

      const type = checker.getTypeAtLocation(node);
      types[name] = extractLiteralValues(type, checker) ?? checker.typeToString(type);
      declaredIn[name] = relativeFile;
    });
  }

  return { types, declaredIn };
}

function getGroupFromFilePath(filePath: string): TokenGroup | null {
  const normalized = filePath.replace(/\\/g, '/');
  const absoluteMarker = '/src/lib/design-system/tokens/';
  const relativeMarker = 'src/lib/design-system/tokens/';
  const idxAbsolute = normalized.indexOf(absoluteMarker);
  const idxRelative = normalized.indexOf(relativeMarker);
  const after =
    idxAbsolute >= 0
      ? normalized.slice(idxAbsolute + absoluteMarker.length)
      : idxRelative >= 0
        ? normalized.slice(idxRelative + relativeMarker.length)
        : null;
  if (!after) return null;
  const group = after.split('/')[0] as TokenGroup;
  return TOKEN_GROUPS.includes(group) ? group : null;
}

function buildGroupKeys(
  constantsDeclaredIn: Record<string, string>,
  typesDeclaredIn: Record<string, string>
): Record<TokenGroup, string[]> {
  const grouped: Record<TokenGroup, Set<string>> = {
    architecture: new Set<string>(),
    information: new Set<string>(),
    interaction: new Set<string>()
  };

  for (const [name, file] of Object.entries(constantsDeclaredIn)) {
    const group = getGroupFromFilePath(file);
    if (!group) continue;
    grouped[group].add(name);
  }

  for (const [name, file] of Object.entries(typesDeclaredIn)) {
    const group = getGroupFromFilePath(file);
    if (!group) continue;
    grouped[group].add(name);
  }

  return {
    architecture: [...grouped.architecture].sort((a, b) => a.localeCompare(b)),
    information: [...grouped.information].sort((a, b) => a.localeCompare(b)),
    interaction: [...grouped.interaction].sort((a, b) => a.localeCompare(b))
  };
}

function validateCoverage(
  expectedConstants: Set<string>,
  expectedTypes: Set<string>,
  constants: Record<string, unknown>,
  types: Record<string, TokenTypeEntry>
): void {
  const missingConstants = [...expectedConstants].filter((name) => !(name in constants));
  const missingTypes = [...expectedTypes].filter((name) => !(name in types));

  if (missingConstants.length > 0 || missingTypes.length > 0) {
    const parts: string[] = [];
    if (missingConstants.length > 0) {
      parts.push(`missing constants: ${missingConstants.join(', ')}`);
    }
    if (missingTypes.length > 0) {
      parts.push(`missing types: ${missingTypes.join(', ')}`);
    }
    throw new Error(`Failed to resolve exported token keys from root index (${parts.join('; ')})`);
  }
}

function validateGlobalUniqueness(constants: Record<string, unknown>, types: Record<string, TokenTypeEntry>): string[] {
  const keys = [...Object.keys(constants), ...Object.keys(types)];
  const dupes = keys.filter((key, idx) => keys.indexOf(key) !== idx);

  if (dupes.length > 0) {
    throw new Error(`Duplicate keys between constants/types: ${[...new Set(dupes)].join(', ')}`);
  }

  return keys.sort((a, b) => a.localeCompare(b));
}

async function main(): Promise<void> {
  if (!fs.existsSync(ROOT_INDEX_FILE)) {
    throw new Error(`Root tokens index not found: ${ROOT_INDEX_FILE}`);
  }

  const files = listTokenFiles();
  const duplicates = collectExportNameDuplicates(files);
  if (Object.keys(duplicates).length > 0) {
    const details = Object.entries(duplicates)
      .map(([name, places]) => `${name}: ${places.join(', ')}`)
      .join(' | ');
    throw new Error(`Duplicate exported names found in tokens: ${details}`);
  }

  const { constantNames, typeNames } = parseRootIndexExports();
  const { constants, declaredIn: constantsDeclaredIn } = await collectConstants(files, constantNames);
  const { types, declaredIn: typesDeclaredIn } = collectTypes(files, typeNames);
  const groupedKeys = buildGroupKeys(constantsDeclaredIn, typesDeclaredIn);

  validateCoverage(constantNames, typeNames, constants, types);
  const keys = validateGlobalUniqueness(constants, types);

  const report: TokensIndexReport = {
    generatedAt: new Date().toISOString(),
    keys,
    constants,
    types,
    architecture: groupedKeys.architecture,
    information: groupedKeys.information,
    interaction: groupedKeys.interaction
  };

  writeJsonFile(OUTPUT_FILE, report);
  console.log(`[tokens-index] Saved report to: ${OUTPUT_FILE}`);
  console.log(`[tokens-index] Keys: ${keys.length}, constants: ${Object.keys(constants).length}, types: ${Object.keys(types).length}`);
}

main().catch((error) => {
  console.error('[tokens-index] Failed:', error instanceof Error ? error.message : String(error));
  process.exit(1);
});
