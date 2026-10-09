import { strict as assert } from 'node:assert';
import { mkdtemp, mkdir, writeFile, readFile, rm, realpath } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { prepareModuleSources, moduleAliases } from './prepare-module-sources.mjs';

async function fixture(run) {
	const root = await mkdtemp(join(tmpdir(), 'stylist-modules-'));
	try {
		await mkdir(join(root, 'modules/common/src/lib/text'), { recursive: true });
		await writeFile(join(root, 'modules/common/src/lib/text/index.ts'), 'export const value = 1;');
		await writeFile(
			join(root, 'modules.json'),
			JSON.stringify({
				common: { path: 'modules/common', domains: ['text'] },
				private: { path: 'modules/private', private: true, domains: ['travel'] }
			})
		);
		await run(root);
	} finally {
		await rm(root, { recursive: true, force: true });
	}
}

test('public validation and aliases work without a private checkout or source projection', async () => {
	await fixture(async (root) => {
		assert.equal(await prepareModuleSources(root, { includePrivate: false }), 1);
		assert.equal(await prepareModuleSources(root, { includePrivate: false }), 1);
		assert.equal(moduleAliases(root)['$stylist/text'], join(root, 'modules/common/src/lib/text'));
		await assert.rejects(realpath(join(root, 'src/lib/text')), /ENOENT/);
	});
});

test('missing modules are reported without writing source directories', async () => {
	await fixture(async (root) => {
		await assert.rejects(prepareModuleSources(root), /not initialized/);
		await assert.rejects(realpath(join(root, 'src/lib/text')), /ENOENT/);
	});
});

test('validation never overwrites existing source directories', async () => {
	await fixture(async (root) => {
		await mkdir(join(root, 'src/lib/text'), { recursive: true });
		await writeFile(join(root, 'src/lib/text/index.ts'), 'keep');
		await prepareModuleSources(root, { includePrivate: false });
		assert.equal(await readFile(join(root, 'src/lib/text/index.ts'), 'utf8'), 'keep');
	});
});
