import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import type { FileInfo, PropInfo } from './parser.js';
import { analyzeDirectory } from './parser.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '../..');
const COMPONENTS_DIR = path.join(ROOT_DIR, 'src/lib/components');
const OUTPUT_FILE = path.join(ROOT_DIR, 'src/lib/json/core/components.json');

export interface ComponentInfo extends FileInfo {
  group: string;
  props: PropInfo[];
}

export interface ComponentAnalysis {
  totalFiles: number;
  directories: Record<string, number>;
  filesByType: Record<string, number>;
  components: ComponentInfo[];
  timestamp: string;
}

export function analyzeComponents(): ComponentAnalysis {
  const result: ComponentAnalysis = {
    totalFiles: 0,
    directories: {},
    filesByType: {
      ts: 0,
      js: 0,
      svelte: 0,
      other: 0
    },
    components: [],
    timestamp: new Date().toISOString()
  };

  if (!fs.existsSync(COMPONENTS_DIR)) {
    console.warn(`[analyze-components] Directory not found: ${COMPONENTS_DIR}`);
    return result;
  }

  const entries = fs.readdirSync(COMPONENTS_DIR, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(COMPONENTS_DIR, entry.name);

    if (entry.isDirectory()) {
      const files = analyzeDirectory(fullPath, 'component', ['.svelte', '.ts', '.js']);
      const count = files.length;
      result.directories[entry.name] = count;
      result.totalFiles += count;
      
      // Р¤РёР»СЊС‚СЂСѓРµРј С‚РѕР»СЊРєРѕ Svelte РєРѕРјРїРѕРЅРµРЅС‚С‹ Рё РёС… С„Р°Р№Р»С‹
      const svelteFiles = files.filter(f => f.path.endsWith('.svelte') || f.path.endsWith('.svelte.ts'));
      
      svelteFiles.forEach(file => {
        result.components.push({
          ...file,
          group: entry.name,
          props: file.props || []
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

export function saveComponentsAnalysis(analysis: ComponentAnalysis): void {
  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(analysis, null, 2), 'utf-8');
  console.log(`[analyze-components] Saved to: ${OUTPUT_FILE}`);
  
  const simplePath = OUTPUT_FILE.replace('.json', '-simple.json');
  const simple = {
    total: analysis.totalFiles,
    groups: Object.keys(analysis.directories),
    components: analysis.components.map(c => ({
      name: c.name,
      group: c.group,
      props: c.props.map(p => ({
        name: p.name,
        type: p.type,
        required: p.required
      }))
    }))
  };
  fs.writeFileSync(simplePath, JSON.stringify(simple, null, 2), 'utf-8');
  console.log(`[analyze-components] Saved simple to: ${simplePath}`);
}

const isMain = import.meta.url.endsWith(process.argv[1] || '');
if (isMain || process.argv[1]?.endsWith('analyze-components.ts')) {
  const analysis = analyzeComponents();
  saveComponentsAnalysis(analysis);
  console.log('[analyze-components] Analysis complete:', {
    total: analysis.totalFiles,
    components: analysis.components.length
  });
}



