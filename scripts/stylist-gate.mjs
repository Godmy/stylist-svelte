import { existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { checkPublicBoundary } from './check-public-boundary.mjs';
import { checkPackageSource } from './check-package-source.mjs';

/** Locate the Python stylist tools next to this library or via STYLIST_TOOLS_DIR.
 * The auditor resolves the library from its own location, so the tools must sit in the same
 * folder as this checkout; anything else is reported as skipped, never guessed.
 * Indexation runs from the site root when both sit in its packages/ folder, otherwise from
 * the shared folder holding the stylist + stylist-svelte siblings.
 * @param {string} root
 */
export function findTools(root, env = process.env) {
	const tools = resolve(env.STYLIST_TOOLS_DIR || join(root, '..', 'stylist'));
	if (!existsSync(join(tools, 'auditor', 'cli.py')))
		return { skipped: `no stylist tools at ${tools}` };
	if (resolve(tools, '..', 'stylist-svelte') !== resolve(root)) {
		return {
			skipped: `stylist tools at ${tools} check ${resolve(tools, '..', 'stylist-svelte')}, not this checkout`
		};
	}
	const container = resolve(tools, '..');
	return { tools, cwd: basename(container) === 'packages' ? resolve(container, '..') : container };
}

/** One gate for the pre-push hook, Workers Builds and npm releases. Only checks; never writes.
 * @param {string} root
 * @param {{ python?: boolean, log?: (line: string) => void }} [options]
 */
export async function runGate(root, { python = true, log = console.log } = {}) {
	const results = [];
	const step = async (name, run) => {
		try {
			const detail = await run();
			results.push({
				name,
				status: detail?.skipped ? 'skipped' : 'passed',
				detail: detail?.skipped ?? detail?.message ?? ''
			});
		} catch (error) {
			results.push({ name, status: 'failed', detail: error.message });
		}
		const last = results.at(-1);
		log(
			`[gate] ${last.status.toUpperCase().padEnd(7)} ${name}${last.detail ? ` - ${last.detail}` : ''}`
		);
	};
	await step('public boundary (sources, stories, generated files)', async () => {
		const { violations, scanned } = await checkPublicBoundary(root);
		for (const violation of violations)
			log(`  ${violation.kind}: ${violation.file} -> ${violation.detail}`);
		if (violations.length) throw new Error(`${violations.length} violation(s) in ${scanned} files`);
		return { message: `${scanned} files` };
	});
	await step('npm package source closure', async () => ({
		message: `${await checkPackageSource(root)} dependencies`
	}));
	await step('generated barrels + public manifest are current (python)', async () => {
		if (!python) return { skipped: 'disabled (--no-python)' };
		const found = findTools(root);
		if (found.skipped) return found;
		const run = spawnSync(
			process.env.PYTHON || 'python',
			['-u', join(found.tools, 'auditor', 'cli.py'), '--check'],
			{
				cwd: found.cwd,
				encoding: 'utf8',
				env: { ...process.env, PYTHONIOENCODING: 'utf-8' }
			}
		);
		if (run.error) return { skipped: `python unavailable (${run.error.message})` };
		const tail = `${run.stdout}${run.stderr}`
			.split('\n')
			.filter((line) => /STALE|Would generate|Check failed|❌|✅|Error/.test(line));
		for (const line of tail.slice(0, 40)) log(`  ${line.trim()}`);
		if (run.status !== 0)
			throw new Error('stale generated files: Dmitrii must run yarn stylist:manifest (human-only)');
		return { message: 'up to date' };
	});
	return { ok: results.every((result) => result.status !== 'failed'), results };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
	const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
	const { ok } = await runGate(root, { python: !process.argv.includes('--no-python') });
	console.log(ok ? '[gate] public-only gate passed.' : '[gate] public-only gate FAILED.');
	process.exitCode = ok ? 0 : 1;
}
