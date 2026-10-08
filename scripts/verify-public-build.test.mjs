import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { verifyPublicBuild } from './verify-public-build.mjs';

const registry = {
	core: { path: 'modules/core', domains: ['button', 'chat'], sourceRoot: '.' },
	travel: { path: 'modules/travel', private: true, domains: ['booking'], sourceRoot: '.' },
	geo: { path: 'modules/geo', domainRoot: true, private: true, domains: ['geo'] }
};

async function build(files) {
	const root = await mkdtemp(path.join(tmpdir(), 'verify-public-build-'));
	await writeFile(path.join(root, 'modules.json'), JSON.stringify(registry));
	const output = path.join(root, 'out');
	for (const [file, content] of Object.entries(files)) {
		await mkdir(path.dirname(path.join(output, file)), { recursive: true });
		await writeFile(path.join(output, file), content);
	}
	return { root, output };
}

test('a clean public build passes', async () => {
	const { root, output } = await build({
		'.assetsignore': '_worker.js\n',
		'_worker.js': "import '/modules/travel/booking/x.js';",
		'_app/immutable/chunks/a.js': 'const s = {"/src/lib/button/component/atom/x/index.story.svelte": () => import("./b.js")};',
		'generated/lib-source/button/index.ts': "export * from '$stylist/chat/x';",
		'generated/lib-source/readme.md': 'modules/travel is private'
	});
	try {
		const result = await verifyPublicBuild(root, output, { modules: 'public' });
		assert.deepEqual(result.violations, []);
		assert.equal(result.files, 2);
	} finally {
		await rm(root, { recursive: true, force: true });
	}
});

test('mirrored private domains, story globs and imports are reported', async () => {
	const { root, output } = await build({
		'_app/immutable/chunks/a.js': 'const s = {"/modules/geo/component/atom/map/index.story.svelte": 1};',
		'_app/immutable/chunks/b.js': 'const s = {"/src/lib/booking/component/x/index.story.svelte": 1};',
		'generated/lib-source/button/index.ts': "export * from '$stylist/booking/x';",
		'generated/lib-source/server/index.ts': 'secret',
		'generated/lib-source/geo/index.ts': 'private'
	});
	try {
		const { violations } = await verifyPublicBuild(root, output, { modules: 'public' });
		assert.ok(violations.includes('generated/lib-source/geo/ is published'));
		assert.ok(violations.includes('generated/lib-source/server/ is published'));
		for (const file of ['_app/immutable/chunks/a.js', '_app/immutable/chunks/b.js', 'generated/lib-source/button/index.ts']) {
			assert.ok(violations.some((violation) => violation.startsWith(`${file}:`)), file);
		}
		const widened = await verifyPublicBuild(root, output, { modules: 'public', exclude: 'core' });
		assert.ok(widened.violations.length > violations.length);
	} finally {
		await rm(root, { recursive: true, force: true });
	}
});
