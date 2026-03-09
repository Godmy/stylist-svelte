#!/usr/bin/env node
/**
 * Token Audit - РІС‹СЏРІР»СЏРµС‚ РѕС‚РєР»РѕРЅРµРЅРёСЏ РѕС‚ С‚РѕРєРµРЅРѕРІ
 * 
 * Р—Р°РґР°С‡Рё:
 * 1. РќР°Р№С‚Рё РІСЃРµ РїСЂРѕРїСЃС‹ РІ РєРѕРЅС‚СЂР°РєС‚Р°С…, РєРѕС‚РѕСЂС‹Рµ РґРѕР»Р¶РЅС‹ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ С‚РѕРєРµРЅС‹
 * 2. Р’С‹СЏРІРёС‚СЊ РїСЂРѕРїСЃС‹ СЃ С‚РёРїР°РјРё, РЅРµ СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓСЋС‰РёРјРё С‚РѕРєРµРЅР°Рј
 * 3. РќР°Р№С‚Рё РґСѓР±Р»РёСЂСѓСЋС‰РёРµСЃСЏ РѕРїСЂРµРґРµР»РµРЅРёСЏ РІРЅРµ РїР°РїРєРё tokens
 * 
 * РСЃРїРѕР»СЊР·РѕРІР°РЅРёРµ:
 *   npx tsx scripts/token-audit.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const JSON_DIR = path.join(ROOT_DIR, 'src/lib/json/core');
const TOKENS_DIR = path.join(ROOT_DIR, 'src/lib/design-system/tokens');
const OUTPUT_DIR = path.join(ROOT_DIR, 'src/lib/json/reports');

interface TokenDefinition {
  name: string;
  kind: string;
  category: string;
  file: string;
  value?: string;
  type?: string;
}

interface AuditFinding {
  severity: 'error' | 'warning' | 'info';
  category: string;
  file: string;
  exportName: string;
  propName?: string;
  message: string;
  suggestion?: string;
}

interface AuditReport {
  timestamp: string;
  summary: {
    totalTokens: number;
    totalContracts: number;
    errors: number;
    warnings: number;
    info: number;
  };
  findings: AuditFinding[];
  missingTokenUsage: {
    tokenName: string;
    usedIn: Array<{
      file: string;
      exportName: string;
      propName?: string;
      currentType: string;
    }>;
  }[];
}

/**
 * Р—Р°РіСЂСѓР¶Р°РµС‚ JSON С„Р°Р№Р»
 */
