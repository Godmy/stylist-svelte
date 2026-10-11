import { readdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { createRequire, stripTypeScriptTypes } from 'node:module';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { compileModule } from 'svelte/compiler';
import { boundary } from './check-public-boundary.mjs';

/** Ratchet for Svelte compiler warnings (state_referenced_locally, a11y_*, css_unused_selector...).
 * `yarn check` only reports js diagnostics, and Workers Builds prints each warning twice (ssr +
 * client), so the count is tracked here: per public file and code, in svelte-warnings-baseline.json.
 * svelte-check never compiles rune modules (*.svelte.ts / *.svelte.js), so those go through
 * svelte/compiler compileModule here, as vite-plugin-svelte does.
 * A check fails when any file/code pair has more warnings than its baseline; after fixing, run
 * `yarn check:warnings:update` to lower the baseline. Private module paths never enter the file
 * (the repo is public); their warnings are only printed as a count.
 */
export const BASELINE_FILE = 'svelte-warnings-baseline.json';

/** Svelte warnings from `svelte-check --output machine-verbose`.
 * @param {string} output @param {string} root
 */
export function parseDiagnostics(output, root) {
	const diagnostics = [];
	for (const line of output.split(/\r?\n/)) {
		const json = line.match(/^\d+ (\{.*\})$/)?.[1];
		if (!json) continue;
		const entry = JSON.parse(json);
		// Unresolved-module diagnostics come through without a source even under --diagnostic-sources svelte.
		if (entry.source !== 'svelte') continue;
		diagnostics.push({
			type: entry.type,
			file: path.relative(root, path.resolve(root, entry.filename)).replace(/\\/g, '/'),
			line: (entry.start?.line ?? 0) + 1,
			column: entry.start?.character ?? 0,
			code: String(entry.code ?? 'unknown'),
			message: entry.message
		});
	}
	return diagnostics;
}

/** Keep only what svelte.config.js onwarn lets through, so the check matches `vite build`.
 * @param {ReturnType<typeof parseDiagnostics>} diagnostics @param {Function | undefined} onwarn
 */
export function applyOnwarn(diagnostics, onwarn) {
	if (!onwarn) return diagnostics;
	return diagnostics.filter((diagnostic) => {
		if (diagnostic.type !== 'WARNING') return true;
		let kept = false;
		onwarn(
			{
				code: diagnostic.code,
				message: diagnostic.message,
				filename: diagnostic.file,
				start: { line: diagnostic.line, column: diagnostic.column }
			},
			() => (kept = true)
		);
		return kept;
	});
}

/** { file: { code: count } } with sorted keys, so the baseline diffs cleanly.
 * @param {{ file: string, code: string }[]} diagnostics
 */
export function tally(diagnostics) {
	const counts = {};
	for (const { file, code } of diagnostics) {
		counts[file] ??= {};
		counts[file][code] = (counts[file][code] ?? 0) + 1;
	}
	return Object.fromEntries(
		Object.keys(counts)
			.sort()
			.map((file) => [
				file,
				Object.fromEntries(
					Object.keys(counts[file])
						.sort()
						.map((code) => [code, counts[file][code]])
				)
			])
	);
}

/** @param {Record<string, Record<string, number>>} counts */
export function total(counts) {
	return Object.values(counts)
		.flatMap((codes) => Object.values(codes))
		.reduce((sum, count) => sum + count, 0);
}

/** File/code pairs above (regressions) or below (improvements) the baseline.
 * @param {Record<string, Record<string, number>>} baseline
 * @param {Record<string, Record<string, number>>} current
 */
export function compare(baseline, current) {
	const regressions = [];
	const improvements = [];
	const files = new Set([...Object.keys(baseline), ...Object.keys(current)]);
	for (const file of [...files].sort()) {
		const codes = new Set([
			...Object.keys(baseline[file] ?? {}),
			...Object.keys(current[file] ?? {})
		]);
		for (const code of [...codes].sort()) {
			const was = baseline[file]?.[code] ?? 0;
			const now = current[file]?.[code] ?? 0;
			if (now > was) regressions.push({ file, code, was, now });
			else if (now < was) improvements.push({ file, code, was, now });
		}
	}
	return { regressions, improvements };
}

const RUNE_MODULE = /.svelte.(ts|js)$/;
const SKIP = new Set([
	'.git',
	'node_modules',
	'dist',
	'.svelte-kit',
	'.package-input',
	'generated'
]);

async function* runeModules(directory) {
	for (const entry of await readdir(directory, { withFileTypes: true })) {
		if (SKIP.has(entry.name)) continue;
		const file = path.join(directory, entry.name);
		if (entry.isDirectory()) yield* runeModules(file);
		else if (RUNE_MODULE.test(entry.name)) yield file;
	}
}

/** Warnings of one rune module, compiled the way vite-plugin-svelte does (types stripped first).
 * @param {string} source @param {string} file repo-relative @param {Function} compileModule
 */
export function moduleDiagnostics(source, file, compileModule) {
	try {
		let js = source;
		if (file.endsWith('.ts')) {
			try {
				js = stripTypeScriptTypes(source);
			} catch {
				js = stripTypeScriptTypes(source, { mode: 'transform' });
			}
		}
		return compileModule(js, { filename: file, generate: 'client' }).warnings.map((warning) => ({
			type: 'WARNING',
			file,
			line: warning.start?.line ?? 0,
			column: warning.start?.column ?? 0,
			code: warning.code,
			message: warning.message
		}));
	} catch (error) {
		return [{ type: 'ERROR', file, line: 0, column: 0, code: 'compile', message: error.message }];
	}
}

async function runeModuleDiagnostics(root) {
	const diagnostics = [];
	for (const dir of ['src', 'modules']) {
		if (!existsSync(path.join(root, dir))) continue;
		for await (const absolute of runeModules(path.join(root, dir))) {
			const file = path.relative(root, absolute).replace(/\\/g, '/');
			diagnostics.push(...moduleDiagnostics(await readFile(absolute, 'utf8'), file, compileModule));
		}
	}
	return diagnostics;
}

function runSvelteCheck(root) {
	const require = createRequire(path.join(root, 'package.json'));
	const bin = path.join(
		path.dirname(require.resolve('svelte-check/package.json')),
		'bin',
		'svelte-check'
	);
	const run = spawnSync(
		process.execPath,
		[
			bin,
			'--tsconfig',
			'./tsconfig.json',
			'--diagnostic-sources',
			'svelte',
			'--threshold',
			'warning',
			'--output',
			'machine-verbose'
		],
		{ cwd: root, encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 }
	);
	if (run.error) throw run.error;
	return `${run.stdout}${run.stderr}`;
}

/** @param {string} root @param {{ update?: boolean, log?: (line: string) => void }} [options] */
export async function checkSvelteWarnings(root, { update = false, log = console.log } = {}) {
	// svelte.config.js throws on warnings under CI; this check only counts them.
	process.env.SVELTE_WARNINGS_REPORT = '1';
	const config = (await import(pathToFileURL(path.join(root, 'svelte.config.js')).href)).default;
	const diagnostics = applyOnwarn(
		[...parseDiagnostics(runSvelteCheck(root), root), ...(await runeModuleDiagnostics(root))],
		config.onwarn
	);

	const errors = diagnostics.filter((diagnostic) => diagnostic.type === 'ERROR');
	for (const error of errors) log(`  ERROR ${error.file}:${error.line} ${error.message}`);
	if (errors.length) throw new Error(`${errors.length} Svelte compile error(s)`);

	const privatePaths = boundary(root).privatePaths.map((dir) =>
		path.relative(root, dir).replace(/\\/g, '/')
	);
	const isPrivate = (file) =>
		privatePaths.some((dir) => file === dir || file.startsWith(`${dir}/`));
	const warnings = diagnostics.filter((diagnostic) => !isPrivate(diagnostic.file));
	const hidden = diagnostics.length - warnings.length;
	if (hidden) log(`[warnings] ${hidden} in private modules (not tracked in ${BASELINE_FILE})`);

	const current = tally(warnings);
	const baselinePath = path.join(root, BASELINE_FILE);
	if (update) {
		await writeFile(baselinePath, `${JSON.stringify(current, null, '\t')}\n`);
		log(
			`[warnings] baseline updated: ${total(current)} warnings in ${Object.keys(current).length} files`
		);
		return { regressions: [], improvements: [], total: total(current) };
	}

	const baseline = existsSync(baselinePath) ? JSON.parse(await readFile(baselinePath, 'utf8')) : {};
	const { regressions, improvements } = compare(baseline, current);
	for (const { file, code, was, now } of regressions) {
		log(`  + ${file} ${code}: ${was} -> ${now}`);
		for (const warning of warnings.filter((w) => w.file === file && w.code === code))
			log(`      ${warning.line}:${warning.column} ${warning.message.split('\n')[0]}`);
	}
	if (improvements.length) {
		const fixed = improvements.reduce((sum, { was, now }) => sum + was - now, 0);
		log(`[warnings] ${fixed} fewer than baseline - run yarn check:warnings:update to lock it in`);
	}
	log(`[warnings] ${total(current)} now, ${total(baseline)} in baseline`);
	if (regressions.length)
		throw new Error(`${regressions.length} file/code pair(s) above ${BASELINE_FILE}`);
	return { regressions, improvements, total: total(current) };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
	const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
	checkSvelteWarnings(root, { update: process.argv.includes('--update') }).catch((error) => {
		console.error(`[warnings] FAILED: ${error.message}`);
		process.exitCode = 1;
	});
}
