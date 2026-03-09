#!/usr/bin/env node
/**
 * Dependency Tree Generator - СЃС‚СЂРѕРёС‚ РґРµСЂРµРІРѕ Р·Р°РІРёСЃРёРјРѕСЃС‚РµР№ Р±РёР±Р»РёРѕС‚РµРєРё
 * 
 * РСЃРїРѕР»СЊР·РѕРІР°РЅРёРµ:
 *   npx tsx scripts/dependency-tree.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const CORE_DIR = path.join(ROOT_DIR, 'src/lib/json/core');
const OUTPUT_DIR = path.join(ROOT_DIR, 'src/lib/json/reports');

interface DependencyTree {
  tokens: {
    [category: string]: {
      [name: string]: {
        kind: string;
        value?: string;
        type?: string;
      }
    }
  };
  contracts: {
    [category: string]: {
      [file: string]: {
        [exportName: string]: {
          kind: string;
          props?: {
            [propName: string]: {
              type: string;
              required: boolean;
              usesToken?: string;
            }
          };
          usesTokens: string[];
        }
      }
    }
  };
}

interface TokenInfo {
  name: string;
  kind: string;
  value?: string;
  type?: string;
  category: string;
}

interface ContractExport {
  name: string;
  kind: string;
  category: string;
  file: string;
  type?: string;
  usesTokens: string[];
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
 * РЎС‚СЂРѕРёС‚ РґРµСЂРµРІРѕ С‚РѕРєРµРЅРѕРІ
 */
function buildTokensTree(tokensData: any): DependencyTree['tokens'] {
  const tree: DependencyTree['tokens'] = {};
  
  tokensData?.tokens?.forEach((t: any) => {
    const category = t.category || 'unknown';
    if (!tree[category]) tree[category] = {};
    
    t.exports?.forEach((e: any) => {
      tree[category][e.name] = {
        kind: e.kind,
        value: e.value,
        type: e.type
      };
    });
  });
  
  return tree;
}

/**
 * РЎС‚СЂРѕРёС‚ РґРµСЂРµРІРѕ РєРѕРЅС‚СЂР°РєС‚РѕРІ
 */
function buildContractsTree(contractsData: any, tokensTree: DependencyTree['tokens']): DependencyTree['contracts'] {
  const tree: DependencyTree['contracts'] = {};
  
  // РЎРѕР±РёСЂР°РµРј РІСЃРµ РёРјРµРЅР° С‚РѕРєРµРЅРѕРІ РґР»СЏ Р±С‹СЃС‚СЂРѕРіРѕ РїРѕРёСЃРєР°
  const allTokenNames = new Set<string>();
  Object.values(tokensTree).forEach(category => {
    Object.keys(category).forEach(name => allTokenNames.add(name));
  });
  
  contractsData?.contracts?.forEach((c: any) => {
    const category = c.category || 'unknown';
    const fileName = getBaseName(c.file);
    
    if (!tree[category]) tree[category] = {};
    if (!tree[category][fileName]) tree[category][fileName] = {};
    
    c.exports?.forEach((e: any) => {
      const contractExport: any = {
        kind: e.kind,
        usesTokens: c.imports
          ?.filter((imp: any) => imp.from?.includes('tokens'))
          ?.flatMap((imp: any) => imp.names)
          ?.filter((name: string) => allTokenNames.has(name)) || []
      };
      
      // Р•СЃР»Рё СЌС‚Рѕ РёРЅС‚РµСЂС„РµР№СЃ/С‚РёРї СЃ props, РїС‹С‚Р°РµРјСЃСЏ РёР·РІР»РµС‡СЊ РёС… РёР· contracts.json
      if (e.kind === 'interface' || e.kind === 'type') {
        // РџСЂРѕРІРµСЂСЏРµРј, РµСЃС‚СЊ Р»Рё РґРµС‚Р°Р»СЊРЅР°СЏ РёРЅС„РѕСЂРјР°С†РёСЏ РІ РїРѕР»РЅРѕРј С„Р°Р№Р»Рµ
        const props: any = {};
        
        // РС‰РµРј prop РІ type СЃС‚СЂРѕРєРµ
        if (e.type) {
          // РџС‹С‚Р°РµРјСЃСЏ РЅР°Р№С‚Рё РёРјРµРЅР° С‚РѕРєРµРЅРѕРІ РІ С‚РёРїРµ
          allTokenNames.forEach(tokenName => {
            if (e.type?.includes(tokenName)) {
              contractExport.usesTokens.push(tokenName);
            }
          });
        }
        
        if (Object.keys(props).length > 0) {
          contractExport.props = props;
        }
      }
      
      contractExport.usesTokens = [...new Set(contractExport.usesTokens)];
      
      tree[category][fileName][e.name] = contractExport;
    });
  });
  
  return tree;
}

