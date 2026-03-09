#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

interface FolderReport {
  path: string;
  depth: number;
  category: string;
  organizationType: 'component' | 'path' | 'function' | 'design-system' | 'dubious';
  isValid: boolean;
  validationRule: string;
  totalFiles: number;
  mdFiles: number;
  svelteFiles: number;
  storyFiles: number;
  tsFiles: number;
  otherFiles: number;
  totalImports: number;
  totalExports: number;
  componentsCount: number;
  hasIndexTs: boolean;
  hasIndexSvelte: boolean;
  childrenCount: number;
  complexityScore: number;
  reuseCandidatesCount: number;
  componentImportCount: number;
  atomImportViolationCount: number;
  moleculeImportViolationCount: number;
  organismImportViolationCount: number;
  moleculeImportsOrganismCount: number;
  circularDependencySignalCount: number;
  namingMismatchCount: number;
  standardizationPriority: 'low' | 'medium' | 'high' | 'critical';
  implementationSteps: string[];
}

interface CategorySummary {
  name: string;
  folders: number;
  files: number;
  components: number;
  exports: number;
  imports: number;
}

interface MolecularOrganizationReport {
  meta: {
    generatedAt: string;
    generator: string;
    sourceRoot: string;
  };
  summary: {
    totalFolders: number;
    totalFiles: number;
    totalMdFiles: number;
    totalSvelteFiles: number;
    totalStoryFiles: number;
    totalTsFiles: number;
    totalComponents: number;
    totalImports: number;
    totalExports: number;
    maxDepth: number;
  };
  typeSummary: {
    type: FolderReport['organizationType'];
    total: number;
    valid: number;
    invalid: number;
  }[];
  categories: CategorySummary[];
  topByComplexity: FolderReport[];
  topByComponents: FolderReport[];
  folders: FolderReport[];
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..', '..', '..');
const LIB_ROOT = path.join(PROJECT_ROOT, 'src', 'lib');
const OUTPUT_FILE = path.join(
  PROJECT_ROOT,
  'src',
  'lib',
  'json',
  'samo',
  'molecular-organization',
  'report.json'
);

function toUnixPath(input: string): string {
  return input.split(path.sep).join('/');
}

function countMatches(content: string, pattern: RegExp): number {
  return (content.match(pattern) ?? []).length;
}

function getAllDirectories(rootDir: string): string[] {
  const result: string[] = [];
  const stack = [rootDir];

  while (stack.length > 0) {
    const current = stack.pop();
    if (!current) {
      continue;
    }
    result.push(current);
    const children = fs
      .readdirSync(current, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => path.join(current, entry.name));
    stack.push(...children);
  }

  return result;
}

function analyzeDirectory(dirPath: string): FolderReport {
  const relativePath = path.relative(LIB_ROOT, dirPath);
  const normalizedRelative = relativePath === '' ? 'lib' : `lib/${toUnixPath(relativePath)}`;
  const depth = normalizedRelative.split('/').length - 1;
  const category = depth >= 1 ? normalizedRelative.split('/')[1] : 'root';
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const files = entries.filter((entry) => entry.isFile());
  const childrenCount = entries.filter((entry) => entry.isDirectory()).length;

  let svelteFiles = 0;
  let storyFiles = 0;
  let tsFiles = 0;
  let mdFiles = 0;
  let otherFiles = 0;
  let totalImports = 0;
  let totalExports = 0;
  let hasIndexTs = false;
  let hasIndexSvelte = false;
  let hasIndexStorySvelte = false;
  let reuseCandidatesCount = 0;
  let componentImportCount = 0;
  let atomImportViolationCount = 0;
  let moleculeImportViolationCount = 0;
  let organismImportViolationCount = 0;
  let moleculeImportsOrganismCount = 0;
  let circularDependencySignalCount = 0;
  let namingMismatchCount = 0;

  for (const file of files) {
    const fileName = file.name;
    const fullPath = path.join(dirPath, fileName);

    if (fileName.endsWith('.story.svelte')) {
      storyFiles += 1;
      if (fileName === 'index.story.svelte') {
        hasIndexStorySvelte = true;
      }
      continue;
    }

    if (fileName.endsWith('.svelte')) {
      svelteFiles += 1;
      if (fileName === 'index.svelte') {
        hasIndexSvelte = true;
      }
      if (fileName !== 'index.svelte') {
        reuseCandidatesCount += 1;
      }

      if (!fileName.endsWith('.story.svelte')) {
        const content = fs.readFileSync(fullPath, 'utf-8');
        const importedSvelte = [...content.matchAll(/import\s+.*\s+from\s+['"]([^'"]+\.svelte)['"]/g)].map((m) => m[1]);
        componentImportCount += importedSvelte.length;

        const normalizedDirPath = toUnixPath(fullPath);
        const declaredType = normalizedDirPath.includes('/components/atoms/')
          ? 'atoms'
          : normalizedDirPath.includes('/components/molecules/')
            ? 'molecules'
            : normalizedDirPath.includes('/components/organisms/')
              ? 'organisms'
              : 'unknown';
        const atomImports = importedSvelte.filter((value) => value.replace(/\\/g, '/').includes('atoms/'));
        const moleculeImports = importedSvelte.filter((value) => value.replace(/\\/g, '/').includes('molecules/'));
        const organismImports = importedSvelte.filter((value) => value.replace(/\\/g, '/').includes('organisms/'));
        const componentName = path.basename(fileName, '.svelte').toLowerCase();

        if (declaredType === 'atoms' && importedSvelte.length > 0) {
          atomImportViolationCount += 1;
        }
        if (declaredType === 'molecules' && (moleculeImports.length > 0 || organismImports.length > 0)) {
          moleculeImportViolationCount += 1;
        }
        if (declaredType === 'organisms' && organismImports.length > 0 && !normalizedDirPath.includes('/components/organisms/organisms/')) {
          organismImportViolationCount += 1;
        }
        if (declaredType === 'molecules' && organismImports.length > 0) {
          moleculeImportsOrganismCount += 1;
        }

        const importedBasenames = importedSvelte.map((value) => path.basename(value, '.svelte').toLowerCase());
        if (importedBasenames.includes(componentName)) {
          circularDependencySignalCount += 1;
        }

        const complexWords = ['page', 'layout', 'section', 'form', 'card', 'container'];
        const simpleWords = ['button', 'input', 'label', 'icon', 'text'];
        if (complexWords.some((word) => componentName.includes(word)) && (declaredType === 'atoms' || declaredType === 'molecules')) {
          namingMismatchCount += 1;
        }
        if (simpleWords.some((word) => componentName.includes(word)) && declaredType === 'organisms') {
          namingMismatchCount += 1;
        }
      }
      continue;
    }

    if (fileName.endsWith('.ts')) {
      tsFiles += 1;
      if (fileName === 'index.ts') {
        hasIndexTs = true;
      }
      const content = fs.readFileSync(fullPath, 'utf-8');
      totalImports += countMatches(content, /^\s*import\s+/gm);
      totalExports += countMatches(content, /^\s*export\s+/gm);
      continue;
    }

    if (fileName.endsWith('.md')) {
      mdFiles += 1;
      continue;
    }

    otherFiles += 1;
  }

  const filesForValidation = files.length - mdFiles;
  const hasOnlyIndexTs = filesForValidation === 1 && hasIndexTs;
  const hasOnlyComponentTriple =
    filesForValidation === 3 &&
    hasIndexTs &&
    hasIndexSvelte &&
    hasIndexStorySvelte &&
    childrenCount === 0;
  const hasSubdirectories = childrenCount > 0;
  const hasManyFiles = filesForValidation > 1;

  let organizationType: FolderReport['organizationType'] = 'dubious';
  let isValid = false;
  let validationRule = 'No known structure pattern';

  if (hasOnlyComponentTriple) {
    organizationType = 'component';
    isValid = true;
    validationRule = 'Exact component triple: index.ts + index.svelte + index.story.svelte';
  } else if (hasSubdirectories) {
    organizationType = 'path';
    isValid = hasOnlyIndexTs;
    validationRule = 'Path valid only with subfolders and single index.ts';
  } else if (!hasSubdirectories && hasOnlyIndexTs) {
    organizationType = 'function';
    isValid = true;
    validationRule = 'Isolated function: only index.ts';
  } else if (hasManyFiles) {
    organizationType = 'design-system';
    isValid = hasIndexTs;
    validationRule = 'Design-system folder: many files, index.ts is validity marker';
  }

  const componentsCount = svelteFiles;
  const complexityScore = Number(
    (
      componentsCount * 2 +
      totalExports * 0.5 +
      childrenCount * 0.3 +
      depth * 0.1
    ).toFixed(2)
  );

  let standardizationPriority: FolderReport['standardizationPriority'] = 'low';
  if (!isValid && complexityScore >= 20) {
    standardizationPriority = 'critical';
  } else if (
    !isValid ||
    reuseCandidatesCount >= 4 ||
    complexityScore >= 14 ||
    atomImportViolationCount > 0 ||
    moleculeImportViolationCount > 0 ||
    organismImportViolationCount > 0
  ) {
    standardizationPriority = 'high';
  } else if (reuseCandidatesCount >= 2 || complexityScore >= 8 || namingMismatchCount > 0) {
    standardizationPriority = 'medium';
  }

  const implementationSteps: string[] = [];
  if (!hasIndexTs) {
    implementationSteps.push('add index.ts as folder entrypoint');
  }
  if (organizationType === 'component' && storyFiles === 0) {
    implementationSteps.push('add index.story.svelte for component coverage');
  }
  if (reuseCandidatesCount > 0) {
    implementationSteps.push('extract shared logic into reusable atoms/molecules');
  }
  if (atomImportViolationCount > 0 || moleculeImportViolationCount > 0 || organismImportViolationCount > 0) {
    implementationSteps.push('fix atomic dependency direction between atoms/molecules/organisms');
  }
  if (circularDependencySignalCount > 0) {
    implementationSteps.push('review potential circular imports between sibling components');
  }
  if (complexityScore >= 14) {
    implementationSteps.push('split large folder into focused submodules');
  }
  if (implementationSteps.length === 0) {
    implementationSteps.push('keep structure stable and monitor drift');
  }

  return {
    path: normalizedRelative,
    depth,
    category,
    organizationType,
    isValid,
    validationRule,
    totalFiles: files.length,
    mdFiles,
    svelteFiles,
    storyFiles,
    tsFiles,
    otherFiles,
    totalImports,
    totalExports,
    componentsCount,
    hasIndexTs,
    hasIndexSvelte,
    childrenCount,
    complexityScore,
    reuseCandidatesCount,
    componentImportCount,
    atomImportViolationCount,
    moleculeImportViolationCount,
    organismImportViolationCount,
    moleculeImportsOrganismCount,
    circularDependencySignalCount,
    namingMismatchCount,
    standardizationPriority,
    implementationSteps
  };
}

function buildReport(folders: FolderReport[]): MolecularOrganizationReport {
  const totalFiles = folders.reduce((sum, folder) => sum + folder.totalFiles, 0);
  const totalMdFiles = folders.reduce((sum, folder) => sum + folder.mdFiles, 0);
  const totalSvelteFiles = folders.reduce((sum, folder) => sum + folder.svelteFiles, 0);
  const totalStoryFiles = folders.reduce((sum, folder) => sum + folder.storyFiles, 0);
  const totalTsFiles = folders.reduce((sum, folder) => sum + folder.tsFiles, 0);
  const totalComponents = folders.reduce((sum, folder) => sum + folder.componentsCount, 0);
  const totalImports = folders.reduce((sum, folder) => sum + folder.totalImports, 0);
  const totalExports = folders.reduce((sum, folder) => sum + folder.totalExports, 0);
  const maxDepth = folders.reduce((max, folder) => Math.max(max, folder.depth), 0);
  const typeOrder: FolderReport['organizationType'][] = [
    'component',
    'path',
    'function',
    'design-system',
    'dubious'
  ];

  const categoryMap = new Map<string, CategorySummary>();
  for (const folder of folders) {
    const key = folder.category;
    const current = categoryMap.get(key) ?? {
      name: key,
      folders: 0,
      files: 0,
      components: 0,
      exports: 0,
      imports: 0
    };
    current.folders += 1;
    current.files += folder.totalFiles;
    current.components += folder.componentsCount;
    current.exports += folder.totalExports;
    current.imports += folder.totalImports;
    categoryMap.set(key, current);
  }

  const categories = [...categoryMap.values()].sort((a, b) => a.name.localeCompare(b.name));
  const typeSummary = typeOrder.map((type) => {
    const rows = folders.filter((folder) => folder.organizationType === type);
    const valid = rows.filter((folder) => folder.isValid).length;
    return {
      type,
      total: rows.length,
      valid,
      invalid: rows.length - valid
    };
  });
  const topByComplexity = [...folders]
    .sort((a, b) => b.complexityScore - a.complexityScore)
    .slice(0, 20);
  const topByComponents = [...folders]
    .sort((a, b) => b.componentsCount - a.componentsCount || a.path.localeCompare(b.path))
    .slice(0, 20);

  return {
    meta: {
      generatedAt: new Date().toISOString(),
      generator: 'scripts/samo/molecular-organization/generate.ts',
      sourceRoot: toUnixPath(path.relative(PROJECT_ROOT, LIB_ROOT))
    },
    summary: {
      totalFolders: folders.length,
      totalFiles,
      totalMdFiles,
      totalSvelteFiles,
      totalStoryFiles,
      totalTsFiles,
      totalComponents,
      totalImports,
      totalExports,
      maxDepth
    },
    typeSummary,
    categories,
    topByComplexity,
    topByComponents,
    folders: [...folders].sort((a, b) => a.path.localeCompare(b.path))
  };
}

function main(): void {
  if (!fs.existsSync(LIB_ROOT)) {
    console.error(`[molecular-organization] Source root not found: ${LIB_ROOT}`);
    process.exit(1);
  }

  const directories = getAllDirectories(LIB_ROOT);
  const folders = directories.map(analyzeDirectory);
  const report = buildReport(folders);

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(report, null, 2), 'utf-8');

  console.log('[molecular-organization] Report generated');
  console.log(`[molecular-organization] Folders: ${report.summary.totalFolders}`);
  console.log(`[molecular-organization] Components: ${report.summary.totalComponents}`);
  console.log(`[molecular-organization] Output: ${OUTPUT_FILE}`);
}

main();
