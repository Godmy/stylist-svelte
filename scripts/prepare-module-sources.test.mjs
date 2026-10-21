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

test('single-domain private packages share physical aliases and stay out of public selection', async () => {
	await fixture(async (root) => {
		const registry = JSON.parse(await readFile(join(root, 'modules.json'), 'utf8'));
		delete registry.private;
		for (const name of ['booking', 'admin', 'travel']) {
			registry[name] = {
				path: `modules/business/${name}`,
				domainRoot: true,
				private: true,
				domains: [name],
				packageName: `stylist-svelte-${name}`
			};
			await mkdir(join(root, registry[name].path, 'component'), { recursive: true });
		}
		await writeFile(join(root, 'modules.json'), JSON.stringify(registry));
		const aliases = moduleAliases(root, { modules: 'all', exclude: '' });
		const publicAliases = moduleAliases(root, { modules: 'public', exclude: '' });
		for (const name of ['booking', 'admin', 'travel']) {
			const target = join(root, `modules/business/${name}`);
			assert.equal(aliases[`$stylist/${name}`], target);
			assert.equal(aliases[`stylist-svelte/${name}`], target);
			assert.equal(aliases[`stylist-svelte-${name}`], target);
			assert.equal(publicAliases[`$stylist/${name}`], undefined);
			assert.equal(publicAliases[`stylist-svelte-${name}`], undefined);
		}
	});
});
