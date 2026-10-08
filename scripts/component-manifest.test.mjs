import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import ts from 'typescript';

const root = new URL('../modules/observer/domain/', import.meta.url);
const compile = (source) =>
	ts.transpileModule(source, {
		compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext }
	}).outputText;
const dataUrl = (source) => `data:text/javascript;base64,${Buffer.from(source).toString('base64')}`;
const presetUrl = dataUrl(
	compile(await readFile(new URL('const/preset/file/index.ts', root), 'utf8'))
);
const { PRESET_FILE } = await import(presetUrl);
const PRESET_COMPONENT = Object.fromEntries(
	Object.entries(PRESET_FILE)
		.filter(([, preset]) => preset.type === 'component')
		.map(([key, preset]) => [key, preset.files])
);
const PRESET_CODE = Object.fromEntries(
	Object.entries(PRESET_FILE)
		.filter(([, preset]) => preset.files.length === 1 && preset.files[0] === 'index.ts')
		.map(([key, preset]) => [key, preset.files])
);
const resolverSource = compile(
	await readFile(new URL('function/resolve/file-preset/index.ts', root), 'utf8')
).replace('$stylist/domain/const/preset/file', presetUrl);
const resolverUrl = dataUrl(resolverSource);
const { resolveFilePreset } = await import(resolverUrl);
const familiesUrl = dataUrl(
	compile(await readFile(new URL('function/resolve/tree-families/index.ts', root), 'utf8'))
);
const normalizeUrl = dataUrl(
	compile(
		await readFile(new URL('function/transform/normalize-domain-tree/index.ts', root), 'utf8')
	)
);
const decoderSource = compile(
	await readFile(new URL('function/transform/expand-component-tree/index.ts', root), 'utf8')
)
	.replace('$stylist/domain/function/resolve/file-preset', resolverUrl)
	.replace('$stylist/domain/function/resolve/tree-families', familiesUrl)
	.replace('$stylist/domain/function/transform/normalize-domain-tree', normalizeUrl);
const { expandComponentTree } = await import(dataUrl(decoderSource));
const decoderUrl = dataUrl(decoderSource);
const descriptorSource = compile(
	await readFile(new URL('function/resolve/component-descriptor/index.ts', root), 'utf8')
).replace('$stylist/domain/function/transform/expand-component-tree', decoderUrl);
const descriptorUrl = dataUrl(descriptorSource);
const { resolveComponentDescriptor } = await import(descriptorUrl);
const countSource = compile(
	await readFile(new URL('function/count/stories/index.ts', root), 'utf8')
)
	.replace('$stylist/domain/function/resolve/file-preset', resolverUrl)
	.replace('$stylist/domain/function/resolve/tree-families', familiesUrl)
	.replace('$stylist/domain/function/transform/normalize-domain-tree', normalizeUrl);
const { countDomainStories } = await import(dataUrl(countSource));

test('every string key roundtrips through JSON and resolves its type and filenames', () => {
	for (const [key, preset] of Object.entries(PRESET_FILE)) {
		const name = JSON.parse(JSON.stringify(key));
		assert.deepEqual(resolveFilePreset(name), preset);
		assert.equal(resolveFilePreset(name).type, preset.type);
	}
	assert.throws(() => resolveFilePreset('UNKNOWN'), /Unknown file preset/);
	assert.throws(() => resolveFilePreset('__proto__'), /Unknown file preset/);
});

test('family dictionary resolves every preset and counts stories', () => {
	for (const [key, preset] of Object.entries(PRESET_FILE)) {
		const compact = [
			{
				name: 'example',
				cluster: [{ name: 'component', joint: [{ name: 'atom', family: { sample: key } }] }]
			}
		];
		const snapshot = structuredClone(compact);
		const entity = expandComponentTree(compact)[0].clusters[0].joints[0].entities[0];
		assert.equal(entity.path, 'example/component/atom/sample');
		assert.deepEqual(
			entity.files.map((file) => file.name),
			[...preset.files].sort()
		);
		assert.equal(countDomainStories(compact), preset.files.includes('index.story.svelte') ? 1 : 0);
		assert.deepEqual(compact, snapshot);
	}
});

