#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

type ComponentType = 'atoms' | 'molecules' | 'organisms' | 'unknown';

interface Violation {
  source: 'structure' | 'complexity' | 'pattern' | 'category' | 'imports' | 'style' | 'naming' | 'composition' | 'context';
  type: string;
  message: string;
}

interface FileReport {
  filePath: string;
  componentType: ComponentType;
  inferredLevel: ComponentType;
  classificationDrift: boolean;
  driftReasons: string[];
  componentImports: number;
  hasContextOrStore: boolean;
  hasDataOrNavigation: boolean;
  runeCount: number;
  propCount: number;
  derivedCount: number;
  eventHandlerCount: number;
  bindingCount: number;
  stylesFileExists: boolean;
  typesFileExists: boolean;
  cssFileExists: boolean;
  snippetUsage: boolean;
  readmeExists: boolean;
  violations: Violation[];
  violationCount: number;
}

interface AtomicDesignReport {
  meta: {
    generatedAt: string;
    generator: string;
    sourceRoot: string;
  };
  summary: {
    totalFiles: number;
    filesWithViolations: number;
    cleanFiles: number;
    totalViolations: number;
  };
  byComponentType: Array<{
    componentType: ComponentType;
    files: number;
    violations: number;
  }>;
  bySource: Array<{
    source: Violation['source'];
    count: number;
  }>;
  files: FileReport[];
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..', '..', '..');
const COMPONENTS_ROOT = path.join(PROJECT_ROOT, 'src', 'lib', 'components');
const OUTPUT_FILE = path.join(PROJECT_ROOT, 'src', 'lib', 'json', 'samo', 'atomic-design', 'report.json');

function toUnixPath(input: string): string {
  return input.split(path.sep).join('/');
}

function countMatches(content: string, pattern: RegExp): number {
  return (content.match(pattern) ?? []).length;
}

function getComponentType(filePath: string): ComponentType {
  const relative = toUnixPath(path.relative(COMPONENTS_ROOT, filePath));
  const top = relative.split('/')[0] ?? '';
  if (top === 'atoms' || top === 'molecules' || top === 'organisms') {
    return top;
  }
  return 'unknown';
}

function getComponentFiles(root: string): string[] {
  const out: string[] = [];

  function walk(dirPath: string): void {
    for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
      const fullPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
        continue;
      }
      if (entry.isFile() && entry.name.endsWith('.svelte') && !entry.name.endsWith('.story.svelte')) {
        const componentType = getComponentType(fullPath);
        if (componentType !== 'unknown') {
          out.push(fullPath);
        }
      }
    }
  }

  walk(root);
  return out;
}

