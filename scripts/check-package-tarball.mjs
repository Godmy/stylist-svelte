import { execSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readModules, SERVER_DOMAINS } from './prepare-module-sources.mjs';

const FORBIDDEN = [
	[/\.(story|test|spec)\./, 'story/test file'],
	[/(^|\/)story-[^/]+\.svelte/, 'story helper'],
	[/^dist\/index\.full\./, 'all-modules root'],
	[/(^|\/)\.git(\/|$)/, 'git metadata'],
	[/^dist\/tsconfig\.json$/, 'build tsconfig']
];

/** Names that must never appear in the published package. @param {Record<string, any>} modules */
export function privateNames(modules) {
	const hidden = Object.entries(modules).filter(([, module]) => module.private);
	return {
		domains: new Set([...SERVER_DOMAINS, ...hidden.flatMap(([, module]) => module.domains)]),
		paths: hidden.map(([, module]) => module.path)
	};
}

/** Path-level violations for the packed file list. @param {string[]} files @param {ReturnType<typeof privateNames>} names */
export function tarballPathViolations(files, names) {
	const violations = [];
	for (const file of files) {
		const [top, domain] = file.split('/');
		if (top === 'dist' && names.domains.has(domain)) violations.push(`${file}: private domain ${domain}`);
		for (const [pattern, label] of FORBIDDEN) if (pattern.test(file)) violations.push(`${file}: ${label}`);
	}
	return violations;
}

/** Content-level violations: imports of private domains, module paths or the private package.
 * @param {string} file @param {string} content @param {ReturnType<typeof privateNames>} names */
export function tarballContentViolations(file, content, names) {
	const violations = [];
	if (content.includes('stylist-svelte-travel')) violations.push(`${file}: mentions stylist-svelte-travel`);
	for (const path of names.paths) if (content.includes(`${path}/`) || content.includes(`'${path}'`)) violations.push(`${file}: mentions ${path}`);
	for (const match of content.matchAll(/['"](?:\$stylist|stylist-svelte)\/([\w-]+)/g)) {
		if (names.domains.has(match[1])) violations.push(`${file}: imports private domain ${match[1]}`);
	}
	return violations;
}

/** Scan what `npm pack` would publish. Run after the package build (dist/ exists).
 * @param {string} packageRoot
 */
export async function checkPackageTarball(packageRoot) {
	const root = resolve(packageRoot);
	// A fixed command string: npm is a .cmd shim on Windows and needs a shell.
	const output = execSync('npm pack --dry-run --json --ignore-scripts', {
		cwd: root, encoding: 'utf8', maxBuffer: 256 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore']
	});
	const [pack] = JSON.parse(output.slice(output.indexOf('[')));
	const files = pack.files.map((file) => file.path.replaceAll('\\', '/'));
	const names = privateNames(readModules(root));
	const violations = tarballPathViolations(files, names);
	for (const file of files) {
		if (!/\.(js|ts|svelte|json|css)$/.test(file)) continue;
		violations.push(...tarballContentViolations(file, await readFile(join(root, file), 'utf8'), names));
	}
	const domains = [...new Set(files.filter((file) => file.startsWith('dist/')).map((file) => file.split('/')[1]).filter((name) => !name.includes('.')))].sort();
	return {
		violations,
		stats: { version: pack.version, size: pack.size, unpackedSize: pack.unpackedSize, entryCount: pack.entryCount, domains }
	};
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
	const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
	const { violations, stats } = await checkPackageTarball(root);
	for (const violation of violations.slice(0, 100)) console.error(violation);
	console.log(JSON.stringify(stats));
	console.log(violations.length ? `Tarball: ${violations.length} violation(s).` : 'Tarball: no private modules, stories or tests.');
	process.exitCode = violations.length ? 1 : 0;
}