/**
 * Р“РµРЅРµСЂРёСЂСѓРµС‚ С‚РµРєСЃС‚РѕРІРѕРµ РїСЂРµРґСЃС‚Р°РІР»РµРЅРёРµ РґРµСЂРµРІР°
 */
function generateTextTree(tree: DependencyTree): string {
  const lines: string[] = [];
  
  lines.push('tokens');
  Object.entries(tree.tokens).forEach(([category, tokens]) => {
    lines.push(`  ${category}`);
    Object.entries(tokens).forEach(([name, info]) => {
      if (info.value) {
        lines.push(`    ${name}: ${info.value}`);
      } else {
        lines.push(`    ${name} (${info.kind})`);
      }
    });
  });
  
  lines.push('');
  lines.push('contracts');
  Object.entries(tree.contracts).forEach(([category, files]) => {
    lines.push(`  ${category}`);
    Object.entries(files).forEach(([file, exports]) => {
      lines.push(`    ${file}`);
      Object.entries(exports).forEach(([exportName, info]: any) => {
        lines.push(`      ${exportName}`);
        if (info.usesTokens?.length > 0) {
          lines.push(`        usesTokens: [${info.usesTokens.join(', ')}]`);
        }
        if (info.props) {
          Object.entries(info.props).forEach(([propName, propInfo]: any) => {
            const required = propInfo.required ? '' : '?';
            const tokenRef = propInfo.usesToken ? ` /* ${propInfo.usesToken} */` : '';
            lines.push(`        ${propName}${required}: ${propInfo.type}${tokenRef}`);
          });
        }
      });
    });
  });
  
  return lines.join('\n');
}

/**
 * Р“Р»Р°РІРЅР°СЏ С„СѓРЅРєС†РёСЏ
 */
function main(): void {
  console.log('='.repeat(60));
  console.log('[dependency-tree] Building dependency tree...');
  console.log('='.repeat(60));
  
  // Р—Р°РіСЂСѓР¶Р°РµРј РґР°РЅРЅС‹Рµ
  const tokensData = loadJSON('tokens');
  const contractsData = loadJSON('contracts');
  
  if (!tokensData || !contractsData) {
    console.error('[dependency-tree] Error: Missing data files. Run "yarn analyze" first.');
    process.exit(1);
  }
  
  // РЎС‚СЂРѕРёРј РґРµСЂРµРІРѕ
  const tokensTree = buildTokensTree(tokensData);
  const contractsTree = buildContractsTree(contractsData, tokensTree);
  
  const tree: DependencyTree = {
    tokens: tokensTree,
    contracts: contractsTree
  };
  
  // РЎРѕС…СЂР°РЅСЏРµРј JSON
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const jsonPath = path.join(OUTPUT_DIR, 'dependency-tree.json');
  fs.writeFileSync(jsonPath, JSON.stringify(tree, null, 2), 'utf-8');
  console.log(`\n[dependency-tree] JSON tree saved to: ${jsonPath}`);
  
  // РЎРѕС…СЂР°РЅСЏРµРј С‚РµРєСЃС‚РѕРІСѓСЋ РІРµСЂСЃРёСЋ
  const textTree = generateTextTree(tree);
  const textPath = path.join(OUTPUT_DIR, 'dependency-tree.txt');
  fs.writeFileSync(textPath, textTree, 'utf-8');
  console.log(`[dependency-tree] Text tree saved to: ${textPath}`);
  
  // РЎС‚Р°С‚РёСЃС‚РёРєР°
  const tokenCount = Object.values(tokensTree).reduce((sum, cat) => sum + Object.keys(cat).length, 0);
  const contractCount = Object.values(contractsTree).reduce(
    (sum, cat) => sum + Object.values(cat).reduce((s, f) => s + Object.keys(f).length, 0), 
    0
  );
  
  console.log('\n[dependency-tree] Statistics:');
  console.log(`  Token categories: ${Object.keys(tokensTree).length}`);
  console.log(`  Total tokens: ${tokenCount}`);
  console.log(`  Contract categories: ${Object.keys(contractsTree).length}`);
  console.log(`  Total contract exports: ${contractCount}`);
  
  console.log('\n[dependency-tree] Done!');
}

main();