test('nested tree supports direct lookup, equivalent expansion and missing domains', () => {
	const compact = {
		example: { component: { atom: { sample: 'INDEXED_REACTIVE_STORY_COMPONENT' } } }
	};
	const snapshot = structuredClone(compact);
	const legacy = [
		{
			name: 'example',
			cluster: [
				{ name: 'component', joint: [{ name: 'atom', family: compact.example.component.atom }] }
			]
		}
	];
	assert.equal(resolveFilePreset(compact.example.component.atom.sample).type, 'component');
	assert.deepEqual(expandComponentTree(compact), expandComponentTree(legacy));
	assert.equal(countDomainStories(compact), 1);
	assert.deepEqual(
		resolveComponentDescriptor(compact, 'example/component/atom/sample'),
		resolveComponentDescriptor(legacy, 'example/component/atom/sample')
	);
	assert.equal(resolveComponentDescriptor(compact, 'missing/component/atom/sample'), null);
	assert.equal(resolveComponentDescriptor(compact, '__proto__/component/atom/sample'), null);
	assert.deepEqual(expandComponentTree({}), []);
	assert.equal(countDomainStories({}), 0);
	assert.deepEqual(compact, snapshot);
});

test('tree-only descriptor API returns the existing projection shape', async () => {
	const source = compile(
		await readFile(new URL('../server/class/manager/domain/index.ts', root), 'utf8')
	);
	const kitUrl = dataUrl(
		'export const json = (value, init) => new Response(JSON.stringify(value), {headers:{"content-type":"application/json"}, ...init});'
	);
	const maxSizeUrl = dataUrl('export const CONTENT_PREVIEW_MAX_FILE_SIZE = 1048576;');
	const tree = [
		{
			name: 'example',
			cluster: [
				{
					name: 'component',
					joint: [{ name: 'atom', family: [{ name: 'sample', files: [{ name: 'index.svelte' }] }] }]
				}
			]
		}
	];
	const manifestUrl = dataUrl(`export default ${JSON.stringify({ tree })};`);
	const moduleSource = source
		.replace('@sveltejs/kit', kitUrl)
		.replace('$stylist/server/const/value/content-preview-max-file-size', maxSizeUrl)
		.replace('$stylist/domain/data/json/domain-page-manifest/index.json', manifestUrl)
		.replace('$stylist/domain/function/resolve/component-descriptor', descriptorUrl);
	const { DomainManager } = await import(dataUrl(moduleSource));
	assert.deepEqual(Object.keys(DomainManager.getDomainPageData()), ['tree']);
	const event = {
		url: new URL('https://example.test/api/descriptor?entityPath=example/component/atom/sample')
	};
	const response = await DomainManager.getDomainComponentProjectionResponse(event);
	assert.equal(response.status, 200);
	const value = await response.json();
	assert.deepEqual(value.architecture, {
		componentModulePath: 'example/component/atom/sample/index.svelte',
		recipeTypePath: null,
		stateFunctionPath: null,
		contractPaths: []
	});
	assert.deepEqual(value.information, { recipeJson: [], enumJson: [], mapJson: [] });
	assert.deepEqual(value.interaction, {
		stateJson: [],
		storyModulePath: null,
		hasStatePipeline: false
	});
	assert.equal(
		(
			await DomainManager.getDomainComponentProjectionResponse({
				url: new URL('https://example.test/api/descriptor')
			})
		).status,
		400
	);
	assert.equal(
		(
			await DomainManager.getDomainComponentProjectionResponse({
				url: new URL('https://example.test/api/descriptor?entityPath=missing')
			})
		).status,
		404
	);
});

