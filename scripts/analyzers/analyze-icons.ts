import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import type { FileInfo } from './parser.js';
import { analyzeDirectory } from './parser.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '../..');
const SVG_DIR = path.join(ROOT_DIR, 'src/lib/svg');
const OUTPUT_FILE = path.join(ROOT_DIR, 'src/lib/json/core/icons.json');

export interface IconInfo extends FileInfo {
  category: string;
}

export interface IconAnalysis {
  totalFiles: number;
  directories: Record<string, number>;
  filesByType: Record<string, number>;
  icons: IconInfo[];
  timestamp: string;
}

export function analyzeIcons(): IconAnalysis {
  const result: IconAnalysis = {
    totalFiles: 0,
    directories: {},
    filesByType: {
      ts: 0,
      js: 0,
      svelte: 0,
      svg: 0,
      other: 0
    },
    icons: [],
    timestamp: new Date().toISOString()
  };

  if (!fs.existsSync(SVG_DIR)) {
    console.warn(`[analyze-icons] Directory not found: ${SVG_DIR}`);
    return result;
  }

  const entries = fs.readdirSync(SVG_DIR, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(SVG_DIR, entry.name);

    if (entry.isDirectory()) {
      const files = analyzeDirectory(fullPath, 'icon', ['.ts', '.js', '.svelte', '.svg']);
      const count = files.length;
      result.directories[entry.name] = count;
      result.totalFiles += count;
      
      files.forEach(file => {
        result.icons.push({
          ...file,
          category: entry.name
        });
      });
      
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

export function saveIconsAnalysis(analysis: IconAnalysis): void {
  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(analysis, null, 2), 'utf-8');
  console.log(`[analyze-icons] Saved to: ${OUTPUT_FILE}`);
  
  const simplePath = OUTPUT_FILE.replace('.json', '-simple.json');
  const simple = {
    total: analysis.totalFiles,
    categories: Object.keys(analysis.directories),
    icons: analysis.icons.map(i => ({
      name: i.name,
      category: i.category,
      exports: i.exports
    }))
  };
  fs.writeFileSync(simplePath, JSON.stringify(simple, null, 2), 'utf-8');
  console.log(`[analyze-icons] Saved simple to: ${simplePath}`);
}

const isMain = import.meta.url.endsWith(process.argv[1] || '');
if (isMain || process.argv[1]?.endsWith('analyze-icons.ts')) {
  const analysis = analyzeIcons();
  saveIconsAnalysis(analysis);
  console.log('[analyze-icons] Analysis complete:', {
    total: analysis.totalFiles,
    icons: analysis.icons.length
  });
}



