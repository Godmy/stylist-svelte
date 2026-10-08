import { readFileSync, existsSync } from 'node:fs';
import { resolve, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

/** @param {string} packageRoot */
export function moduleSources(packageRoot) {
	const root = resolve(packageRoot);
	const registry = join(root, 'modules.json');
	/** @type {Record<string, string>} */
	const domains = {};
	if (!existsSync(registry)) return domains;
	const modules = JSON.parse(readFileSync(registry, 'utf8'));
	for (const module of Object.values(modules)) {
		for (const domain of module.domains) {
			if (domains[domain]) throw new Error(`Duplicate module domain: ${domain}`);
			const target = module.domainRoot ? resolve(root, module.path) : resolve(root, module.path, module.sourceRoot ?? 'src/lib', domain);
			if (relative(root, target).startsWith('..')) throw new Error(`Module escapes package: ${domain}`);
			domains[domain] = target;
		}
	}
	return domains;
}

/** Source aliases resolve to physical repositories without creating folders.
 * @param {string} packageRoot
 */
export function moduleAliases(packageRoot) {
	/** @type {Record<string, string>} */
	const aliases = {};
	for (const [domain, target] of Object.entries(moduleSources(packageRoot))) {
		aliases[`$stylist/${domain}`] = target;
		aliases[`stylist-svelte/${domain}`] = target;
	}
	return aliases;
}

/** @param {string} packageRoot */
export async function prepareModuleSources(packageRoot, { includePrivate = true } = {}) {
	const modules = JSON.parse(readFileSync(join(packageRoot, 'modules.json'), 'utf8'));
	const domains = moduleSources(packageRoot);
	let count = 0;
	for (const [name, module] of Object.entries(modules)) {
		if (module.private && !includePrivate) continue;
		for (const domain of module.domains) {
			if (!existsSync(domains[domain])) throw new Error(`Module ${name} is not initialized: ${domains[domain]}. Run git submodule update --init --recursive.`);
			count++;
		}
	}
	return count;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
	const root = fileURLToPath(new URL('../', import.meta.url));
	prepareModuleSources(root, { includePrivate: !process.argv.includes('--public') })
		.then((count) => console.log(`Physical module sources: ${count} domains ready.`))
		.catch((error) => { console.error(error.message); process.exitCode = 1; });
}
