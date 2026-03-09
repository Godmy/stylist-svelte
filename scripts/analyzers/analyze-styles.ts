import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import type { FileInfo } from './parser.js';
import { analyzeDirectory } from './parser.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '../..');
const STYLES_DIR = path.join(ROOT_DIR, 'src/lib/design-system/styles');
const OUTPUT_FILE = path.join(ROOT_DIR, 'src/lib/json/core/styles.json');

export interface StyleInfo extends FileInfo {
  category: string;
}

export interface StyleAnalysis {
  totalFiles: number;
  directories: Record<string, number>;
  filesByType: Record<string, number>;
  styles: StyleInfo[];
  timestamp: string;
}

export function analyzeStyles(): StyleAnalysis {
  const result: StyleAnalysis = {
    totalFiles: 0,
    directories: {},
    filesByType: {
      ts: 0,
      js: 0,
      svelte: 0,
      other: 0
    },
    styles: [],
    timestamp: new Date().toISOString()
  };

  if (!fs.existsSync(STYLES_DIR)) {
    console.warn(`[analyze-styles] Directory not found: ${STYLES_DIR}`);
    return result;
  }

  const entries = fs.readdirSync(STYLES_DIR, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(STYLES_DIR, entry.name);

    if (entry.isDirectory()) {
      const files = analyzeDirectory(fullPath, 'style');
      const count = files.length;
      result.directories[entry.name] = count;
      result.totalFiles += count;
      
      files.forEach(file => {
        result.styles.push({
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

export function saveStylesAnalysis(analysis: StyleAnalysis): void {
  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(analysis, null, 2), 'utf-8');
  console.log(`[analyze-styles] Saved to: ${OUTPUT_FILE}`);
  
  const simplePath = OUTPUT_FILE.replace('.json', '-simple.json');
  const simple = {
    total: analysis.totalFiles,
    categories: Object.keys(analysis.directories),
    styles: analysis.styles.map(s => ({
      name: s.name,
      category: s.category,
      exports: s.exports
    }))
  };
  fs.writeFileSync(simplePath, JSON.stringify(simple, null, 2), 'utf-8');
  console.log(`[analyze-styles] Saved simple to: ${simplePath}`);
}

const isMain = import.meta.url.endsWith(process.argv[1] || '');
if (isMain || process.argv[1]?.endsWith('analyze-styles.ts')) {
  const analysis = analyzeStyles();
  saveStylesAnalysis(analysis);
  console.log('[analyze-styles] Analysis complete:', {
    total: analysis.totalFiles,
    styles: analysis.styles.length
  });
}



