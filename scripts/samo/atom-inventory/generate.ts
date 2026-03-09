import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

interface AtomProp {
  name: string;
  type: string;
  defaultValue: string | null;
}

interface AtomRow {
  componentName: string;
  componentPath: string;
  categoryPath: string;
  props: AtomProp[];
  events: string[];
  slots: string[];
  styleManagers: string[];
  forwardProps: boolean;
  hasContext: boolean;
  stateCount: number;
  derivedCount: number;
  effectCount: number;
  bindCount: number;
  actionCount: number;
  lineCount: number;
  sizeKb: number;
}

interface AtomInventoryReport {
  meta: {
    generatedAt: string;
    generator: string;
    sourceRoot: string;
  };
  summary: {
    totalAtoms: number;
    totalProps: number;
    totalEvents: number;
    totalSlots: number;
    atomsWithForwardProps: number;
    atomsWithContext: number;
  };
  commonPatterns: {
    topProps: Array<{ name: string; count: number }>;
    topEvents: Array<{ name: string; count: number }>;
    topSlots: Array<{ name: string; count: number }>;
    topStyleManagers: Array<{ name: string; count: number }>;
  };
  atoms: AtomRow[];
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..', '..', '..');
const ATOMS_ROOT = path.join(PROJECT_ROOT, 'src', 'lib', 'components', 'atoms');
const OUTPUT_FILE = path.join(PROJECT_ROOT, 'src', 'lib', 'json', 'samo', 'atom-inventory', 'report.json');

function toUnixPath(input: string): string {
  return input.split(path.sep).join('/');
}

function inferType(defaultValue: string | null): string {
  if (!defaultValue) return 'unknown';
  const value = defaultValue.trim();
  if (/^['\"].*['\"]$/.test(value)) return 'string';
  if (/^(true|false)$/.test(value)) return 'boolean';
  if (/^-?\d+(\.\d+)?$/.test(value)) return 'number';
  if (/^\[.*\]$/.test(value)) return 'array';
  if (/^\{.*\}$/.test(value)) return 'object';
  return 'unknown';
}

function getAtomFiles(): string[] {
  if (!fs.existsSync(ATOMS_ROOT)) return [];

  const files: string[] = [];
  const stack = [ATOMS_ROOT];
  while (stack.length > 0) {
    const current = stack.pop();
    if (!current) continue;

    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
        continue;
      }
      if (entry.isFile() && entry.name.endsWith('.svelte') && !entry.name.endsWith('.story.svelte')) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

function parseProps(scriptContent: string): AtomProp[] {
  const props: AtomProp[] = [];

  for (const match of scriptContent.matchAll(/export\s+let\s+([a-zA-Z_$][A-Za-z0-9_$]*)\s*(?:=\s*([^;\n]+))?/g)) {
    const name = match[1];
    const defaultValue = match[2]?.trim() ?? null;
    props.push({
      name,
      type: inferType(defaultValue),
      defaultValue
    });
  }

  const destructure = scriptContent.match(/(?:let|const)\s*\{([^}]*)\}\s*=\s*\$props\(\)/s);
  if (destructure) {
    for (const part of destructure[1].split(',')) {
      const chunk = part.trim();
      if (!chunk || chunk.startsWith('...')) continue;
      const [namePart, defaultPart] = chunk.split('=').map((v) => v?.trim());
      if (!namePart) continue;
      props.push({
        name: namePart,
        type: inferType(defaultPart ?? null),
        defaultValue: defaultPart ?? null
      });
    }
  }

  return [...new Map(props.map((prop) => [prop.name, prop])).values()];
}

function parseEvents(scriptContent: string): string[] {
  const events: string[] = [];
  for (const match of scriptContent.matchAll(/createEventDispatcher\s*<\s*\{([\s\S]*?)\}\s*>\s*\(/g)) {
    const block = match[1];
    for (const eventMatch of block.matchAll(/([a-zA-Z_$][A-Za-z0-9_$]*)\s*:/g)) {
      events.push(eventMatch[1]);
    }
  }
  return [...new Set(events)].sort((a, b) => a.localeCompare(b));
}

function parseSlots(content: string, scriptContent: string): string[] {
  const slots = new Set<string>();
  for (const match of content.matchAll(/\{@render\s+([a-zA-Z_$][A-Za-z0-9_$]*)\s*\(/g)) {
    slots.add(match[1]);
  }
  for (const match of scriptContent.matchAll(/([a-zA-Z_$][A-Za-z0-9_$]*)\??\s*:\s*Snippet/g)) {
    slots.add(match[1]);
  }
  return [...slots].sort((a, b) => a.localeCompare(b));
}

function parseStyleManagers(scriptContent: string): string[] {
  const managers = new Set<string>();
  for (const match of scriptContent.matchAll(/import\s+\{?\s*([^\n}]+)\s*\}?\s+from\s+['\"][^'\"]*(styles|style-manager|stylemanager)[^'\"]*['\"]/gi)) {
    for (const token of match[1].split(',')) {
      const name = token.trim();
      if (name) managers.add(name);
    }
  }
  return [...managers].sort((a, b) => a.localeCompare(b));
}

function analyzeFile(filePath: string): AtomRow {
  const content = fs.readFileSync(filePath, 'utf-8');
  const scriptMatch = content.match(/<script[^>]*>([\s\S]*?)<\/script>/);
  const scriptContent = scriptMatch?.[1] ?? '';

  const relativePath = toUnixPath(path.relative(PROJECT_ROOT, filePath));
  const categoryPath = toUnixPath(path.relative(ATOMS_ROOT, path.dirname(filePath)));

  const props = parseProps(scriptContent);
  const events = parseEvents(scriptContent);
  const slots = parseSlots(content, scriptContent);
  const styleManagers = parseStyleManagers(scriptContent);

  return {
    componentName: path.basename(path.dirname(filePath)),
    componentPath: relativePath,
    categoryPath,
    props,
    events,
    slots,
    styleManagers,
    forwardProps: /\.\.\.\s*(restProps|rest)/.test(content),
    hasContext: /(getContext|setContext)\s*\(/.test(scriptContent),
    stateCount: (content.match(/\$state\b/g) ?? []).length,
    derivedCount: (content.match(/\$derived\b/g) ?? []).length,
    effectCount: (content.match(/\$effect\b/g) ?? []).length,
    bindCount: (content.match(/bind:\w+/g) ?? []).length,
    actionCount: (content.match(/use:\w+/g) ?? []).length,
    lineCount: content.split('\n').length,
    sizeKb: Number((Buffer.byteLength(content, 'utf-8') / 1024).toFixed(2))
  };
}

function topCounts(values: string[], limit = 20): Array<{ name: string; count: number }> {
  const map = new Map<string, number>();
  for (const value of values) {
    map.set(value, (map.get(value) ?? 0) + 1);
  }
  return [...map.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
    .slice(0, limit);
}

function buildReport(rows: AtomRow[]): AtomInventoryReport {
  const propNames = rows.flatMap((row) => row.props.map((prop) => prop.name));
  const events = rows.flatMap((row) => row.events);
  const slots = rows.flatMap((row) => row.slots);
  const styleManagers = rows.flatMap((row) => row.styleManagers);

  return {
    meta: {
      generatedAt: new Date().toISOString(),
      generator: 'scripts/samo/atom-inventory/generate.ts',
      sourceRoot: 'src/lib/components/atoms'
    },
    summary: {
      totalAtoms: rows.length,
      totalProps: rows.reduce((acc, row) => acc + row.props.length, 0),
      totalEvents: events.length,
      totalSlots: slots.length,
      atomsWithForwardProps: rows.filter((row) => row.forwardProps).length,
      atomsWithContext: rows.filter((row) => row.hasContext).length
    },
    commonPatterns: {
      topProps: topCounts(propNames),
      topEvents: topCounts(events),
      topSlots: topCounts(slots),
      topStyleManagers: topCounts(styleManagers)
    },
    atoms: rows.sort((a, b) => a.componentPath.localeCompare(b.componentPath))
  };
}

function main(): void {
  const files = getAtomFiles();
  const rows = files.map(analyzeFile);
  const report = buildReport(rows);

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(report, null, 2), 'utf-8');

  console.log('[atom-inventory] Report generated');
  console.log(`[atom-inventory] Atoms: ${report.summary.totalAtoms}`);
  console.log(`[atom-inventory] Output: ${OUTPUT_FILE}`);
}

main();
