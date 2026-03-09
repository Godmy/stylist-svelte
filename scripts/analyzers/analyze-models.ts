import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import type { FileInfo } from './parser.js';
import { analyzeDirectory } from './parser.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '../..');
const MODELS_DIR = path.join(ROOT_DIR, 'src/lib/design-system/models');
const OUTPUT_FILE = path.join(ROOT_DIR, 'src/lib/json/core/models.json');

export interface ModelInfo extends FileInfo {
  category: string;
}

export interface ModelAnalysis {
  totalFiles: number;
  directories: Record<string, number>;
  filesByType: Record<string, number>;
  models: ModelInfo[];
  timestamp: string;
}

export function analyzeModels(): ModelAnalysis {
  const result: ModelAnalysis = {
    totalFiles: 0,
    directories: {},
    filesByType: {
      ts: 0,
      js: 0,
      svelte: 0,
      other: 0
    },
    models: [],
    timestamp: new Date().toISOString()
  };

  if (!fs.existsSync(MODELS_DIR)) {
    console.warn(`[analyze-models] Directory not found: ${MODELS_DIR}`);
    return result;
  }

  const entries = fs.readdirSync(MODELS_DIR, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(MODELS_DIR, entry.name);

    if (entry.isDirectory()) {
      const files = analyzeDirectory(fullPath, 'model');
      const count = files.length;
      result.directories[entry.name] = count;
      result.totalFiles += count;
      
      files.forEach(file => {
        result.models.push({
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

export function saveModelsAnalysis(analysis: ModelAnalysis): void {
  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(analysis, null, 2), 'utf-8');
  console.log(`[analyze-models] Saved to: ${OUTPUT_FILE}`);
  
  const simplePath = OUTPUT_FILE.replace('.json', '-simple.json');
  const simple = {
    total: analysis.totalFiles,
    categories: Object.keys(analysis.directories),
    models: analysis.models.map(m => ({
      name: m.name,
      category: m.category,
      exports: m.exports
    }))
  };
  fs.writeFileSync(simplePath, JSON.stringify(simple, null, 2), 'utf-8');
  console.log(`[analyze-models] Saved simple to: ${simplePath}`);
}

const isMain = import.meta.url.endsWith(process.argv[1] || '');
if (isMain || process.argv[1]?.endsWith('analyze-models.ts')) {
  const analysis = analyzeModels();
  saveModelsAnalysis(analysis);
  console.log('[analyze-models] Analysis complete:', {
    total: analysis.totalFiles,
    models: analysis.models.length
  });
}



