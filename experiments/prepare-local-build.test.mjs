import { strict as assert } from 'node:assert';
import { execFile } from 'node:child_process';
import { cp, mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { promisify } from 'node:util';
import { test } from 'node:test';

const exec = promisify(execFile);
const env = { ...process.env, GIT_ALLOW_PROTOCOL: 'file', GIT_TERMINAL_PROMPT: '0' };

async function git(cwd, ...args) {
	return exec('git', args, { cwd, env });
}

async function repository(root, name, files) {
	const path = join(root, name);
	await mkdir(path, { recursive: true });
	await git(path, 'init', '--quiet');
	await git(path, 'config', 'user.name', 'Checkout test');
	await git(path, 'config', 'user.email', 'checkout-test@example.invalid');
	for (const [file, content] of Object.entries(files)) {
		await writeFile(join(path, file), content);
	}
	return path;
}

async function commit(path) {
	await git(path, 'add', '.');
	await git(path, 'commit', '--quiet', '-m', 'Fixture');
}

async function fixture(t, { missingPublic = false } = {}) {
	const root = await mkdtemp(join(tmpdir(), 'stylist-checkout-'));
	t.after(() => rm(root, { recursive: true, force: true }));
	const nested = await repository(root, 'nested', { 'index.ts': 'export const icon = 1;' });
	await commit(nested);
	const owner = await repository(root, 'owner', { 'README.md': 'Public owner' });
	await mkdir(join(owner, 'text'));
	await writeFile(join(owner, 'text/index.ts'), 'export const text = 1;');
	await git(owner, 'submodule', 'add', '--quiet', nested, 'svg');
	await commit(owner);
	const source = await repository(root, 'source', {
		'modules.json': JSON.stringify({
			public: { path: 'modules/common', sourceRoot: '.', domains: ['text', 'svg'] },
			...(missingPublic && {
				business: { path: 'modules/business', sourceRoot: '.', domains: ['auth'] }
			}),
			private: { path: 'modules/private', private: true, domainRoot: true, domains: ['geo'] }
		})
	});
	await mkdir(join(source, 'experiments'));
	await mkdir(join(source, 'scripts'));
	await cp(
		new URL('./prepare-local-build.sh', import.meta.url),
		join(source, 'experiments/prepare-local-build.sh')
	);
	await cp(
		new URL('../scripts/prepare-module-sources.mjs', import.meta.url),
		join(source, 'scripts/prepare-module-sources.mjs')
	);
	await git(source, 'submodule', 'add', '--quiet', owner, 'modules/common');
	// Unreachable owners must never be silently omitted from public preparation.
	const declarations = [
		...(missingPublic ? [['modules/business', join(root, 'missing-business')]] : []),
		['modules/private', join(root, 'missing-private')]
	];
	for (const [path, url] of declarations) {
		await git(source, 'config', '--file', '.gitmodules', `submodule.${path}.path`, path);
		await git(source, 'config', '--file', '.gitmodules', `submodule.${path}.url`, url);
	}
	await git(source, 'add', '.');
	for (const [path] of declarations) {
		await git(
			source,
			'update-index',
			'--add',
			'--cacheinfo',
			`160000,${(await git(owner, 'rev-parse', 'HEAD')).stdout.trim()},${path}`
		);
	}
	await git(source, 'commit', '--quiet', '-m', 'Fixture');
	const checkout = join(root, 'checkout');
	await git(root, 'clone', '--quiet', source, checkout);
	return checkout;
}

test(
	'preparation checks out registered public owners and nested repositories only',
	{ timeout: 30000 },
	async (t) => {
		const cwd = await fixture(t);
		const result = await exec('bash', ['experiments/prepare-local-build.sh'], { cwd, env });
		assert.equal(
			await readFile(join(cwd, 'modules/common/text/index.ts'), 'utf8'),
			'export const text = 1;'
		);
		assert.equal(
			await readFile(join(cwd, 'modules/common/svg/index.ts'), 'utf8'),
			'export const icon = 1;'
		);
		assert.match(result.stdout, /2 domains ready/);
		await assert.rejects(readFile(join(cwd, 'src/lib/svg/index.ts')), { code: 'ENOENT' });
		await assert.rejects(readFile(join(cwd, 'modules/private/.git')), { code: 'ENOENT' });
		assert.equal((await git(cwd, 'status', '--porcelain')).stdout, '');
		await exec('bash', ['experiments/prepare-local-build.sh'], { cwd, env });
		assert.equal((await git(cwd, 'status', '--porcelain')).stdout, '');
	}
);

test(
	'preparation fails when a required public owner cannot be checked out',
	{ timeout: 30000 },
	async (t) => {
		const cwd = await fixture(t, { missingPublic: true });
		await assert.rejects(
			exec('bash', ['experiments/prepare-local-build.sh'], { cwd, env }),
			(error) => {
				assert.match(error.stderr, /missing-business/);
				assert.doesNotMatch(error.stdout, /ready: run/);
				return true;
			}
		);
	}
);

test('--revert remains a no-op on a clean clone', { timeout: 30000 }, async (t) => {
	const cwd = await fixture(t);
	const result = await exec('bash', ['experiments/prepare-local-build.sh', '--revert'], {
		cwd,
		env
	});
	assert.match(result.stdout, /nothing to revert/);
	await assert.rejects(readFile(join(cwd, 'modules/common/.git')), { code: 'ENOENT' });
	assert.equal((await git(cwd, 'status', '--porcelain')).stdout, '');
});
