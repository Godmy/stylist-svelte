import fsp from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

/** Run `fn` with at most `limit` calls in flight.
 * @template {(...args: any[]) => Promise<any>} T
 * @param {T} fn
 * @param {number} limit
 * @returns {T}
 */
export function limitConcurrency(fn, limit) {
	let active = 0;
	/** @type {Array<() => void>} */
	const queue = [];
	const release = () => {
		active--;
		queue.shift()?.();
	};
	return /** @type {T} */ (async (...args) => {
		if (active >= limit) await new Promise((next) => queue.push(/** @type {() => void} */ (next)));
		active++;
		try {
			return await fn(...args);
		} finally {
			release();
		}
	});
}

/** publint reads every file matched by "./*" at once; with ~8.5k dist files Windows
 * answers EMFILE and publint reports existing files as FILE_DOES_NOT_EXIST.
 * Bounding readFile turns those false errors back into real checks.
 * @param {string} packageRoot
 */
export async function publintPackage(packageRoot, { limit = 64 } = {}) {
	fsp.readFile = limitConcurrency(fsp.readFile.bind(fsp), limit);
	const { publint } = await import('publint');
	const { formatMessage } = await import('publint/utils');
	const { messages, pkg } = await publint({ pkgDir: packageRoot, pack: 'npm', level: 'suggestion' });
	return messages.map((message) => ({ type: message.type, code: message.code, text: formatMessage(message, pkg) }));
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
	const root = fileURLToPath(new URL('../', import.meta.url));
	const messages = await publintPackage(root);
	for (const message of messages) console.log(`${message.type}: ${message.text}`);
	const errors = messages.filter((message) => message.type === 'error').length;
	console.log(errors ? `publint: ${errors} error(s).` : 'All good!');
	process.exitCode = errors ? 1 : 0;
}
