#!/usr/bin/env node
/**
 * Orchestrator - Р С–Р ВµР Р…Р ВµРЎР‚Р С‘РЎР‚РЎС“Р ВµРЎвЂљ JSON РЎРѓРЎвЂ¦Р ВµР СРЎС“ Р В±Р С‘Р В±Р В»Р С‘Р С•РЎвЂљР ВµР С”Р С‘ stylist-svelte
 * 
 * Р ВРЎРѓР С—Р С•Р В»РЎРЉР В·Р С•Р Р†Р В°Р Р…Р С‘Р Вµ:
 *   yarn analyze        # Р В·Р В°Р С—РЎС“РЎРѓР С” РЎвЂЎР ВµРЎР‚Р ВµР В· tsx
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const SCRIPTS_DIR = path.join(ROOT_DIR, 'scripts/analyzers');
const SVG_SCRIPTS_DIR = path.join(ROOT_DIR, 'scripts/svg');
const JSON_ROOT_DIR = path.join(ROOT_DIR, 'src/lib/json');
const CORE_DIR = path.join(JSON_ROOT_DIR, 'core');
const REPORTS_DIR = path.join(JSON_ROOT_DIR, 'reports');

interface AnalysisResult {
  name: string;
  status: 'success' | 'error';
  error?: string;
  duration: number;
  data?: unknown;
}

interface TokenExport {
  name: string;
  kind: string;
  category: string;
  file: string;
  type?: string;
  value?: string;
}

interface ContractExport {
  name: string;
  kind: string;
  category: string;
  file: string;
  type?: string;
  usesTokens: string[];
}

interface LibrarySchema {
  $schema: string;
  name: string;
  version: string;
  generated: string;
  summary: {
    totalFiles: number;
    totalExports: number;
    categories: string[];
  };
  tokens: {
    byCategory: Record<string, TokenExport[]>;
    all: TokenExport[];
  };
  contracts: {
    byCategory: Record<string, ContractExport[]>;
    all: ContractExport[];
  };
  models: {
    total: number;
    categories: Array<{
      name: string;
      count: number;
      items: Array<{
        name: string;
        exports: string[];
      }>;
    }>;
  };
  styles: {
    total: number;
    categories: Array<{
      name: string;
      count: number;
      items: Array<{
        name: string;
        exports: string[];
      }>;
    }>;
  };
  components: {
    total: number;
    groups: Array<{
      name: string;
      count: number;
      items: Array<{
        name: string;
        props: Array<{
          name: string;
          type: string;
          required: boolean;
        }>;
      }>;
    }>;
  };
  icons: {
    total: number;
    categories: Array<{
      name: string;
      count: number;
      items: Array<{
        name: string;
        exports: string[];
      }>;
    }>;
  };
}

/**
 * Р РЋР С—Р С‘РЎРѓР С•Р С” Р Р†РЎРѓР ВµРЎвЂ¦ Р В°Р Р…Р В°Р В»Р С‘Р В·Р В°РЎвЂљР С•РЎР‚Р С•Р Р†
 */
const ANALYZERS = [
  { name: 'tokens', file: 'analyze-tokens.ts' },
  { name: 'contracts', file: 'analyze-contracts.ts' },
  { name: 'models', file: 'analyze-models.ts' },
  { name: 'styles', file: 'analyze-styles.ts' },
  { name: 'components', file: 'analyze-components.ts' },
  { name: 'icons', file: 'analyze-icons.ts' }
];

/**
 * Р вЂ”Р В°Р С–РЎР‚РЎС“Р В¶Р В°Р ВµРЎвЂљ Р С—Р С•Р В»Р Р…РЎвЂ№Р Вµ Р Т‘Р В°Р Р…Р Р…РЎвЂ№Р Вµ Р С‘Р В· JSON РЎвЂћР В°Р в„–Р В»Р В° Р В°Р Р…Р В°Р В»Р С‘Р В·Р В°
 */
function loadFullAnalysisData(name: string): unknown | null {
  const jsonPath = path.join(CORE_DIR, `${name}.json`);
  if (!fs.existsSync(jsonPath)) {
    return null;
  }
  const content = fs.readFileSync(jsonPath, 'utf-8');
  return JSON.parse(content);
}

/**
 * Р вЂ™РЎвЂ№Р С—Р С•Р В»Р Р…РЎРЏР ВµРЎвЂљ Р Р†РЎРѓР Вµ Р В°Р Р…Р В°Р В»Р С‘Р В·Р В°РЎвЂљР С•РЎР‚РЎвЂ№
 */
