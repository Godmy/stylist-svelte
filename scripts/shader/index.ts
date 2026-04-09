#!/usr/bin/env node
/**
 * Shader Registry Generator — сканирует src/lib/{domain}/data/shader/
 *
 * Для каждого домена и типа шейдера (vertex, fragment) создаёт:
 *   - {domain}/const/enum/shader-{type}/index.ts
 *   - {domain}/type/enum/shader-{type}/index.ts
 *
 * Использование:
 *   npx tsx scripts/shader/index.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '../..');
const LIB_DIR = path.resolve(ROOT_DIR, 'src/lib');

/**
 * Карта расширений → типы шейдеров (WebGL: только vertex + fragment)
 */
const SHADER_EXTENSIONS = ['.vert', '.frag'];

/**
 * Получить все домены в src/lib (папки, содержащие data/shader)
 */
function getDomainsWithShader(): string[] {
  const entries = fs.readdirSync(LIB_DIR, { withFileTypes: true });
  const domains: string[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name === 'json') continue;

    const shaderDir = path.join(LIB_DIR, entry.name, 'data', 'shader');
    if (fs.existsSync(shaderDir)) {
      domains.push(entry.name);
    }
  }

  return domains.sort();
}

/**
 * Получить подкаталоги типов шейдеров внутри домена
 */
function getShaderTypes(shaderDataDir: string): string[] {
  if (!fs.existsSync(shaderDataDir)) return [];

  return fs
    .readdirSync(shaderDataDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

/**
 * Получить файлы шейдеров из директории
 */
function getShaderFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => SHADER_EXTENSIONS.some((ext) => file.endsWith(ext)))
    .sort();
}

/**
 * Конвертировать имя домена в UPPER_SNAKE_CASE
 * architecture -> ARCHITECTURE
 */
function toDomainUpper(domain: string): string {
  return domain.replace(/([a-z])([A-Z])/g, '$1_$2').toUpperCase();
}

/**
 * Конвертировать имя домена в PascalCase
 * architecture -> Architecture
 */
function toDomainPascal(domain: string): string {
  return domain.charAt(0).toUpperCase() + domain.slice(1);
}

/**
 * Конвертировать тип шейдера в PascalCase
 * vertex -> Vertex
 */
function toTypePascal(typeName: string): string {
  return typeName.charAt(0).toUpperCase() + typeName.slice(1);
}

/**
 * Сгенерировать const/enum/shader-{type}/index.ts
 * TOKEN_{DOMAIN}_SHADER_{TYPE}
 */
function generateConstEnum(domain: string, typeName: string, files: string[]): string {
  const domainUpper = toDomainUpper(domain);
  const constName = `TOKEN_${domainUpper}_SHADER_${typeName.toUpperCase()}`;
  const items = files.map((f) => `\t'${f}'`).join(',\n');

  return `export const ${constName} = [
${items}
] as const;
`;
}

/**
 * Сгенерировать type/enum/shader-{type}/index.ts
 * Token{Domain}Shader{Type}
 */
function generateTypeEnum(domain: string, typeName: string): string {
  const domainUpper = toDomainUpper(domain);
  const constName = `TOKEN_${domainUpper}_SHADER_${typeName.toUpperCase()}`;
  const typeNamePascal = `Token${toDomainPascal(domain)}Shader${toTypePascal(typeName)}`;
  const importPath = `$stylist/${domain}/const/enum/shader-${typeName}`;

  return `import { ${constName} } from '${importPath}';

export type ${typeNamePascal} = (typeof ${constName})[number];
`;
}

/**
 * Основная функция
 */
async function main(): Promise<void> {
  console.log('='.repeat(60));
  console.log('[shader-registry] Generating shader enums per domain...');
  console.log('='.repeat(60));

  const domains = getDomainsWithShader();

  if (domains.length === 0) {
    console.log('[shader-registry] No domains with data/shader found.');
    return;
  }

  console.log(`\nFound ${domains.length} domain(s) with data/shader:`);
  for (const domain of domains) {
    console.log(`  - ${domain}`);
  }

  let totalShaders = 0;

  for (const domain of domains) {
    const shaderDataDir = path.join(LIB_DIR, domain, 'data', 'shader');
    const shaderTypes = getShaderTypes(shaderDataDir);

    console.log(`\n  ${domain}: ${shaderTypes.length} type(s)`);

    for (const typeName of shaderTypes) {
      const typeDir = path.join(shaderDataDir, typeName);
      const files = getShaderFiles(typeDir);

      if (files.length === 0) {
        console.log(`    [skip] ${typeName}/ — no shader files`);
        continue;
      }

      totalShaders += files.length;

      console.log(`    ${typeName}/: ${files.length} file(s)`);
      for (const file of files) {
        console.log(`      - ${file}`);
      }

      // 1. const/enum/shader-{type}/index.ts
      const constDir = path.join(LIB_DIR, domain, 'const', 'enum', `shader-${typeName}`);
      fs.mkdirSync(constDir, { recursive: true });
      const constPath = path.join(constDir, 'index.ts');
      fs.writeFileSync(constPath, generateConstEnum(domain, typeName, files), 'utf-8');
      console.log(`    [const] ${constPath}`);

      // 2. type/enum/shader-{type}/index.ts
      const typeEnumDir = path.join(LIB_DIR, domain, 'type', 'enum', `shader-${typeName}`);
      fs.mkdirSync(typeEnumDir, { recursive: true });
      const typePath = path.join(typeEnumDir, 'index.ts');
      fs.writeFileSync(typePath, generateTypeEnum(domain, typeName), 'utf-8');
      console.log(`    [type ] ${typePath}`);
    }

    console.log('');
  }

  console.log('='.repeat(60));
  console.log(`[shader-registry] Done! Total: ${totalShaders} shader(s) across ${domains.length} domain(s)`);
  console.log('='.repeat(60));
}

main().catch(console.error);

export { main as runShaderRegistryGenerator };
