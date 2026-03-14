#!/usr/bin/env node
/**
 * SVG Registry Generator - РЎРѓР С•Р В·Р Т‘Р В°РЎвЂРЎвЂљ РЎР‚Р ВµР ВµРЎРѓРЎвЂљРЎР‚ Р Р†РЎРѓР ВµРЎвЂ¦ SVG Р С‘Р С”Р С•Р Р…Р С•Р С”
 *
 * Р ВРЎРѓР С—Р С•Р В»РЎРЉР В·Р С•Р Р†Р В°Р Р…Р С‘Р Вµ:
 *   npx tsx scripts/svg/generate-registry/generate.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '../../..');
const SVG_DIR = path.join(ROOT_DIR, 'src/lib/svg');
const JSON_DIR = path.join(ROOT_DIR, 'src/lib/json/core');
const ICONS_DIR = path.join(ROOT_DIR, 'src/lib/svg/icons');

/**
 * Р С™Р В°РЎвЂљР ВµР С–Р С•РЎР‚Р С‘РЎРЏ Р С‘Р С”Р С•Р Р…Р С”Р С‘
 */
type IconCategory = 'architecture' | 'information' | 'interaction';

/**
 * Р ВР Р…РЎвЂљР ВµРЎР‚РЎвЂћР ВµР в„–РЎРѓ Р В·Р В°Р С—Р С‘РЎРѓР С‘ РЎР‚Р ВµР ВµРЎРѓРЎвЂљРЎР‚Р В° Р С‘Р С”Р С•Р Р…Р С•Р С”
 */
interface IconEntry {
  name: string;
  category: IconCategory;
  path: string;
  fullPath: string;
}

/**
 * Р ВР Р…РЎвЂљР ВµРЎР‚РЎвЂћР ВµР в„–РЎРѓ РЎР‚Р ВµР ВµРЎРѓРЎвЂљРЎР‚Р В° Р С‘Р С”Р С•Р Р…Р С•Р С”
 */
interface IconRegistry {
  $schema: string;
  generated: string;
  total: number;
  categories: {
    architecture: IconEntry[];
    information: IconEntry[];
    interaction: IconEntry[];
  };
  byName: Record<string, IconEntry>;
}

/**
 * Р РЋР С”Р В°Р Р…Р С‘РЎР‚РЎС“Р ВµРЎвЂљ Р С—Р В°Р С—Р С”РЎС“ РЎРѓ Р С‘Р С”Р С•Р Р…Р С”Р В°Р СР С‘ Р С‘ Р Р†Р С•Р В·Р Р†РЎР‚Р В°РЎвЂ°Р В°Р ВµРЎвЂљ РЎРѓР С—Р С‘РЎРѓР С•Р С” Р С‘Р СРЎвЂР Р… РЎвЂћР В°Р в„–Р В»Р С•Р Р†
 */
function scanIconFolder(folderPath: string): string[] {
  if (!fs.existsSync(folderPath)) {
    return [];
  }
  
  const files = fs.readdirSync(folderPath);
  return files
    .filter(file => file.endsWith('.svg'))
    .map(file => file.replace('.svg', ''))
    .sort();
}

/**
 * Р РЋР С•Р В·Р Т‘Р В°РЎвЂРЎвЂљ Р С•РЎвЂљР Р…Р С•РЎРѓР С‘РЎвЂљР ВµР В»РЎРЉР Р…РЎвЂ№Р в„– Р С—РЎС“РЎвЂљРЎРЉ Р С” Р С‘Р С”Р С•Р Р…Р С”Р Вµ
 */
function createIconPath(name: string, category: IconCategory): string {
  return `./${category}/${name}.svg`;
}

/**
 * Р РЋР С•Р В·Р Т‘Р В°РЎвЂРЎвЂљ Р С—Р С•Р В»Р Р…РЎвЂ№Р в„– Р С—РЎС“РЎвЂљРЎРЉ Р С” Р С‘Р С”Р С•Р Р…Р С”Р Вµ
 */
function createFullIconPath(name: string, category: IconCategory): string {
  return `stylist-svelte/src/lib/svg/${category}/${name}.svg`;
}

/**
 * Р вЂњР ВµР Р…Р ВµРЎР‚Р С‘РЎР‚РЎС“Р ВµРЎвЂљ РЎР‚Р ВµР ВµРЎРѓРЎвЂљРЎР‚ Р С‘Р С”Р С•Р Р…Р С•Р С”
 */
function generateIconRegistry(): IconRegistry {
  const categories: IconCategory[] = ['architecture', 'information', 'interaction'];
  
  const registry: IconRegistry = {
    $schema: 'https://stylist-svelte.dev/schema/icon-registry.json',
    generated: new Date().toISOString(),
    total: 0,
    categories: {
      architecture: [],
      information: [],
      interaction: []
    },
    byName: {}
  };

  for (const category of categories) {
    const folderPath = path.join(SVG_DIR, category);
    const iconNames = scanIconFolder(folderPath);

    for (const name of iconNames) {
      const entry: IconEntry = {
        name,
        category,
        path: createIconPath(name, category),
        fullPath: createFullIconPath(name, category)
      };

      registry.categories[category].push(entry);
      registry.byName[name] = entry;
    }
  }

  registry.total = Object.values(registry.byName).length;

  return registry;
}

