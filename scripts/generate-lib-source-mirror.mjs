import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { moduleSources } from './prepare-module-sources.mjs';
import {
	filterSandboxManifest,
	mirrorExcludedDomains,
	sandboxExclusion,
	sandboxSelection,
	stripHiddenExports
} from './public-sandbox.mjs';
import { existsSync } from 'node:fs';

const libDirectory = fileURLToPath(new URL('../src/lib/', import.meta.url));
const mirrorDirectory = fileURLToPath(new URL('../static/generated/lib-source/', import.meta.url));

/** Generated manifests copied into the mirror also list hidden domains. */
const MIRRORED_MANIFESTS = [
	'domain-page-manifest',
	'domain-files',
	'domain-component-intervals',
	'domain-component-import-diagnostics'
].map((name) => path.join('domain', 'data', 'json', name, 'index.json'));

/** Generated root entrypoints re-export hidden domains too. */
const ROOT_BARRELS = ['index.ts', 'index.full.ts'];

function shouldSkip(sourcePath) {
	const baseName = path.basename(sourcePath);
	return baseName === '.git' || baseName === 'node_modules';
}

/** Copies the selected sources (public modules by default, STYLIST_MODULES=all for every one)
 * into static assets. Server code and hidden modules never reach the public mirror.
 * @param {string} packageRoot
 * @param {string} source
 * @param {string} target
 * @param {{ modules?: string, exclude?: string }} selection
 */
export async function generateLibSourceMirror(packageRoot, source, target, selection) {
	const exclusion = sandboxExclusion(packageRoot, selection);
	const hidden = mirrorExcludedDomains(exclusion);
	const isHidden = (sourcePath) => hidden.has(path.relative(source, sourcePath).split(path.sep)[0]);
	await rm(target, { recursive: true, force: true });
	await mkdir(target, { recursive: true });
	await cp(source, target, {
		recursive: true,
		dereference: true,
		filter: (sourcePath) => !shouldSkip(sourcePath) && !isHidden(sourcePath)
	});
	for (const [domain, domainSource] of Object.entries(moduleSources(packageRoot, selection))) {
		if (hidden.has(domain) || !existsSync(domainSource)) continue;
		await cp(domainSource, path.join(target, domain), {
			recursive: true,
			filter: (sourcePath) => !shouldSkip(sourcePath)
		});
	}
	for (const manifest of MIRRORED_MANIFESTS) {
		const file = path.join(target, manifest);
		if (!existsSync(file)) continue;
		const data = JSON.parse(await readFile(file, 'utf8'));
		await writeFile(file, JSON.stringify(filterSandboxManifest(file, data, hidden)));
	}
	for (const barrel of ROOT_BARRELS) {
		const file = path.join(target, barrel);
		if (existsSync(file))
			await writeFile(
				file,
				stripHiddenExports(await readFile(file, 'utf8'), {
					paths: exclusion.paths,
					domains: hidden
				})
			);
	}
	return hidden;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
	const selection = sandboxSelection('build');
	const hidden = await generateLibSourceMirror(
		path.resolve(libDirectory, '../..'),
		libDirectory,
		mirrorDirectory,
		selection
	);
	console.log(
		`Source mirror (modules=${selection.modules}) without: ${[...hidden].sort().join(', ')}`
	);
}
