#!/usr/bin/env node
// Recomputes the file preset of every component family in the sandbox manifest (issue #5).
// Usage: node experiments/update-manifest-presets.mjs [--write]
// The manifest (modules/sandbox/domain/data/json/domain-page-manifest/index.json) maps
// tree[domain].component[level][family] to a PRESET_FILE key; the sandbox explorer and file
// preview request exactly the files of that preset. After the story migration a family can
// gain index.story.ts and lose index.story.svelte, so its preset must follow the files on
// disk. Only component families are touched; the private generator (`yarn stylist:manifest`)
// produces the same mapping because presets are matched by exact file set.
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const manifestPath = join(root, 'modules/sandbox/domain/data/json/domain-page-manifest/index.json');
const presetPath = join(root, 'modules/sandbox/domain/const/preset/file/index.ts');
const write = process.argv.includes('--write');

const presets = new Map();
const source = readFileSync(presetPath, 'utf8');
for (const match of source.matchAll(/(\w+): \{\s*type: '(\w+)',\s*files: \[([^\]]*)\]/g)) {
	const files = [...match[3].matchAll(/'([^']+)'/g)].map((m) => m[1]).sort();
	if (match[2] === 'component') presets.set(files.join(','), match[1]);
}

// domain name → component directory on disk (modules/<module>/[<repo>/]<domain>/component)
const domains = new Map();
const LEVELS = new Set(['atom', 'molecule', 'organism', 'template', 'page']);
function scan(dir, depth) {
	if (depth > 3) return;
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		if (!entry.isDirectory() || entry.name.startsWith('.') || entry.name === 'node_modules')
			continue;
		const path = join(dir, entry.name);
		const component = join(path, 'component');
		if (existsSync(component) && statSync(component).isDirectory())
			if (readdirSync(component).some((level) => LEVELS.has(level))) {
				if (domains.has(entry.name) && domains.get(entry.name) !== component)
					console.warn(`duplicate domain ${entry.name}: ${domains.get(entry.name)} ${component}`);
				domains.set(entry.name, component);
			}
		scan(path, depth + 1);
	}
}
scan(join(root, 'modules'), 0);

const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
const changes = [];
const unknown = [];
const missing = [];
for (const [domain, clusters] of Object.entries(manifest.tree)) {
	const levels = clusters.component;
	if (!levels || !domains.has(domain)) continue;
	for (const [level, families] of Object.entries(levels)) {
		if (typeof families !== 'object') continue;
		for (const [family, preset] of Object.entries(families)) {
			if (typeof preset !== 'string') continue;
			const dir = join(domains.get(domain), level, family);
			if (!existsSync(dir)) {
				missing.push(`${domain}/component/${level}/${family}`);
				continue;
			}
			const files = readdirSync(dir, { withFileTypes: true })
				.filter((entry) => entry.isFile())
				.map((entry) => entry.name)
				.sort();
			const next = presets.get(files.join(','));
			if (!next) unknown.push(`${domain}/component/${level}/${family}: ${files.join(', ')}`);
			else if (next !== preset) {
				changes.push(`${domain}/component/${level}/${family}: ${preset} → ${next}`);
				families[family] = next;
			}
		}
	}
}

console.log(`changed: ${changes.length}`);
for (const line of changes) console.log(`  ${line}`);
console.log(`without matching preset: ${unknown.length}`);
for (const line of unknown) console.log(`  ${line}`);
if (missing.length) console.log(`in manifest but not on disk: ${missing.length}`);
for (const line of missing) console.log(`  ${line}`);
if (write && changes.length) {
	writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
	console.log(`written ${manifestPath}`);
}
if (unknown.length) process.exitCode = 1;
