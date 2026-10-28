import { existsSync, readdirSync } from 'node:fs';
import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import { dirname, join, relative, resolve } from 'node:path';
import { randomUUID } from 'node:crypto';
import { readModules, moduleSources } from './prepare-module-sources.mjs';

export const FEEDBACK_ENDPOINT = '/__stylist-debug/component-feedback';
export const FEEDBACK_FILE = '.tmp/component-feedback.json';

/** Canonical addresses come from the actual owners, never from a client filesystem path. */
export function feedbackCatalog(root) {
	const registry = readModules(root);
	const owners = moduleSources(root);
	const catalog = new Map();
	for (const [moduleName, module] of Object.entries(registry)) {
		for (const domain of module.domains) {
			if (!owners[domain]) continue;
			const component = join(owners[domain], 'component');
			if (!existsSync(component)) continue;
			for (const joint of readdirSync(component, { withFileTypes: true })) {
				if (!joint.isDirectory()) continue;
				for (const family of readdirSync(join(component, joint.name), { withFileTypes: true })) {
					if (!family.isDirectory()) continue;
					const folder = join(component, joint.name, family.name);
					if (
						!['index.story.ts', 'index.story.svelte'].some((file) => existsSync(join(folder, file)))
					)
						continue;
					const id = `${domain}/component/${joint.name}/${family.name}`;
					catalog.set(id, {
						id,
						path: [moduleName, domain, 'component', joint.name, family.name].join('\\'),
						sourcePath: relative(root, folder).replaceAll('\\', '/')
					});
				}
			}
		}
	}
	return catalog;
}

export function feedbackSnapshot(body, catalog) {
	if (
		!body ||
		!Array.isArray(body.ids) ||
		body.ids.length > 2000 ||
		!['components', 'icons', 'other'].includes(body.kind) ||
		typeof body.note !== 'string' ||
		body.note.length > 8000
	) {
		throw new Error('Invalid feedback');
	}
	const ids = [...new Set(body.ids)];
	if (ids.some((id) => typeof id !== 'string' || !catalog.has(id)))
		throw new Error('Unknown component');
	return {
		version: 1,
		updatedAt: new Date().toISOString(),
		kind: body.kind,
		note: body.note,
		components: ids.map((id) => catalog.get(id))
	};
}

/**
 * No build/preview handler. Even a production-mode dev server cannot enable the writer.
 * @param {string} root
 * @returns {import('vite').Plugin}
 */
export function componentFeedback(root) {
	let production = true;
	return {
		name: 'stylist-local-component-feedback',
		apply: 'serve',
		configResolved(config) {
			production = config.isProduction || config.mode === 'production';
		},
		configureServer(server) {
			if (production) return;
			const catalog = feedbackCatalog(root);
			const file = resolve(root, FEEDBACK_FILE);
			let writes = Promise.resolve();
			server.middlewares.use(async (req, res, next) => {
				if (req.url?.split('?')[0] !== FEEDBACK_ENDPOINT) return next();
				res.setHeader('Content-Type', 'application/json; charset=utf-8');
				res.setHeader('Cache-Control', 'no-store');
				const reply = (status, value) => {
					res.statusCode = status;
					res.end(JSON.stringify(value));
				};
				const remote = req.socket.remoteAddress ?? '';
				if (!['127.0.0.1', '::1', '::ffff:127.0.0.1'].includes(remote))
					return reply(403, { error: 'Local access only' });
				if (req.headers.origin) {
					try {
						if (new URL(req.headers.origin).host !== req.headers.host)
							return reply(403, { error: 'Origin mismatch' });
					} catch {
						return reply(403, { error: 'Invalid origin' });
					}
				}
				try {
					if (req.method === 'GET') {
						await writes;
						let selection = { kind: 'components', note: '', components: [] };
						try {
							const saved = JSON.parse(await readFile(file, 'utf8'));
							selection = feedbackSnapshot(
								{
									ids: saved.components.map((entry) => entry.id).filter((id) => catalog.has(id)),
									kind: saved.kind,
									note: saved.note
								},
								catalog
							);
						} catch (error) {
							if (error.code !== 'ENOENT')
								return reply(500, { error: 'Cannot read feedback JSON' });
						}
						return reply(200, { file: FEEDBACK_FILE, catalog: [...catalog.values()], selection });
					}
					if (req.method !== 'POST') {
						res.setHeader('Allow', 'GET, POST');
						return reply(405, { error: 'Method not allowed' });
					}
					if (!req.headers['content-type']?.startsWith('application/json'))
						return reply(415, { error: 'JSON required' });
					req.setEncoding('utf8');
					let raw = '';
					for await (const chunk of req) {
						raw += chunk;
						if (Buffer.byteLength(raw) > 128 * 1024)
							return reply(413, { error: 'Feedback too large' });
					}
					let snapshot;
					try {
						snapshot = feedbackSnapshot(JSON.parse(raw), catalog);
					} catch {
						return reply(400, { error: 'Invalid feedback or unknown component' });
					}
					const save = writes.then(async () => {
						await mkdir(dirname(file), { recursive: true });
						const temporary = `${file}.${randomUUID()}.tmp`;
						await writeFile(temporary, JSON.stringify(snapshot, null, 2) + '\n', 'utf8');
						await rename(temporary, file);
					});
					writes = save.catch(() => {});
					await save;
					return reply(200, { savedAt: snapshot.updatedAt });
				} catch {
					return reply(500, { error: 'Cannot save feedback JSON' });
				}
			});
		}
	};
}