async function runAllAnalyzers(): Promise<AnalysisResult[]> {
  const results: AnalysisResult[] = [];

  for (const { name, file } of ANALYZERS) {
    const startTime = Date.now();
    console.log(`\n[orchestrator] Running: ${name}...`);

    try {
      const { execSync } = await import('child_process');
      const scriptPath = path.join(SCRIPTS_DIR, file);
      
      execSync(`npx tsx "${scriptPath}"`, { 
        stdio: 'inherit',
        cwd: ROOT_DIR
      });

      results.push({
        name,
        status: 'success',
        duration: Date.now() - startTime
      });
    } catch (error) {
      results.push({
        name,
        status: 'error',
        error: error instanceof Error ? error.message : 'Unknown error',
        duration: Date.now() - startTime
      });
    }
  }

  return results;
}

/**
 * Р С’Р Р…Р В°Р В»Р С‘Р В·Р С‘РЎР‚РЎС“Р ВµРЎвЂљ Р В·Р В°Р Р†Р С‘РЎРѓР С‘Р СР С•РЎРѓРЎвЂљР С‘ Р С”Р С•Р Р…РЎвЂљРЎР‚Р В°Р С”РЎвЂљР С•Р Р† Р С•РЎвЂљ РЎвЂљР С•Р С”Р ВµР Р…Р С•Р Р†
 */
function analyzeTokenUsage(tokensData: any, contractsData: any): Record<string, string[]> {
  const tokenNames = new Set<string>();
  
  // Р РЋР С•Р В±Р С‘РЎР‚Р В°Р ВµР С Р Р†РЎРѓР Вµ Р С‘Р СР ВµР Р…Р В° РЎвЂљР С•Р С”Р ВµР Р…Р С•Р Р†
  tokensData?.tokens?.forEach((t: any) => {
    t.exports?.forEach((e: any) => {
      tokenNames.add(e.name);
    });
  });
  
  // Р С’Р Р…Р В°Р В»Р С‘Р В·Р С‘РЎР‚РЎС“Р ВµР С Р С‘Р СР С—Р С•РЎР‚РЎвЂљРЎвЂ№ Р Р† Р С”Р С•Р Р…РЎвЂљРЎР‚Р В°Р С”РЎвЂљР В°РЎвЂ¦
  const usage: Record<string, string[]> = {};
  
  contractsData?.contracts?.forEach((c: any) => {
    const usesTokens: string[] = [];
    
    // Р СџРЎР‚Р С•Р Р†Р ВµРЎР‚РЎРЏР ВµР С Р С‘Р СР С—Р С•РЎР‚РЎвЂљРЎвЂ№ - Р С‘РЎвЂ°Р ВµР С Р В»РЎР‹Р В±РЎвЂ№Р Вµ Р С‘Р СР С—Р С•РЎР‚РЎвЂљРЎвЂ№ Р С‘Р В· tokens
    c.imports?.forEach((imp: any) => {
      // Р СџРЎР‚Р С•Р Р†Р ВµРЎР‚РЎРЏР ВµР С, Р С‘Р СР С—Р С•РЎР‚РЎвЂљР С‘РЎР‚РЎС“Р ВµРЎвЂљ Р В»Р С‘ Р С”Р С•Р Р…РЎвЂљРЎР‚Р В°Р С”РЎвЂљ РЎвЂљР С•Р С”Р ВµР Р…РЎвЂ№ (Р С—Р С• Р С—РЎС“РЎвЂљР С‘ Р С” РЎвЂћР В°Р в„–Р В»РЎС“)
      if (imp.from?.includes('tokens')) {
        imp.names.forEach((name: string) => {
          if (tokenNames.has(name)) {
            usesTokens.push(name);
          }
        });
      }
    });
    
    // Р СћР В°Р С”Р В¶Р Вµ Р С—РЎР‚Р С•Р Р†Р ВµРЎР‚РЎРЏР ВµР С, Р ВµРЎРѓРЎвЂљРЎРЉ Р В»Р С‘ Р Р† РЎРЊР С”РЎРѓР С—Р С•РЎР‚РЎвЂљР В°РЎвЂ¦ РЎвЂљР С‘Р С—РЎвЂ№, Р С”Р С•РЎвЂљР С•РЎР‚РЎвЂ№Р Вµ Р СР С•Р С–РЎС“РЎвЂљ РЎРѓРЎРѓРЎвЂ№Р В»Р В°РЎвЂљРЎРЉРЎРѓРЎРЏ Р Р…Р В° РЎвЂљР С•Р С”Р ВµР Р…РЎвЂ№
    c.exports?.forEach((e: any) => {
      if (e.type) {
        // Р ВРЎвЂ°Р ВµР С Р С‘Р СР ВµР Р…Р В° РЎвЂљР С•Р С”Р ВµР Р…Р С•Р Р† Р Р† РЎвЂљР С‘Р С—Р Вµ
        tokenNames.forEach(tokenName => {
          if (e.type.includes(tokenName) && !usesTokens.includes(tokenName)) {
            usesTokens.push(tokenName);
          }
        });
      }
    });
    
    if (usesTokens.length > 0) {
      usage[c.name] = [...new Set(usesTokens)];
    }
  });
  
  return usage;
}

