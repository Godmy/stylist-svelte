#!/usr/bin/env node
/**
 * SVG Registry Generator - генерирует const и type enum для иконок по доменам
 *
 * Использование:
 *   npx tsx scripts/svg/index.ts
 *
 * Для каждого домена в src/lib/{domain}/data/svg/
 * создаёт:
 *   - {domain}/const/enum/icon/index.ts
 *   - {domain}/type/enum/icon/index.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '../..');
const LIB_DIR = path.resolve(ROOT_DIR, 'src/lib');

/**
 * Получить все домены в src/lib (папки, содержащие data/svg)
 */
function getDomainsWithSvg(): string[] {
  const entries = fs.readdirSync(LIB_DIR, { withFileTypes: true });
  const domains: string[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name === 'json') continue;

    const svgDir = path.join(LIB_DIR, entry.name, 'data', 'svg');
    if (fs.existsSync(svgDir)) {
      domains.push(entry.name);
    }
  }

  return domains.sort();
}

/**
 * Получить список SVG файлов из директории (имена без расширения)
 */
function getSvgNames(svgDir: string): string[] {
  if (!fs.existsSync(svgDir)) return [];

  return fs
    .readdirSync(svgDir)
    .filter((file) => file.endsWith('.svg'))
    .map((file) => file.replace(/\.svg$/, ''))
    .sort();
}

/**
 * Конвертировать имя домена в UPPER_SNAKE_CASE
 * information -> INFORMATION
 */
function toDomainUpper(domain: string): string {
  return domain.replace(/([a-z])([A-Z])/g, '$1_$2').toUpperCase();
}

/**
 * Конвертировать имя домена в PascalCase
 * information -> Information
 */
function toDomainPascal(domain: string): string {
  return domain.charAt(0).toUpperCase() + domain.slice(1);
}

/**
 * Сгенерировать const/enum/icon/index.ts
 */
function generateConstEnum(domain: string, iconNames: string[]): string {
  const constName = `TOKEN_${toDomainUpper(domain)}_ICON`;
  const items = iconNames.map((name) => `\t'${name}'`).join(',\n');

  return `export const ${constName} = [
${items}
] as const;
`;
}

/**
 * Сгенерировать type/enum/icon/index.ts
 */
function generateTypeEnum(domain: string): string {
  const constName = `TOKEN_${toDomainUpper(domain)}_ICON`;
  const typeName = `Token${toDomainPascal(domain)}Icon`;
  const importPath = `$stylist/${domain}/const/enum/icon`;

  return `import { ${constName} } from '${importPath}';

export type ${typeName} = (typeof ${constName})[number];
`;
}


/**
 * Основная функция
 */
async function main(): Promise<void> {
  console.log('='.repeat(60));
  console.log('[svg-registry] Generating icon enums per domain...');
  console.log('='.repeat(60));

  const domains = getDomainsWithSvg();

  if (domains.length === 0) {
    console.log('[svg-registry] No domains with data/svg found.');
    return;
  }

  console.log(`\nFound ${domains.length} domain(s) with data/svg:`);
  for (const domain of domains) {
    console.log(`  - ${domain}`);
  }

  let totalIcons = 0;

  for (const domain of domains) {
    const svgDir = path.join(LIB_DIR, domain, 'data', 'svg');
    const iconNames = getSvgNames(svgDir);
    totalIcons += iconNames.length;

    // 1. const/enum/icon/index.ts
    const constDir = path.join(LIB_DIR, domain, 'const', 'enum', 'icon');
    fs.mkdirSync(constDir, { recursive: true });
    const constPath = path.join(constDir, 'index.ts');
    fs.writeFileSync(constPath, generateConstEnum(domain, iconNames), 'utf-8');
    console.log(`  [const] ${domain} -> ${constPath}`);

    // 2. type/enum/icon/index.ts
    const typeDir = path.join(LIB_DIR, domain, 'type', 'enum', 'icon');
    fs.mkdirSync(typeDir, { recursive: true });
    const typePath = path.join(typeDir, 'index.ts');
    fs.writeFileSync(typePath, generateTypeEnum(domain), 'utf-8');
    console.log(`  [type ] ${domain} -> ${typePath}`);

    // Удаляем data/svg/index.ts если есть
    const svgIndexPath = path.join(svgDir, 'index.ts');
    if (fs.existsSync(svgIndexPath)) {
      fs.unlinkSync(svgIndexPath);
      console.log(`  [del  ] removed ${svgIndexPath}`);
    }

    // Удаляем старый icon-registry.ts если есть
    const oldRegistry = path.join(svgDir, 'icon-registry.ts');
    if (fs.existsSync(oldRegistry)) {
      fs.unlinkSync(oldRegistry);
      console.log(`  [del  ] removed ${oldRegistry}`);
    }

    console.log('');
  }

  console.log('='.repeat(60));
  console.log(`[svg-registry] Done! Total: ${totalIcons} icon(s) across ${domains.length} domain(s)`);
  console.log('='.repeat(60));
}

main().catch(console.error);

export { main as runSvgRegistryGenerator };
