import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import {
	excludeFromGlobs,
	filterSandboxManifest,
	mirrorExcludedDomains,
	publicSandbox,
	sandboxExclusion,
	sandboxSelection,
	stripHiddenExports
} from './public-sandbox.mjs';
import { generateLibSourceMirror } from './generate-lib-source-mirror.mjs';

const registry = {
	core: { path: 'modules/core', domains: ['button', 'domain', 'server'], sourceRoot: '.' },
	travel: {
		path: 'modules/travel',
		private: true,
		domains: ['booking', 'travel-commerce'],
		sourceRoot: '.'
	},
	geo: { path: 'modules/geo', domainRoot: true, private: true, domains: ['geo'] }
};

async function fixture(files) {
	const root = await mkdtemp(path.join(tmpdir(), 'public-sandbox-'));
	await writeFile(path.join(root, 'modules.json'), JSON.stringify(registry));
	for (const [file, content] of Object.entries(files)) {
		await mkdir(path.dirname(path.join(root, file)), { recursive: true });
		await writeFile(path.join(root, file), content);
	}
	return root;
}

async function listFiles(directory, prefix = '') {
	const entries = await readdir(directory, { withFileTypes: true });
	const files = await Promise.all(
		entries.map((entry) =>
			entry.isDirectory()
				? listFiles(path.join(directory, entry.name), `${prefix}${entry.name}/`)
				: [`${prefix}${entry.name}`]
		)
	);
	return files.flat().sort();
}

test('deploy builds default to public modules, dev to all, env wins', () => {
	assert.deepEqual(sandboxSelection('build', {}), { modules: 'public', exclude: '' });
	assert.deepEqual(sandboxSelection('serve', {}), { modules: 'all', exclude: '' });
	assert.deepEqual(
		sandboxSelection('build', { STYLIST_MODULES: 'all', STYLIST_EXCLUDE_MODULES: 'core' }),
		{ modules: 'all', exclude: 'core' }
	);
});

test('exclusion lists hidden modules, their domains and folders', async () => {
	const root = await fixture({});
	try {
		const exclusion = sandboxExclusion(root, { modules: 'public' });
		assert.deepEqual([...exclusion.modules].sort(), ['geo', 'travel']);
		assert.deepEqual([...exclusion.domains].sort(), ['booking', 'geo', 'travel-commerce']);
		assert.deepEqual(exclusion.paths.sort(), ['modules/geo', 'modules/travel']);
		assert.ok(mirrorExcludedDomains(exclusion).has('server'));
		assert.equal(sandboxExclusion(root, { modules: 'all' }).modules.size, 0);
	} finally {
		await rm(root, { recursive: true, force: true });
	}
});

test('glob calls receive negative patterns in array, string and generic forms', () => {
	const negatives = ['!/modules/travel/**'];
	assert.equal(
		excludeFromGlobs(
			"import.meta.glob<{ default: Component }>([\n\t'/modules/*/*/x.svelte'\n])",
			negatives
		),
		'import.meta.glob<{ default: Component }>(["!/modules/travel/**", \n\t\'/modules/*/*/x.svelte\'\n])'
	);
	assert.equal(
		excludeFromGlobs("import.meta.glob('/modules.json', { eager: true })", negatives),
		'import.meta.glob([\'/modules.json\', "!/modules/travel/**"], { eager: true })'
	);
	assert.equal(excludeFromGlobs('const x = 1;', negatives), 'const x = 1;');
	assert.equal(excludeFromGlobs("import.meta.glob('/a')", []), "import.meta.glob('/a')");
});

test('mirrored root barrels lose re-exports of hidden modules and domains', () => {
	const barrel = [
		"export { Button } from '../../modules/core/button';",
		'export {',
		'	BookingBar,',
		'	formatGuestSummary',
		"} from '../../modules/travel/booking';",
		"export * from './geo';",
		'export type { Map } from "$stylist/geo/type";',
		"export * as chat from '../../modules/core/chat';",
		''
	].join('\r\n');
	assert.equal(
		stripHiddenExports(barrel, { paths: ['modules/travel'], domains: new Set(['geo', 'booking']) }),
		"export { Button } from '../../modules/core/button';\r\nexport * as chat from '../../modules/core/chat';\r\n"
	);
});

