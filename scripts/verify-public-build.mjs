import { existsSync } from 'node:fs';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { mirrorExcludedDomains, sandboxExclusion, sandboxSelection } from './public-sandbox.mjs';

/** Files the Worker keeps private (never served as static assets). */
const DEFAULT_IGNORED = ['_worker.js', '_routes.json', '_headers'];
const TEXT_FILE = /\.(?:js|mjs|cjs|json|html|css|ts|svelte|map|txt|svg)$/i;
const escape = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Path fragments that only appear when hidden code or its file tree reached the build.
 * @param {ReturnType<typeof sandboxExclusion>} exclusion
 */
export function leakPatterns(exclusion) {
	const domains = [...mirrorExcludedDomains(exclusion)].map(escape).join('|');
	const modules = exclusion.paths.map(escape).join('|');
	return [
		...(modules ? [new RegExp(`(?:^|[/"'\`])(?:${modules})/`)] : []),
		new RegExp(`(?:\\$stylist|stylist-svelte|lib-source|/src/lib)/(?:${domains})/`)
	];
}

async function walk(directory, prefix = '') {
	const entries = await readdir(directory, { withFileTypes: true });
	const nested = await Promise.all(entries.map((entry) => entry.isDirectory()
		? walk(path.join(directory, entry.name), `${prefix}${entry.name}/`)
		: [`${prefix}${entry.name}`]));
	return nested.flat();
}

/** Scans a Cloudflare build output for hidden modules; returns human-readable violations.
 * @param {string} packageRoot
 * @param {string} outputDirectory
 * @param {{ modules?: string, exclude?: string }} selection
 */
export async function verifyPublicBuild(packageRoot, outputDirectory, selection) {
	const exclusion = sandboxExclusion(packageRoot, selection);
	const hidden = mirrorExcludedDomains(exclusion);
	const ignoreFile = path.join(outputDirectory, '.assetsignore');
	const ignored = new Set(existsSync(ignoreFile)
		? (await readFile(ignoreFile, 'utf8')).split(/\r?\n/).map((line) => line.trim()).filter(Boolean)
		: DEFAULT_IGNORED);
	const violations = [];
	for (const domain of hidden) {
		if (existsSync(path.join(outputDirectory, 'generated', 'lib-source', domain))) {
			violations.push(`generated/lib-source/${domain}/ is published`);
		}
	}
	const patterns = leakPatterns(exclusion);
	const files = (await walk(outputDirectory)).filter((file) => !ignored.has(file) && TEXT_FILE.test(file));
	for (const file of files) {
		const text = await readFile(path.join(outputDirectory, file), 'utf8');
		for (const pattern of patterns) {
			const match = text.match(pattern);
			if (match) {
				const start = Math.max(0, (match.index ?? 0) - 40);
				violations.push(`${file}: ${JSON.stringify(text.slice(start, (match.index ?? 0) + match[0].length + 40))}`);
				break;
			}
		}
	}
	return { hidden, files: files.length, violations };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
	const packageRoot = fileURLToPath(new URL('../', import.meta.url));
	const output = path.resolve(packageRoot, process.argv[2] ?? '.svelte-kit/cloudflare');
	const selection = sandboxSelection('build');
	const { hidden, files, violations } = await verifyPublicBuild(packageRoot, output, selection);
	if (violations.length) {
		console.error(`Public build check FAILED (${violations.length}): hidden modules reached ${path.relative(packageRoot, output)}`);
		for (const violation of violations.slice(0, 50)) console.error(`  ${violation}`);
		process.exitCode = 1;
	} else {
		console.log(`Public build check passed: ${files} public files, none mention ${[...hidden].sort().join(', ')}.`);
	}
}
