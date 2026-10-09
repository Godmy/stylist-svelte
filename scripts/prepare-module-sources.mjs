import { readFileSync, existsSync } from 'node:fs';
import { resolve, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

/** Server code is never published, whichever module owns it. */
export const SERVER_DOMAINS = Object.freeze(['server']);

/** @param {string} packageRoot */
export function readModules(packageRoot) {
	const registry = join(resolve(packageRoot), 'modules.json');
	return existsSync(registry) ? JSON.parse(readFileSync(registry, 'utf8')) : {};
}

/** @param {string | undefined} value */
const names = (value) =>
	new Set(
		(value ?? '')
			.split(',')
			.map((name) => name.trim())
			.filter(Boolean)
	);

/** Shared with the Python indexer, which cli.py --modules/--exclude-modules set. */
export const MODULES_ENV = 'STYLIST_MODULES';
export const EXCLUDE_MODULES_ENV = 'STYLIST_EXCLUDE_MODULES';

/** Same rule as the indexer's --modules/--exclude-modules: 'all', 'public' or a comma list.
 * Omitted options fall back to STYLIST_MODULES / STYLIST_EXCLUDE_MODULES, then to 'all'.
 * @param {Record<string, any>} modules
 * @param {{ modules?: string, exclude?: string }} [options]
 */
export function selectModules(
	modules,
	{
		modules: selection = process.env[MODULES_ENV] || 'all',
		exclude = process.env[EXCLUDE_MODULES_ENV] || ''
	} = {}
) {
	const chosen =
		selection === 'all'
			? new Set(Object.keys(modules))
			: selection === 'public'
				? new Set(Object.keys(modules).filter((name) => !modules[name].private))
				: names(selection);
	const excluded = names(exclude);
	const unknown = [...chosen, ...excluded].filter((name) => !(name in modules));
	if (unknown.length)
		throw new Error(`Unknown modules: ${[...new Set(unknown)].sort().join(', ')}`);
	return Object.fromEntries(
		Object.entries(modules).filter(([name]) => chosen.has(name) && !excluded.has(name))
	);
}

/** Domains kept out of the npm package: private modules.json modules plus server code.
 * @param {string} packageRoot
 */
export function excludedPackageDomains(packageRoot) {
	const domains = new Set(SERVER_DOMAINS);
	for (const module of Object.values(readModules(packageRoot))) {
		if (module.private) for (const domain of module.domains) domains.add(domain);
	}
	return domains;
}

/** Logical domain -> physical owner for the selected modules (default: env, then all).
 * @param {string} packageRoot
 * @param {{ modules?: string, exclude?: string }} [selection]
 */
export function moduleSources(packageRoot, selection) {
	const root = resolve(packageRoot);
	/** @type {Record<string, string>} */
	const domains = {};
	for (const module of Object.values(selectModules(readModules(root), selection))) {
		for (const domain of module.domains) {
			if (domains[domain]) throw new Error(`Duplicate module domain: ${domain}`);
			const target = module.domainRoot
				? resolve(root, module.path)
				: resolve(root, module.path, module.sourceRoot ?? 'src/lib', domain);
			if (relative(root, target).startsWith('..'))
				throw new Error(`Module escapes package: ${domain}`);
			domains[domain] = target;
		}
	}
	return domains;
}

/** Source aliases resolve to physical repositories without creating folders.
 * @param {string} packageRoot
 * @param {{ modules?: string, exclude?: string }} [selection]
 */
export function moduleAliases(packageRoot, selection) {
	/** @type {Record<string, string>} */
	const aliases = {};
	for (const [domain, target] of Object.entries(moduleSources(packageRoot, selection))) {
		aliases[`$stylist/${domain}`] = target;
		aliases[`stylist-svelte/${domain}`] = target;
	}
	return aliases;
}

/** @param {string} packageRoot
 * @param {{ includePrivate?: boolean, modules?: string, exclude?: string }} [options]
 */
export async function prepareModuleSources(
	packageRoot,
	{ includePrivate = true, modules: selection, exclude } = {}
) {
	const chosen = {
		modules: selection ?? (includePrivate ? 'all' : 'public'),
		exclude: exclude ?? ''
	};
	const modules = selectModules(readModules(packageRoot), chosen);
	const domains = moduleSources(packageRoot, chosen);
	let count = 0;
	for (const [name, module] of Object.entries(modules)) {
		for (const domain of module.domains) {
			if (!existsSync(domains[domain]))
				throw new Error(
					`Module ${name} is not initialized: ${domains[domain]}. Run git submodule update --init --recursive.`
				);
			count++;
		}
	}
	return count;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
	const root = fileURLToPath(new URL('../', import.meta.url));
	/** @param {string} flag */
	const option = (flag) =>
		process.argv.find((arg) => arg.startsWith(`${flag}=`))?.slice(flag.length + 1);
	prepareModuleSources(root, {
		modules: option('--modules') ?? (process.argv.includes('--public') ? 'public' : 'all'),
		exclude: option('--exclude-modules')
	})
		.then((count) => console.log(`Physical module sources: ${count} domains ready.`))
		.catch((error) => {
			console.error(error.message);
			process.exitCode = 1;
		});
}
