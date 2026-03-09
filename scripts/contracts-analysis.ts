#!/usr/bin/env node
/**
 * Contracts Deep Analysis - РіР»СѓР±РѕРєРёР№ Р°РЅР°Р»РёР· РєРѕРЅС‚СЂР°РєС‚РѕРІ
 * 
 * Р—Р°РґР°С‡Рё:
 * 1. РќР°Р№С‚Рё С‚РѕРєРµРЅС‹, РєРѕС‚РѕСЂС‹Рµ РЅСѓР¶РЅРѕ РїРµСЂРµР»РѕР¶РёС‚СЊ РІ tokens/
 * 2. РќР°Р№С‚Рё С‚РѕРєРµРЅС‹, РєРѕС‚РѕСЂС‹Рµ РЅСѓР¶РЅРѕ Р·Р°РјРµРЅРёС‚СЊ РЅР° С‚РѕРєРµРЅС‹ РёР· tokens/
 * 3. РќР°Р№С‚Рё РїСЂРѕРїСЃС‹, РєРѕС‚РѕСЂС‹Рµ РЅСѓР¶РЅРѕ Р·Р°РјРµРЅРёС‚СЊ РЅР° С‚РѕРєРµРЅС‹
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const CONTRACTS_DIR = path.join(ROOT_DIR, 'src/lib/design-system/contracts');
const TOKENS_DIR = path.join(ROOT_DIR, 'src/lib/design-system/tokens');

interface AnalysisResult {
  category: string;
  files: Array<{
    file: string;
    findings: Finding[];
  }>;
}

interface Finding {
  type: 'token-to-move' | 'token-to-replace' | 'prop-to-token';
  name: string;
  line?: number;
  suggestion: string;
  context: string;
}

interface TokenDefinition {
  name: string;
  kind: string;
  category: string;
  values?: string[];
}

/**
 * Р РµРєСѓСЂСЃРёРІРЅРѕ РЅР°С…РѕРґРёС‚ РІСЃРµ С„Р°Р№Р»С‹ .ts
 */
function findFiles(dirPath: string): string[] {
  const results: string[] = [];
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      results.push(...findFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.ts')) {
      results.push(fullPath);
    }
  }
  
  return results;
}

/**
 * Р—Р°РіСЂСѓР¶Р°РµС‚ С‚РѕРєРµРЅС‹ РёР· JSON
 */
function loadTokens(): Map<string, TokenDefinition> {
  const tokensPath = path.join(ROOT_DIR, 'src/lib/json/core/tokens.json');
  if (!fs.existsSync(tokensPath)) return new Map();
  
  const data = JSON.parse(fs.readFileSync(tokensPath, 'utf-8'));
  const map = new Map<string, TokenDefinition>();
  
  data.tokens?.forEach((t: any) => {
    t.exports?.forEach((e: any) => {
      map.set(e.name, {
        name: e.name,
        kind: e.kind,
        category: t.category,
        values: e.value ? extractEnumValues(e.value) : undefined
      });
    });
  });
  
  return map;
}

/**
 * РР·РІР»РµРєР°РµС‚ Р·РЅР°С‡РµРЅРёСЏ РёР· СЃС‚СЂРѕРєРё РІРёРґР° ['a', 'b', 'c'] as const
 */
