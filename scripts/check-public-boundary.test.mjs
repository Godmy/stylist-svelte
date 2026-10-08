import { strict as assert } from 'node:assert';
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { checkPublicBoundary } from './check-public-boundary.mjs';
import { findTools, runGate } from './stylist-gate.mjs';

const registry = {
	common: { path: 'modules/common', sourceRoot: '.', domains: ['button', 'notification'] },
	observer: { path: 'modules/observer', sourceRoot: '.', domains: ['domain'] },
	business: { path: 'modules/business', sourceRoot: '.', private: true, domains: ['chat'] },
	geo: { path: 'modules/geo', domainRoot: true, private: true, domains: ['geo'] }
};

async function fixture(files, run) {
	const root = await mkdtemp(join(tmpdir(), 'stylist-boundary-'));
	try {
		await writeFile(join(root, 'modules.json'), JSON.stringify(registry));
		for (const [path, content] of Object.entries({ 'src/lib/index.full.ts': '', ...files })) {
			await mkdir(join(root, path, '..'), { recursive: true });
			await writeFile(join(root, path), content);
		}
		await run(root);
	} finally {
		await rm(root, { recursive: true, force: true });
	}
}

const details = (result) => result.violations.map((violation) => `${violation.kind} ${violation.file.replaceAll('\\', '/')} ${violation.detail}`);

test('public sources may import public domains and the public root', async () => {
	await fixture({
		'modules/common/button/index.ts': "export { N } from '$stylist/notification/index.js'; import '$stylist';",
		'modules/common/notification/index.ts': 'export const N = 1;',
		'modules/business/chat/index.ts': "import { N } from '$stylist/notification/index.js';",
		'src/lib/index.ts': "export * from '../../modules/common/button';"
	}, async (root) => assert.deepEqual(details(await checkPublicBoundary(root, { git: false })), []));
});

test('runtime, story and relative imports of private modules are violations', async () => {
	await fixture({
		'modules/common/notification/list/index.svelte': "<script lang='ts'>import { T } from '$stylist/chat/time/index.js';</script>",
		'modules/common/button/index.story.svelte': "<script>import Map from 'stylist-svelte/geo/map';</script>",
		'modules/common/button/state.ts': "export * from '../../business/chat/index.js'; export * from 'stylist-svelte-travel/booking';",
		'src/routes/+page.svelte': "<script>const m = import('$stylist/geo/index.js');</script>"
	}, async (root) => {
		const found = details(await checkPublicBoundary(root, { git: false }));
		assert.equal(found.length, 5, found.join('\n'));
		assert.ok(found.some((line) => line.includes('index.story.svelte') && line.includes('private domain geo')));
		assert.ok(found.some((line) => line.includes('private module path business')));
		assert.ok(found.some((line) => line.includes('stylist-svelte-travel')));
		assert.ok(found.some((line) => line.startsWith('import src/routes/+page.svelte')));
	});
});

test('committed generated root and manifest must not mention private modules', async () => {
	await fixture({
		'src/lib/index.ts': "export * from '../../modules/common/button';\nexport * from '../../modules/geo';",
		'modules/observer/domain/data/json/domain-page-manifest/index.json': JSON.stringify({ tree: { button: {}, chat: {} } }),
		'modules/observer/domain/data/json/domain-component-import-diagnostics/index.json': JSON.stringify({ rows: [{ domain: 'geo' }] })
	}, async (root) => {
		const found = details(await checkPublicBoundary(root, { git: false }));
		assert.ok(found.some((line) => line.startsWith('generated src/lib/index.ts mentions modules/geo')), found.join('\n'));
		assert.ok(found.some((line) => line.includes('domain-page-manifest') && line.includes('domain chat')));
		assert.ok(found.some((line) => line.includes('import-diagnostics') && line.includes('domain geo')));
		// index.full.ts is local-only: it may list private modules and is not scanned.
		assert.ok(!found.some((line) => line.includes('index.full.ts')));
	});
});

test('gate reports python checks as skipped without stylist tools and fails on violations', async () => {
	await fixture({
		'src/lib/index.ts': "export { B } from '../../modules/common/button';",
		'modules/common/button/index.ts': "export const B = 1;"
	}, async (root) => {
		assert.match(findTools(root, {}).skipped, /no stylist tools/);
		const lines = [];
		const passed = await runGate(root, { log: (line) => lines.push(line) });
		assert.equal(passed.ok, true, lines.join('\n'));
		assert.ok(lines.some((line) => line.includes('SKIPPED') && line.includes('python')));
		await writeFile(join(root, 'modules/common/button/index.ts'), "export { C as B } from '$stylist/chat/index.js';");
		const failed = await runGate(root, { log: () => {} });
		assert.equal(failed.ok, false);
		assert.equal(failed.results[0].status, 'failed');
	});
});
