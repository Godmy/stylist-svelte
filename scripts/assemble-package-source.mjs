import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { basename, join, resolve, relative } from 'node:path';
import { excludedPackageDomains, moduleSources } from './prepare-module-sources.mjs';

/** Assemble an ignored build input; never change generated source barrels.
 * @param {string} packageRoot
 * @param {string} output
 */
export async function assemblePackageSource(packageRoot, output) {
	const root = resolve(packageRoot);
	const stage = resolve(output);
	if (stage !== join(root, '.package-input')) throw new Error('Package input must be the package-local .package-input directory');
	await rm(stage, { recursive: true, force: true });
	await mkdir(stage, { recursive: true });
	const lib = join(root, 'src/lib');
	// Packaging always sees every module so private imports are recognised and rejected.
	const domains = moduleSources(root, { modules: 'all', exclude: '' });
	const excluded = excludedPackageDomains(root);
	const filter = (source) => !['.git', 'node_modules', 'dist', '.svelte-kit'].includes(basename(source))
		&& !/\.(story|test|spec)\./.test(source) && !/^story-.*\.svelte/.test(basename(source));
	for (const entry of await readdir(lib, { withFileTypes: true })) {
		if (excluded.has(entry.name) || domains[entry.name] || entry.name.startsWith('index.full.')) continue;
		await cp(join(lib, entry.name), join(stage, entry.name), { recursive: true, filter });
	}
	for (const [domain, source] of Object.entries(domains)) {
		if (!excluded.has(domain)) await cp(source, join(stage, domain), { recursive: true, filter });
	}
	// Only the copied root entrypoint needs physical-to-package path translation.
	const index = join(stage, 'index.ts');
	let content = await readFile(index, 'utf8');
	for (const [domain, source] of Object.entries(domains)) {
		const physical = relative(lib, source).replaceAll('\\', '/');
		content = content.replaceAll(`'${physical}'`, `'./${domain}'`).replaceAll(`"${physical}"`, `"./${domain}"`);
	}
	await writeFile(index, content);
	const tsconfig = {
		extends: '../tsconfig.json',
		compilerOptions: { paths: { '$stylist': ['./index.ts'], '$stylist/*': ['./*'], 'stylist-svelte/*': ['./*'] } },
		include: ['./**/*'], exclude: []
	};
	await writeFile(join(stage, 'tsconfig.json'), JSON.stringify(tsconfig, null, 2));
	return stage;
}
