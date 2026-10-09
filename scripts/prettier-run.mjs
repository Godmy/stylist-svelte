import { closeSync, openSync, readdirSync, readSync, readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

/** Ignore file written next to .prettierignore: prettier resolves patterns relative to it. */
export const GENERATED_IGNORE = '.prettierignore.generated';

const MARKER = 'AUTO-GENERATED';
const SKIP_DIRS = new Set([
	'.git',
	'node_modules',
	'.svelte-kit',
	'.yarn',
	'dist',
	'.package-input',
	'.wrangler'
]);

/** Generated barrels (index.ts / index.full.ts carrying the indexer marker) in every
 * checked-out owner repository. The indexer owns their layout, and its stale check compares
 * them byte for byte, so prettier must never rewrite them.
 * @param {string} root
 */
export function findGeneratedBarrels(root) {
	const candidates = [];
	const walk = (dir) => {
		for (const entry of readdirSync(join(root, dir), { withFileTypes: true })) {
			const file = dir ? `${dir}/${entry.name}` : entry.name;
			if (entry.isDirectory()) {
				if (!SKIP_DIRS.has(entry.name)) walk(file);
			} else if (entry.name === 'index.ts' || entry.name === 'index.full.ts') {
				candidates.push(file);
			}
		}
	};
	walk('');
	const head = Buffer.alloc(256);
	return candidates.filter((file) => {
		let fd;
		try {
			fd = openSync(join(root, file), 'r');
			const read = readSync(fd, head, 0, head.length, 0);
			return head.subarray(0, read).toString('utf8').includes(MARKER);
		} catch {
			return false;
		} finally {
			if (fd !== undefined) closeSync(fd);
		}
	});
}

/** Run prettier with .gitignore, .prettierignore and the generated barrels ignored.
 * @param {string} root
 * @param {string[]} args prettier arguments, e.g. ['--check', '.']
 */
export function runPrettier(root, args) {
	const own = readFileSync(join(root, '.prettierignore'), 'utf8');
	const generated = findGeneratedBarrels(root).map((file) => `/${file}`);
	writeFileSync(
		join(root, GENERATED_IGNORE),
		`${own.trimEnd()}\n\n# Generated barrels (scripts/prettier-run.mjs)\n${generated.join('\n')}\n`
	);
	const bin = createRequire(join(root, 'package.json')).resolve('prettier/bin/prettier.cjs');
	const run = spawnSync(
		process.execPath,
		[bin, '--ignore-path', '.gitignore', '--ignore-path', GENERATED_IGNORE, ...args],
		{ cwd: root, stdio: 'inherit' }
	);
	return run.status ?? 1;
}

if (resolve(process.argv[1] ?? '') === fileURLToPath(import.meta.url)) {
	process.exit(
		runPrettier(resolve(dirname(fileURLToPath(import.meta.url)), '..'), process.argv.slice(2))
	);
}
