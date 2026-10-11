import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { compileModule } from 'svelte/compiler';
import {
	applyOnwarn,
	compare,
	moduleDiagnostics,
	parseDiagnostics,
	tally,
	total
} from './check-svelte-warnings.mjs';

const root = path.resolve('/repo');
const entry = (filename, code, type = 'WARNING', source = 'svelte') =>
	`1791606471416 ${JSON.stringify({
		type,
		filename,
		start: { line: 9, character: 2 },
		end: { line: 9, character: 8 },
		message: `${code} message\nhttps://svelte.dev/e/${code}`,
		code,
		source
	})}`;

test('parses machine-verbose output into repo-relative warnings', () => {
	const output = [
		'1791606471000 START "/repo"',
		entry('modules\\a\\index.svelte', 'state_referenced_locally'),
		entry('modules/b/index.svelte', 'type_error', 'ERROR', 'ts'),
		'1791606471416 COMPLETED 2 FILES 0 ERRORS 1 WARNINGS 1 FILES_WITH_PROBLEMS'
	].join('\n');
	assert.deepEqual(parseDiagnostics(output, root), [
		{
			type: 'WARNING',
			file: 'modules/a/index.svelte',
			line: 10,
			column: 2,
			code: 'state_referenced_locally',
			message: 'state_referenced_locally message\nhttps://svelte.dev/e/state_referenced_locally'
		}
	]);
});

test('onwarn from svelte.config.js decides what is kept', () => {
	const diagnostics = parseDiagnostics(
		[
			entry('a/index.story.svelte', 'css_unused_selector'),
			entry('a/index.svelte', 'css_unused_selector')
		].join('\n'),
		root
	);
	const onwarn = (warning, handler) => {
		if (warning.filename.endsWith('.story.svelte')) return;
		handler(warning);
	};
	assert.deepEqual(
		applyOnwarn(diagnostics, onwarn).map((d) => d.file),
		['a/index.svelte']
	);
});

test('tally counts per file and code with sorted keys', () => {
	const counts = tally([
		{ file: 'b.svelte', code: 'x' },
		{ file: 'a.svelte', code: 'y' },
		{ file: 'a.svelte', code: 'x' },
		{ file: 'a.svelte', code: 'x' }
	]);
	assert.equal(JSON.stringify(counts), '{"a.svelte":{"x":2,"y":1},"b.svelte":{"x":1}}');
	assert.equal(total(counts), 4);
});

test('compare reports regressions and improvements per file/code', () => {
	const baseline = { 'a.svelte': { x: 2 }, 'b.svelte': { x: 1 } };
	const current = { 'a.svelte': { x: 1, y: 1 }, 'c.svelte': { x: 1 } };
	assert.deepEqual(compare(baseline, current), {
		regressions: [
			{ file: 'a.svelte', code: 'y', was: 0, now: 1 },
			{ file: 'c.svelte', code: 'x', was: 0, now: 1 }
		],
		improvements: [
			{ file: 'a.svelte', code: 'x', was: 2, now: 1 },
			{ file: 'b.svelte', code: 'x', was: 1, now: 0 }
		]
	});
});

test('rune modules are compiled after stripping types', () => {
	const source = [
		'export function create(): number {',
		'\tlet count = $state<number>(1);',
		'\tconst copy: number = count;',
		'\treturn copy;',
		'}'
	].join('\n');
	const [warning] = moduleDiagnostics(source, 'a/state.svelte.ts', compileModule);
	assert.equal(warning.code, 'state_referenced_locally');
	assert.deepEqual([warning.file, warning.line], ['a/state.svelte.ts', 3]);
	assert.equal(
		moduleDiagnostics('export const = ;', 'b.svelte.js', compileModule)[0].type,
		'ERROR'
	);
});