/**
 * Р вЂњР ВµР Р…Р ВµРЎР‚Р С‘РЎР‚РЎС“Р ВµРЎвЂљ JSON РЎРѓРЎвЂ¦Р ВµР СРЎС“ Р В±Р С‘Р В±Р В»Р С‘Р С•РЎвЂљР ВµР С”Р С‘
 */
function generateLibrarySchema(analyses: AnalysisResult[]): LibrarySchema {
  const tokensData = loadFullAnalysisData('tokens') as any;
  const contractsData = loadFullAnalysisData('contracts') as any;
  const modelsData = loadFullAnalysisData('models') as any;
  const stylesData = loadFullAnalysisData('styles') as any;
  const componentsData = loadFullAnalysisData('components') as any;
  const iconsData = loadFullAnalysisData('icons') as any;

  // Р В§Р С‘РЎвЂљР В°Р ВµР С version Р С‘Р В· package.json
  const packageJsonPath = path.join(ROOT_DIR, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

  // Р С’Р Р…Р В°Р В»Р С‘Р В·Р С‘РЎР‚РЎС“Р ВµР С Р С‘РЎРѓР С—Р С•Р В»РЎРЉР В·Р С•Р Р†Р В°Р Р…Р С‘Р Вµ РЎвЂљР С•Р С”Р ВµР Р…Р С•Р Р† Р Р† Р С”Р С•Р Р…РЎвЂљРЎР‚Р В°Р С”РЎвЂљР В°РЎвЂ¦
  const tokenUsage = analyzeTokenUsage(tokensData, contractsData);

  const schema: LibrarySchema = {
    $schema: 'https://stylist-svelte.dev/schema/library-schema.json',
    name: 'stylist-svelte',
    version: packageJson.version,
    generated: new Date().toISOString(),
    summary: {
      totalFiles: 0,
      totalExports: 0,
      categories: []
    },
    tokens: { byCategory: {}, all: [] },
    contracts: { byCategory: {}, all: [] },
    models: { total: 0, categories: [] },
    styles: { total: 0, categories: [] },
    components: { total: 0, groups: [] },
    icons: { total: 0, categories: [] }
  };

  // Tokens - Р С–РЎР‚РЎС“Р С—Р С—Р С‘РЎР‚РЎС“Р ВµР С Р С—Р С• Р С”Р В°РЎвЂљР ВµР С–Р С•РЎР‚Р С‘РЎРЏР С Р С‘ РЎРЊР С”РЎРѓР С—Р С•РЎР‚РЎвЂљР В°Р С
  if (tokensData?.tokens) {
    const byCategory: Record<string, TokenExport[]> = {};
    
    tokensData.tokens.forEach((t: any) => {
      const category = t.category || 'unknown';
      if (!byCategory[category]) byCategory[category] = [];
      
      t.exports?.forEach((e: any) => {
        const tokenExport: TokenExport = {
          name: e.name,
          kind: e.kind,
          category,
          file: t.file,
          type: e.type,
          value: e.value
        };
        byCategory[category].push(tokenExport);
        schema.tokens.all.push(tokenExport);
      });
    });
    
    schema.tokens.byCategory = byCategory;
  }

  // Contracts - РЎРѓ РЎС“Р С”Р В°Р В·Р В°Р Р…Р С‘Р ВµР С Р С‘РЎРѓР С—Р С•Р В»РЎРЉР В·РЎС“Р ВµР СРЎвЂ№РЎвЂ¦ РЎвЂљР С•Р С”Р ВµР Р…Р С•Р Р†
  if (contractsData?.contracts) {
    const byCategory: Record<string, ContractExport[]> = {};
    
    contractsData.contracts.forEach((c: any) => {
      const category = c.category || 'unknown';
      if (!byCategory[category]) byCategory[category] = [];
      
      c.exports?.forEach((e: any) => {
        const contractExport: ContractExport = {
          name: e.name,
          kind: e.kind,
          category,
          file: c.file,
          type: e.type,
          usesTokens: tokenUsage[c.name] || []
        };
        byCategory[category].push(contractExport);
        schema.contracts.all.push(contractExport);
      });
    });
    
    schema.contracts.byCategory = byCategory;
  }

  // Models
  if (modelsData) {
    schema.models.total = modelsData.models?.length || 0;
    const byCategory: Record<string, any[]> = {};
    modelsData.models?.forEach((m: any) => {
      if (!byCategory[m.category]) byCategory[m.category] = [];
      byCategory[m.category].push({ 
        name: m.name, 
        exports: m.exports?.map((e: any) => e.name) || m.exports || []
      });
    });
    schema.models.categories = Object.entries(byCategory).map(([name, items]) => ({
      name,
      count: items.length,
      items: items as any[]
    }));
  }

  // Styles
  if (stylesData) {
    schema.styles.total = stylesData.styles?.length || 0;
    const byCategory: Record<string, any[]> = {};
    stylesData.styles?.forEach((s: any) => {
      if (!byCategory[s.category]) byCategory[s.category] = [];
      byCategory[s.category].push({ 
        name: s.name, 
        exports: s.exports?.map((e: any) => e.name) || s.exports || []
      });
    });
    schema.styles.categories = Object.entries(byCategory).map(([name, items]) => ({
      name,
      count: items.length,
      items: items as any[]
    }));
  }

  // Components
  if (componentsData) {
    schema.components.total = componentsData.components?.length || 0;
    const byGroup: Record<string, any[]> = {};
    componentsData.components?.forEach((c: any) => {
      if (!byGroup[c.group]) byGroup[c.group] = [];
      byGroup[c.group].push({
        name: c.name,
        props: (c.props || []).map((p: any) => ({
          name: p.name,
          type: p.type,
          required: p.required
        }))
      });
    });
    schema.components.groups = Object.entries(byGroup).map(([name, items]) => ({
      name,
      count: items.length,
      items: items as any[]
    }));
  }

  // Icons
  if (iconsData) {
    schema.icons.total = iconsData.icons?.length || 0;
    const byCategory: Record<string, any[]> = {};
    iconsData.icons?.forEach((i: any) => {
      if (!byCategory[i.category]) byCategory[i.category] = [];
      byCategory[i.category].push({ 
        name: i.name, 
        exports: i.exports?.map((e: any) => e.name) || i.exports || []
      });
    });
    schema.icons.categories = Object.entries(byCategory).map(([name, items]) => ({
      name,
      count: items.length,
      items: items as any[]
    }));
  }

  // Summary
  schema.summary.totalFiles = 
    (tokensData?.totalFiles || 0) +
    (contractsData?.totalFiles || 0) +
    (modelsData?.totalFiles || 0) +
    (stylesData?.totalFiles || 0) +
    (componentsData?.totalFiles || 0) +
    (iconsData?.totalFiles || 0);

  schema.summary.totalExports = 
    schema.tokens.all.length +
    schema.contracts.all.length;

  schema.summary.categories = [
    ...new Set([
      ...Object.keys(schema.tokens.byCategory),
      ...Object.keys(schema.contracts.byCategory),
      ...schema.models.categories.map(c => c.name),
      ...schema.styles.categories.map(c => c.name),
      ...schema.components.groups.map(g => g.name),
      ...schema.icons.categories.map(c => c.name)
    ])
  ];

  return schema;
}

/**
 * Р РЋР С•РЎвЂ¦РЎР‚Р В°Р Р…РЎРЏР ВµРЎвЂљ РЎРѓРЎвЂ¦Р ВµР СРЎС“ Р В±Р С‘Р В±Р В»Р С‘Р С•РЎвЂљР ВµР С”Р С‘
 */
function saveLibrarySchema(schema: LibrarySchema): void {
  const schemaPath = path.join(CORE_DIR, 'library-schema.json');
  fs.writeFileSync(schemaPath, JSON.stringify(schema, null, 2), 'utf-8');
  console.log(`\n[orchestrator] Library schema saved to: ${schemaPath}`);
}

/**
 * Р вЂњР В»Р В°Р Р†Р Р…Р В°РЎРЏ РЎвЂћРЎС“Р Р…Р С”РЎвЂ Р С‘РЎРЏ Р С•РЎР‚Р С”Р ВµРЎРѓРЎвЂљРЎР‚Р В°РЎвЂљР С•РЎР‚Р В°
 */
async function main(): Promise<void> {
  console.log('='.repeat(60));
  console.log('[orchestrator] Generating library schema...');
  console.log('='.repeat(60));

  const startTime = Date.now();

  if (!fs.existsSync(CORE_DIR)) {
    fs.mkdirSync(CORE_DIR, { recursive: true });
  }
  if (!fs.existsSync(REPORTS_DIR)) {
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
  }

  // Р вЂ”Р В°Р С—РЎС“РЎРѓР С”Р В°Р ВµР С Р Р†РЎРѓР Вµ Р В°Р Р…Р В°Р В»Р С‘Р В·Р В°РЎвЂљР С•РЎР‚РЎвЂ№
  const analyses = await runAllAnalyzers();
  
  // Р вЂњР ВµР Р…Р ВµРЎР‚Р С‘РЎР‚РЎС“Р ВµР С РЎР‚Р ВµР ВµРЎРѓРЎвЂљРЎР‚ Р С‘Р С”Р С•Р Р…Р С•Р С”
  console.log('\n[orchestrator] Generating icon registry...');
  try {
    const { execSync } = await import('child_process');
    const registryScript = path.join(SVG_SCRIPTS_DIR, 'generate-registry.ts');
    execSync(`npx tsx "${registryScript}"`, {
      stdio: 'inherit',
      cwd: ROOT_DIR
    });
  } catch (error) {
    console.error('[orchestrator] Error generating icon registry:', error instanceof Error ? error.message : 'Unknown error');
  }
  
  // Р вЂњР ВµР Р…Р ВµРЎР‚Р С‘РЎР‚РЎС“Р ВµР С РЎРѓРЎвЂ¦Р ВµР СРЎС“ Р В±Р С‘Р В±Р В»Р С‘Р С•РЎвЂљР ВµР С”Р С‘
  const schema = generateLibrarySchema(analyses);
  saveLibrarySchema(schema);

  console.log('\n' + '='.repeat(60));
  console.log('[orchestrator] Summary:');
  console.log('='.repeat(60));
  console.log(`Total duration: ${Date.now() - startTime}ms`);
  console.log(`Successful: ${analyses.filter(a => a.status === 'success').length}/${analyses.length}`);
  console.log(`\nLibrary Schema:`);
  console.log(`  Version: ${schema.version}`);
  console.log(`  Total files: ${schema.summary.totalFiles}`);
  console.log(`  Total exports: ${schema.summary.totalExports}`);
  console.log(`  Tokens: ${schema.tokens.all.length}`);
  console.log(`  Contracts: ${schema.contracts.all.length}`);
  console.log(`  Categories: ${schema.summary.categories.length}`);

  console.log('\n[orchestrator] Done!');
  
  // Р вЂ”Р В°Р С—РЎС“РЎРѓР С”Р В°Р ВµР С Р Т‘Р С•Р С—Р С•Р В»Р Р…Р С‘РЎвЂљР ВµР В»РЎРЉР Р…РЎвЂ№Р Вµ РЎРѓР С”РЎР‚Р С‘Р С—РЎвЂљРЎвЂ№
  console.log('\n' + '='.repeat(60));
  console.log('[orchestrator] Running additional scripts...');
  console.log('='.repeat(60));
  
  try {
    const { execSync } = await import('child_process');
    
    console.log('\n[orchestrator] Generating dependency tree...');
    execSync(`npx tsx "${path.join(SCRIPTS_DIR, '../dependency-tree.ts')}"`, { 
      stdio: 'inherit',
      cwd: ROOT_DIR
    });
    
    console.log('\n[orchestrator] Generating short dependency tree...');
    execSync(`npx tsx "${path.join(SCRIPTS_DIR, '../dependency-short.ts')}"`, { 
      stdio: 'inherit',
      cwd: ROOT_DIR
    });
    
    console.log('\n[orchestrator] Running token audit...');
    execSync(`npx tsx "${path.join(SCRIPTS_DIR, '../token-audit.ts')}"`, { 
      stdio: 'inherit',
      cwd: ROOT_DIR
    });
  } catch (error) {
    console.error('[orchestrator] Error running additional scripts:', error);
  }
}

main().catch(console.error);

export { main as runOrchestrator };