test('generated manifests drop hidden domains and recompute totals', () => {
	const hidden = new Set(['geo']);
	assert.deepEqual(filterSandboxManifest('x/modules.json', registry, hidden), {
		core: registry.core,
		travel: registry.travel
	});
	assert.deepEqual(
		filterSandboxManifest(
			'a/domain-page-manifest/index.json',
			{ tree: { button: 1, geo: 2 } },
			hidden
		),
		{ tree: { button: 1 } }
	);
	const files = filterSandboxManifest(
		'a\\domain-files\\index.json',
		{
			domains: [
				{
					name: 'button',
					fileCount: 3,
					components: { atoms: 1, molecules: 2, organisms: 0, templates: 0, pages: 0 }
				},
				{
					name: 'geo',
					fileCount: 9,
					components: { atoms: 4, molecules: 0, organisms: 1, templates: 0, pages: 0 }
				}
			],
			totals: {
				domains: 2,
				files: 12,
				atoms: 5,
				molecules: 2,
				organisms: 1,
				templates: 0,
				pages: 0
			}
		},
		hidden
	);
	assert.deepEqual(
		files.domains.map((row) => row.name),
		['button']
	);
	assert.deepEqual(files.totals, {
		domains: 1,
		files: 3,
		atoms: 1,
		molecules: 2,
		organisms: 0,
		templates: 0,
		pages: 0
	});
	const intervals = filterSandboxManifest(
		'a/domain-component-intervals/index.json',
		{
			domains: [
				{ name: 'button', value: 3, atom: 1, molecule: 2, organism: 0, template: 0, page: 0 },
				{ name: 'geo', value: 5, atom: 4, molecule: 0, organism: 1, template: 0, page: 0 }
			],
			totals: {
				domains: 2,
				components: 8,
				atoms: 5,
				molecules: 2,
				organisms: 1,
				templates: 0,
				pages: 0
			}
		},
		hidden
	);
	assert.deepEqual(intervals.totals, {
		domains: 1,
		components: 3,
		atoms: 1,
		molecules: 2,
		organisms: 0,
		templates: 0,
		pages: 0
	});
	const diagnostics = filterSandboxManifest(
		'a/domain-component-import-diagnostics/index.json',
		{
			rows: [
				{ domain: 'button', status: 'none' },
				{ domain: 'geo', status: 'missingRecipe' }
			],
			summary: { total: 2, none: 1, missingRecipe: 1, valid: 7, scanned: 9 }
		},
		hidden
	);
	assert.deepEqual(diagnostics.rows, [{ domain: 'button', status: 'none' }]);
	assert.deepEqual(diagnostics.summary, {
		total: 1,
		none: 1,
		missingRecipe: 0,
		valid: 7,
		scanned: 8
	});
	assert.deepEqual(filterSandboxManifest('a/other.json', { geo: 1 }, hidden), { geo: 1 });
});

test('public source mirror omits private modules and server code', async () => {
	const root = await fixture({
		'src/lib/index.ts':
			"export * from '../../modules/core/button';\nexport * from '../../modules/geo';\n",
		'src/lib/geo/legacy.ts': 'private',
		'modules/core/button/index.ts': 'public',
		'modules/core/domain/data/json/domain-page-manifest/index.json': JSON.stringify({
			tree: { button: 1, geo: 2, booking: 3 }
		}),
		'modules/core/server/secret.ts': 'server',
		'modules/travel/booking/index.ts': 'private',
		'modules/travel/travel-commerce/index.ts': 'private',
		'modules/geo/index.ts': 'private'
	});
	try {
		const target = path.join(root, 'mirror');
		await generateLibSourceMirror(root, path.join(root, 'src/lib/'), target, { modules: 'public' });
		assert.deepEqual(await listFiles(target), [
			'button/index.ts',
			'domain/data/json/domain-page-manifest/index.json',
			'index.ts'
		]);
		assert.deepEqual(
			JSON.parse(
				await readFile(
					path.join(target, 'domain/data/json/domain-page-manifest/index.json'),
					'utf8'
				)
			),
			{ tree: { button: 1 } }
		);
		assert.equal(
			await readFile(path.join(target, 'index.ts'), 'utf8'),
			"export * from '../../modules/core/button';\n"
		);
		await generateLibSourceMirror(root, path.join(root, 'src/lib/'), target, { modules: 'all' });
		assert.deepEqual(await listFiles(target), [
			'booking/index.ts',
			'button/index.ts',
			'domain/data/json/domain-page-manifest/index.json',
			'geo/index.ts',
			'geo/legacy.ts',
			'index.ts',
			'travel-commerce/index.ts'
		]);
	} finally {
		await rm(root, { recursive: true, force: true });
	}
});

async function viteBuild(root, entry, env) {
	const { build } = await import('vite');
	const saved = { ...process.env };
	Object.assign(process.env, env);
	try {
		await build({
			root,
			configFile: false,
			logLevel: 'silent',
			plugins: [publicSandbox(root)],
			build: {
				outDir: path.join(root, 'dist'),
				emptyOutDir: true,
				minify: false,
				lib: { entry: path.join(root, entry), formats: ['es'], fileName: 'out' }
			}
		});
		const dist = path.join(root, 'dist');
		const files = await listFiles(dist);
		return (await Promise.all(files.map((file) => readFile(path.join(dist, file), 'utf8')))).join(
			'\n'
		);
	} finally {
		process.env = saved;
	}
}

test('a real vite build skips hidden globs, filters modules.json and refuses hidden imports', async () => {
	const root = await fixture({
		'entry.js': [
			"const stories = import.meta.glob(['/modules/*/*/story.js', '/modules/geo/story.js'], { eager: true, import: 'default' });",
			"const registry = import.meta.glob('/modules.json', { eager: true, import: 'default' });",
			'export default { stories, registry };'
		].join('\n'),
		'leak.js': "export { default } from '/modules/travel/booking/story.js';",
		'modules/core/button/story.js': "export default 'PUBLIC_BUTTON';",
		'modules/travel/booking/story.js': "export default 'PRIVATE_BOOKING';",
		'modules/geo/story.js': "export default 'PRIVATE_GEO';"
	});
	try {
		const publicOutput = await viteBuild(root, 'entry.js', { STYLIST_MODULES: '' });
		assert.match(publicOutput, /PUBLIC_BUTTON/);
		assert.doesNotMatch(publicOutput, /PRIVATE_BOOKING|PRIVATE_GEO|modules\/travel|modules\/geo/);
		const allOutput = await viteBuild(root, 'entry.js', { STYLIST_MODULES: 'all' });
		assert.match(allOutput, /PRIVATE_BOOKING/);
		assert.match(allOutput, /PRIVATE_GEO/);
		await assert.rejects(viteBuild(root, 'leak.js', { STYLIST_MODULES: '' }), /hidden module/);
	} finally {
		if (existsSync(root)) await rm(root, { recursive: true, force: true });
	}
});
