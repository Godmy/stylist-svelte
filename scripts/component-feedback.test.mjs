import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { mkdtemp, mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { moduleAliases } from './prepare-module-sources.mjs';
import {
	componentFeedback,
	FEEDBACK_ENDPOINT,
	FEEDBACK_FILE,
	feedbackCatalog
} from './component-feedback.mjs';

async function fixture(t, production = false) {
	const root = await mkdtemp(join(tmpdir(), 'stylist-feedback-test-'));
	await mkdir(join(root, 'modules/design-system/html/component/atom/a'), { recursive: true });
	await writeFile(join(root, 'modules/design-system/html/component/atom/a/index.story.ts'), '');
	await writeFile(
		join(root, 'modules.json'),
		JSON.stringify({
			'design-system': { path: 'modules/design-system', sourceRoot: '.', domains: ['html'] }
		})
	);
	let middleware;
	const plugin = componentFeedback(root);
	assert.equal(plugin.apply, 'serve');
	plugin.configResolved({
		isProduction: production,
		mode: production ? 'production' : 'development'
	});
	plugin.configureServer({
		middlewares: {
			use(fn) {
				middleware = fn;
			}
		}
	});
	const server = createServer((req, res) => {
		const next = () => {
			res.writeHead(404);
			res.end();
		};
		if (middleware) void middleware(req, res, next);
		else next();
	});
	await new Promise((done) => server.listen(0, '127.0.0.1', done));
	t.after(async () => {
		await new Promise((done) => server.close(done));
		assert.equal(dirname(resolve(root)), resolve(tmpdir()));
		assert.ok(root.includes('stylist-feedback-test-'));
		await rm(root, { recursive: true, force: true });
	});
	return { root, url: `http://127.0.0.1:${server.address().port}${FEEDBACK_ENDPOINT}` };
}

test('persists canonical module/domain addresses and restores feedback', async (t) => {
	const { root, url } = await fixture(t);
	const catalog = feedbackCatalog(root);
	assert.equal(
		catalog.get('html/component/atom/a').path,
		'design-system\\html\\component\\atom\\a'
	);
	const initial = await (await fetch(url)).json();
	assert.equal(initial.selection.components.length, 0);
	const response = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			ids: ['html/component/atom/a', 'html/component/atom/a'],
			kind: 'icons',
			note: 'Исправить иконку'
		})
	});
	assert.equal(response.status, 200);
	const saved = JSON.parse(await readFile(join(root, FEEDBACK_FILE), 'utf8'));
	assert.equal(saved.kind, 'icons');
	assert.equal(saved.note, 'Исправить иконку');
	assert.deepEqual(saved.components, [
		{
			id: 'html/component/atom/a',
			path: 'design-system\\html\\component\\atom\\a',
			sourcePath: 'modules/design-system/html/component/atom/a'
		}
	]);
	assert.equal(
		(await (await fetch(url)).json()).selection.components[0].id,
		'html/component/atom/a'
	);
	await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ ids: [], kind: 'icons', note: '' })
	});
	assert.equal(JSON.parse(await readFile(join(root, FEEDBACK_FILE), 'utf8')).components.length, 0);
});

test('rejects foreign origins, unknown paths and non-JSON requests', async (t) => {
	const { root, url } = await fixture(t);
	assert.equal(
		(
			await fetch(url, {
				method: 'POST',
				headers: { Origin: 'https://example.org', 'Content-Type': 'application/json' },
				body: '{}'
			})
		).status,
		403
	);
	assert.equal(
		(
			await fetch(url, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ ids: ['../../outside'], kind: 'icons', note: '' })
			})
		).status,
		400
	);
	assert.equal((await fetch(url, { method: 'POST', body: '{}' })).status, 415);
	assert.equal((await fetch(url, { method: 'DELETE' })).status, 405);
	assert.equal(existsSync(join(root, FEEDBACK_FILE)), false);
});

test('does not install a reader or writer in production mode', async (t) => {
	const { root, url } = await fixture(t, true);
	assert.equal((await fetch(url)).status, 404);
	assert.equal(
		(
			await fetch(url, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: '{}'
			})
		).status,
		404
	);
	assert.equal(existsSync(join(root, FEEDBACK_FILE)), false);
});

test('production client bundle contains no feedback UI or writer URL', async () => {
	const { build } = await import('vite');
	const { svelte } = await import('@sveltejs/vite-plugin-svelte');
	const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
	const result = await build({
		root,
		configFile: false,
		logLevel: 'error',
		mode: 'production',
		plugins: [svelte({ configFile: false })],
		resolve: { alias: moduleAliases(root), dedupe: ['svelte'] },
		build: {
			write: false,
			minify: false,
			lib: {
				entry: join(root, 'modules/sandbox/domain/component/page/stylist-preview/index.svelte'),
				formats: ['es'],
				fileName: 'catalog'
			},
			rollupOptions: { external: (id) => /^svelte(?:\/|$)/.test(id) }
		}
	});
	const outputs = (Array.isArray(result) ? result : [result]).flatMap((entry) => entry.output);
	const js = outputs
		.filter((entry) => entry.type === 'chunk')
		.map((entry) => entry.code)
		.join('\n');
	assert.ok(js.length > 0);
	for (const marker of [
		FEEDBACK_ENDPOINT,
		'Выбрать для доработки',
		'Для доработки ·',
		'Пути выбранных компонентов'
	]) {
		assert.equal(js.includes(marker), false, `${marker} leaked into production`);
	}
});
