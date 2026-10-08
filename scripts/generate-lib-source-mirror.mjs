import { cp, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { moduleSources } from './prepare-module-sources.mjs';
import { existsSync } from 'node:fs';

const libDirectory = fileURLToPath(new URL('../src/lib/', import.meta.url));
const mirrorDirectory = fileURLToPath(new URL('../static/generated/lib-source/', import.meta.url));

function shouldSkip(sourcePath) {
	const baseName = path.basename(sourcePath);
	return baseName === '.git' || baseName === 'node_modules';
}

async function main() {
	await rm(mirrorDirectory, { recursive: true, force: true });
	await mkdir(mirrorDirectory, { recursive: true });
	await cp(libDirectory, mirrorDirectory, {
		recursive: true,
		dereference: true,
		filter: (sourcePath) => !shouldSkip(sourcePath)
	});
	for (const [domain, source] of Object.entries(moduleSources(path.resolve(libDirectory, '../..')))) {
		if (!existsSync(source)) continue;
		await cp(source, path.join(mirrorDirectory, domain), {
			recursive: true,
			filter: sourcePath => !shouldSkip(sourcePath)
		});
	}
}

await main();
