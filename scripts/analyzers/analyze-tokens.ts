import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import type { FileInfo } from './parser.js';
import { analyzeDirectory } from './parser.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '../..');
const TOKENS_DIR = path.join(ROOT_DIR, 'src/lib/design-system/tokens');
const OUTPUT_FILE = path.join(ROOT_DIR, 'src/lib/json/core/tokens.json');

export interface TokenInfo {
  name: string;
  file: string;
  category: string;
  exports: Array<{
    name: string;
    kind: string;
    type?: string;
    value?: string;
  }>;
  imports: Array<{
    names: string[];
    from: string;
  }>;
}

export interface TokenAnalysis {
  totalFiles: number;
  directories: Record<string, number>;
  filesByType: Record<string, number>;
  tokens: TokenInfo[];
  timestamp: string;
}

export function analyzeTokens(): TokenAnalysis {
  const result: TokenAnalysis = {
    totalFiles: 0,
    directories: {},
    filesByType: {
      ts: 0,
      js: 0,
      svelte: 0,
      other: 0
    },
    tokens: [],
    timestamp: new Date().toISOString()
  };

  if (!fs.existsSync(TOKENS_DIR)) {
    console.warn(`[analyze-tokens] Directory not found: ${TOKENS_DIR}`);
    return result;
  }

  const entries = fs.readdirSync(TOKENS_DIR, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(TOKENS_DIR, entry.name);

    if (entry.isDirectory()) {
      const files = analyzeDirectory(fullPath, 'token');
      const count = files.length;
      result.directories[entry.name] = count;
      result.totalFiles += count;
      
      // Р”РѕР±Р°РІР»СЏРµРј С‚РѕРєРµРЅС‹ СЃ РєР°С‚РµРіРѕСЂРёРµР№
      files.forEach(file => {
        if (file.exports.length > 0) {
          result.tokens.push({
            name: file.name,
            file: file.path,
            category: entry.name,
            exports: file.exports.map(e => ({
              name: e.name,
              kind: e.kind,
              type: e.type,
              value: e.value
            })),
            imports: file.imports
          });
        }
      });
      
      // РЎС‡РёС‚Р°РµРј РїРѕ СЂР°СЃС€РёСЂРµРЅРёСЏРј
      files.forEach(file => {
        const ext = path.extname(file.path).slice(1).toLowerCase();
        if (ext in result.filesByType) {
          result.filesByType[ext]++;
        } else {
          result.filesByType.other++;
        }
      });
    } else if (entry.isFile()) {
      result.totalFiles++;
      const ext = path.extname(entry.name).slice(1).toLowerCase();
      if (ext in result.filesByType) {
        result.filesByType[ext]++;
      } else {
        result.filesByType.other++;
      }
    }
  }

  return result;
}

export function saveTokensAnalysis(analysis: TokenAnalysis): void {
  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  // РЎРѕС…СЂР°РЅСЏРµРј РїРѕР»РЅС‹Р№ РѕС‚С‡С‘С‚
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(analysis, null, 2), 'utf-8');
  console.log(`[analyze-tokens] Saved to: ${OUTPUT_FILE}`);
  
  // РЎРѕС…СЂР°РЅСЏРµРј СѓРїСЂРѕС‰С‘РЅРЅСѓСЋ РІРµСЂСЃРёСЋ РґР»СЏ РєРѕРјРїРѕРЅРµРЅС‚РѕРІ
  const simplePath = OUTPUT_FILE.replace('.json', '-simple.json');
  const simple = {
    total: analysis.tokens.length,
    categories: Object.keys(analysis.directories),
    tokens: analysis.tokens.map(t => ({
      name: t.name,
      category: t.category,
      exports: t.exports.map(e => e.name)
    }))
  };
  fs.writeFileSync(simplePath, JSON.stringify(simple, null, 2), 'utf-8');
  console.log(`[analyze-tokens] Saved simple to: ${simplePath}`);
}

// РџСЂРѕРІРµСЂРєР° РЅР° РїСЂСЏРјРѕР№ Р·Р°РїСѓСЃРє
const isMain = import.meta.url.endsWith(process.argv[1] || '');
if (isMain || process.argv[1]?.endsWith('analyze-tokens.ts')) {
  const analysis = analyzeTokens();
  saveTokensAnalysis(analysis);
  console.log('[analyze-tokens] Analysis complete:', {
    total: analysis.totalFiles,
    tokens: analysis.tokens.length,
    exports: analysis.tokens.reduce((sum, t) => sum + t.exports.length, 0)
  });
}



