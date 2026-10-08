import { strict as assert } from 'node:assert';
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { checkPackageSource } from './check-package-source.mjs';

async function fixture(files, run) {
	const root = await mkdtemp(join(tmpdir(), 'stylist-package-'));
	try {
		for (const [path, content] of Object.entries(files)) {
			const target = join(root, 'src/lib', path);
			await mkdir(join(target, '..'), { recursive: true });
			await writeFile(target, content);
		}
		await run(root);
	} finally {
		await rm(root, { recursive: true, force: true });
	}
}

test('public source follows internal domains, Svelte scripts and runtime JSON', async () => {
	await fixture(
		{
			'index.ts': "export { default as Button } from './button/index.svelte';",
			'index.full.ts': '',
			'button/index.svelte':
				"<script lang='ts'>import data from '$stylist/chat/data.json'; import state from './state.svelte';</script><button />",
			'button/state.svelte.ts': 'export default function state() {}',
			'chat/data.json': '{}'
		},
		async (root) => assert.equal(await checkPackageSource(root), 4)
	);
});

test('a private transitive dependency is rejected even when it is checked out', async () => {
	await fixture(
		{
			'index.ts': "export { TOKEN } from './token/index.js';",
			'index.full.ts': '',
			'token/index.ts': "export { TOKEN } from '$stylist/geo/index';",
			'geo/index.ts': 'export const TOKEN = 1;'
		},
		async (root) => assert.rejects(checkPackageSource(root), /excluded source: geo/)
	);
});

test('missing generated entrypoints and missing runtime assets prevent packaging', async () => {
	await fixture({ 'index.ts': '' }, async (root) =>
		assert.rejects(checkPackageSource(root), /entrypoints are missing/)
	);
	await fixture(
		{
			'index.ts': "export { default as data } from './missing.json';",
			'index.full.ts': ''
		},
		async (root) => assert.rejects(checkPackageSource(root), /dependency is missing/)
	);
});

test('public exports cannot depend on stories excluded from npm', async () => {
	await fixture(
		{
			'index.ts': "export { default as Demo } from './button/index.story.svelte';",
			'index.full.ts': '',
			'button/index.story.svelte': '<button />'
		},
		async (root) => assert.rejects(checkPackageSource(root), /excluded source: button/)
	);
});
