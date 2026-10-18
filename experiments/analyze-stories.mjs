#!/usr/bin/env node
// Inventory of component stories in the public modules (issue #5).
// Usage: node experiments/analyze-stories.mjs [--json out.json] [--list [path-prefix]]
// Classifies every family folder that has a story:
//   contract  — index.story.ts only (the new approach)
//   rendered  — index.story.ts + index.story.svelte (custom render receiving args)
//   legacy    — index.story.svelte only (theme `Story` wrapper with SlotStory controls)
//   none      — index.svelte without any story
// For legacy stories it also estimates what the migration needs:
//   plain     — the story only renders the component with the control values → .ts is enough
//   custom    — extra markup, local state or several instances → keep a render
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const modulesDir = join(root, 'modules');
const LEVELS = new Set(['atom', 'molecule', 'organism', 'template', 'page']);

function* walk(dir) {
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
		const path = join(dir, entry.name);
		if (entry.isDirectory()) yield* walk(path);
		else yield path;
	}
}

function familyOf(path) {
	// modules/<module>/[<repo>/]<domain>/component/<level>/<family>/index.story.*
	const parts = relative(modulesDir, path).split('/');
	const c = parts.lastIndexOf('component');
	if (c < 2 || !LEVELS.has(parts[c + 1])) return null;
	return {
		module: parts[0],
		domain: parts[c - 1],
		level: parts[c + 1],
		family: parts[c + 2],
		dir: join(modulesDir, ...parts.slice(0, c + 3))
	};
}

function analyzeLegacy(source) {
	const children = /\{#snippet children\(([^)]*)\)\}([\s\S]*?)\{\/snippet\}/.exec(source);
	const body = children?.[2].trim() ?? '';
	const tags = body.match(/<[A-Za-z][\w.:-]*/g) ?? [];
	const singleSpread = tags.length === 1 && /\{\.\.\.\w+\}/.test(body);
	const usesState = /\$state|\$derived|\$effect/.test(source);
	const variants = /\{#snippet variants/.test(source);
	const controlTypes = [...source.matchAll(/type:\s*'(\w+)'/g)].map((m) => m[1]);
	const complexControls = controlTypes.filter((t) =>
		['object', 'array', 'json', 'function'].includes(t)
	);
	const plain = (!children || singleSpread) && !usesState && !variants;
	return {
		kind: plain ? 'plain' : 'custom',
		controls: controlTypes.length,
		complexControls: complexControls.length,
		usesState,
		variants,
		children: Boolean(children)
	};
}

const families = new Map();
for (const path of walk(modulesDir)) {
	if (!/\/index(\.story)?\.(svelte|ts)$/.test(path) || path.endsWith('/index.ts')) continue;
	const info = familyOf(path);
	if (!info) continue;
	const entry = families.get(info.dir) ?? { ...info, svelte: false, ts: false };
	if (path.endsWith('.story.svelte')) entry.svelte = true;
	else if (path.endsWith('.story.ts')) entry.ts = true;
	families.set(info.dir, entry);
}

const rows = [];
for (const entry of families.values()) {
	const files = readdirSync(entry.dir);
	const row = {
		module: entry.module,
		domain: entry.domain,
		family: `${entry.level}/${entry.family}`,
		path: relative(root, entry.dir),
		status: entry.ts
			? entry.svelte
				? 'rendered'
				: 'contract'
			: entry.svelte
				? 'legacy'
				: 'none',
		state: files.includes('state.svelte.ts'),
		readme: files.includes('readme.md'),
		recipe: false
	};
	const component = join(entry.dir, 'index.svelte');
	if (existsSync(component)) row.recipe = /\bRecipe\w+/.test(readFileSync(component, 'utf8'));
	const state = join(entry.dir, 'state.svelte.ts');
	if (row.state) row.stateRecipe = /\bRecipe\w+/.test(readFileSync(state, 'utf8'));
	if (row.status === 'legacy')
		Object.assign(row, analyzeLegacy(readFileSync(join(entry.dir, 'index.story.svelte'), 'utf8')));
	rows.push(row);
}
rows.sort((a, b) => a.path.localeCompare(b.path));

const count = (list, key) =>
	list.reduce((acc, row) => ((acc[row[key]] = (acc[row[key]] ?? 0) + 1), acc), {});
console.log('families:', rows.length);
console.log('by status:', count(rows, 'status'));
const legacy = rows.filter((row) => row.status === 'legacy');
console.log('legacy by kind:', count(legacy, 'kind'));
console.log('legacy by module:', count(legacy, 'module'));
console.log('without Recipe in index.svelte:', rows.filter((row) => !row.recipe).length);

console.log(
	'state.svelte.ts without Recipe:',
	rows.filter((row) => row.state && !row.stateRecipe).length
);

const list = process.argv.indexOf('--list');
if (list > 0) {
	const prefix = process.argv[list + 1] ?? '';
	for (const row of rows)
		if (
			row.path.startsWith(prefix) &&
			(['legacy', 'none'].includes(row.status) || !row.recipe || row.stateRecipe === false)
		)
			console.log(
				`${row.status}\t${row.recipe ? '' : 'no-recipe '}${row.stateRecipe === false ? 'state-no-recipe ' : ''}\t${row.path}`
			);
}

const out = process.argv.indexOf('--json');
if (out > 0) writeFileSync(process.argv[out + 1], `${JSON.stringify(rows, null, '\t')}\n`);