function calculateCyclomatic(content: string): number {
  let complexity = 1;
  complexity += countMatches(content, /\bif\s*\(/g);
  complexity += countMatches(content, /\belse\s+if\b/g);
  complexity += countMatches(content, /\bfor\s*\(/g);
  complexity += countMatches(content, /\bwhile\s*\(/g);
  complexity += countMatches(content, /\bswitch\s*\(/g);
  complexity += countMatches(content, /{#if\s+/g);
  complexity += countMatches(content, /{:else if\s+/g);
  complexity += countMatches(content, /{#each\s+/g);
  complexity += countMatches(content, /\s&&\s/g);
  complexity += countMatches(content, /\s\|\|\s/g);
  return complexity;
}

function calculateComplexityScore(content: string): number {
  const lineCount = content.split('\n').length;
  const tagCount = countMatches(content, /<\s*[a-zA-Z][a-zA-Z0-9]*/g);
  const functionCount = countMatches(content, /\bfunction\s+\w+/g);
  const stateCount = countMatches(content, /\$state\b/g);
  const derivedCount = countMatches(content, /\$derived\b/g);
  const effectCount = countMatches(content, /\$effect\b/g);
  const cyclomatic = calculateCyclomatic(content);

  return Number(
    (
      lineCount * 0.1 +
      tagCount * 0.2 +
      functionCount * 0.6 +
      stateCount * 0.5 +
      derivedCount * 0.4 +
      effectCount * 0.6 +
      cyclomatic * 0.3
    ).toFixed(2)
  );
}

function analyzeStructure(filePath: string): Violation[] {
  const violations: Violation[] = [];
  const dir = path.dirname(filePath);
  const files = fs.readdirSync(dir, { withFileTypes: true }).filter((entry) => entry.isFile());

  const svelteFiles = files.filter(
    (entry) => entry.name.endsWith('.svelte') && !entry.name.endsWith('.story.svelte')
  );
  const storyFiles = files.filter((entry) => entry.name.endsWith('.story.svelte'));
  const readmeFiles = files.filter((entry) => entry.name.toLowerCase() === 'readme.md');
  const stylesFiles = files.filter((entry) => entry.name === 'styles.ts');
  const typesFiles = files.filter((entry) => entry.name === 'types.ts');
  const cssFiles = files.filter((entry) => entry.name.endsWith('.css'));

  if (svelteFiles.length > 1) {
    violations.push({
      source: 'structure',
      type: 'multiple_svelte_files',
      message: 'Folder has multiple component .svelte files.'
    });
  }
  if (svelteFiles.length === 0) {
    violations.push({
      source: 'structure',
      type: 'missing_component_svelte',
      message: 'Folder has no component .svelte file.'
    });
  }
  if (storyFiles.length === 0) {
    violations.push({
      source: 'structure',
      type: 'missing_story_file',
      message: 'Folder has no .story.svelte file.'
    });
  }
  if (readmeFiles.length === 0) {
    violations.push({
      source: 'structure',
      type: 'missing_readme',
      message: 'Folder has no readme.md file.'
    });
  }
  if (stylesFiles.length === 0) {
    violations.push({
      source: 'structure',
      type: 'missing_styles_ts',
      message: 'Folder has no styles.ts file.'
    });
  }
  if (typesFiles.length === 0) {
    violations.push({
      source: 'structure',
      type: 'missing_types_ts',
      message: 'Folder has no types.ts file.'
    });
  }
  if (cssFiles.length === 0) {
    violations.push({
      source: 'structure',
      type: 'missing_css_file',
      message: 'Folder has no .css file.'
    });
  }
  return violations;
}

function analyzeImports(content: string, componentType: ComponentType, relativePath: string): Violation[] {
  const out: Violation[] = [];
  const imports = [...content.matchAll(/import\s+.*\s+from\s+['"]([^'"]+\.svelte)['"]/g)].map((m) => m[1]);
  const atomImports = imports.filter((value) => value.replace(/\\/g, '/').includes('atoms/'));
  const moleculeImports = imports.filter((value) => value.replace(/\\/g, '/').includes('molecules/'));
  const organismImports = imports.filter((value) => value.replace(/\\/g, '/').includes('organisms/'));
  const rel = relativePath.replace(/\\/g, '/');

  if (componentType === 'atoms' && imports.length > 0) {
    out.push({
      source: 'imports',
      type: 'atom_imports_components',
      message: `Atom imports ${imports.length} components.`
    });
  }
  if (componentType === 'molecules' && (moleculeImports.length > 0 || organismImports.length > 0)) {
    out.push({
      source: 'imports',
      type: 'molecule_invalid_import_level',
      message: `Molecule imports higher/equal levels (molecules: ${moleculeImports.length}, organisms: ${organismImports.length}).`
    });
  }
  if (componentType === 'organisms' && organismImports.length > 0 && !rel.startsWith('components/organisms/organisms/')) {
    out.push({
      source: 'imports',
      type: 'organism_imports_organism',
      message: `Organism imports other organisms (${organismImports.length}).`
    });
  }
  if (componentType === 'atoms' && imports.length > 5) {
    out.push({
      source: 'imports',
      type: 'atom_too_many_imports',
      message: `Atom imports too many components (${imports.length}).`
    });
  }
  if (componentType === 'molecules' && imports.length > 10) {
    out.push({
      source: 'imports',
      type: 'molecule_too_many_imports',
      message: `Molecule imports too many components (${imports.length}).`
    });
  }
  if (atomImports.length + moleculeImports.length + organismImports.length === 0 && imports.length > 0) {
    out.push({
      source: 'imports',
      type: 'component_imports_unclassified_svelte',
      message: `Has ${imports.length} component imports outside atoms/molecules/organisms paths.`
    });
  }

  return out;
}

function analyzeComposition(content: string, componentType: ComponentType, nestedComponentImports: number): Violation[] {
  const out: Violation[] = [];
  const propDefs = countMatches(content, /export\s+let\s+/g);
  if (componentType === 'atoms' && propDefs > 5) {
    out.push({
      source: 'composition',
      type: 'atom_many_props',
      message: `Atom has many props (${propDefs}).`
    });
  }
  if (componentType === 'molecules' && propDefs > 10) {
    out.push({
      source: 'composition',
      type: 'molecule_many_props',
      message: `Molecule has many props (${propDefs}).`
    });
  }
  if (componentType === 'molecules' && nestedComponentImports < 2) {
    out.push({
      source: 'composition',
      type: 'molecule_low_composition',
      message: `Molecule composes too few nested components (${nestedComponentImports}).`
    });
  }
  if (componentType === 'organisms' && nestedComponentImports < 3) {
    out.push({
      source: 'composition',
      type: 'organism_low_composition',
      message: `Organism composes too few nested components (${nestedComponentImports}).`
    });
  }
  return out;
}

function analyzeStyle(content: string, filePath: string): Violation[] {
  const out: Violation[] = [];
  const inlineStyles = [...content.matchAll(/style\s*=\s*["']([^"']+)["']/gi)].map((m) => m[1]);
  const hardcodedInline = inlineStyles.filter((style) => /(?:\d+px|\d+rem|\d+em|#[0-9a-fA-F]{3,6}|rgba?\()/i.test(style));
  if (hardcodedInline.length > 0) {
    out.push({
      source: 'style',
      type: 'hardcoded_inline_styles',
      message: `Detected ${hardcodedInline.length} hardcoded inline style blocks.`
    });
  }

  const classAttrs = [...content.matchAll(/class\s*=\s*["']([^"']+)["']/g)].map((m) => m[1]);
  const hardcodedUtilityClasses = classAttrs.reduce((sum, classAttr) => {
    const parts = classAttr.split(/\s+/).filter(Boolean);
    return (
      sum +
      parts.filter((part) => /^(p|m|w|h|gap|space|text|font)-\d+/.test(part) || /^(bg|text|border|ring)-#/.test(part))
        .length
    );
  }, 0);
  if (hardcodedUtilityClasses > 3) {
    out.push({
      source: 'style',
      type: 'hardcoded_utility_classes',
      message: `Detected many hardcoded utility classes (${hardcodedUtilityClasses}).`
    });
  }

  const dir = path.dirname(filePath);
  const hasStylesFile = fs
    .readdirSync(dir, { withFileTypes: true })
    .some((entry) => entry.isFile() && ['styles.ts', 'styles.js', '_styles.svelte'].includes(entry.name));
  if (hasStylesFile && hardcodedInline.length > 0) {
    out.push({
      source: 'style',
      type: 'mixed_styles_strategy',
      message: 'Separate styles file exists but inline hardcoded styles are still used.'
    });
  }

  return out;
}

function analyzeNaming(filePath: string, componentType: ComponentType): Violation[] {
  const out: Violation[] = [];
  const raw = path.basename(path.dirname(filePath)).toLowerCase().replace(/[-_]/g, '');
  const typicalAtoms = ['button', 'input', 'label', 'icon', 'image', 'text', 'link', 'avatar', 'badge', 'tag', 'chip'];
  const typicalMolecules = ['formfield', 'inputgroup', 'buttongroup', 'cardheader', 'cardfooter', 'listitem'];
  const typicalOrganisms = ['header', 'footer', 'sidebar', 'navigation', 'navbar', 'card', 'form', 'table', 'layout', 'section', 'page', 'dashboard'];
  const hasAtomWord = typicalAtoms.some((w) => raw.includes(w));
  const hasMoleculeWord = typicalMolecules.some((w) => raw.includes(w));
  const hasOrganismWord = typicalOrganisms.some((w) => raw.includes(w));

  if (componentType === 'atoms' && (hasMoleculeWord || hasOrganismWord)) {
    out.push({
      source: 'naming',
      type: 'atom_name_too_complex',
      message: 'Component name suggests molecule/organism complexity.'
    });
  }
  if (componentType === 'molecules' && hasOrganismWord) {
    out.push({
      source: 'naming',
      type: 'molecule_name_too_complex',
      message: 'Component name suggests organism complexity.'
    });
  }
  if (componentType === 'molecules' && hasAtomWord) {
    out.push({
      source: 'naming',
      type: 'molecule_name_too_simple',
      message: 'Component name suggests atom-level simplicity.'
    });
  }
  if (componentType === 'organisms' && hasAtomWord) {
    out.push({
      source: 'naming',
      type: 'organism_name_too_simple',
      message: 'Component name suggests atom/molecule simplicity.'
    });
  }
  return out;
}

function analyzeContext(content: string, filePath: string, componentType: ComponentType): Violation[] {
  const out: Violation[] = [];
  const lowerPath = toUnixPath(filePath).toLowerCase();
  const isControl = /(button|checkbox|radio|switch|toggle|select|slider|tab|accordion)/.test(lowerPath);
  const isInput = /(input|textarea|form|field|picker|upload)/.test(lowerPath);
  const isFeedback = /(alert|loader|spinner|progress|notification|toast|skeleton)/.test(lowerPath);

  if (isControl && componentType === 'atoms') {
    const hasInteractive = /<button|<input|<select|<textarea|on:/.test(content);
    if (!hasInteractive) {
      out.push({
        source: 'context',
        type: 'control_without_interactivity',
        message: 'Control-like atom has no interactive elements.'
      });
    }
  }
  if (isInput && (componentType === 'atoms' || componentType === 'molecules')) {
    const hasBinding = /bind:value|bind:/.test(content);
    if (!hasBinding) {
      out.push({
        source: 'context',
        type: 'input_without_binding',
        message: 'Input-like component has no value binding.'
      });
    }
  }
  if (isFeedback && (componentType === 'atoms' || componentType === 'molecules')) {
    const hasStateIndicators = /(loading|error|success|warning|disabled)/i.test(content);
    if (!hasStateIndicators) {
      out.push({
        source: 'context',
        type: 'feedback_without_states',
        message: 'Feedback-like component has no explicit state indicators.'
      });
    }
  }

  return out;
}

function analyzeJSDoc(content: string): Violation[] {
  const out: Violation[] = [];
  const props = [...content.matchAll(/export\s+let\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/g)].map((m) => m[1]);
  const missing = props.filter((prop) => !new RegExp(`/\\*\\*[^*]*@---\\s+${prop}\\b`, 'm').test(content));
  if (missing.length > 0) {
    out.push({
      source: 'structure',
      type: 'props_without_jsdoc',
      message: `Props without @--- JSDoc: ${missing.join(', ')}.`
    });
  }
  return out;
}

function analyzeCategory(content: string, componentType: ComponentType): Violation[] {
  const out: Violation[] = [];
  const stateCount = countMatches(content, /\$state\b/g);
  const effectCount = countMatches(content, /\$effect\b/g);

  if (componentType === 'atoms') {
    if (stateCount > 0) {
      out.push({
        source: 'category',
        type: 'atom_has_state',
        message: `Atom uses $state (${stateCount}).`
      });
    }
    if (effectCount > 0) {
      out.push({
        source: 'category',
        type: 'atom_has_effect',
        message: `Atom uses $effect (${effectCount}).`
      });
    }
  }

  if (componentType === 'molecules') {
    if (stateCount > 3) {
      out.push({
        source: 'category',
        type: 'molecule_state_overuse',
        message: `Molecule has too many $state declarations (${stateCount}).`
      });
    }
    if (effectCount > 3) {
      out.push({
        source: 'category',
        type: 'molecule_effect_overuse',
        message: `Molecule has too many $effect declarations (${effectCount}).`
      });
    }
  }

  if (componentType === 'organisms' && stateCount === 0 && effectCount === 0) {
    out.push({
      source: 'category',
      type: 'organism_without_state_or_effect',
      message: 'Organism has no state/effect, maybe too simple for organism.'
    });
  }

  return out;
}

function analyzeComplexity(content: string, componentType: ComponentType): Violation[] {
  const out: Violation[] = [];
  const score = calculateComplexityScore(content);
  const cyclomatic = calculateCyclomatic(content);

  if (componentType === 'atoms') {
    if (score > 15) {
      out.push({
        source: 'complexity',
        type: 'atom_high_complexity',
        message: `Atom complexity score ${score} exceeds 15.`
      });
    }
    const svelteBlocks = countMatches(content, /{#if\s+|{:else if\s+|{#each\s+|{#await\s+/g);
    const adjustedThreshold = 3 + svelteBlocks * 0.5;
    if (cyclomatic > adjustedThreshold) {
      out.push({
        source: 'complexity',
        type: 'atom_high_cyclomatic',
        message: `Atom cyclomatic complexity ${cyclomatic} exceeds ${adjustedThreshold.toFixed(1)}.`
      });
    }
  }

  if (componentType === 'molecules') {
    if (score < 8) {
      out.push({
        source: 'complexity',
        type: 'molecule_low_complexity',
        message: `Molecule complexity score ${score} is below 8.`
      });
    }
    if (score > 40) {
      out.push({
        source: 'complexity',
        type: 'molecule_high_complexity',
        message: `Molecule complexity score ${score} exceeds 40.`
      });
    }
    if (cyclomatic > 8) {
      out.push({
        source: 'complexity',
        type: 'molecule_high_cyclomatic',
        message: `Molecule cyclomatic complexity ${cyclomatic} exceeds 8.`
      });
    }
  }

  if (componentType === 'organisms') {
    if (score < 20) {
      out.push({
        source: 'complexity',
        type: 'organism_low_complexity',
        message: `Organism complexity score ${score} is below 20.`
      });
    }
    if (cyclomatic < 2) {
      out.push({
        source: 'complexity',
        type: 'organism_low_cyclomatic',
        message: `Organism cyclomatic complexity ${cyclomatic} is below 2.`
      });
    }
  }

  return out;
}

function analyzePatterns(content: string, componentType: ComponentType): Violation[] {
  const out: Violation[] = [];
  const hasConst = /\$const\b/.test(content);
  const hasSnippet = /#snippet|@render|@const/.test(content);
  const hasProps = /\$props\b|export\s+let\s+/.test(content);
  const hasOldSlot = /<slot|slot\s*=/.test(content);
  const hasRenderChildren = /\{\s*@render\s+children\(\s*\)\s*\}/.test(content);

  if (componentType === 'atoms' && hasConst) {
    out.push({
      source: 'pattern',
      type: 'atom_uses_const',
      message: 'Atom uses $const.'
    });
  }

  if (componentType === 'atoms') {
    const architecturalCount =
      countMatches(content, /\$state\b/g) +
      countMatches(content, /\$effect\b/g) +
      countMatches(content, /\bfunction\s+\w+/g) +
      countMatches(content, /\$:\s*(?!=)/g);
    if (architecturalCount > 3) {
      out.push({
        source: 'pattern',
        type: 'atom_architecture_overload',
        message: `Atom has too many architectural elements (${architecturalCount}).`
      });
    }
  }

  if (componentType === 'molecules' && hasSnippet && !hasProps) {
    out.push({
      source: 'pattern',
      type: 'molecule_snippet_without_props',
      message: 'Molecule uses snippet/render pattern without props.'
    });
  }

  if (componentType === 'organisms' && !hasOldSlot && !hasRenderChildren) {
    out.push({
      source: 'pattern',
      type: 'organism_no_content_projection',
      message: 'Organism does not use content projection.'
    });
  }

  return out;
}

function inferAtomicLevel(
  declaredLevel: ComponentType,
  componentImports: number,
  hasContextOrStore: boolean,
  hasDataOrNavigation: boolean,
  propCount: number,
  runeCount: number
): { inferredLevel: ComponentType; reasons: string[] } {
  const rank: Record<ComponentType, number> = {
    unknown: 0,
    atoms: 1,
    molecules: 2,
    organisms: 3
  };
  let score = rank[declaredLevel];
  const reasons: string[] = [];

  if (componentImports >= 2) {
    score = Math.max(score, rank.molecules);
    reasons.push(`imports ${componentImports} components`);
  }

  if (componentImports >= 4 || hasContextOrStore || hasDataOrNavigation) {
    score = Math.max(score, rank.organisms);
    if (componentImports >= 4) reasons.push('high component composition (4+)');
    if (hasContextOrStore) reasons.push('uses context/store');
    if (hasDataOrNavigation) reasons.push('contains data/navigation logic');
  }

  if (declaredLevel === 'atoms' && propCount > 6) {
    score = Math.max(score, rank.molecules);
    reasons.push(`atom has many props (${propCount})`);
  }

  if (declaredLevel === 'atoms' && runeCount > 5) {
    score = Math.max(score, rank.molecules);
    reasons.push(`atom has many runes (${runeCount})`);
  }

  const inferredLevel =
    score >= rank.organisms ? 'organisms' : score >= rank.molecules ? 'molecules' : score >= rank.atoms ? 'atoms' : 'unknown';

  return { inferredLevel, reasons };
}

function analyzeFile(filePath: string): FileReport {
  const content = fs.readFileSync(filePath, 'utf-8');
  const componentType = getComponentType(filePath);
  const dir = path.dirname(filePath);
  const relativePath = toUnixPath(path.relative(PROJECT_ROOT, filePath));
  const componentImports = countMatches(content, /import\s+[^;]*from\s+['"][^'"]*(\/components\/|\.\.\/|\.\.\\)[^'"]*['"]/g);
  const nestedSvelteImports = countMatches(content, /import\s+.*\s+from\s+['"][^'"]+\.svelte['"]/g);
  const hasContextOrStore =
    /\b(getContext|setContext)\s*\(/.test(content) || /\b(writable|readable|derived)\s*\(/.test(content);
  const hasDataOrNavigation = /\b(fetch\s*\(|goto\s*\(|load\s*\(|page\b)/.test(content);
  const runeCount = countMatches(content, /\$(state|derived|effect|props)\b/g);
  const derivedCount = countMatches(content, /\$derived\b/g);
  const eventHandlerCount = countMatches(content, /\bon:[a-zA-Z_][a-zA-Z0-9_-]*/g);
  const bindingCount = countMatches(content, /\bbind:[a-zA-Z_][a-zA-Z0-9_-]*/g);
  const propCount =
    countMatches(content, /export\s+let\s+[a-zA-Z_$][a-zA-Z0-9_$]*/g) +
    countMatches(content, /(?:let|const)\s*\{[^}]+\}\s*=\s*\$props\(\)/g);
  const snippetUsage = /@render|#snippet|Snippet/.test(content);
  const readmeExists = fs
    .readdirSync(dir, { withFileTypes: true })
    .some((entry) => entry.isFile() && entry.name.toLowerCase() === 'readme.md');
  const stylesFileExists = fs
    .readdirSync(dir, { withFileTypes: true })
    .some((entry) => entry.isFile() && entry.name === 'styles.ts');
  const typesFileExists = fs
    .readdirSync(dir, { withFileTypes: true })
    .some((entry) => entry.isFile() && entry.name === 'types.ts');
  const cssFileExists = fs
    .readdirSync(dir, { withFileTypes: true })
    .some((entry) => entry.isFile() && entry.name.endsWith('.css'));
  const inferred = inferAtomicLevel(
    componentType,
    componentImports,
    hasContextOrStore,
    hasDataOrNavigation,
    propCount,
    runeCount
  );

  const violations = [
    ...analyzeStructure(filePath),
    ...analyzeJSDoc(content),
    ...analyzeImports(content, componentType, relativePath),
    ...analyzeComposition(content, componentType, nestedSvelteImports),
    ...analyzeStyle(content, filePath),
    ...analyzeNaming(filePath, componentType),
    ...analyzeContext(content, filePath, componentType),
    ...analyzeCategory(content, componentType),
    ...analyzeComplexity(content, componentType),
    ...analyzePatterns(content, componentType)
  ];

  return {
    filePath: relativePath,
    componentType,
    inferredLevel: inferred.inferredLevel,
    classificationDrift: componentType !== 'unknown' && inferred.inferredLevel !== componentType,
    driftReasons: inferred.reasons,
    componentImports,
    hasContextOrStore,
    hasDataOrNavigation,
    runeCount,
    propCount,
    derivedCount,
    eventHandlerCount,
    bindingCount,
    stylesFileExists,
    typesFileExists,
    cssFileExists,
    snippetUsage,
    readmeExists,
    violations,
    violationCount: violations.length
  };
}

function buildReport(files: FileReport[]): AtomicDesignReport {
  const totalViolations = files.reduce((sum, file) => sum + file.violationCount, 0);
  const filesWithViolations = files.filter((file) => file.violationCount > 0).length;
  const cleanFiles = files.length - filesWithViolations;

  const componentTypes: ComponentType[] = ['atoms', 'molecules', 'organisms', 'unknown'];
  const byComponentType = componentTypes.map((componentType) => {
    const rows = files.filter((file) => file.componentType === componentType);
    return {
      componentType,
      files: rows.length,
      violations: rows.reduce((sum, row) => sum + row.violationCount, 0)
    };
  });

  const sources: Violation['source'][] = ['structure', 'complexity', 'pattern', 'category', 'imports', 'style', 'naming', 'composition', 'context'];
  const bySource = sources.map((source) => ({
    source,
    count: files.reduce(
      (sum, file) => sum + file.violations.filter((violation) => violation.source === source).length,
      0
    )
  }));

  return {
    meta: {
      generatedAt: new Date().toISOString(),
      generator: 'scripts/samo/atomic-design/generate.ts',
      sourceRoot: 'src/lib/components'
    },
    summary: {
      totalFiles: files.length,
      filesWithViolations,
      cleanFiles,
      totalViolations
    },
    byComponentType,
    bySource,
    files: files.sort((a, b) => b.violationCount - a.violationCount || a.filePath.localeCompare(b.filePath))
  };
}

function main(): void {
  if (!fs.existsSync(COMPONENTS_ROOT)) {
    console.error(`[atomic-design] Components root not found: ${COMPONENTS_ROOT}`);
    process.exit(1);
  }

  const componentFiles = getComponentFiles(COMPONENTS_ROOT);
  const fileReports = componentFiles.map(analyzeFile);
  const report = buildReport(fileReports);

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(report, null, 2), 'utf-8');

  console.log('[atomic-design] Report generated');
  console.log(`[atomic-design] Files analyzed: ${report.summary.totalFiles}`);
  console.log(`[atomic-design] Files with violations: ${report.summary.filesWithViolations}`);
  console.log(`[atomic-design] Total violations: ${report.summary.totalViolations}`);
  console.log(`[atomic-design] Output: ${OUTPUT_FILE}`);
}

main();