function loadJSON(name: string): any {
  const jsonPath = path.join(JSON_DIR, `${name}.json`);
  if (!fs.existsSync(jsonPath)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
}

/**
 * РЎРѕР±РёСЂР°РµС‚ РІСЃРµ РѕРїСЂРµРґРµР»РµРЅРёСЏ С‚РѕРєРµРЅРѕРІ
 */
function collectTokenDefinitions(tokensData: any): Map<string, TokenDefinition> {
  const definitions = new Map<string, TokenDefinition>();
  
  tokensData?.tokens?.forEach((t: any) => {
    t.exports?.forEach((e: any) => {
      definitions.set(e.name, {
        name: e.name,
        kind: e.kind,
        category: t.category,
        file: t.file,
        value: e.value,
        type: e.type
      });
    });
  });
  
  return definitions;
}

/**
 * РђРЅР°Р»РёР·РёСЂСѓРµС‚ РєРѕРЅС‚СЂР°РєС‚С‹ РЅР° РїСЂРµРґРјРµС‚ РѕС‚РєР»РѕРЅРµРЅРёР№
 */
function analyzeContracts(contractsData: any, tokenDefs: Map<string, TokenDefinition>): AuditReport {
  const findings: AuditFinding[] = [];
  const missingUsage: Map<string, AuditReport['missingTokenUsage']> = new Map();
  
  // РРЅРёС†РёР°Р»РёР·РёСЂСѓРµРј РѕС‚СЃР»РµР¶РёРІР°РЅРёРµ РёСЃРїРѕР»СЊР·РѕРІР°РЅРёСЏ С‚РѕРєРµРЅРѕРІ
  tokenDefs.forEach((def, name) => {
    missingUsage.set(name, { tokenName: name, usedIn: [] });
  });
  
  let contractCount = 0;
  
  contractsData?.contracts?.forEach((c: any) => {
    contractCount++;
    
    c.exports?.forEach((e: any) => {
      // РџСЂРѕРІРµСЂСЏРµРј РёРјРїРѕСЂС‚С‹ РёР· tokens
      c.imports?.forEach((imp: any) => {
        if (imp.from?.includes('tokens')) {
          imp.names.forEach((name: string) => {
            if (tokenDefs.has(name)) {
              // РўРѕРєРµРЅ РёСЃРїРѕР»СЊР·СѓРµС‚СЃСЏ РїСЂР°РІРёР»СЊРЅРѕ
              const usage = missingUsage.get(name)!;
              usage.usedIn.push({
                file: c.file,
                exportName: e.name
              });
            }
          });
        }
      });
      
      // РџСЂРѕРІРµСЂСЏРµРј С‚РёРїС‹ РЅР° РЅР°Р»РёС‡РёРµ СЃСЃС‹Р»РѕРє РЅР° С‚РѕРєРµРЅС‹
      if (e.type) {
        tokenDefs.forEach((def, tokenName) => {
          if (e.type.includes(tokenName)) {
            const usage = missingUsage.get(tokenName)!;
            usage.usedIn.push({
              file: c.file,
              exportName: e.name,
              currentType: e.type || ''
            });
          }
        });
      }
      
      // РС‰РµРј РїРѕС‚РµРЅС†РёР°Р»СЊРЅС‹Рµ РѕС‚РєР»РѕРЅРµРЅРёСЏ
      // РќР°РїСЂРёРјРµСЂ, РµСЃР»Рё РїСЂРѕРїСЃ РЅР°Р·С‹РІР°РµС‚СЃСЏ "align", РЅРѕ РЅРµ РёСЃРїРѕР»СЊР·СѓРµС‚ С‚РѕРєРµРЅ Alignment
      
      if (e.kind === 'interface' || e.kind === 'type') {
        const lowerName = e.name.toLowerCase();
        
        // РџСЂРѕРІРµСЂСЏРµРј РЅР° РїРѕС‚РµРЅС†РёР°Р»СЊРЅС‹Рµ СЃРѕРѕС‚РІРµС‚СЃС‚РІРёСЏ С‚РѕРєРµРЅР°Рј РїРѕ РёРјРµРЅРё
        if (lowerName.includes('align') && !c.imports?.some((imp: any) => 
          imp.names?.some((n: string) => n.includes('Alignment'))
        )) {
          findings.push({
            severity: 'warning',
            category: 'potential-missing-token',
            file: c.file,
            exportName: e.name,
            message: `Interface '${e.name}' may need Alignment token`,
            suggestion: 'Consider importing Alignment from tokens/architecture/alignments'
          });
        }
        
        if (lowerName.includes('orient') && !c.imports?.some((imp: any) => 
          imp.names?.some((n: string) => n.includes('Orientation'))
        )) {
          findings.push({
            severity: 'warning',
            category: 'potential-missing-token',
            file: c.file,
            exportName: e.name,
            message: `Interface '${e.name}' may need Orientation token`,
            suggestion: 'Consider importing Orientation from tokens/architecture/orientations'
          });
        }
        
        if (lowerName.includes('size') && !c.imports?.some((imp: any) => 
          imp.names?.some((n: string) => n.includes('ComponentSize'))
        )) {
          findings.push({
            severity: 'info',
            category: 'potential-missing-token',
            file: c.file,
            exportName: e.name,
            message: `Interface '${e.name}' may need ComponentSize token`,
            suggestion: 'Consider importing ComponentSize from tokens/architecture/component-size'
          });
        }
      }
    });
  });
  
  // РќР°С…РѕРґРёРј С‚РѕРєРµРЅС‹, РєРѕС‚РѕСЂС‹Рµ РЅРµ РёСЃРїРѕР»СЊР·СѓСЋС‚СЃСЏ
  const unusedTokens = Array.from(missingUsage.values())
    .filter(u => u.usedIn.length === 0);
  
  unusedTokens.forEach(u => {
    const def = tokenDefs.get(u.tokenName)!;
    findings.push({
      severity: 'info',
      category: 'unused-token',
      file: def.file,
      exportName: u.tokenName,
      message: `Token '${u.tokenName}' is defined but not used in any contract`,
      suggestion: 'Consider removing unused token or documenting its purpose'
    });
  });
  
  // Р¤РёР»СЊС‚СЂСѓРµРј С‚РѕР»СЊРєРѕ РёСЃРїРѕР»СЊР·СѓРµРјС‹Рµ С‚РѕРєРµРЅС‹ РґР»СЏ РѕС‚С‡С‘С‚Р°
  const usedTokens = Array.from(missingUsage.values())
    .filter(u => u.usedIn.length > 0);
  
  return {
    timestamp: new Date().toISOString(),
    summary: {
      totalTokens: tokenDefs.size,
      totalContracts: contractCount,
      errors: findings.filter(f => f.severity === 'error').length,
      warnings: findings.filter(f => f.severity === 'warning').length,
      info: findings.filter(f => f.severity === 'info').length + unusedTokens.length
    },
    findings,
    missingTokenUsage: usedTokens
  };
}

/**
 * Р“РµРЅРµСЂРёСЂСѓРµС‚ С‚РµРєСЃС‚РѕРІС‹Р№ РѕС‚С‡С‘С‚
 */
function generateTextReport(report: AuditReport): string {
  const lines: string[] = [];
  
  lines.push('='.repeat(70));
  lines.push('TOKEN AUDIT REPORT');
  lines.push(`Generated: ${report.timestamp}`);
  lines.push('='.repeat(70));
  lines.push('');
  lines.push('SUMMARY');
  lines.push('-'.repeat(70));
  lines.push(`Total tokens: ${report.summary.totalTokens}`);
  lines.push(`Total contracts: ${report.summary.totalContracts}`);
  lines.push(`Errors: ${report.summary.errors}`);
  lines.push(`Warnings: ${report.summary.warnings}`);
  lines.push(`Info: ${report.summary.info}`);
  lines.push('');
  
  if (report.findings.length > 0) {
    lines.push('FINDINGS');
    lines.push('-'.repeat(70));
    
    // Р“СЂСѓРїРїРёСЂСѓРµРј РїРѕ СЃРµСЂСЊС‘Р·РЅРѕСЃС‚Рё
    const bySeverity = {
      error: report.findings.filter(f => f.severity === 'error'),
      warning: report.findings.filter(f => f.severity === 'warning'),
      info: report.findings.filter(f => f.severity === 'info')
    };
    
    if (bySeverity.error.length > 0) {
      lines.push('');
      lines.push('ERRORS:');
      bySeverity.error.forEach(f => {
        lines.push(`  [${f.category}] ${f.file}`);
        lines.push(`    ${f.exportName}: ${f.message}`);
        if (f.suggestion) lines.push(`    в†’ ${f.suggestion}`);
      });
    }
    
    if (bySeverity.warning.length > 0) {
      lines.push('');
      lines.push('WARNINGS:');
      bySeverity.warning.forEach(f => {
        lines.push(`  [${f.category}] ${f.file}`);
        lines.push(`    ${f.exportName}: ${f.message}`);
        if (f.suggestion) lines.push(`    в†’ ${f.suggestion}`);
      });
    }
    
    if (bySeverity.info.length > 0) {
      lines.push('');
      lines.push('INFO:');
      bySeverity.info.forEach(f => {
        lines.push(`  [${f.category}] ${f.file}`);
        lines.push(`    ${f.exportName}: ${f.message}`);
        if (f.suggestion) lines.push(`    в†’ ${f.suggestion}`);
      });
    }
  }
  
  lines.push('');
  lines.push('TOKEN USAGE');
  lines.push('-'.repeat(70));
  report.missingTokenUsage.forEach(u => {
    lines.push(`${u.tokenName}: ${u.usedIn.length} usage(s)`);
    u.usedIn.slice(0, 5).forEach(usage => {
      const fileName = usage.file.split('\\').pop()?.split('/').pop();
      if (usage.propName) {
        lines.push(`  - ${fileName}#${usage.exportName}.${usage.propName}`);
      } else {
        lines.push(`  - ${fileName}#${usage.exportName}`);
      }
    });
    if (u.usedIn.length > 5) {
      lines.push(`  ... and ${u.usedIn.length - 5} more`);
    }
  });
  
  return lines.join('\n');
}

/**
 * Р“Р»Р°РІРЅР°СЏ С„СѓРЅРєС†РёСЏ
 */
function main(): void {
  console.log('='.repeat(60));
  console.log('[token-audit] Analyzing token usage...');
  console.log('='.repeat(60));
  
  // Р—Р°РіСЂСѓР¶Р°РµРј РґР°РЅРЅС‹Рµ
  const tokensData = loadJSON('tokens');
  const contractsData = loadJSON('contracts');
  
  if (!tokensData || !contractsData) {
    console.error('[token-audit] Error: Missing data files. Run "yarn analyze" first.');
    process.exit(1);
  }
  
  // РЎРѕР±РёСЂР°РµРј РѕРїСЂРµРґРµР»РµРЅРёСЏ С‚РѕРєРµРЅРѕРІ
  const tokenDefs = collectTokenDefinitions(tokensData);
  console.log(`[token-audit] Found ${tokenDefs.size} token definitions`);
  
  // РђРЅР°Р»РёР·РёСЂСѓРµРј РєРѕРЅС‚СЂР°РєС‚С‹
  const report = analyzeContracts(contractsData, tokenDefs);
  
  // РЎРѕС…СЂР°РЅСЏРµРј JSON РѕС‚С‡С‘С‚
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const jsonPath = path.join(OUTPUT_DIR, 'token-audit.json');
  fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2), 'utf-8');
  console.log(`\n[token-audit] Report saved to: ${jsonPath}`);
  
  // РЎРѕС…СЂР°РЅСЏРµРј С‚РµРєСЃС‚РѕРІС‹Р№ РѕС‚С‡С‘С‚
  const textReport = generateTextReport(report);
  const textPath = path.join(OUTPUT_DIR, 'token-audit.txt');
  fs.writeFileSync(textPath, textReport, 'utf-8');
  console.log(`[token-audit] Text report saved to: ${textPath}`);
  
  // Р’С‹РІРѕРґРёРј РєСЂР°С‚РєСѓСЋ СЃС‚Р°С‚РёСЃС‚РёРєСѓ
  console.log('\n' + '='.repeat(60));
  console.log('[token-audit] Summary:');
  console.log('='.repeat(60));
  console.log(`Total tokens: ${report.summary.totalTokens}`);
  console.log(`Total contracts: ${report.summary.totalContracts}`);
  console.log(`Errors: ${report.summary.errors}`);
  console.log(`Warnings: ${report.summary.warnings}`);
  console.log(`Info: ${report.summary.info}`);
  
  // Р’С‹РІРѕРґРёРј С‚РѕРї РёСЃРїРѕР»СЊР·СѓРµРјС‹С… С‚РѕРєРµРЅРѕРІ
  console.log('\nMost used tokens:');
  report.missingTokenUsage
    .sort((a, b) => b.usedIn.length - a.usedIn.length)
    .slice(0, 10)
    .forEach(u => {
      console.log(`  ${u.tokenName}: ${u.usedIn.length} usages`);
    });
  
  console.log('\n[token-audit] Done!');
}

main();

