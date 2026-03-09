#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

type Principle = 'SRP' | 'OCP' | 'LSP' | 'ISP' | 'DIP';

interface Finding {
  principle: Principle;
  type: string;
  message: string;
}

interface FileReport {
  filePath: string;
  componentType: 'atoms' | 'molecules' | 'organisms' | 'unknown';
  propCount: number;
  eventCount: number;
  methodExportCount: number;
  apiEndpointCount: number;
  globalDependencyCount: number;
  moleculeToOrganismImportCount: number;
  findings: Finding[];
  findingCount: number;
}

interface SolidReport {
  meta: {
    generatedAt: string;
    generator: string;
    sourceRoot: string;
  };
  summary: {
    totalFiles: number;
    filesWithFindings: number;
    cleanFiles: number;
    totalFindings: number;
  };
  principleSummary: Array<{
    principle: Principle;
    count: number;
  }>;
  files: FileReport[];
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..', '..', '..');
const COMPONENTS_ROOT = path.join(PROJECT_ROOT, 'src', 'lib', 'components');
const OUTPUT_FILE = path.join(PROJECT_ROOT, 'src', 'lib', 'json', 'samo', 'solid', 'report.json');

function toUnixPath(input: string): string {
  return input.split(path.sep).join('/');
}

function countMatches(content: string, pattern: RegExp): number {
  return (content.match(pattern) ?? []).length;
}

function getSvelteFiles(root: string): string[] {
  const result: string[] = [];
  const allowedRoots = new Set(['atoms', 'molecules', 'organisms']);

  function walk(dirPath: string): void {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
        continue;
      }
      if (!entry.isFile()) {
        continue;
      }
      if (!entry.name.endsWith('.svelte') || entry.name.endsWith('.story.svelte')) {
        continue;
      }

      const relative = toUnixPath(path.relative(root, fullPath));
      const topLevel = relative.split('/')[0] ?? '';
      if (allowedRoots.has(topLevel)) {
        result.push(fullPath);
      }
    }
  }

  walk(root);
  return result;
}

function detectComponentType(filePath: string): 'atoms' | 'molecules' | 'organisms' | 'unknown' {
  const relative = toUnixPath(path.relative(COMPONENTS_ROOT, filePath));
  const topLevel = relative.split('/')[0] ?? '';
  if (topLevel === 'atoms' || topLevel === 'molecules' || topLevel === 'organisms') {
    return topLevel;
  }
  return 'unknown';
}

function analyzeSRP(content: string): Finding[] {
  const findings: Finding[] = [];
  const responsibilities = [
    /(validate|validation|check.*error|error.*message)/i,
    /(format|formatter|transform.*display|display.*transform)/i,
    /(calculate|calc|compute|sum|count|average)/i,
    /(filter|sort|map|reduce|process.*data|data.*process)/i,
    /(fetch|api|http|request|axios|ajax)/i,
    /(localStorage|sessionStorage|storage|cache)/i
  ].filter((pattern) => pattern.test(content)).length;

  if (responsibilities > 2) {
    findings.push({
      principle: 'SRP',
      type: 'srp_violation',
      message: `Detected ${responsibilities} responsibility patterns in one file.`
    });
  }

  const lineCount = content.split('\n').length;
  if (lineCount > 1000) {
    findings.push({
      principle: 'SRP',
      type: 'srp_size',
      message: `File is too large (${lineCount} lines).`
    });
  }

  return findings;
}

