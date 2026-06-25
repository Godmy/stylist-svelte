#!/usr/bin/env node
/**
 * SVG Registry Generator.
 *
 * Usage:
 *   npx tsx scripts/data/svg/index.ts
 *
 * Reads SVG icon files from src/lib/svg/data/icon/ and writes one const per icon:
 *   - svg/const/value/{icon-name}/index.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '../../..');
const LIB_DIR = path.resolve(ROOT_DIR, 'src/lib');
const ICON_DATA_DIR = path.join(LIB_DIR, 'svg', 'data', 'icon');
const ICON_VALUE_DIR = path.join(LIB_DIR, 'svg', 'const', 'value');
const ICON_REGISTRY_DIR = path.join(LIB_DIR, 'svg', 'const', 'record', 'icon-registry');
const GENERATED_MARKER = 'AUTO-GENERATED: svg icon value';

function getSvgEntries(svgDir: string): Array<{ name: string; svg: string }> {
	if (!fs.existsSync(svgDir)) return [];

	return fs
		.readdirSync(svgDir)
		.filter((file) => file.endsWith('.svg'))
		.sort()
		.map((file) => ({
			name: file.replace(/\.svg$/, ''),
			svg: fs.readFileSync(path.join(svgDir, file), 'utf-8').trim()
		}));
}

function escapeTemplateLiteral(value: string): string {
	return value.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function getIconExportName(iconName: string): string {
	const suffix = iconName
		.replace(/[^a-zA-Z0-9]+/g, '_')
		.replace(/^_+|_+$/g, '')
		.toUpperCase();

	return `ICON_${suffix || 'UNKNOWN'}`;
}

function generateIconValue(iconName: string, svg: string): string {
	return `/** ${GENERATED_MARKER} */
export const ${getIconExportName(iconName)} = \`
${escapeTemplateLiteral(svg)}
\` as const;
`;
}

function generateIconRegistry(iconNames: string[]): string {
	const items = iconNames
		.map((name) => `\t'${name}': ICON_VALUE.${getIconExportName(name)}`)
		.join(',\n');

	return `import * as ICON_VALUE from '$stylist/svg/const/value';

export const TOKEN_ICON_REGISTRY = {
${items}
} as const;
`;
}

function removeGeneratedIconValues(): void {
	if (!fs.existsSync(ICON_VALUE_DIR)) return;

	for (const entry of fs.readdirSync(ICON_VALUE_DIR, { withFileTypes: true })) {
		if (!entry.isDirectory()) continue;

		const valuePath = path.join(ICON_VALUE_DIR, entry.name, 'index.ts');
		if (!fs.existsSync(valuePath)) continue;

		const content = fs.readFileSync(valuePath, 'utf-8');
		if (content.includes(GENERATED_MARKER)) {
			fs.rmSync(path.join(ICON_VALUE_DIR, entry.name), { recursive: true, force: true });
		}
	}
}

async function main(): Promise<void> {
	console.log('='.repeat(60));
	console.log('[svg-icon-value] Generating svg icon values...');
	console.log('='.repeat(60));

	const svgEntries = getSvgEntries(ICON_DATA_DIR);

	if (svgEntries.length === 0) {
		console.log(`[svg-icon-value] No SVG icons found in ${ICON_DATA_DIR}.`);
		return;
	}

	console.log(`\nFound ${svgEntries.length} SVG icon(s) in ${ICON_DATA_DIR}.`);

	const registryEntries = new Map<string, string>();
	const duplicateIcons: string[] = [];

	for (const entry of svgEntries) {
		if (registryEntries.has(entry.name)) {
			duplicateIcons.push(entry.name);
			continue;
		}
		registryEntries.set(entry.name, entry.svg);
	}

	removeGeneratedIconValues();

	for (const [name, svg] of registryEntries.entries()) {
		const iconDir = path.join(ICON_VALUE_DIR, name);
		fs.mkdirSync(iconDir, { recursive: true });
		fs.writeFileSync(path.join(iconDir, 'index.ts'), generateIconValue(name, svg), 'utf-8');
	}

	console.log(`  [value] svg -> ${ICON_VALUE_DIR}`);

	fs.mkdirSync(ICON_REGISTRY_DIR, { recursive: true });
	fs.writeFileSync(
		path.join(ICON_REGISTRY_DIR, 'index.ts'),
		generateIconRegistry(Array.from(registryEntries.keys())),
		'utf-8'
	);

	console.log(`  [record] svg -> ${ICON_REGISTRY_DIR}`);

	if (duplicateIcons.length > 0) {
		console.log('\n[svg-icon-value] Duplicate icon names detected; keeping first file:');
		for (const iconName of duplicateIcons) {
			console.log(`  - ${iconName}`);
		}
	}

	console.log('='.repeat(60));
	console.log(`[svg-icon-value] Done! Total: ${svgEntries.length} icon(s)`);
	console.log('='.repeat(60));
}

main().catch(console.error);

export { main as runSvgRegistryGenerator };
