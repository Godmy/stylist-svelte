#!/usr/bin/env node
// Writes the story migration summary reports of issue #5 from the files on disk:
//   docs/reports/story-migration/README.md               — all public modules
//   docs/reports/story-migration/<module>/README.md      — one module, by domain
//   docs/reports/story-migration/<module>/<domain>.md    — one domain, by family
// "Before" is each repository's `origin/main`; "after" is the working tree.
// Usage: node experiments/write-story-reports.mjs   (formats the reports with prettier)
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
const modulesDir = join(root, 'modules');
const outDir = join(root, 'docs/reports/story-migration');
const LEVELS = ['atom', 'molecule', 'organism', 'template', 'page'];
const PUBLIC = ['architecture', 'design-system', 'information', 'interaction', 'sandbox'];
const PRIVATE = ['business', 'customer', 'global', 'management', 'prototype'];

function* walk(dir) {
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
		const path = join(dir, entry.name);
		if (entry.isDirectory()) yield* walk(path);
		else yield path;
	}
}

/** Repository root (folder with `.git`) that owns a path. */
function repoOf(path) {
	let dir = dirname(path);
	while (!existsSync(join(dir, '.git'))) dir = dirname(dir);
	return dir;
}

const baseFiles = new Map();
/** Files of `origin/main` in a repository, relative to its root. */
function base(repo) {
	if (!baseFiles.has(repo)) {
		const list = execFileSync('git', ['-C', repo, 'ls-tree', '-r', '--name-only', 'origin/main'], {
			encoding: 'utf8',
			maxBuffer: 64 * 1024 * 1024
		});
		baseFiles.set(repo, new Set(list.split('\n').filter(Boolean)));
	}
	return baseFiles.get(repo);
}
const existedBefore = (path) => base(repoOf(path)).has(relative(repoOf(path), path));
const read = (path) => (existsSync(path) ? readFileSync(path, 'utf8') : null);

function storyStatus(ts, svelte) {
	if (ts) return svelte ? 'contract + render' : 'contract';
	return svelte ? 'legacy' : 'none';
}

const families = [];
for (const module of PUBLIC) {
	for (const path of walk(join(modulesDir, module))) {
		if (!path.endsWith('/index.svelte')) continue;
		const parts = relative(modulesDir, path).split('/');
		const c = parts.lastIndexOf('component');
		if (c < 2 || !LEVELS.includes(parts[c + 1]) || parts.length !== c + 4) continue;
		const dir = dirname(path);
		const domainDir = join(modulesDir, ...parts.slice(0, c));
		const tsPath = join(dir, 'index.story.ts');
		const sveltePath = join(dir, 'index.story.svelte');
		const statePath = join(dir, 'state.svelte.ts');
		const ts = read(tsPath);
		const render = read(sveltePath);
		const component = read(path);
		const state = read(statePath);
		const recipe = ts?.match(/ContractStory<\s*(Recipe\w+)/)?.[1] ?? null;
		const recipeImport = recipe
			? ts.match(new RegExp(`import type \\{[^}]*\\b${recipe}\\b[^}]*\\} from '([^']+)'`))?.[1]
			: null;
		let recipeNew = false;
		if (recipeImport) {
			const local = recipeImport.match(/interface\/recipe\/([\w-]+)$/)?.[1];
			const file = local && join(domainDir, 'interface/recipe', local, 'index.ts');
			if (file && existsSync(file)) recipeNew = !existedBefore(file);
		}
		families.push({
			module,
			domain: parts[c - 1],
			family: `${parts[c + 1]}/${parts[c + 2]}`,
			path: relative(root, dir),
			before: storyStatus(existedBefore(tsPath), existedBefore(sveltePath)),
			after: storyStatus(Boolean(ts), Boolean(render)),
			recipe,
			recipeNew,
			componentRecipe: /\bRecipe\w+/.test(component ?? ''),
			state: state !== null,
			stateRecipe: state === null ? null : /\bRecipe\w+/.test(state),
			controls: ts ? countKeys(ts, 'controls') : 0,
			presets: ts ? countKeys(ts, 'presets') : 0,
			tokens: [...new Set(ts?.match(/\bTOKEN_[A-Z0-9_]+/g) ?? [])].sort(),
			layout: ts?.match(/layout:\s*'(\w+)'/)?.[1] ?? null,
			reason:
				render
					?.match(/\/\/ Render of index\.story\.ts:\s*([^\n]+)/)?.[1]
					.replace(/\s*\|\s*/g, ' / ')
					.trim() ?? null
		});
	}
}
families.sort((a, b) => a.path.localeCompare(b.path));

