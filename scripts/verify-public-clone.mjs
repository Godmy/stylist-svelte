// Proof that main is deployable without private code: clone the committed tree, initialise only
// public module submodules (private ones stay empty, as for Cloudflare without access to them),
// install, run the gate, build the public sandbox and scan the result.
// Usage: node scripts/verify-public-clone.mjs <empty target dir> [--github] [--working-tree] [--skip-install]
//   --github: fetch submodules from their GitHub URLs (exactly what the cloud sees, needs pushed
//             commits); default: from the local checkouts, so unpushed local commits are testable.
//   --working-tree: rehearsal with uncommitted work: the umbrella's changes plus its untracked
//             tooling (scripts/, .githooks/, docs/), and public modules (with nested repositories)
//             at their local HEAD plus their uncommitted and untracked files. The proof runs on commits.
import { execFileSync } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readModules } from './prepare-module-sources.mjs';
import { sandboxExclusion, sandboxSelection } from './public-sandbox.mjs';

const source = fileURLToPath(new URL('../', import.meta.url));
const args = process.argv.slice(2);
const target = args.find((arg) => !arg.startsWith('--'));
const fromGithub = args.includes('--github');
const workingTree = args.includes('--working-tree');
if (!target) throw new Error('Target directory is required.');
if (existsSync(target) && readdirSync(target).length) throw new Error(`Target is not empty: ${target}`);

const selection = sandboxSelection('build');
const timings = [];
const lines = (text) => text.split(/\r?\n/).filter(Boolean);

/** @param {string} cwd @param {string[]} gitArgs @param {Buffer} [input] */
const git = (cwd, gitArgs, input) => execFileSync('git', ['-c', 'protocol.file.allow=always', ...gitArgs], {
	cwd, input, encoding: input ? undefined : 'utf8', maxBuffer: 1 << 30
});

function step(name, command, commandArgs, options = {}) {
	const started = Date.now();
	console.log(`\n=== ${name}: ${command} ${commandArgs.join(' ')}`);
	const viaShell = process.platform === 'win32' && command !== 'git' && command !== 'node';
	try {
		execFileSync(viaShell ? `${command}.cmd` : command, commandArgs, { cwd: target, stdio: 'inherit', shell: viaShell, ...options });
		timings.push([name, Date.now() - started, 'ok']);
	} catch (error) {
		timings.push([name, Date.now() - started, `FAILED (${error.status ?? error.message})`]);
		throw error;
	}
}

/** Copies one repository's uncommitted tracked changes and the untracked files it keeps. */
function overlay(from, to, keepUntracked, label) {
	const diff = execFileSync('git', ['diff', 'HEAD', '--binary', '--ignore-submodules=all'], { cwd: from, maxBuffer: 1 << 30 });
	if (diff.length) git(to, ['apply', '--whitespace=nowarn'], diff);
	const untracked = lines(git(from, ['ls-files', '--others', '--exclude-standard'])).filter(keepUntracked);
	for (const file of untracked) {
		mkdirSync(path.dirname(path.join(to, file)), { recursive: true });
		copyFileSync(path.join(from, file), path.join(to, file));
	}
	timings.push([`overlay ${label}`, 0, `ok (${diff.length} diff bytes, ${untracked.length} untracked)`]);
}

let failed = false;
try {
	step('clone', 'git', ['clone', '--quiet', source, target], { cwd: undefined });
	if (workingTree) overlay(source, target, (file) => /^(?:scripts|\.githooks|docs)\//.test(file), 'umbrella');
	const registry = readModules(target);
	const hidden = sandboxExclusion(target, selection);
	const publicModules = Object.entries(registry).filter(([name]) => !hidden.modules.has(name));
	console.log(`public: ${publicModules.map(([name]) => name).join(', ')}; private (left empty): ${[...hidden.modules].join(', ')}`);
	for (const [, module] of publicModules) {
		if (!fromGithub) step(`url ${module.path}`, 'git', ['config', `submodule.${module.path}.url`, path.join(source, module.path)]);
	}
	step('submodules', 'git', ['-c', 'protocol.file.allow=always', 'submodule', 'update', '--init', '--recursive', '--', ...publicModules.map(([, module]) => module.path)]);
	if (workingTree) {
		for (const [, module] of publicModules) {
			const nested = lines(git(path.join(source, module.path), ['submodule', 'foreach', '--recursive', '--quiet', 'echo $displaypath']));
			for (const repository of [module.path, ...nested.map((nestedPath) => path.join(module.path, nestedPath))]) {
				const from = path.join(source, repository);
				const to = path.join(target, repository);
				const head = git(from, ['rev-parse', 'HEAD']).trim();
				git(to, ['fetch', '--quiet', from, head]);
				git(to, ['checkout', '--quiet', head]);
				overlay(from, to, () => true, repository);
			}
		}
	}
	if (!args.includes('--skip-install')) step('install', 'yarn', ['install', '--immutable']);
	if (existsSync(path.join(target, 'scripts', 'stylist-gate.mjs'))) step('gate', 'node', ['scripts/stylist-gate.mjs']);
	else timings.push(['gate', 0, 'skipped (scripts/stylist-gate.mjs not present)']);
	step('mirror', 'node', ['scripts/generate-lib-source-mirror.mjs']);
	step('vite build', 'npx', ['vite', 'build']);
	step('assets ignore', 'node', ['scripts/write-cloudflare-assets-ignore.mjs']);
	step('verify build', 'node', ['scripts/verify-public-build.mjs']);
} catch (error) {
	if (!timings.some(([, , status]) => status.startsWith('FAILED'))) timings.push(['harness', 0, `FAILED (${error.message})`]);
	failed = true;
} finally {
	console.log(`\nverify-public-clone (modules=${selection.modules}${selection.exclude ? `, exclude=${selection.exclude}` : ''}):`);
	for (const [name, ms, status] of timings) console.log(`  ${name.padEnd(36)} ${(ms / 1000).toFixed(1).padStart(7)} s  ${status}`);
	if (failed) process.exitCode = 1;
}
