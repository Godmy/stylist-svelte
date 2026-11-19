import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Writable } from 'node:stream';
import { once } from 'node:events';
import { toolReports } from './tool-reports.mjs';
import { excludeFromGlobs, sandboxExclusion } from './public-sandbox.mjs';
import { fileURLToPath } from 'node:url';

async function request(plugin, url, method = 'GET') {
	let handler;
	plugin.configureServer({
		middlewares: {
			use(fn) {
				handler = fn;
			}
		}
	});
	const chunks = [],
		headers = {};
	const response = new Writable({
		write(chunk, _encoding, done) {
			chunks.push(chunk);
			done();
		}
	});
	response.statusCode = 200;
	response.setHeader = (name, value) => {
		headers[name] = value;
	};
	const finished = once(response, 'finish');
	let next = false;
	await handler({ url, method }, response, () => {
		next = true;
		response.end();
	});
	await finished;
	return {
		status: response.statusCode,
		headers,
		body: Buffer.concat(chunks).toString('utf8'),
		next
	};
}

test('report middleware is dev-only and reads inventory/preview without filesystem paths from the browser', async () => {
	const plugin = toolReports('/unused', {
		createRepository: async () => ({
			catalog: async () => ({
				available: true,
				directory: '.stylist',
				files: [{ path: 'report/run.json' }]
			}),
			preview: async (path) => ({ path, content: '{}', truncated: false })
		})
	});
	assert.equal(plugin.apply, 'serve');
	assert.equal(plugin.configurePreviewServer, undefined);
	const inventory = await request(plugin, '/__stylist/reports');
	assert.equal(inventory.status, 200);
	assert.equal(JSON.parse(inventory.body).files[0].path, 'report/run.json');
	assert.equal(inventory.headers['Cache-Control'], 'no-store');
	const preview = await request(plugin, '/__stylist/reports/file?path=report%2Frun.json');
	assert.equal(JSON.parse(preview.body).content, '{}');
	assert.equal((await request(plugin, '/__stylist/reports', 'POST')).status, 405);
	assert.equal((await request(plugin, '/components')).next, true);
});

test('report errors are bounded and do not reveal server filesystem information', async () => {
	const plugin = toolReports('/unused', {
		createRepository: async () => ({
			preview: async () => {
				throw new Error('/private/server/path');
			}
		})
	});
	const response = await request(plugin, '/__stylist/reports/file?path=..%2Fsecret');
	assert.equal(response.status, 400);
	assert.ok(!response.body.includes('/private'));
});

test('the public sandbox removes the host report fragment glob using the private tools registry entry', () => {
	const root = fileURLToPath(new URL('../', import.meta.url));
	const hidden = sandboxExclusion(root, { modules: 'public', exclude: '' });
	assert.ok(hidden.domains.has('tools'));
	const code =
		'const reports = import.meta.glob<{ default: Component }>("/modules/sandbox/tools/src/lib/component/organism/reports-fragment/index.svelte");';
	const transformed = excludeFromGlobs(
		code,
		hidden.paths.map((path) => `!/${path}/**`)
	);
	assert.ok(transformed.includes('!/modules/sandbox/tools/src/lib/**'));
});