/**
 * Р РЋР С•РЎвЂ¦РЎР‚Р В°Р Р…РЎРЏР ВµРЎвЂљ РЎР‚Р ВµР ВµРЎРѓРЎвЂљРЎР‚ Р С‘Р С”Р С•Р Р…Р С•Р С” Р Р† JSON РЎвЂћР В°Р в„–Р В»
 */
function saveIconRegistry(registry: IconRegistry): void {
  if (!fs.existsSync(JSON_DIR)) {
    fs.mkdirSync(JSON_DIR, { recursive: true });
  }

  const registryPath = path.join(JSON_DIR, 'icon-registry.json');
  fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2), 'utf-8');
  console.log(`[svg-registry] Icon registry saved to: ${registryPath}`);
}

/**
 * Р вЂњР ВµР Р…Р ВµРЎР‚Р С‘РЎР‚РЎС“Р ВµРЎвЂљ TypeScript РЎвЂћР В°Р в„–Р В» РЎРѓ Р С”Р С•Р Р…РЎРѓРЎвЂљР В°Р Р…РЎвЂљР В°Р СР С‘ Р С‘Р С”Р С•Р Р…Р С•Р С”
 */
function generateTypeScriptRegistry(registry: IconRegistry): void {
  if (!fs.existsSync(ICONS_DIR)) {
    fs.mkdirSync(ICONS_DIR, { recursive: true });
  }

  const tsPath = path.join(ICONS_DIR, 'icon-registry.ts');
  
  let content = `/**
 * Auto-generated icon registry
 * Generated at: ${new Date().toISOString()}
 * Do not edit manually - run 'npx tsx scripts/svg/generate-registry/generate.ts' to regenerate
 */

export interface IconEntry {
  name: string;
  category: 'architecture' | 'information' | 'interaction';
  path: string;
  fullPath: string;
}

export const ICON_REGISTRY = ${JSON.stringify(registry, null, 2)} as const;

export type IconCategory = 'architecture' | 'information' | 'interaction';

export type IconName = ${Object.keys(registry.byName).map(name => `'${name}'`).join(' | ')};

export const ICONS_BY_CATEGORY = {
  architecture: ${JSON.stringify(registry.categories.architecture.map(i => i.name), null, 2)},
  information: ${JSON.stringify(registry.categories.information.map(i => i.name), null, 2)},
  interaction: ${JSON.stringify(registry.categories.interaction.map(i => i.name), null, 2)}
} as const;

export const ICONS_TOTAL = ${registry.total};

export function getIconPath(name: IconName): string {
  return ICON_REGISTRY.byName[name]?.path ?? '';
}

export function getIconCategory(name: IconName): IconCategory | undefined {
  return ICON_REGISTRY.byName[name]?.category;
}

export function listIconsByCategory(category: IconCategory): string[] {
  return ICON_REGISTRY.categories[category].map(i => i.name);
}

export function hasIcon(name: string): name is IconName {
  return name in ICON_REGISTRY.byName;
}
`;

  fs.writeFileSync(tsPath, content, 'utf-8');
  console.log(`[svg-registry] TypeScript registry saved to: ${tsPath}`);
}

/**
 * Р вЂ™РЎвЂ№Р Р†Р С•Р Т‘Р С‘РЎвЂљ РЎРѓРЎвЂљР В°РЎвЂљР С‘РЎРѓРЎвЂљР С‘Р С”РЎС“ РЎР‚Р ВµР ВµРЎРѓРЎвЂљРЎР‚Р В°
 */
function printRegistryStats(registry: IconRegistry): void {
  console.log('\n[svg-registry] Icon Registry Statistics:');
  console.log('='.repeat(50));
  console.log(`Total icons: ${registry.total}`);
  console.log(`  - Architecture: ${registry.categories.architecture.length}`);
  console.log(`  - Information: ${registry.categories.information.length}`);
  console.log(`  - Interaction: ${registry.categories.interaction.length}`);
  console.log('='.repeat(50));
}

/**
 * Р вЂњР В»Р В°Р Р†Р Р…Р В°РЎРЏ РЎвЂћРЎС“Р Р…Р С”РЎвЂ Р С‘РЎРЏ
 */
async function main(): Promise<void> {
  console.log('='.repeat(50));
  console.log('[svg-registry] Generating icon registry...');
  console.log('='.repeat(50));

  const registry = generateIconRegistry();
  saveIconRegistry(registry);
  generateTypeScriptRegistry(registry);
  printRegistryStats(registry);

  console.log('\n[svg-registry] Done!');
}

main().catch(console.error);

export { main as runSvgRegistryGenerator };

