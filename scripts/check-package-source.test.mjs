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
		async (root) => {
			// Exclusion comes from the registry's private flag, not a hard-coded list.
			assert.equal(await checkPackageSource(root), 3);
			await writeFile(join(root, 'modules.json'), JSON.stringify({ geo: { path: 'src/lib/geo', domainRoot: true, private: true, domains: ['geo'] } }));
			await assert.rejects(checkPackageSource(root), /excluded source: geo/);
		}
	);
});

test('missing generated entrypoints and missing runtime assets prevent packaging', async () => {
	await fixture({ 'readme.md': '' }, async (root) =>
		assert.rejects(checkPackageSource(root), /public entrypoint src\/lib\/index.ts is missing/)
	);
	// A clean clone has no local-only index.full.ts; the public root alone is enough.
	await fixture({ 'index.ts': '' }, async (root) => assert.equal(await checkPackageSource(root), 1));
	await fixture(
		{
			'index.ts': "export { default as data } from './missing.json';",
			'index.full.ts': ''
		},
		async (root) => assert.rejects(checkPackageSource(root), /dependency is missing/)
	);
});

test('public source cannot import an extracted travel domain', async () => {
  await fixture({
    'index.ts': "export { value } from './layout/index';", 'index.full.ts': '',
    'layout/index.ts': "export { value } from '$stylist/booking/index';", 'booking/index.ts': 'export const value = 1;'
  }, async root => {
    await writeFile(join(root, 'modules.json'), JSON.stringify({ travel: { path: 'src/lib', sourceRoot: '.', private: true, domains: ['booking'] } }));
    await assert.rejects(checkPackageSource(root), /excluded source: booking/);
  });
});

test('package-name imports cannot bypass the private travel guard', async () => {
  await fixture({ 'index.ts': "export { value } from 'stylist-svelte-travel/booking/index.js';", 'index.full.ts': '' },
    async root => assert.rejects(checkPackageSource(root), /private travel/));
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
