import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import type { FileInfo } from './parser.js';
import { analyzeDirectory } from './parser.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '../..');
const CONTRACTS_DIR = path.join(ROOT_DIR, 'src/lib/design-system/contracts');
const OUTPUT_FILE = path.join(ROOT_DIR, 'src/lib/json/core/contracts.json');

export interface ContractInfo {
  name: string;
  file: string;
  category: string;
  exports: Array<{
    name: string;
    kind: string;
    type?: string;
  }>;
  imports: Array<{
    names: string[];
    from: string;
  }>;
}

export interface ContractAnalysis {
  totalFiles: number;
  directories: Record<string, number>;
  filesByType: Record<string, number>;
  contracts: ContractInfo[];
  timestamp: string;
}

export function analyzeContracts(): ContractAnalysis {
  const result: ContractAnalysis = {
    totalFiles: 0,
    directories: {},
    filesByType: {
      ts: 0,
      js: 0,
      svelte: 0,
      other: 0
    },
    contracts: [],
    timestamp: new Date().toISOString()
  };

  if (!fs.existsSync(CONTRACTS_DIR)) {
    console.warn(`[analyze-contracts] Directory not found: ${CONTRACTS_DIR}`);
    return result;
  }

  const entries = fs.readdirSync(CONTRACTS_DIR, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(CONTRACTS_DIR, entry.name);

    if (entry.isDirectory()) {
      const files = analyzeDirectory(fullPath, 'contract');
      const count = files.length;
      result.directories[entry.name] = count;
      result.totalFiles += count;
      
      files.forEach(file => {
        if (file.exports.length > 0) {
          result.contracts.push({
            name: file.name,
            file: file.path,
            category: entry.name,
            exports: file.exports.map(e => ({
              name: e.name,
              kind: e.kind,
              type: e.type
            })),
            imports: file.imports
          });
        }
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

export function saveContractsAnalysis(analysis: ContractAnalysis): void {
  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(analysis, null, 2), 'utf-8');
  console.log(`[analyze-contracts] Saved to: ${OUTPUT_FILE}`);
  
  const simplePath = OUTPUT_FILE.replace('.json', '-simple.json');
  const simple = {
    total: analysis.contracts.length,
    categories: Object.keys(analysis.directories),
    contracts: analysis.contracts.map(c => ({
      name: c.name,
      category: c.category,
      exports: c.exports.map(e => e.name)
    }))
  };
  fs.writeFileSync(simplePath, JSON.stringify(simple, null, 2), 'utf-8');
  console.log(`[analyze-contracts] Saved simple to: ${simplePath}`);
}

const isMain = import.meta.url.endsWith(process.argv[1] || '');
if (isMain || process.argv[1]?.endsWith('analyze-contracts.ts')) {
  const analysis = analyzeContracts();
  saveContractsAnalysis(analysis);
  console.log('[analyze-contracts] Analysis complete:', {
    total: analysis.totalFiles,
    contracts: analysis.contracts.length,
    exports: analysis.contracts.reduce((sum, c) => sum + c.exports.length, 0)
  });
}