function extractEnumValues(valueStr: string): string[] {
  const match = valueStr.match(/\[([^\]]+)\]/);
  if (!match) return [];
  
  return match[1]
    .split(',')
    .map(s => s.trim().replace(/['"]/g, ''))
    .filter(s => s.length > 0);
}

/**
 * РђРЅР°Р»РёР·РёСЂСѓРµС‚ С„Р°Р№Р» РєРѕРЅС‚СЂР°РєС‚Р°
 */
function analyzeFile(filePath: string, tokens: Map<string, TokenDefinition>): Finding[] {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const findings: Finding[] = [];
  const relativePath = path.relative(CONTRACTS_DIR, filePath);
  
  // РџР°С‚С‚РµСЂРЅС‹ РґР»СЏ РїРѕРёСЃРєР°
  const patterns = {
    // РС‰РµРј РѕРїСЂРµРґРµР»РµРЅРёСЏ С‚РёРїРѕРІ/РёРЅС‚РµСЂС„РµР№СЃРѕРІ, РєРѕС‚РѕСЂС‹Рµ РІС‹РіР»СЏРґСЏС‚ РєР°Рє С‚РѕРєРµРЅС‹
    tokenLikeTypes: [
      /export\s+(?:type|interface)\s+(\w+(?:Size|Variant|State|Status|Type|Kind|Mode|Align|Orient|Direction|Position))\s*=?/gi,
      /export\s+const\s+(\w+(?:SIZES|VARIANTS|STATES|STATUS|TYPES|ALIGNMENTS|ORIENTATIONS))\s*=/gi
    ],
    
    // РС‰РµРј РїСЂРѕРїСЃС‹ СЃ С‚РёРїР°РјРё, РєРѕС‚РѕСЂС‹Рµ РјРѕРіСѓС‚ Р±С‹С‚СЊ С‚РѕРєРµРЅР°РјРё
    propPatterns: [
      /(\w+)(\?)?:\s*['"]([^'"]+)['"](?:\s*\|\s*['"]([^'"]+)['"])?/g,
      /(\w+)(\?)?:\s*(\w+(?:Size|Variant|State|Status|Type|Kind|Mode|Align|Orient|Direction|Position))/g
    ]
  };
  
  // 1. РС‰РµРј С‚РѕРєРµРЅС‹, РєРѕС‚РѕСЂС‹Рµ РѕРїСЂРµРґРµР»РµРЅС‹ РІ РєРѕРЅС‚СЂР°РєС‚Р°С…, РЅРѕ РґРѕР»Р¶РЅС‹ Р±С‹С‚СЊ РІ tokens/
  lines.forEach((line, idx) => {
    patterns.tokenLikeTypes.forEach(pattern => {
      pattern.lastIndex = 0;
      let match;
      while ((match = pattern.exec(line)) !== null) {
        const name = match[1];
        
        // РџСЂРѕРІРµСЂСЏРµРј, РµСЃС‚СЊ Р»Рё С‚Р°РєРѕР№ С‚РѕРєРµРЅ РІ tokens/
        if (!tokens.has(name)) {
          // РџСЂРѕРІРµСЂСЏРµРј, РЅРµ РёРјРїРѕСЂС‚РёСЂСѓРµС‚СЃСЏ Р»Рё РѕРЅ
          const hasImport = lines.some(l => 
            l.includes(`import`) && l.includes(name)
          );
          
          if (!hasImport) {
            findings.push({
              type: 'token-to-move',
              name,
              line: idx + 1,
              suggestion: `Move '${name}' to tokens/${getCategoryForToken(name)}/`,
              context: line.trim()
            });
          }
        }
      }
    });
  });
  
  // 2. РС‰РµРј СЃС‚СЂРѕРєРѕРІС‹Рµ Р»РёС‚РµСЂР°Р»С‹, РєРѕС‚РѕСЂС‹Рµ РґРѕР»Р¶РЅС‹ Р±С‹С‚СЊ С‚РѕРєРµРЅР°РјРё
  const stringLiteralMap = new Map<string, string[]>();
  lines.forEach((line, idx) => {
    patterns.propPatterns[0].lastIndex = 0;
    let match;
    while ((match = patterns.propPatterns[0].exec(line)) !== null) {
      const propName = match[1];
      const values = [match[3]];
      if (match[4]) values.push(match[4]);
      
      // Р•СЃР»Рё Р±РѕР»СЊС€Рµ 2 Р·РЅР°С‡РµРЅРёР№ - РІРµСЂРѕСЏС‚РЅРѕ РЅСѓР¶РµРЅ С‚РѕРєРµРЅ
      if (values.length >= 2) {
        const key = values.sort().join('|');
        if (!stringLiteralMap.has(key)) {
          stringLiteralMap.set(key, []);
        }
        stringLiteralMap.get(key)!.push(`${relativePath}:${idx + 1}:${propName}`);
      }
    }
  });
  
  // 3. РС‰РµРј РїСЂРѕРїСЃС‹, РєРѕС‚РѕСЂС‹Рµ РёСЃРїРѕР»СЊР·СѓСЋС‚ СЃС‚СЂРѕРєРѕРІС‹Рµ Р»РёС‚РµСЂР°Р»С‹ РІРјРµСЃС‚Рѕ С‚РѕРєРµРЅРѕРІ
  lines.forEach((line, idx) => {
    // size?: 'sm' | 'md' | 'lg'
    const sizeMatch = line.match(/(\w+)(\?)?:\s*'((?:xs|sm|md|lg|xl|2xl)(?:\s*\|\s*(?:xs|sm|md|lg|xl|2xl))*)'/);
    if (sizeMatch) {
      const propName = sizeMatch[1];
      if (!tokens.has('ComponentSize')) {
        findings.push({
          type: 'prop-to-token',
          name: propName,
          line: idx + 1,
          suggestion: `Replace with tokens.architecture.ComponentSize`,
          context: line.trim()
        });
      }
    }
    
    // variant?: 'default' | 'primary' | 'secondary'
    const variantMatch = line.match(/(\w+)(\?)?:\s*'((?:default|primary|secondary|neutral)(?:\s*\|\s*(?:default|primary|secondary|neutral))*)'/);
    if (variantMatch) {
      const propName = variantMatch[1];
      if (!tokens.has('DefaultVariants') && !tokens.has('NeutralVariant')) {
        findings.push({
          type: 'prop-to-token',
          name: propName,
          line: idx + 1,
          suggestion: `Replace with tokens.information.DefaultVariants or tokens.information.NeutralVariant`,
          context: line.trim()
        });
      }
    }
    
    // orientation?: 'horizontal' | 'vertical'
    const orientMatch = line.match(/(\w+)(\?)?:\s*'(horizontal\|vertical|vertical\|horizontal)'/);
    if (orientMatch) {
      const propName = orientMatch[1];
      if (tokens.has('Orientation')) {
        findings.push({
          type: 'prop-to-token',
          name: propName,
          line: idx + 1,
          suggestion: `Replace with tokens.architecture.Orientation`,
          context: line.trim()
        });
      }
    }
    
    // align?: 'start' | 'center' | 'end'
    const alignMatch = line.match(/(\w+)(\?)?:\s*'(start\|center\|end|start\|center\|end\|stretch)'/);
    if (alignMatch) {
      const propName = alignMatch[1];
      if (tokens.has('Alignment')) {
        findings.push({
          type: 'prop-to-token',
          name: propName,
          line: idx + 1,
          suggestion: `Replace with tokens.architecture.Alignment`,
          context: line.trim()
        });
      }
    }
  });
  
  return findings;
}

/**
 * РћРїСЂРµРґРµР»СЏРµС‚ РєР°С‚РµРіРѕСЂРёСЋ РґР»СЏ С‚РѕРєРµРЅР° РїРѕ РёРјРµРЅРё
 */
function getCategoryForToken(name: string): string {
  const lower = name.toLowerCase();
  
  if (lower.includes('size') || lower.includes('width') || lower.includes('height')) {
    return 'architecture';
  }
  if (lower.includes('variant') || lower.includes('style') || lower.includes('appearance')) {
    return 'information';
  }
  if (lower.includes('state') || lower.includes('status') || lower.includes('mode')) {
    return 'interaction';
  }
  
  return 'architecture';
}

/**
 * Р“Р»Р°РІРЅР°СЏ С„СѓРЅРєС†РёСЏ
 */
function main(): void {
  console.log('='.repeat(70));
  console.log('CONTRACTS DEEP ANALYSIS');
  console.log('='.repeat(70));
  
  // Р—Р°РіСЂСѓР¶Р°РµРј С‚РѕРєРµРЅС‹
  const tokens = loadTokens();
  console.log(`\nLoaded ${tokens.size} token definitions`);
  
  // РќР°С…РѕРґРёРј РІСЃРµ С„Р°Р№Р»С‹ РєРѕРЅС‚СЂР°РєС‚РѕРІ
  const contractFiles = findFiles(CONTRACTS_DIR);
  console.log(`Found ${contractFiles.length} contract files`);
  
  // РђРЅР°Р»РёР·РёСЂСѓРµРј РїРѕ РєР°С‚РµРіРѕСЂРёСЏРј
  const categories = ['architecture', 'information', 'interaction'];
  const results: AnalysisResult[] = [];
  
  categories.forEach(category => {
    const categoryDir = path.join(CONTRACTS_DIR, category);
    if (!fs.existsSync(categoryDir)) return;
    
    const files = findFiles(categoryDir);
    const categoryResult: AnalysisResult = { category, files: [] };
    
    files.forEach(file => {
      const findings = analyzeFile(file, tokens);
      if (findings.length > 0) {
        categoryResult.files.push({
          file: path.relative(CONTRACTS_DIR, file),
          findings
        });
      }
    });
    
    if (categoryResult.files.length > 0) {
      results.push(categoryResult);
    }
  });
  
  // Р’С‹РІРѕРґРёРј СЂРµР·СѓР»СЊС‚Р°С‚С‹
  console.log('\n' + '='.repeat(70));
  console.log('FINDINGS');
  console.log('='.repeat(70));
  
  results.forEach(result => {
    console.log(`\nрџ“Ѓ ${result.category.toUpperCase()}`);
    console.log('-'.repeat(70));
    
    const byType = {
      'token-to-move': result.files.flatMap(f => f.findings.filter(fi => fi.type === 'token-to-move')),
      'token-to-replace': result.files.flatMap(f => f.findings.filter(fi => fi.type === 'token-to-replace')),
      'prop-to-token': result.files.flatMap(f => f.findings.filter(fi => fi.type === 'prop-to-token'))
    };
    
    if (byType['token-to-move'].length > 0) {
      console.log(`\n  рџ”ґ TOKENS TO MOVE (${byType['token-to-move'].length}):`);
      byType['token-to-move'].forEach(f => {
        console.log(`    - ${f.name} in ${f.context}`);
        console.log(`      в†’ ${f.suggestion}`);
      });
    }
    
    if (byType['token-to-replace'].length > 0) {
      console.log(`\n  рџџЎ TOKENS TO REPLACE (${byType['token-to-replace'].length}):`);
      byType['token-to-replace'].forEach(f => {
        console.log(`    - ${f.name}`);
        console.log(`      в†’ ${f.suggestion}`);
      });
    }
    
    if (byType['prop-to-token'].length > 0) {
      console.log(`\n  рџџў PROPS TO TOKENS (${byType['prop-to-token'].length}):`);
      byType['prop-to-token'].forEach(f => {
        console.log(`    - ${f.name} (line ${f.line})`);
        console.log(`      ${f.context}`);
        console.log(`      в†’ ${f.suggestion}`);
      });
    }
  });
  
  // РЎРѕС…СЂР°РЅСЏРµРј РѕС‚С‡С‘С‚
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalFiles: contractFiles.length,
      totalFindings: results.reduce((sum, r) => sum + r.files.reduce((s, f) => s + f.findings.length, 0), 0),
      byCategory: results.map(r => ({
        category: r.category,
        filesWithFindings: r.files.length,
        totalFindings: r.files.reduce((sum, f) => sum + f.findings.length, 0)
      }))
    },
    results
  };
  
  const outputDir = path.join(ROOT_DIR, 'src/lib/json/reports');
  fs.mkdirSync(outputDir, { recursive: true });
  const outputPath = path.join(outputDir, 'contracts-analysis.json');
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2), 'utf-8');
  console.log(`\n\nрџ’ѕ Report saved to: ${outputPath}`);
  
  console.log('\n' + '='.repeat(70));
  console.log('SUMMARY');
  console.log('='.repeat(70));
  console.log(`Total files analyzed: ${contractFiles.length}`);
  console.log(`Total findings: ${report.summary.totalFindings}`);
  report.summary.byCategory.forEach(c => {
    console.log(`  ${c.category}: ${c.totalFindings} findings in ${c.filesWithFindings} files`);
  });
  
  console.log('\n[contracts-analysis] Done!');
}

main();