test('tree-derived descriptor checks existence and respects state precedence', () => {
	const tree = [
		{
			name: 'example',
			cluster: [
				{
					name: 'component',
					joint: [
						{
							name: 'atom',
							family: [{ name: 'sample', component_type: 'INDEXED_REACTIVE_STORY_COMPONENT' }]
						}
					]
				},
				{
					name: 'interface',
					joint: [
						{ name: 'recipe', family: [{ name: 'sample', code: 'INDEXED_INTERFACE' }] },
						{ name: 'contract', family: [{ name: 'sample', code: 'INDEXED_INTERFACE' }] }
					]
				},
				{
					name: 'function',
					joint: [
						{
							name: 'state',
							family: [
								{ name: 'sample', files: [{ name: 'index.svelte.ts' }, { name: 'index.ts' }] }
							]
						}
					]
				},
				{
					name: 'data',
					joint: [
						{ name: 'json', family: [{ name: 'configuration', files: [{ name: 'index.json' }] }] }
					]
				}
			]
		}
	];
	const descriptor = resolveComponentDescriptor(tree, 'example/component/atom/sample');
	assert.equal(descriptor.recipeTypePath, 'example/interface/recipe/sample/index.ts');
	assert.equal(descriptor.stateFunctionPath, 'example/component/atom/sample/state.svelte.ts');
	assert.deepEqual(descriptor.contractPaths, ['example/interface/contract/sample/index.ts']);
	assert.deepEqual(descriptor.jsonPaths, ['example/data/json/configuration/index.json']);
	assert.equal(descriptor.hasStoryPreview, true);
	assert.equal(countDomainStories(tree), 1);
	const withoutLocalState = structuredClone(tree);
	withoutLocalState[0].cluster[0].joint[0].family[0].component_type = 'INDEXED_COMPONENT';
	assert.equal(
		resolveComponentDescriptor(withoutLocalState, descriptor.entityPath).stateFunctionPath,
		'example/function/state/sample/index.svelte.ts'
	);
	withoutLocalState[0].cluster[2].joint[0].family[0].files.shift();
	assert.equal(
		resolveComponentDescriptor(withoutLocalState, descriptor.entityPath).stateFunctionPath,
		'example/function/state/sample/index.ts'
	);
	const missing = [
		{
			name: 'example',
			cluster: [
				{
					name: 'component',
					joint: [
						{ name: 'atom', family: [{ name: 'sample', component_type: 'INDEXED_COMPONENT' }] }
					]
				}
			]
		}
	];
	assert.equal(
		resolveComponentDescriptor(missing, descriptor.entityPath).recipeTypePath,
		undefined
	);
	assert.equal(resolveComponentDescriptor(tree, 'example/component/atom/missing'), null);
	assert.equal(resolveComponentDescriptor(tree, 'missing/component/atom/sample'), null);
	assert.equal(countDomainStories(missing), 0);
});

test('cluster/joint/family names rebuild paths and preserve custom file paths', () => {
	const compact = [
		{
			name: 'animation',
			cluster: [
				{
					name: 'class',
					joint: [
						{
							name: 'manager',
							family: [
								{
									name: 'motion/variant',
									code: 'INDEXED_CLASS',
									files: [{ name: 'readme.md' }, { name: 'custom.ts', path: 'elsewhere/custom.ts' }]
								}
							]
						}
					]
				}
			]
		}
	];
	const snapshot = structuredClone(compact);
	const entity = entityOf(expandComponentTree(compact));
	assert.equal(entity.path, 'animation/class/manager/motion/variant');
	assert.deepEqual(entity.files, [
		{ name: 'custom.ts', path: 'elsewhere/custom.ts' },
		{ name: 'index.ts', path: 'animation/class/manager/motion/variant/index.ts' },
		{ name: 'readme.md', path: 'animation/class/manager/motion/variant/readme.md' }
	]);
	assert.deepEqual(compact, snapshot);
	assert.deepEqual(expandComponentTree(expandComponentTree(compact)), expandComponentTree(compact));
});

const tree = (entity, cluster = 'component') => [
	{
		name: 'example',
		clusters: [
			{
				name: cluster,
				joints: [{ name: 'atom', entities: [entity] }]
			}
		]
	}
];
const entityOf = (value) => value[0].clusters[0].joints[0].entities[0];

test('SVG preset restores paths, composes with code, and preserves extra files', () => {
	const entity = {
		name: 'cn',
		path: 'svg/data/flag/cn',
		svg: 'INDEX_SVG',
		code: 'INDEX_BARREL',
		files: [{ name: 'alternate.svg', path: 'svg/data/flag/cn/alternate.svg' }]
	};
	const input = tree(entity, 'data');
	const snapshot = structuredClone(input);
	const expanded = expandComponentTree(input);
	assert.deepEqual(
		entityOf(expanded).files,
		['alternate.svg', 'index.svg', 'index.ts'].map((name) => ({
			name,
			path: `${entity.path}/${name}`
		}))
	);
	assert.deepEqual(input, snapshot);
	assert.deepEqual(expandComponentTree(expanded), expanded);
	assert.deepEqual(
		entityOf(expandComponentTree(tree({ name: 'cn', path: entity.path, svg: 'INDEX_SVG' }, 'data')))
			.files,
		[{ name: 'index.svg', path: `${entity.path}/index.svg` }]
	);
	assert.throws(
		() => expandComponentTree(tree({ name: 'cn', path: entity.path, svg: 'UNKNOWN' })),
		/Unknown file preset/
	);
});

