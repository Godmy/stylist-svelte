import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';
import { watch, existsSync } from 'node:fs';
import { assemblePackageSource, packageTsconfig } from './assemble-package-source.mjs';
import { checkPackageSource } from './check-package-source.mjs';
import { moduleSources } from './prepare-module-sources.mjs';
import config from '../svelte.config.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const require = createRequire(import.meta.url);
const { build } = await import(pathToFileURL(join(dirname(require.resolve('@sveltejs/package/package.json')), 'src/index.js')).href);
async function packageModules() {
	await checkPackageSource(root);
	const input = await assemblePackageSource(root, join(root, '.package-input'));
	await build({ cwd: root, input, output: 'dist', types: true, preserve_output: false,
		tsconfig: packageTsconfig(root),
		config: { ...config, kit: { alias: { '$stylist': input, 'stylist-svelte': input } } } });
}
await packageModules();
if (process.argv.includes('--watch')) {
	let timer;
	let running = false;
	let pending = false;
	async function rebuild() {
		if (running) { pending = true; return; }
		running = true;
		try { await packageModules(); } catch (error) { console.error(error); }
		finally { running = false; if (pending) { pending = false; await rebuild(); } }
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
