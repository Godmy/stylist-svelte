import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { watch, existsSync } from 'node:fs';
import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import {
	FULL_PACKAGE_EXCLUDED_DOMAINS,
	assemblePackageSource,
	packageTsconfig,
	stagedPackageAliases
} from './assemble-package-source.mjs';
import { checkPackageSource } from './check-package-source.mjs';
import { MODULES_ENV, excludedPackageDomains, moduleSources } from './prepare-module-sources.mjs';
import config from '../svelte.config.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const require = createRequire(import.meta.url);
const { build } = await import(
	pathToFileURL(join(dirname(require.resolve('@sveltejs/package/package.json')), 'src/index.js'))
		.href
);
// --out <dir> writes a ready local package (<dir>/package.json + <dir>/dist) outside the repository,
// for consumers that link it with `portal:`; without it the build goes to ./dist as before.
const outIndex = process.argv.indexOf('--out');
const outDir = outIndex === -1 ? null : process.argv[outIndex + 1];
if (outIndex !== -1 && (!outDir || outDir.startsWith('--')))
	throw new Error('--out needs a directory');
const packageDir = outDir ? resolve(outDir) : root;
// --full or STYLIST_MODULES=all: a private local package from index.full.ts with every module
// except server and tools. It never goes to ./dist, so it cannot be published by mistake.
const full = process.argv.includes('--full') || process.env[MODULES_ENV] === 'all';
if (full && !outDir) throw new Error('A full (private) package needs --out <dir> outside ./dist');

/** Package manifest for a local copy: only what consumers resolve, no scripts or dev tooling. */
async function writeLocalPackage() {
	const manifest = JSON.parse(await readFile(join(root, 'package.json'), 'utf8'));
	const keep = ['name', 'version', 'description', 'type', 'license', 'sideEffects', 'exports'];
	const local = Object.fromEntries(
		keep.filter((key) => key in manifest).map((key) => [key, manifest[key]])
	);
	for (const key of ['peerDependencies', 'peerDependenciesMeta', 'dependencies', 'svelte', 'types'])
		if (key in manifest) local[key] = manifest[key];
	await writeFile(join(packageDir, 'package.json'), `${JSON.stringify(local, null, '\t')}\n`);
	for (const file of ['README.md', 'LICENSE'])
		if (existsSync(join(root, file))) await copyFile(join(root, file), join(packageDir, file));
}

async function packageModules() {
	// The public check rejects private sources, which the full package includes on purpose.
	if (!full) await checkPackageSource(root);
	const input = await assemblePackageSource(root, join(root, '.package-input'), { full });
	const excluded = new Set(full ? FULL_PACKAGE_EXCLUDED_DOMAINS : excludedPackageDomains(root));
	const packageAliases = stagedPackageAliases(root, input, excluded);
	await mkdir(packageDir, { recursive: true });
	await build({
		cwd: root,
		input,
		output: join(packageDir, 'dist'),
		types: true,
		preserve_output: false,
		tsconfig: packageTsconfig(root),
		config: {
			...config,
			kit: { alias: { $stylist: input, 'stylist-svelte': input, ...packageAliases } }
		}
	});
	console.log(`Package (${full ? 'full' : 'public'}): ${join(packageDir, 'dist')}`);
	if (outDir) await writeLocalPackage();
}
await packageModules();
if (process.argv.includes('--watch')) {
	let timer;
	let running = false;
	let pending = false;
	async function rebuild() {
		if (running) {
			pending = true;
			return;
		}
		running = true;
		try {
			await packageModules();
		} catch (error) {
			console.error(error);
		} finally {
			running = false;
			if (pending) {
				pending = false;
				await rebuild();
			}
		}
	}
	for (const source of [join(root, 'src/lib'), ...Object.values(moduleSources(root))]) {
		if (!existsSync(source)) continue;
		watch(source, { recursive: true }, (_, filename) => {
			if (!filename || /(^|[\\/])(?:\.git|node_modules)([\\/]|$)/.test(filename)) return;
			clearTimeout(timer);
			timer = setTimeout(rebuild, 250);
		});
	}
	console.log('Watching physical module sources.');
}