test('code and barrel presets restore index.ts and preserve other files', () => {
	for (const code of Object.keys(PRESET_CODE)) {
		const entity = {
			name: 'sample',
			path: 'social/interface/slot/sample',
			code,
			files: [{ name: 'readme.md', path: 'social/interface/slot/sample/readme.md' }]
		};
		const input = tree(entity, 'interface');
		const expanded = entityOf(expandComponentTree(input));
		assert.deepEqual(
			expanded.files,
			['index.ts', 'readme.md'].map((name) => ({ name, path: `${entity.path}/${name}` }))
		);
		assert.equal(input[0].clusters[0].joints[0].entities[0].files.length, 1);
		assert.deepEqual(expandComponentTree(expandComponentTree(input)), expandComponentTree(input));
		const withoutFiles = tree({ name: 'sample', path: entity.path, code }, 'interface');
		assert.deepEqual(entityOf(expandComponentTree(withoutFiles)).files, [
			{ name: 'index.ts', path: `${entity.path}/index.ts` }
		]);
	}
	assert.throws(
		() => expandComponentTree(tree({ name: 'sample', path: 'sample', files: [], code: 'UNKNOWN' })),
		/Unknown file preset/
	);
});

test('component presets and plain empty entities support omitted files', () => {
	const input = tree({
		name: 'sample',
		path: 'example/component/atom/sample',
		component_type: 'INDEXED_COMPONENT'
	});
	assert.deepEqual(
		entityOf(expandComponentTree(input)).files.map((file) => file.name),
		['index.svelte', 'index.ts']
	);
	assert.deepEqual(
		entityOf(expandComponentTree(tree({ name: 'sample', path: 'sample' }))).files,
		[]
	);
});

test('every preset restores files in name order and preserves unknown files', () => {
	for (const [key, names] of Object.entries(PRESET_COMPONENT)) {
		const entity = {
			name: 'sample',
			path: 'example/component/atom/sample',
			component_type: key,
			files: [{ name: 'extra.txt', path: 'example/component/atom/sample/extra.txt' }]
		};
		const input = tree(entity);
		const snapshot = structuredClone(input);
		const expanded = entityOf(expandComponentTree(input));
		assert.deepEqual(
			expanded.files,
			[...names, 'extra.txt'].sort().map((name) => ({ name, path: `${entity.path}/${name}` }))
		);
		assert.deepEqual(input, snapshot);
		assert.deepEqual(expandComponentTree(expandComponentTree(input)), expandComponentTree(input));
	}
});

test('legacy trees and other clusters stay unchanged', () => {
	const legacy = tree({
		name: 'sample',
		path: 'example/sample',
		files: [{ name: 'index.ts', path: 'custom/index.ts' }]
	});
	assert.deepEqual(expandComponentTree(legacy), legacy);
	const data = tree(
		{ name: 'sample', path: 'example/sample', files: [], component_type: 'INDEXED_COMPONENT' },
		'data'
	);
	assert.deepEqual(expandComponentTree(data), data);
});

test('unknown preset fails explicitly instead of silently hiding files', () => {
	assert.throws(
		() =>
			expandComponentTree(
				tree({ name: 'sample', path: 'sample', files: [], component_type: 'UNKNOWN' })
			),
		/Unknown file preset/
	);
});

test('existing complete manifest matches compressed copy after TS expansion', async () => {
	const original = JSON.parse(
		await readFile(new URL('data/json/domain-page-manifest/index.json', root), 'utf8')
	);
	const compressed = structuredClone(expandComponentTree(original.tree));
	const known = new Set(Object.values(PRESET_COMPONENT).flat());
	for (const domain of compressed)
		for (const cluster of domain.clusters) {
			if (cluster.name !== 'component') continue;
			for (const joint of cluster.joints)
				for (const entity of joint.entities) {
					const present = (entity.files ?? [])
						.filter((file) => known.has(file.name))
						.map((file) => file.name)
						.sort();
					const preset = Object.entries(PRESET_COMPONENT).find(
						([, names]) => JSON.stringify([...names].sort()) === JSON.stringify(present)
					);
					if (!preset) continue;
					entity.component_type = preset[0];
					entity.files = entity.files.filter((file) => !known.has(file.name));
				}
		}
	const expanded = expandComponentTree(compressed);
	for (const domain of expanded)
		for (const cluster of domain.clusters)
			for (const joint of cluster.joints) {
				for (const entity of joint.entities) {
					delete entity.component_type;
					delete entity.code;
					delete entity.svg;
					delete entity.preset;
				}
			}
	const expected = expandComponentTree(original.tree);
	for (const domain of expected)
		for (const cluster of domain.clusters)
			for (const joint of cluster.joints) {
				for (const entity of joint.entities) {
					delete entity.component_type;
					delete entity.code;
					delete entity.svg;
					delete entity.preset;
				}
			}
	assert.deepEqual(expanded, expected);
});
