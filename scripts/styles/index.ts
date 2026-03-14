#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import ts, { SyntaxKind } from 'typescript';
import { writeJsonFile } from '../shared/io/index.js';

type Primitive = string | number | boolean;
type DeclKind =
  | 'const'
  | 'let'
  | 'var'
  | 'function'
  | 'class'
  | 'type'
  | 'interface'
  | 'enum';

type StyleTypeEntry = {
  kind: 'type' | 'interface' | 'enum';
  file: string;
  type: string;
  values: Primitive[] | null;
};

type ClassParameter = {
  name: string;
  type: string;
  optional: boolean;
  rest: boolean;
};

type ClassField = {
  type: string;
  static: boolean;
  readonly: boolean;
  optional: boolean;
  visibility: 'public' | 'protected' | 'private';
  initializer: string | null;
};

type ClassMethod = {
  returnType: string;
  static: boolean;
  async: boolean;
  optional: boolean;
  visibility: 'public' | 'protected' | 'private';
  parameters: ClassParameter[];
};

type StyleClassEntry = {
  file: string;
  extends: string[];
  implements: string[];
  typeParameters: string[];
  constructors: ClassParameter[][];
  fields: Record<string, ClassField>;
  methods: Record<string, ClassMethod>;
};

type StyleFunctionEntry = {
  file: string;
  async: boolean;
  returnType: string;
  parameters: ClassParameter[];
};

type StylesIndexReport = {
  generatedAt: string;
  keys: string[];
  constants: Record<string, unknown>;
  types: Record<string, StyleTypeEntry>;
  classes: Record<string, StyleClassEntry>;
  functions: Record<string, StyleFunctionEntry>;
};

type DeclarationInfo = {
  kind: DeclKind;
  file: string;
  line: number;
  sourceFilePath: string;
  node: ts.Node;
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '../..');
const STYLES_DIR = path.join(ROOT_DIR, 'src/lib/design-system/styles');
const ROOT_INDEX_FILE = path.join(STYLES_DIR, 'index.ts');
const OUTPUT_FILE = path.join(ROOT_DIR, 'src/lib/json/styles/index.json');
const STYLE_GROUPS = ['architecture', 'information', 'interaction'] as const;

function parseRootIndexExports(): { valueNames: Set<string>; typeNames: Set<string> } {
  const content = fs.readFileSync(ROOT_INDEX_FILE, 'utf-8');
  const valueNames = new Set<string>();
  const typeNames = new Set<string>();

  const valueMatches = content.matchAll(/export\s*\{([^}]+)\}\s*from/gm);
  for (const match of valueMatches) {
    const names = match[1]
      .split(',')
      .map((item) => item.trim())
      .map((item) => item.split(/\s+as\s+/).at(-1)?.trim() ?? '')
      .filter(Boolean);
    for (const name of names) valueNames.add(name);
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

  return { valueNames, typeNames };
}

function listStyleFiles(): string[] {
  const files: string[] = [];

  for (const group of STYLE_GROUPS) {
    const dir = path.join(STYLES_DIR, group);
    if (!fs.existsSync(dir)) continue;
    for (const name of fs.readdirSync(dir)) {
      if (!name.endsWith('.ts') || name === 'index.ts') continue;
      files.push(path.join(dir, name));
    }
  }

  return files;
}

function visibilityOf(node: ts.Node & { modifiers?: ts.NodeArray<ts.ModifierLike> }): 'public' | 'protected' | 'private' {
  if (node.modifiers?.some((m) => m.kind === ts.SyntaxKind.PrivateKeyword)) return 'private';
  if (node.modifiers?.some((m) => m.kind === ts.SyntaxKind.ProtectedKeyword)) return 'protected';
  return 'public';
}

function extractLiteralValuesFromTypeNode(typeNode: ts.TypeNode | undefined): Primitive[] | null {
  if (!typeNode || !ts.isUnionTypeNode(typeNode)) return null;
  const values: Primitive[] = [];

  for (const part of typeNode.types) {
    if (ts.isLiteralTypeNode(part)) {
      if (ts.isStringLiteral(part.literal)) {
        values.push(part.literal.text);
        continue;
      }
      if (ts.isNumericLiteral(part.literal)) {
        values.push(Number(part.literal.text));
        continue;
      }
      if (part.literal.kind === SyntaxKind.TrueKeyword) {
        values.push(true);
        continue;
      }
      if (part.literal.kind === SyntaxKind.FalseKeyword) {
        values.push(false);
        continue;
      }
    }
    return null;
  }

  return values.length > 0 ? [...new Set(values)] : null;
}

