import { existsSync } from 'node:fs';
import path from 'node:path';
import { registerHooks } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { moduleSources } from './prepare-module-sources.mjs';

/** Resolve logical domain imports for native Node source-only maintenance scripts. */
export function registerModuleSources(root = fileURLToPath(new URL('../', import.meta.url))) {
	const owners = moduleSources(root);
	return registerHooks({
		resolve(specifier, context, nextResolve) {
			if (specifier.startsWith('$stylist/')) {
				const [domain, ...rest] = specifier.slice('$stylist/'.length).split('/');
				if (owners[domain]) specifier = pathToFileURL(path.join(owners[domain], ...rest)).href;
			}
			try {
				return nextResolve(specifier, context);
			} catch (error) {
				if (!['ERR_MODULE_NOT_FOUND', 'ERR_UNSUPPORTED_DIR_IMPORT'].includes(error.code))
					throw error;
				const url = new URL(specifier, context.parentURL);
				if (url.protocol !== 'file:') throw error;
				const file = fileURLToPath(url);
				for (const candidate of [`${file}.ts`, `${file}.js`, path.join(file, 'index.ts')]) {
					if (existsSync(candidate)) return nextResolve(pathToFileURL(candidate).href, context);
				}
				throw error;
			}
		}
	});
}