/** Number of top-level keys of `name: { … }` in the story object. */
function countKeys(code, name) {
	const source = code.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
	const start = source.search(new RegExp(`\\n\\t${name}: \\{`));
	if (start < 0) return 0;
	let depth = 0;
	let keys = 0;
	for (let i = source.indexOf('{', start); i < source.length; i++) {
		const ch = source[i];
		if (ch === '{' || ch === '[' || ch === '(') depth++;
		else if (ch === '}' || ch === ']' || ch === ')') {
			depth--;
			if (depth === 0) break;
		} else if (depth === 1 && /[\w'"]/.test(ch) && /[{,]\s*$/.test(source.slice(start, i))) {
			const rest = source.slice(i).match(/^['"]?[\w-]+['"]?\s*:/);
			if (rest) keys++;
		}
	}
	return keys;
}

function summarize(rows) {
	const count = (key, value) => rows.filter((row) => row[key] === value).length;
	return {
		families: rows.length,
		legacyBefore: count('before', 'legacy'),
		noneBefore: count('before', 'none'),
		contract: count('after', 'contract'),
		rendered: count('after', 'contract + render'),
		legacyAfter: count('after', 'legacy'),
		noneAfter: count('after', 'none'),
		deleted: rows.filter((row) => row.before === 'legacy' && row.after === 'contract').length,
		newRecipes: rows.filter((row) => row.recipeNew).length,
		recipeEverywhere: rows.filter(
			(row) => row.recipe && row.componentRecipe && row.stateRecipe !== false
		).length,
		tokens: rows.filter((row) => row.tokens.length).length
	};
}

const SUMMARY_HEADER =
	'| | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |\n' +
	'|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|';
const summaryRow = (label, s) =>
	`| ${label} | ${s.families} | ${s.legacyBefore} | ${s.noneBefore} | ${s.contract} | ${s.rendered} | ${s.legacyAfter} | ${s.noneAfter} | ${s.recipeEverywhere} | ${s.newRecipes} | ${s.tokens} |`;

const cell = (value) => String(value).replace(/\|/g, '\\|');
const files = new Map();

const byModule = Map.groupBy(families, (row) => row.module);
const totals = summarize(families);
const intro = `Story migration of [issue #5](https://github.com/Godmy/stylist-svelte/issues/5): every
component family describes its story as \`index.story.ts\` (\`ContractStory\` typed by the
component recipe, the approach of \`modules/design-system/html\`), \`index.story.svelte\` stays only
as the custom render of that contract, and the recipe types \`index.svelte\`, \`state.svelte.ts\` and
\`index.story.ts\`. Generated by \`node experiments/write-story-reports.mjs\` from the files on disk;
"before" is \`origin/main\` of each module repository.`;

files.set(
	'README.md',
	`# Story migration report

${intro}

${SUMMARY_HEADER}
${[...byModule].map(([module, rows]) => summaryRow(`[${module}](${module}/README.md)`, summarize(rows))).join('\n')}
${summaryRow('**Total**', totals)}

- **Contract only**: \`index.story.ts\` is the whole story; the legacy \`index.story.svelte\` was
  deleted (${totals.deleted} families) or never existed.
- **Contract + render**: \`index.story.svelte\` receives the args as props and adds what a
  structured-cloneable contract cannot express; each domain report quotes the reason.
- **Token options**: select controls whose options come from the shared
  \`modules/design-system/design-token/const/array/*\` arrays or a domain's own \`TOKEN_*\` arrays.
- Checked by \`modules/sandbox/domain/test/render/story-contract/index.test.ts\` (every family has a
  contract typed by its recipe, args are cloneable, controls are sandbox types, the story mounts
  with every preset).

## Not migrated: private modules

${PRIVATE.map((name) => `- \`modules/${name}\``).join('\n')}

These submodules are private repositories that this migration could not access (\`gh repo view\`
returns 404), so their stories are unchanged. The same guide (\`experiments/story-migration-guide.md\`)
and checks apply to them.
`
);

for (const [module, rows] of byModule) {
	const byDomain = Map.groupBy(rows, (row) => row.domain);
	files.set(
		`${module}/README.md`,
		`# Story migration report: ${module}

${SUMMARY_HEADER}
${[...byDomain].map(([domain, list]) => summaryRow(`[${domain}](${domain}.md)`, summarize(list))).join('\n')}
${summaryRow('**Total**', summarize(rows))}

[All modules](../README.md)
`
	);
	for (const [domain, list] of byDomain) {
		const rendered = list.filter((row) => row.after === 'contract + render');
		files.set(
			`${module}/${domain}.md`,
			`# Story migration report: ${module} / ${domain}

${SUMMARY_HEADER}
${summaryRow(domain, summarize(list))}

| Family | Before | After | Recipe | State uses recipe | Controls | Presets | Token options | Layout |
|---|---|---|---|---|---:|---:|---|---|
${list
	.map(
		(row) =>
			`| \`${row.family}\` | ${row.before} | ${row.after} | ${row.recipe ? `\`${row.recipe}\`${row.recipeNew ? ' (new)' : ''}` : '—'} | ${row.stateRecipe === null ? '—' : row.stateRecipe ? 'yes' : '**no**'} | ${row.controls} | ${row.presets} | ${row.tokens.map((token) => `\`${token}\``).join(', ') || '—'} | ${row.layout ?? 'padded'} |`
	)
	.join('\n')}
${
	rendered.length
		? `\n## Custom renders\n\n${rendered.map((row) => `- \`${row.family}\`: ${cell(row.reason ?? '(no reason comment)')}`).join('\n')}\n`
		: ''
}
[${module}](README.md) · [All modules](../README.md)
`
		);
	}
}

rmSync(outDir, { recursive: true, force: true });
for (const [name, content] of files) {
	const path = join(outDir, name);
	mkdirSync(dirname(path), { recursive: true });
	writeFileSync(path, content);
}
execFileSync('npx', ['prettier', '--write', '--log-level', 'warn', outDir], { cwd: root });
console.log(`wrote ${files.size} reports, ${families.length} families`);
console.log(totals);
