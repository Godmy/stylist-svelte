import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

type ComponentType = 'molecule' | 'organism';

interface ComponentReuseRow {
  componentName: string;
  componentPath: string;
  componentType: ComponentType;
  potentialAtoms: string[];
  matchedAtomsCount: number;
  totalLines: number;
  componentCount: number;
  complexityScore: number;
  reuseScore: number;
  recommendedAtoms: string[];
}

interface ComponentReuseReport {
  meta: {
    generatedAt: string;
    generator: string;
    sourceRoot: string;
  };
  summary: {
    totalComponents: number;
    totalAtoms: number;
    uniqueUsedAtoms: number;
    totalMatches: number;
    avgReuseScore: number;
  };
  topUsedAtoms: Array<{
    atomName: string;
    usedInCount: number;
  }>;
  highComplexityLowReuse: ComponentReuseRow[];
  components: ComponentReuseRow[];
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..', '..', '..');
const COMPONENTS_ROOT = path.join(PROJECT_ROOT, 'src', 'lib', 'components');
const ATOMS_ROOT = path.join(COMPONENTS_ROOT, 'atoms');
const OUTPUT_FILE = path.join(PROJECT_ROOT, 'src', 'lib', 'json', 'samo', 'component-reuse', 'report.json');

function toUnixPath(input: string): string {
  return input.split(path.sep).join('/');
}

function toPascalCase(value: string): string {
  return value
    .split(/[^a-zA-Z0-9]/)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join('');
}

function collectAtomNames(): Set<string> {
  const names = new Set<string>();
  if (!fs.existsSync(ATOMS_ROOT)) {
    return names;
  }

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
      if (!entry.isFile()) continue;

      if (entry.name === 'index.ts') {
        const content = fs.readFileSync(fullPath, 'utf-8');
        for (const match of content.matchAll(/export\s+\{\s*([A-Z][A-Za-z0-9_$]*)/g)) {
          names.add(match[1]);
        }
      }
      if (entry.name === 'index.svelte') {
        const folderName = path.basename(path.dirname(fullPath));
        names.add(toPascalCase(folderName));
      }
    }
  }

  return names;
}

function getFiles(root: string): string[] {
  const result: string[] = [];
  if (!fs.existsSync(root)) {
    return result;
  }

  const stack = [root];
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
        result.push(fullPath);
      }
    }
  }

  return result;
}

function analyzeComponent(filePath: string, atomNames: Set<string>, componentType: ComponentType): ComponentReuseRow {
  const content = fs.readFileSync(filePath, 'utf-8');
  const relative = toUnixPath(path.relative(PROJECT_ROOT, filePath));

  const tagMatches = [...content.matchAll(/<([A-Z][A-Za-z0-9_$]*)\b/g)].map((m) => m[1]);
  const importedFromAtoms = [...content.matchAll(/import\s+\{?\s*([^}\n]+)\s*\}?\s+from\s+['\"]([^'\"]+)['\"]/g)]
    .filter((m) => m[2].includes('/atoms/'))
    .flatMap((m) =>
      m[1]
        .split(',')
        .map((name) => name.trim())
        .filter((name) => /^[A-Z][A-Za-z0-9_$]*$/.test(name))
    );

  const potentialAtoms = [...new Set([...tagMatches, ...importedFromAtoms])]
    .filter((name) => atomNames.has(name))
    .sort((a, b) => a.localeCompare(b));

  const totalLines = content.split('\n').length;
  const componentCount = tagMatches.length;
  const complexityScore = Number((totalLines * 0.06 + componentCount * 1.2).toFixed(2));
  const reuseScore = Number(((potentialAtoms.length * 10) / Math.max(1, componentCount)).toFixed(2));

  return {
    componentName: path.basename(path.dirname(filePath)),
    componentPath: relative,
    componentType,
    potentialAtoms,
    matchedAtomsCount: potentialAtoms.length,
    totalLines,
    componentCount,
    complexityScore,
    reuseScore,
    recommendedAtoms: potentialAtoms.slice(0, 8)
  };
}

function buildReport(rows: ComponentReuseRow[], atomNames: Set<string>): ComponentReuseReport {
  const atomUsage = new Map<string, number>();
  for (const row of rows) {
    for (const atom of row.potentialAtoms) {
      atomUsage.set(atom, (atomUsage.get(atom) ?? 0) + 1);
    }
  }

  const totalMatches = rows.reduce((acc, row) => acc + row.matchedAtomsCount, 0);
  const avgReuseScore = rows.length > 0 ? Number((rows.reduce((acc, row) => acc + row.reuseScore, 0) / rows.length).toFixed(2)) : 0;

  const topUsedAtoms = [...atomUsage.entries()]
    .map(([atomName, usedInCount]) => ({ atomName, usedInCount }))
    .sort((a, b) => b.usedInCount - a.usedInCount || a.atomName.localeCompare(b.atomName))
    .slice(0, 20);

  const highComplexityLowReuse = rows
    .filter((row) => row.complexityScore > 20 && row.reuseScore < 3)
    .sort((a, b) => b.complexityScore - a.complexityScore)
    .slice(0, 50);

  return {
    meta: {
      generatedAt: new Date().toISOString(),
      generator: 'scripts/samo/component-reuse/generate.ts',
      sourceRoot: 'src/lib/components'
    },
    summary: {
      totalComponents: rows.length,
      totalAtoms: atomNames.size,
      uniqueUsedAtoms: atomUsage.size,
      totalMatches,
      avgReuseScore
    },
    topUsedAtoms,
    highComplexityLowReuse,
    components: rows.sort((a, b) => b.reuseScore - a.reuseScore || a.componentPath.localeCompare(b.componentPath))
  };
}

function main(): void {
  const atomNames = collectAtomNames();
  const moleculeFiles = getFiles(path.join(COMPONENTS_ROOT, 'molecules'));
  const organismFiles = getFiles(path.join(COMPONENTS_ROOT, 'organisms'));

  const rows = [
    ...moleculeFiles.map((filePath) => analyzeComponent(filePath, atomNames, 'molecule')),
    ...organismFiles.map((filePath) => analyzeComponent(filePath, atomNames, 'organism'))
  ];

  const report = buildReport(rows, atomNames);
  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(report, null, 2), 'utf-8');

  console.log('[component-reuse] Report generated');
  console.log(`[component-reuse] Components: ${report.summary.totalComponents}`);
  console.log(`[component-reuse] Unique used atoms: ${report.summary.uniqueUsedAtoms}`);
  console.log(`[component-reuse] Output: ${OUTPUT_FILE}`);
}

main();