function collectExportDeclarations(files: string[]): {
  declarations: Record<string, DeclarationInfo>;
  duplicates: Record<string, string[]>;
} {
  const declarations: Record<string, DeclarationInfo> = {};
  const duplicates: Record<string, string[]> = {};

  const add = (
    name: string,
    kind: DeclKind,
    filePath: string,
    sourceFile: ts.SourceFile,
    node: ts.Node
  ): void => {
    const relative = path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');
    const { line } = sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile));
    const loc = `${relative}:${line + 1}`;

    if (declarations[name]) {
      const first = `${declarations[name].file}:${declarations[name].line}`;
      duplicates[name] = [...(duplicates[name] ?? [first]), loc];
      return;
    }

    declarations[name] = {
      kind,
      file: relative,
      line: line + 1,
      sourceFilePath: filePath,
      node
    };
  };

  for (const filePath of files) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const sourceFile = ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true);

    ts.forEachChild(sourceFile, (node) => {
      const hasExport = (node as ts.Node & { modifiers?: ts.NodeArray<ts.ModifierLike> }).modifiers?.some(
        (m) => m.kind === ts.SyntaxKind.ExportKeyword
      );
      if (!hasExport) return;

      if (ts.isVariableStatement(node)) {
        const kind: DeclKind = (node.declarationList.flags & ts.NodeFlags.Const) !== 0
          ? 'const'
          : (node.declarationList.flags & ts.NodeFlags.Let) !== 0
            ? 'let'
            : 'var';
        for (const declaration of node.declarationList.declarations) {
          if (ts.isIdentifier(declaration.name)) {
            add(declaration.name.text, kind, filePath, sourceFile, declaration.name);
          }
        }
        return;
      }

      if (ts.isFunctionDeclaration(node) && node.name) {
        add(node.name.text, 'function', filePath, sourceFile, node.name);
        return;
      }

      if (ts.isClassDeclaration(node) && node.name) {
        add(node.name.text, 'class', filePath, sourceFile, node.name);
        return;
      }

      if (ts.isTypeAliasDeclaration(node)) {
        add(node.name.text, 'type', filePath, sourceFile, node.name);
        return;
      }

      if (ts.isInterfaceDeclaration(node)) {
        add(node.name.text, 'interface', filePath, sourceFile, node.name);
        return;
      }

      if (ts.isEnumDeclaration(node)) {
        add(node.name.text, 'enum', filePath, sourceFile, node.name);
      }
    });
  }

  return { declarations, duplicates };
}

function normalizeMethodName(base: string, existing: Record<string, ClassMethod>): string {
  if (!(base in existing)) return base;
  let index = 2;
  while (`${base}#${index}` in existing) index++;
  return `${base}#${index}`;
}

function parameterFromNode(param: ts.ParameterDeclaration): ClassParameter {
  return {
    name: param.name.getText(),
    type: param.type ? param.type.getText() : 'unknown',
    optional: Boolean(param.questionToken) || Boolean(param.initializer),
    rest: Boolean(param.dotDotDotToken)
  };
}

function serializeValue(value: unknown, depth = 0): unknown {
  if (depth > 8) return '[MaxDepth]';
  if (value === null) return null;
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') return value;
  if (typeof value === 'bigint') return value.toString();
  if (typeof value === 'undefined') return null;
  if (typeof value === 'function') return `[Function:${(value as Function).name || 'anonymous'}]`;
  if (Array.isArray(value)) return value.map((item) => serializeValue(item, depth + 1));

  if (typeof value === 'object') {
    const obj = value as Record<string, unknown>;
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(obj)) {
      out[k] = serializeValue(v, depth + 1);
    }
    return out;
  }

  return String(value);
}

