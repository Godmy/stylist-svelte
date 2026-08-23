import { cp, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

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
		filter: (sourcePath) => !shouldSkip(sourcePath)
	});
}

await main();
