import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import {
	privateNames,
	tarballContentViolations,
	tarballPathViolations
} from './check-package-tarball.mjs';

const names = privateNames({
	common: { path: 'modules/common', domains: ['button'] },
	business: { path: 'modules/business', private: true, domains: ['chat'] },
	geo: { path: 'modules/geo', domainRoot: true, private: true, domains: ['geo'] }
});

test('packed paths reject private domains, server, stories, tests and the full root', () => {
	const files = [
		'package.json',
		'dist/index.js',
		'dist/button/index.js',
		'dist/chat/index.js',
		'dist/geo/x.svelte',
		'dist/server/a.js',
		'dist/button/index.story.svelte',
		'dist/button/x.test.js',
		'dist/index.full.js',
		'dist/tsconfig.json'
	];
	assert.deepEqual(
		tarballPathViolations(files, names).map((line) => line.split(':')[0]),
		[
			'dist/chat/index.js',
			'dist/geo/x.svelte',
			'dist/server/a.js',
			'dist/button/index.story.svelte',
			'dist/button/x.test.js',
			'dist/index.full.js',
			'dist/tsconfig.json'
		]
	);
});

test('packed contents reject private imports and module paths but allow public ones', () => {
	assert.deepEqual(
		tarballContentViolations('a.js', "import x from '$stylist/button/index.js';", names),
		[]
	);
	assert.equal(
		tarballContentViolations('a.js', "import x from 'stylist-svelte/chat/index.js';", names).length,
		1
	);
	assert.equal(
		tarballContentViolations('a.d.ts', "export * from '../../modules/geo/index';", names).length,
		1
	);
	assert.equal(
		tarballContentViolations('a.js', "import 'stylist-svelte-travel';", names).length,
		1
	);
});
