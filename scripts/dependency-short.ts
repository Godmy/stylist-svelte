#!/usr/bin/env node
/**
 * Dependency Short JSON Generator - РєРѕРјРїР°РєС‚РЅРѕРµ РґРµСЂРµРІРѕ Р·Р°РІРёСЃРёРјРѕСЃС‚РµР№
 * 
 * РСЃРїРѕР»СЊР·РѕРІР°РЅРёРµ:
 *   npx tsx scripts/dependency-short.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const CORE_DIR = path.join(ROOT_DIR, 'src/lib/json/core');
const OUTPUT_DIR = path.join(ROOT_DIR, 'src/lib/json/reports');

interface ShortDependencyTree {
  tokens: {
    [category: string]: {
      [name: string]: {
        kind: string;
      }
    }
  };
  contracts: {
    [category: string]: {
      [file: string]: {
        [exportName: string]: {
          kind: string;
          usesTokens: string[];
          props?: {
            [propName: string]: {
              type: string;
              required: boolean;
            }
          };
        }
      }
    }
  };
}

/**
 * Р—Р°РіСЂСѓР¶Р°РµС‚ JSON С„Р°Р№Р»
 */
function loadJSON(name: string): any {
  const jsonPath = path.join(CORE_DIR, `${name}.json`);
  if (!fs.existsSync(jsonPath)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
}

/**
 * РР·РІР»РµРєР°РµС‚ РёРјСЏ С„Р°Р№Р»Р° Р±РµР· СЂР°СЃС€РёСЂРµРЅРёСЏ
 */
function getBaseName(filePath: string): string {
  return path.basename(filePath, path.extname(filePath));
}

/**
 * РЎС‚СЂРѕРёС‚ РєРѕРјРїР°РєС‚РЅРѕРµ РґРµСЂРµРІРѕ С‚РѕРєРµРЅРѕРІ
 */
function buildTokensTree(tokensData: any): ShortDependencyTree['tokens'] {
  const tree: ShortDependencyTree['tokens'] = {};
  
  tokensData?.tokens?.forEach((t: any) => {
    const category = t.category || 'unknown';
    if (!tree[category]) tree[category] = {};
    
    t.exports?.forEach((e: any) => {
      tree[category][e.name] = {
        kind: e.kind
      };
    });
  });
  
  return tree;
}

/**
 * РЎС‚СЂРѕРёС‚ РєРѕРјРїР°РєС‚РЅРѕРµ РґРµСЂРµРІРѕ РєРѕРЅС‚СЂР°РєС‚РѕРІ
 */
function buildContractsTree(contractsData: any): ShortDependencyTree['contracts'] {
  const tree: ShortDependencyTree['contracts'] = {};
  
  contractsData?.contracts?.forEach((c: any) => {
    const category = c.category || 'unknown';
    const fileName = getBaseName(c.file);
    
    if (!tree[category]) tree[category] = {};
    if (!tree[category][fileName]) tree[category][fileName] = {};
    
    c.exports?.forEach((e: any) => {
      // РЎРѕР±РёСЂР°РµРј usesTokens РёР· РёРјРїРѕСЂС‚РѕРІ
      const usesTokens = c.imports
        ?.filter((imp: any) => imp.from?.includes('tokens'))
        ?.flatMap((imp: any) => imp.names) || [];
      
      tree[category][fileName][e.name] = {
        kind: e.kind,
        usesTokens: [...new Set(usesTokens)]
      };
    });
  });
  
  return tree;
}

/**
 * Р“Р»Р°РІРЅР°СЏ С„СѓРЅРєС†РёСЏ
 */
function main(): void {
  console.log('='.repeat(60));
  console.log('[dependency-short] Generating compact dependency tree...');
  console.log('='.repeat(60));
  
  // Р—Р°РіСЂСѓР¶Р°РµРј РґР°РЅРЅС‹Рµ
  const tokensData = loadJSON('tokens');
  const contractsData = loadJSON('contracts');
  
  if (!tokensData || !contractsData) {
    console.error('[dependency-short] Error: Missing data files. Run "yarn analyze" first.');
    process.exit(1);
  }
  
  // РЎС‚СЂРѕРёРј РґРµСЂРµРІРѕ
  const tokensTree = buildTokensTree(tokensData);
  const contractsTree = buildContractsTree(contractsData);
  
  const shortTree: ShortDependencyTree = {
    tokens: tokensTree,
    contracts: contractsTree
  };
  
  // РЎРѕС…СЂР°РЅСЏРµРј JSON
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const outputPath = path.join(OUTPUT_DIR, 'dependency-short.json');
  fs.writeFileSync(outputPath, JSON.stringify(shortTree, null, 2), 'utf-8');
  console.log(`\n[dependency-short] Saved to: ${outputPath}`);
  
  // РЎС‚Р°С‚РёСЃС‚РёРєР°
  const tokenCount = Object.values(tokensTree).reduce((sum, cat) => sum + Object.keys(cat).length, 0);
  const contractCount = Object.values(contractsTree).reduce(
    (sum, cat) => sum + Object.values(cat).reduce((s, f) => s + Object.keys(f).length, 0), 
    0
  );
  
  // РџРѕРґСЃС‡РёС‚Р°РµРј РєРѕРЅС‚СЂР°РєС‚С‹ СЃ usesTokens
  let contractsWithTokens = 0;
  Object.values(contractsTree).forEach(cat => {
    Object.values(cat).forEach(file => {
      Object.values(file).forEach((exp: any) => {
        if (exp.usesTokens && exp.usesTokens.length > 0) {
          contractsWithTokens++;
        }
      });
    });
  });
  
  console.log('\n[dependency-short] Statistics:');
  console.log(`  Token categories: ${Object.keys(tokensTree).length}`);
  console.log(`  Total tokens: ${tokenCount}`);
  console.log(`  Contract categories: ${Object.keys(contractsTree).length}`);
  console.log(`  Total contract exports: ${contractCount}`);
  console.log(`  Contracts using tokens: ${contractsWithTokens}`);
  
  console.log('\n[dependency-short] Done!');
}

main();