async function main(): Promise<void> {
  if (!fs.existsSync(ROOT_INDEX_FILE)) {
    throw new Error(`Root styles index not found: ${ROOT_INDEX_FILE}`);
  }

  const files = listStyleFiles();
  const { declarations, duplicates } = collectExportDeclarations(files);
  if (Object.keys(duplicates).length > 0) {
    const details = Object.entries(duplicates)
      .map(([name, places]) => `${name}: ${places.join(', ')}`)
      .join(' | ');
    throw new Error(`Duplicate exported names found in styles: ${details}`);
  }

  const { valueNames, typeNames } = parseRootIndexExports();

  const constants: Record<string, unknown> = {};
  const types: Record<string, StyleTypeEntry> = {};
  const classes: Record<string, StyleClassEntry> = {};
  const functions: Record<string, StyleFunctionEntry> = {};

  for (const filePath of files) {
    const module = (await import(pathToFileURL(filePath).href)) as Record<string, unknown>;

    for (const [name, value] of Object.entries(module)) {
      if (!valueNames.has(name)) continue;
      const decl = declarations[name];
      if (!decl) continue;
      if (decl.kind === 'const' || decl.kind === 'let' || decl.kind === 'var') {
        const variableDecl = decl.node.parent as ts.VariableDeclaration;
        const initializer = variableDecl.initializer;
        const isFnValue = Boolean(
          initializer && (
            ts.isArrowFunction(initializer) ||
            ts.isFunctionExpression(initializer)
          )
        );
        if (isFnValue) continue;
        constants[name] = serializeValue(value);
      }
    }
  }

  for (const typeName of typeNames) {
    const decl = declarations[typeName];
    if (!decl) continue;
    if (!['type', 'interface', 'enum'].includes(decl.kind)) continue;

    const node = decl.node.parent;
    let typeText = 'unknown';
    let values: Primitive[] | null = null;

    if (ts.isTypeAliasDeclaration(node)) {
      typeText = node.type.getText();
      values = extractLiteralValuesFromTypeNode(node.type);
    } else if (ts.isInterfaceDeclaration(node)) {
      typeText = node.name.text;
    } else if (ts.isEnumDeclaration(node)) {
      typeText = node.name.text;
      const enumValues: Primitive[] = [];
      for (const member of node.members) {
        if (!member.initializer) continue;
        if (ts.isStringLiteral(member.initializer)) enumValues.push(member.initializer.text);
        if (ts.isNumericLiteral(member.initializer)) enumValues.push(Number(member.initializer.text));
        if (member.initializer.kind === SyntaxKind.TrueKeyword) enumValues.push(true);
        if (member.initializer.kind === SyntaxKind.FalseKeyword) enumValues.push(false);
      }
      values = enumValues.length > 0 ? enumValues : null;
    }

    types[typeName] = {
      kind: decl.kind as 'type' | 'interface' | 'enum',
      file: decl.file,
      type: typeText,
      values
    };
  }

  for (const valueName of valueNames) {
    const decl = declarations[valueName];
    if (!decl) continue;

    if (decl.kind === 'class') {
      const classNode = decl.node.parent as ts.ClassDeclaration;
      const classFields: Record<string, ClassField> = {};
      const classMethods: Record<string, ClassMethod> = {};
      const constructors: ClassParameter[][] = [];

      const extendsList = (classNode.heritageClauses ?? [])
        .filter((h) => h.token === ts.SyntaxKind.ExtendsKeyword)
        .flatMap((h) => h.types.map((t) => t.getText()));
      const implementsList = (classNode.heritageClauses ?? [])
        .filter((h) => h.token === ts.SyntaxKind.ImplementsKeyword)
        .flatMap((h) => h.types.map((t) => t.getText()));

      for (const member of classNode.members) {
        if (ts.isPropertyDeclaration(member) && member.name) {
          const fieldName = member.name.getText();
          classFields[fieldName] = {
            type: member.type ? member.type.getText() : 'unknown',
            static: Boolean(member.modifiers?.some((m) => m.kind === ts.SyntaxKind.StaticKeyword)),
            readonly: Boolean(member.modifiers?.some((m) => m.kind === ts.SyntaxKind.ReadonlyKeyword)),
            optional: Boolean(member.questionToken),
            visibility: visibilityOf(member),
            initializer: member.initializer ? member.initializer.getText().slice(0, 240) : null
          };
          continue;
        }

        if (ts.isConstructorDeclaration(member)) {
          constructors.push(member.parameters.map((p) => parameterFromNode(p)));
          continue;
        }

        if (ts.isMethodDeclaration(member) && member.name) {
          const methodName = normalizeMethodName(member.name.getText(), classMethods);
          const returnType = member.type?.getText() ?? 'unknown';

          classMethods[methodName] = {
            returnType,
            static: Boolean(member.modifiers?.some((m) => m.kind === ts.SyntaxKind.StaticKeyword)),
            async: Boolean(member.modifiers?.some((m) => m.kind === ts.SyntaxKind.AsyncKeyword)),
            optional: Boolean(member.questionToken),
            visibility: visibilityOf(member),
            parameters: member.parameters.map((p) => parameterFromNode(p))
          };
        }
      }

      classes[valueName] = {
        file: decl.file,
        extends: extendsList,
        implements: implementsList,
        typeParameters: (classNode.typeParameters ?? []).map((t) => t.name.getText()),
        constructors,
        fields: classFields,
        methods: classMethods
      };
      continue;
    }

    if (decl.kind === 'function') {
      const fnNode = decl.node.parent as ts.FunctionDeclaration;
      const returnType = fnNode.type?.getText() ?? 'unknown';

      functions[valueName] = {
        file: decl.file,
        async: Boolean(fnNode.modifiers?.some((m) => m.kind === ts.SyntaxKind.AsyncKeyword)),
        returnType,
        parameters: fnNode.parameters.map((p) => parameterFromNode(p))
      };
      continue;
    }

    if (decl.kind === 'const' || decl.kind === 'let' || decl.kind === 'var') {
      const variableDecl = decl.node.parent as ts.VariableDeclaration;
      const initializer = variableDecl.initializer;
      const isFnValue = Boolean(
        initializer && (
          ts.isArrowFunction(initializer) ||
          ts.isFunctionExpression(initializer)
        )
      );
      if (isFnValue) {
        const callable = initializer as ts.ArrowFunction | ts.FunctionExpression;
        const returnType = callable.type?.getText() ?? 'unknown';
        functions[valueName] = {
          file: decl.file,
          async: Boolean(callable.modifiers?.some((m) => m.kind === ts.SyntaxKind.AsyncKeyword)),
          returnType,
          parameters: callable.parameters.map((p) => parameterFromNode(p))
        };
      }
    }
  }

  const unresolvedValues = [...valueNames].filter(
    (name) => !(name in constants) && !(name in classes) && !(name in functions)
  );
  const unresolvedTypes = [...typeNames].filter((name) => !(name in types));
  if (unresolvedValues.length > 0 || unresolvedTypes.length > 0) {
    const parts: string[] = [];
    if (unresolvedValues.length > 0) parts.push(`missing value exports: ${unresolvedValues.join(', ')}`);
    if (unresolvedTypes.length > 0) parts.push(`missing type exports: ${unresolvedTypes.join(', ')}`);
    throw new Error(`Failed to resolve style exports from root index (${parts.join('; ')})`);
  }

  const keys = [
    ...Object.keys(constants),
    ...Object.keys(types),
    ...Object.keys(classes),
    ...Object.keys(functions)
  ];
  const dupes = keys.filter((key, idx) => keys.indexOf(key) !== idx);
  if (dupes.length > 0) {
    throw new Error(`Duplicate keys between sections: ${[...new Set(dupes)].join(', ')}`);
  }

  const report: StylesIndexReport = {
    generatedAt: new Date().toISOString(),
    keys: [...keys].sort((a, b) => a.localeCompare(b)),
    constants,
    types,
    classes,
    functions
  };

  writeJsonFile(OUTPUT_FILE, report);
  console.log(`[styles-index] Saved report to: ${OUTPUT_FILE}`);
  console.log(
    `[styles-index] Keys: ${report.keys.length}, constants: ${Object.keys(constants).length}, classes: ${Object.keys(classes).length}, functions: ${Object.keys(functions).length}, types: ${Object.keys(types).length}`
  );
}

main().catch((error) => {
  if (error instanceof Error) {
    console.error('[styles-index] Failed:', error.message);
    if (error.stack) console.error(error.stack);
  } else {
    console.error('[styles-index] Failed:', String(error));
  }
  process.exit(1);
});
