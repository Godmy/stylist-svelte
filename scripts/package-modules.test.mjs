import { strict as assert } from 'node:assert';
import { existsSync, readdirSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { excludedPackageDomains, readModules, selectModules } from './prepare-module-sources.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const CLUSTERS = ['class', 'component', 'const', 'data', 'function', 'interface', 'test', 'type'];
const modules = {
	common: { path: 'modules/common', domains: ['button'] },
	business: { path: 'modules/business', domains: ['chat'] },
	travel: { path: 'modules/travel', private: true, domains: ['booking'] }
};

test('module selection matches the indexer rule: all, public, list and exclusions', () => {
	assert.deepEqual(Object.keys(selectModules(modules)), ['common', 'business', 'travel']);
	assert.deepEqual(Object.keys(selectModules(modules, { modules: 'public' })), [
		'common',
		'business'
	]);
	assert.deepEqual(Object.keys(selectModules(modules, { modules: 'common,travel' })), [
		'common',
		'travel'
	]);
	assert.deepEqual(Object.keys(selectModules(modules, { exclude: 'business, travel' })), [
		'common'
	]);
	assert.throws(() => selectModules(modules, { exclude: 'nope' }), /Unknown modules: nope/);
});

test('package.json files negations cover every excluded domain from modules.json', async () => {
	const files = JSON.parse(
		await readFile(new URL('../package.json', import.meta.url), 'utf8')
	).files;
	const excluded = excludedPackageDomains(root);
	for (const name of Object.keys(readModules(root))) {
		if (readModules(root)[name].private)
			assert.ok(readModules(root)[name].domains.every((domain) => excluded.has(domain)));
	}
	const missing = [...excluded].filter((domain) => !files.includes(`!dist/${domain}/**`));
	assert.deepEqual(
		missing,
		[],
		`add "!dist/<domain>/**" to package.json files for: ${missing.join(', ')}`
	);
});

test('moduleSources and aliases accept a selection or STYLIST_MODULES, packaging ignores it', async () => {
	const { mkdtemp, rm, writeFile } = await import('node:fs/promises');
	const { tmpdir } = await import('node:os');
	const { join } = await import('node:path');
	const { moduleSources, moduleAliases, MODULES_ENV } =
		await import('./prepare-module-sources.mjs');
	const dir = await mkdtemp(join(tmpdir(), 'stylist-select-'));
	const previous = process.env[MODULES_ENV];
	try {
		await writeFile(join(dir, 'modules.json'), JSON.stringify(modules));
		assert.deepEqual(Object.keys(moduleSources(dir)), ['button', 'chat', 'booking']);
		assert.deepEqual(Object.keys(moduleSources(dir, { modules: 'public' })), ['button', 'chat']);
		assert.equal(moduleAliases(dir, { modules: 'public' })['$stylist/booking'], undefined);
		process.env[MODULES_ENV] = 'public';
		assert.deepEqual(Object.keys(moduleSources(dir)), ['button', 'chat']);
		assert.deepEqual(Object.keys(moduleSources(dir, { modules: 'all', exclude: '' })), [
			'button',
			'chat',
			'booking'
		]);
	} finally {
		if (previous === undefined) delete process.env[MODULES_ENV];
		else process.env[MODULES_ENV] = previous;
		await rm(dir, { recursive: true, force: true });
	}
});

test('tsconfig.json includes every modules.json source owner', async () => {
	const include = JSON.parse(
		await readFile(new URL('../tsconfig.json', import.meta.url), 'utf8')
	).include;
	const missing = [];
	for (const module of Object.values(readModules(root))) {
		const owners = module.domainRoot
			? [module.path]
			: module.domains.map((domain) => `${module.path}/${domain}`);
		for (const owner of owners) {
			if (include.includes(`${owner}/**/*`)) continue;
			// A package root (own tsconfig, svelte.config, scripts) lists its clusters instead:
			// each cluster present on disk must be included; absent checkouts cannot be listed.
			if (!module.domainRoot || !include.some((entry) => entry.startsWith(`${owner}/`))) {
				missing.push(owner);
				continue;
			}
			const ownerDir = join(root, owner);
			const clusters = existsSync(ownerDir)
				? readdirSync(ownerDir, { withFileTypes: true })
						.filter((entry) => entry.isDirectory() && CLUSTERS.includes(entry.name))
						.map((entry) => entry.name)
				: [];
			for (const cluster of clusters)
				if (!include.includes(`${owner}/${cluster}/**/*`)) missing.push(`${owner}/${cluster}`);
		}
	}
	assert.deepEqual(
		missing,
		[],
		'svelte-check and types skip sources missing from tsconfig.json include'
	);
});
