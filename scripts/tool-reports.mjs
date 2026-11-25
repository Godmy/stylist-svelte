import { createReadStream } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { basename, dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

/** Local report reader. The private tools repository is loaded only by the dev server. */
export function toolReports(root, { createRepository } = {}) {
	return {
		name: 'stylist-local-tool-reports',
		apply: 'serve',
		configureServer(server) {
			let repository;
			let cached;
			let cachedAt = 0;
			const reader = async () => {
				if (!repository) {
					if (createRepository) {
						repository = await createRepository(root);
						return repository;
					}
					const configFile = resolve(root, 'stylist-samo.config.json');
					const config = JSON.parse(await readFile(configFile, 'utf8'));
					const { ReportFiles } = await import(
						pathToFileURL(
							resolve(root, 'modules/sandbox/tools/src/lib/class/repository/report-files/index.ts')
						).href
					);
					repository = new ReportFiles(resolve(dirname(configFile), config.outDir ?? '.samo'));
				}
				return repository;
			};
			server.middlewares.use(async (req, res, next) => {
				const url = new URL(req.url ?? '/', 'http://localhost');
				if (url.pathname !== '/__stylist/reports' && url.pathname !== '/__stylist/reports/file')
					return next();
				res.setHeader('Cache-Control', 'no-store');
				res.setHeader('X-Content-Type-Options', 'nosniff');
				const json = (status, data) => {
					res.statusCode = status;
					res.setHeader('Content-Type', 'application/json; charset=utf-8');
					res.end(JSON.stringify(data));
				};
				if (req.method !== 'GET') {
					res.setHeader('Allow', 'GET');
					return json(405, { error: 'Method not allowed' });
				}
				try {
					const files = await reader();
					if (url.pathname === '/__stylist/reports') {
						if (!cached || Date.now() - cachedAt > 5000 || url.searchParams.has('refresh')) {
							cached = await files.catalog();
							cachedAt = Date.now();
						}
						return json(200, cached);
					}
					const path = url.searchParams.get('path') ?? '';
					if (url.searchParams.has('download')) {
						const file = await files.file(path);
						res.setHeader('Content-Type', 'application/octet-stream');
						res.setHeader(
							'Content-Disposition',
							`attachment; filename*=UTF-8''${encodeURIComponent(basename(file))}`
						);
						const stream = createReadStream(file);
						stream.on('error', () => {
							if (!res.headersSent) json(404, { error: 'Report unavailable' });
							else res.destroy();
						});
						stream.pipe(res);
						return;
					}
					return json(200, await files.preview(path));
				} catch (error) {
					return json(error.code === 'ENOENT' ? 404 : 400, {
						error: 'Не удалось открыть отчёт. Обновите список и повторите.'
					});
				}
			});
		}
	};
}
