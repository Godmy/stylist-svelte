import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { domainForEach } from '../for-each';

const SCRIPT_DIRECTORY = dirname(fileURLToPath(import.meta.url));
const DOMAIN_DIRECTORY = join(SCRIPT_DIRECTORY, '..', '..', '..');

export async function extractMenuIcons(): Promise<void> {
	const icons: Array<{ name: string; svg: string }> = [];

	await domainForEach(({ domainName, domainPath }) => {
		const svgPath = join(domainPath, 'data', 'svg', `${domainName}.svg`);
		if (!existsSync(svgPath)) return;

		const svg = readFileSync(svgPath, 'utf-8')
			.trim()
			.replace(/\r\n/g, '\n')
			.replace(/\n\s*/g, ' ')
			.replace(/>\s+</g, '><');

		icons.push({ name: domainName, svg });
	});

	const outputDirectory = join(DOMAIN_DIRECTORY, 'data', 'icon');
	const outputFile = join(outputDirectory, 'index.ts');

	const entries = icons
		.map(({ name, svg }) => `\t{ name: ${JSON.stringify(name)}, svg: ${JSON.stringify(svg)} }`)
		.join(',\n');

	const content = `/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */\nexport const DOMAIN_MENU_ICONS = [\n${entries}\n] as const;\n`;

	mkdirSync(outputDirectory, { recursive: true });
	writeFileSync(outputFile, content, 'utf-8');
}
