import { existsSync } from 'node:fs';
import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { basename, join, resolve, relative } from 'node:path';
import {
	SERVER_DOMAINS,
	excludedPackageDomains,
	moduleSources,
	readModules
} from './prepare-module-sources.mjs';

/** @param {string} packageRoot */
export const packageTsconfig = (packageRoot) => join(resolve(packageRoot), 'tsconfig.package.json');

/** Domains a full (private, local-only) package still leaves out: server code and the Node CLI. */
export const FULL_PACKAGE_EXCLUDED_DOMAINS = Object.freeze([...SERVER_DOMAINS, 'tools']);

/** Package names of copied single-domain modules (stylist-svelte-travel, ...) -> their staged domain.
 * Private modules import each other through these names; only the full build copies them.
 * @param {string} packageRoot
 * @param {string} stage
 * @param {Set<string>} excluded
 */
export function stagedPackageAliases(packageRoot, stage, excluded) {
	/** @type {Record<string, string>} */
	const aliases = {};
	for (const module of Object.values(readModules(packageRoot))) {
		const [domain] = module.domains ?? [];
		if (module.packageName && module.domains.length === 1 && !excluded.has(domain))
			aliases[module.packageName] = join(stage, domain);
	}
	return aliases;
}

/** Assemble an ignored build input; never change generated source barrels.
 * The public build (default) starts from index.ts and drops private modules; the full build
 * starts from index.full.ts and keeps every module except FULL_PACKAGE_EXCLUDED_DOMAINS.
 * @param {string} packageRoot
 * @param {string} output
 * @param {{ full?: boolean }} [options]
 */
export async function assemblePackageSource(packageRoot, output, { full = false } = {}) {
	const root = resolve(packageRoot);
	const stage = resolve(output);
	if (stage !== join(root, '.package-input'))
		throw new Error('Package input must be the package-local .package-input directory');
	await rm(stage, { recursive: true, force: true });
	await mkdir(stage, { recursive: true });
	const lib = join(root, 'src/lib');
	// Packaging always sees every module so private imports are recognised and rejected.
	const domains = moduleSources(root, { modules: 'all', exclude: '' });
	const excluded = full ? new Set(FULL_PACKAGE_EXCLUDED_DOMAINS) : excludedPackageDomains(root);
	const filter = (source) =>
		!['.git', 'node_modules', 'dist', '.svelte-kit'].includes(basename(source)) &&
		!/\.(story|test|spec)\./.test(source) &&
		!/^story-.*\.svelte/.test(basename(source));
	for (const entry of await readdir(lib, { withFileTypes: true })) {
		const isEntry = entry.name === 'index.ts' || entry.name.startsWith('index.full.');
		if (excluded.has(entry.name) || domains[entry.name] || isEntry) continue;
		await cp(join(lib, entry.name), join(stage, entry.name), { recursive: true, filter });
	}
	const entry = full ? 'index.full.ts' : 'index.ts';
	if (!existsSync(join(lib, entry)))
		throw new Error(`Generated entrypoint src/lib/${entry} is missing; run the manifest first.`);
	await cp(join(lib, entry), join(stage, 'index.ts'));
	for (const [domain, source] of Object.entries(domains)) {
		if (!excluded.has(domain)) await cp(source, join(stage, domain), { recursive: true, filter });
	}
	// Only the copied root entrypoint needs physical-to-package path translation.
	const index = join(stage, 'index.ts');
	let content = await readFile(index, 'utf8');
	for (const [domain, source] of Object.entries(domains)) {
		const physical = relative(lib, source).replaceAll('\\', '/');
		content = content
			.replaceAll(`'${physical}'`, `'./${domain}'`)
			.replaceAll(`"${physical}"`, `"./${domain}"`);
	}
	await writeFile(index, content);
	// The tsconfig lives in the package root, not the stage: svelte2tsx resolves
	// declarationDir against the tsconfig folder while svelte-package collects the
	// .d.ts files relative to cwd, so a staged tsconfig silently drops every type.
	/** @type {Record<string, string[]>} */
	const packagePaths = {};
	for (const [name, target] of Object.entries(stagedPackageAliases(root, stage, excluded))) {
		const path = `./${relative(root, target).replaceAll('\\', '/')}`;
		packagePaths[name] = [path];
		packagePaths[`${name}/*`] = [`${path}/*`];
	}
	const tsconfig = {
		extends: './tsconfig.json',
		compilerOptions: {
			paths: {
				$stylist: ['./.package-input/index.ts'],
				'$stylist/*': ['./.package-input/*'],
				'stylist-svelte/*': ['./.package-input/*'],
				...packagePaths
			}
		},
		include: ['./.package-input/**/*'],
		exclude: []
	};
	await writeFile(packageTsconfig(root), JSON.stringify(tsconfig, null, 2));
	return stage;
}
