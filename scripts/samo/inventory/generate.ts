import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

type EntryKind = 'component' | 'module' | 'style' | 'data' | 'asset' | 'other';

interface InventoryEntry {
  path: string;
  kind: EntryKind;
  domain: string;
  extension: string;
  lineCount: number;
  sizeKb: number;
  propsCount?: number;
  eventsCount?: number;
  slotsCount?: number;
  runeCount?: number;
  hasContext?: boolean;
}

interface InventoryReport {
  meta: {
    generatedAt: string;
    generator: string;
    sourceRoot: string;
  };
  summary: {
    totalFiles: number;
    totalDirs: number;
    components: number;
    modules: number;
    styles: number;
    dataFiles: number;
    assets: number;
  };
  byDomain: Array<{ domain: string; files: number }>;
  byExtension: Array<{ extension: string; files: number }>;
  topLargestFiles: InventoryEntry[];
  entries: InventoryEntry[];
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..', '..', '..');
const SRC_LIB_ROOT = path.join(PROJECT_ROOT, 'src', 'lib');
const OUTPUT_FILE = path.join(PROJECT_ROOT, 'src', 'lib', 'json', 'samo', 'inventory', 'report.json');

function toUnixPath(input: string): string {
  return input.split(path.sep).join('/');
}

function getAllFilesAndDirCount(rootDir: string): { files: string[]; dirCount: number } {
  if (!fs.existsSync(rootDir)) return { files: [], dirCount: 0 };

  const files: string[] = [];
  let dirCount = 0;
  const stack = [rootDir];

  while (stack.length > 0) {
    const current = stack.pop();
    if (!current) continue;
    dirCount += 1;

    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
      } else if (entry.isFile()) {
        files.push(fullPath);
      }
    }
  }

  return { files, dirCount };
}

function detectKind(relativePath: string, extension: string): EntryKind {
  if (extension === '.svelte') return 'component';
  if (extension === '.ts' || extension === '.js' || extension === '.mjs') return 'module';
  if (extension === '.css' || extension === '.scss') return 'style';
  if (extension === '.json' || extension === '.graphql' || extension === '.txt' || extension === '.md') return 'data';
  if (relativePath.startsWith('svg/') || ['.svg', '.png', '.jpg', '.jpeg', '.webp'].includes(extension)) return 'asset';
  return 'other';
}

function getDomain(relativePath: string): string {
  const parts = relativePath.split('/');
  return parts.length > 1 ? parts[0] : 'root';
}

function countMatches(content: string, pattern: RegExp): number {
  return (content.match(pattern) ?? []).length;
}

function analyzeSvelte(content: string): Pick<InventoryEntry, 'propsCount' | 'eventsCount' | 'slotsCount' | 'runeCount' | 'hasContext'> {
  const scriptMatch = content.match(/<script[^>]*>([\s\S]*?)<\/script>/);
  const script = scriptMatch?.[1] ?? '';

  const propsCount =
    countMatches(script, /export\s+let\s+[a-zA-Z_$][a-zA-Z0-9_$]*/g) +
    countMatches(script, /(?:let|const)\s*\{[^}]+\}\s*=\s*\$props\(\)/g);
  const eventsCount = countMatches(script, /createEventDispatcher\s*</g);
  const slotsCount =
    countMatches(content, /\{@render\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*\(/g) +
    countMatches(script, /:\s*Snippet/g);
  const runeCount = countMatches(content, /\$(state|derived|effect|props)\b/g);
  const hasContext = /(getContext|setContext)\s*\(/.test(script);

  return { propsCount, eventsCount, slotsCount, runeCount, hasContext };
}

function analyzeFile(filePath: string): InventoryEntry {
  const relative = toUnixPath(path.relative(SRC_LIB_ROOT, filePath));
  const extension = path.extname(filePath).toLowerCase();
  const kind = detectKind(relative, extension);
  const domain = getDomain(relative);

  const content = fs.readFileSync(filePath, 'utf-8');
  const base: InventoryEntry = {
    path: `src/lib/${relative}`,
    kind,
    domain,
    extension: extension || '(none)',
    lineCount: content.split('\n').length,
    sizeKb: Number((Buffer.byteLength(content, 'utf-8') / 1024).toFixed(2))
  };

  if (extension === '.svelte') {
    return { ...base, ...analyzeSvelte(content) };
  }

  return base;
}

function topCounts(values: string[]): Array<{ name: string; count: number }> {
  const map = new Map<string, number>();
  for (const value of values) {
    map.set(value, (map.get(value) ?? 0) + 1);
  }
  return [...map.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

function buildReport(entries: InventoryEntry[], dirCount: number): InventoryReport {
  const byDomainRaw = topCounts(entries.map((entry) => entry.domain));
  const byExtensionRaw = topCounts(entries.map((entry) => entry.extension));

  return {
    meta: {
      generatedAt: new Date().toISOString(),
      generator: 'scripts/samo/inventory/generate.ts',
      sourceRoot: 'src/lib'
    },
    summary: {
      totalFiles: entries.length,
      totalDirs: dirCount,
      components: entries.filter((entry) => entry.kind === 'component').length,
      modules: entries.filter((entry) => entry.kind === 'module').length,
      styles: entries.filter((entry) => entry.kind === 'style').length,
      dataFiles: entries.filter((entry) => entry.kind === 'data').length,
      assets: entries.filter((entry) => entry.kind === 'asset').length
    },
    byDomain: byDomainRaw.slice(0, 40).map((row) => ({ domain: row.name, files: row.count })),
    byExtension: byExtensionRaw.slice(0, 30).map((row) => ({ extension: row.name, files: row.count })),
    topLargestFiles: [...entries]
      .sort((a, b) => b.sizeKb - a.sizeKb || b.lineCount - a.lineCount)
      .slice(0, 30),
    entries: [...entries].sort((a, b) => a.path.localeCompare(b.path))
  };
}

function main(): void {
  const { files, dirCount } = getAllFilesAndDirCount(SRC_LIB_ROOT);
  const textLike = files.filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return [
      '.svelte',
      '.ts',
      '.js',
      '.mjs',
      '.css',
      '.scss',
      '.json',
      '.graphql',
      '.txt',
      '.md',
      '.svg'
    ].includes(ext);
  });

  const entries = textLike.map(analyzeFile);
  const report = buildReport(entries, dirCount);

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(report, null, 2), 'utf-8');

  console.log('[inventory] Report generated');
  console.log(`[inventory] Files analyzed: ${report.summary.totalFiles}`);
  console.log(`[inventory] Output: ${OUTPUT_FILE}`);
}

main();
