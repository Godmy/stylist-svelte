import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { copyFile, mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const hook = fileURLToPath(new URL('../.githooks/pre-push', import.meta.url));
const zero = '0'.repeat(40);

/** Git's own sh: on Windows a bare `sh` may resolve to WSL. */
function shell() {
	if (process.platform !== 'win32') return 'sh';
	const execPath = execFileSync('git', ['--exec-path'], { encoding: 'utf8' }).trim();
	const candidates = [
		path.resolve(execPath, '../../../usr/bin/sh.exe'),
		path.resolve(execPath, '../../../bin/sh.exe')
	];
	return candidates.find((candidate) => existsSync(candidate)) ?? 'sh';
}

async function repository(gateExitCode) {
	const root = await mkdtemp(path.join(tmpdir(), 'pre-push-'));
	const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim();
	git('init', '-q');
	git('config', 'user.email', 'test@example.com');
	git('config', 'user.name', 'test');
	await mkdir(path.join(root, '.githooks'));
	await copyFile(hook, path.join(root, '.githooks', 'pre-push'));
	if (gateExitCode !== null) {
		await mkdir(path.join(root, 'scripts'));
		await writeFile(
			path.join(root, 'scripts', 'stylist-gate.mjs'),
			`console.log('GATE RAN'); process.exitCode = ${gateExitCode};`
		);
	}
	git('add', '-A');
	git('commit', '-qm', 'init');
	return { root, head: git('rev-parse', 'HEAD') };
}

function push(root, lines) {
	return spawnSync(shell(), [path.join(root, '.githooks', 'pre-push'), 'origin', 'url'], {
		cwd: root,
		input: lines.map((line) => `${line}\n`).join(''),
		encoding: 'utf8'
	});
}

test('pushing main runs the gate and refuses on failure', async () => {
	for (const [exitCode, expected] of [
		[0, 0],
		[1, 1]
	]) {
		const { root, head } = await repository(exitCode);
		try {
			const result = push(root, [`refs/heads/main ${head} refs/heads/main ${zero}`]);
			assert.equal(result.status, expected, result.stderr);
			assert.match(result.stdout, /GATE RAN/);
			if (expected) assert.match(result.stderr, /REFUSED/);
		} finally {
			await rm(root, { recursive: true, force: true });
		}
	}
});

test('other branches and branch deletions skip the gate', async () => {
	const { root, head } = await repository(1);
	try {
		for (const line of [
			`refs/heads/x ${head} refs/heads/feature ${zero}`,
			`(delete) ${zero} refs/heads/main ${head}`
		]) {
			const result = push(root, [line]);
			assert.equal(result.status, 0, result.stderr);
			assert.doesNotMatch(result.stdout, /GATE RAN/);
		}
	} finally {
		await rm(root, { recursive: true, force: true });
	}
});

test('a missing gate blocks pushes to main', async () => {
	const { root, head } = await repository(null);
	try {
		const result = push(root, [`refs/heads/main ${head} refs/heads/main ${zero}`]);
		assert.equal(result.status, 1);
		assert.match(result.stderr, /missing/);
	} finally {
		await rm(root, { recursive: true, force: true });
	}
});
