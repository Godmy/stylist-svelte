#!/usr/bin/env node
/**
 * SVG Registry Generator - СЃРѕР·РґР°С‘С‚ СЂРµРµСЃС‚СЂ РІСЃРµС… SVG РёРєРѕРЅРѕРє
 *
 * РСЃРїРѕР»СЊР·РѕРІР°РЅРёРµ:
 *   npx tsx scripts/svg/generate-registry.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '../..');
const SVG_DIR = path.join(ROOT_DIR, 'src/lib/svg');
const JSON_DIR = path.join(ROOT_DIR, 'src/lib/json/core');
const ICONS_DIR = path.join(ROOT_DIR, 'src/lib/svg/icons');

/**
 * РљР°С‚РµРіРѕСЂРёСЏ РёРєРѕРЅРєРё
 */
type IconCategory = 'architecture' | 'information' | 'interaction';

/**
 * РРЅС‚РµСЂС„РµР№СЃ Р·Р°РїРёСЃРё СЂРµРµСЃС‚СЂР° РёРєРѕРЅРѕРє
 */
interface IconEntry {
  name: string;
  category: IconCategory;
  path: string;
  fullPath: string;
}

/**
 * РРЅС‚РµСЂС„РµР№СЃ СЂРµРµСЃС‚СЂР° РёРєРѕРЅРѕРє
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
 * РЎРєР°РЅРёСЂСѓРµС‚ РїР°РїРєСѓ СЃ РёРєРѕРЅРєР°РјРё Рё РІРѕР·РІСЂР°С‰Р°РµС‚ СЃРїРёСЃРѕРє РёРјС‘РЅ С„Р°Р№Р»РѕРІ
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
 * РЎРѕР·РґР°С‘С‚ РѕС‚РЅРѕСЃРёС‚РµР»СЊРЅС‹Р№ РїСѓС‚СЊ Рє РёРєРѕРЅРєРµ
 */
function createIconPath(name: string, category: IconCategory): string {
  return `./${category}/${name}.svg`;
}

/**
 * РЎРѕР·РґР°С‘С‚ РїРѕР»РЅС‹Р№ РїСѓС‚СЊ Рє РёРєРѕРЅРєРµ
 */
function createFullIconPath(name: string, category: IconCategory): string {
  return `stylist-svelte/src/lib/svg/${category}/${name}.svg`;
}

/**
 * Р“РµРЅРµСЂРёСЂСѓРµС‚ СЂРµРµСЃС‚СЂ РёРєРѕРЅРѕРє
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
 * РЎРѕС…СЂР°РЅСЏРµС‚ СЂРµРµСЃС‚СЂ РёРєРѕРЅРѕРє РІ JSON С„Р°Р№Р»
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
 * Р“РµРЅРµСЂРёСЂСѓРµС‚ TypeScript С„Р°Р№Р» СЃ РєРѕРЅСЃС‚Р°РЅС‚Р°РјРё РёРєРѕРЅРѕРє
 */
function generateTypeScriptRegistry(registry: IconRegistry): void {
  if (!fs.existsSync(ICONS_DIR)) {
    fs.mkdirSync(ICONS_DIR, { recursive: true });
  }

  const tsPath = path.join(ICONS_DIR, 'icon-registry.ts');
  
  let content = `/**
 * Auto-generated icon registry
 * Generated at: ${new Date().toISOString()}
 * Do not edit manually - run 'npx tsx scripts/svg/generate-registry.ts' to regenerate
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
 * Р’С‹РІРѕРґРёС‚ СЃС‚Р°С‚РёСЃС‚РёРєСѓ СЂРµРµСЃС‚СЂР°
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
 * Р“Р»Р°РІРЅР°СЏ С„СѓРЅРєС†РёСЏ
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

