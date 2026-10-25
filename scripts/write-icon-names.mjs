// Regenerates TokenIconName from the icon files: run after adding or removing
// modules/design-system/svg/data/icon/<name>/index.svg.
// Usage (from stylist-svelte): node scripts/write-icon-names.mjs
import { existsSync, readdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const svg = new URL('../modules/design-system/svg/', import.meta.url);
const iconDirectory = fileURLToPath(new URL('data/icon/', svg));
const target = fileURLToPath(new URL('type/alias/icon-name/index.ts', svg));

const names = readdirSync(iconDirectory, { withFileTypes: true })
	.filter((entry) => entry.isDirectory() && existsSync(`${iconDirectory}/${entry.name}/index.svg`))
	.map((entry) => entry.name)
	.sort();
const invalid = names.filter((name) => !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(name));
if (invalid.length) {
	console.error(`Icon folder names must be kebab-case: ${invalid.join(', ')}`);
	process.exit(1);
}

writeFileSync(
	target,
	'/** Name of an icon file in `svg/data/icon/<name>/index.svg`; `svg/test/unit/icon-name` keeps it in sync. */\n' +
		'export type TokenIconName =\n' +
		names.map((name) => `\t| '${name}'`).join('\n') +
		';\n'
);
console.log(`TokenIconName: ${names.length} icons → ${target}`);