function analyzeOCP(content: string): Finding[] {
  const findings: Finding[] = [];
  const conditionals =
    countMatches(content, /\bif\s*\(/g) +
    countMatches(content, /\belse\s+if\b/g) +
    countMatches(content, /\bswitch\s*\(/g);

  if (conditionals > 5) {
    findings.push({
      principle: 'OCP',
      type: 'ocp_conditional_complexity',
      message: 'Too many conditionals. Consider extension-oriented design.'
    });
  }

  if (countMatches(content, /\bswitch\s*\(/g) > 2) {
    findings.push({
      principle: 'OCP',
      type: 'ocp_switch_overuse',
      message: 'Multiple switch statements detected.'
    });
  }

  const hardcodedConfig =
    /const\s+\w+\s*=\s*\[[\s\S]*?\]/.test(content) && countMatches(content, /'[^']*'|"[^"]*"|`[^`]*`/g) > 10;
  if (hardcodedConfig) {
    findings.push({
      principle: 'OCP',
      type: 'ocp_hardcoded_configuration',
      message: 'Hardcoded configuration blocks detected.'
    });
  }

  const functionBlocks = [...content.matchAll(/function\s+\w+\s*\([^)]*\)\s*\{([\s\S]*?)\}/g)].map((m) => m[1] ?? '');
  const hasOverConditionalFunction = functionBlocks.some(
    (block) => countMatches(block, /\bif\s*\(/g) + countMatches(block, /\belse\s+if\b/g) + countMatches(block, /\bswitch\s*\(/g) > 3
  );
  if (hasOverConditionalFunction) {
    findings.push({
      principle: 'OCP',
      type: 'ocp_function_conditional_overload',
      message: 'Function with many conditionals detected.'
    });
  }

  return findings;
}

function analyzeLSP(content: string): Finding[] {
  const findings: Finding[] = [];
  if (/class\s+\w+\s+extends\s+\w+/i.test(content) && !/(override|super\.)/i.test(content)) {
    findings.push({
      principle: 'LSP',
      type: 'lsp_extends_without_override',
      message: 'Class inheritance detected without override/super usage.'
    });
  }

  const typeChecks = countMatches(content, /\b(instanceof|typeof)\b/g);
  if (typeChecks > 3) {
    findings.push({
      principle: 'LSP',
      type: 'lsp_many_type_checks',
      message: 'Many runtime type checks can indicate substitution issues.'
    });
  }
  return findings;
}

function analyzeISP(content: string): Finding[] {
  const findings: Finding[] = [];
  const propCount = countMatches(content, /export\s+let\s+[a-zA-Z_$][a-zA-Z0-9_$]*/g);
  if (propCount > 10) {
    findings.push({
      principle: 'ISP',
      type: 'isp_fat_interface',
      message: `Large prop interface: ${propCount} exported props.`
    });
  }

  const eventCount = countMatches(content, /\bon:[a-zA-Z_][a-zA-Z0-9_-]*|dispatch\s*\(|createEventDispatcher\s*</g);
  if (eventCount > 8) {
    findings.push({
      principle: 'ISP',
      type: 'isp_many_events',
      message: `Component handles many events: ${eventCount}.`
    });
  }

  const methodExportCount = countMatches(content, /export\s+function\s+|export\s+\w+\s*=/g);
  if (methodExportCount > 5) {
    findings.push({
      principle: 'ISP',
      type: 'isp_many_exported_methods',
      message: `Component exports many functions/methods: ${methodExportCount}.`
    });
  }
  return findings;
}

function analyzeDIP(content: string): Finding[] {
  const findings: Finding[] = [];
  const instantiations = countMatches(content, /\bnew\s+[A-Z][A-Za-z0-9_]*/g);
  if (instantiations > 2) {
    findings.push({
      principle: 'DIP',
      type: 'dip_concrete_instantiation',
      message: `Direct instantiation count is high: ${instantiations}.`
    });
  }

  if (/import\s+.*from\s+['"][^'"]+\/impl['"]/i.test(content)) {
    findings.push({
      principle: 'DIP',
      type: 'dip_impl_import',
      message: 'Import from implementation-specific module detected.'
    });
  }

  const apiEndpointCount = countMatches(content, /['"`]https?:\/\/|fetch\s*\(\s*['"`][^'"`]+/gi);
  if (apiEndpointCount > 0) {
    findings.push({
      principle: 'DIP',
      type: 'dip_hardcoded_api_endpoints',
      message: `Hardcoded API endpoint usage found: ${apiEndpointCount}.`
    });
  }

  const globalDependencyCount = countMatches(content, /\bwindow\.|\bdocument\.|localStorage|sessionStorage/gi);
  if (globalDependencyCount > 2) {
    findings.push({
      principle: 'DIP',
      type: 'dip_global_dependencies',
      message: `Direct global dependencies are high: ${globalDependencyCount}.`
    });
  }
  return findings;
}

function analyzeFile(filePath: string): FileReport {
  const content = fs.readFileSync(filePath, 'utf-8');
  const componentType = detectComponentType(filePath);
  const propCount = countMatches(content, /export\s+let\s+[a-zA-Z_$][a-zA-Z0-9_$]*/g);
  const eventCount = countMatches(content, /\bon:[a-zA-Z_][a-zA-Z0-9_-]*|dispatch\s*\(|createEventDispatcher\s*</g);
  const methodExportCount = countMatches(content, /export\s+function\s+|export\s+\w+\s*=/g);
  const apiEndpointCount = countMatches(content, /['"`]https?:\/\/|fetch\s*\(\s*['"`][^'"`]+/gi);
  const globalDependencyCount = countMatches(content, /\bwindow\.|\bdocument\.|localStorage|sessionStorage/gi);
  const svelteImports = [...content.matchAll(/import\s+.*\s+from\s+['"]([^'"]+\.svelte)['"]/g)].map((m) => m[1]);
  const moleculeToOrganismImportCount =
    componentType === 'molecules'
      ? svelteImports.filter((value) => value.replace(/\\/g, '/').includes('organisms/')).length
      : 0;

  const findings: Finding[] = [
    ...analyzeSRP(content),
    ...analyzeOCP(content),
    ...analyzeLSP(content),
    ...analyzeISP(content),
    ...analyzeDIP(content)
  ];

  if (moleculeToOrganismImportCount > 0) {
    findings.push({
      principle: 'DIP',
      type: 'dip_molecule_imports_organism',
      message: `Molecule imports organisms: ${moleculeToOrganismImportCount}.`
    });
  }

  return {
    filePath: toUnixPath(path.relative(PROJECT_ROOT, filePath)),
    componentType,
    propCount,
    eventCount,
    methodExportCount,
    apiEndpointCount,
    globalDependencyCount,
    moleculeToOrganismImportCount,
    findings,
    findingCount: findings.length
  };
}

function generateReport(files: FileReport[]): SolidReport {
  const totalFindings = files.reduce((sum, file) => sum + file.findingCount, 0);
  const filesWithFindings = files.filter((file) => file.findingCount > 0).length;
  const cleanFiles = files.length - filesWithFindings;

  const principleSummary: SolidReport['principleSummary'] = ['SRP', 'OCP', 'LSP', 'ISP', 'DIP'].map(
    (principle) => ({
      principle,
      count: files.reduce(
        (sum, file) => sum + file.findings.filter((finding) => finding.principle === principle).length,
        0
      )
    })
  );

  return {
    meta: {
      generatedAt: new Date().toISOString(),
      generator: 'scripts/samo/solid/generate.ts',
      sourceRoot: 'src/lib/components'
    },
    summary: {
      totalFiles: files.length,
      filesWithFindings,
      cleanFiles,
      totalFindings
    },
    principleSummary,
    files: files.sort((a, b) => b.findingCount - a.findingCount || a.filePath.localeCompare(b.filePath))
  };
}

function main(): void {
  if (!fs.existsSync(COMPONENTS_ROOT)) {
    console.error(`[solid] Components root not found: ${COMPONENTS_ROOT}`);
    process.exit(1);
  }

  const svelteFiles = getSvelteFiles(COMPONENTS_ROOT);
  const fileReports = svelteFiles.map(analyzeFile);
  const report = generateReport(fileReports);

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(report, null, 2), 'utf-8');

  console.log('[solid] Report generated');
  console.log(`[solid] Files analyzed: ${report.summary.totalFiles}`);
  console.log(`[solid] Files with findings: ${report.summary.filesWithFindings}`);
  console.log(`[solid] Total findings: ${report.summary.totalFindings}`);
  console.log(`[solid] Output: ${OUTPUT_FILE}`);
}

main();
