import { readdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { localImports } from './check-package-source.mjs';
import { readModules } from './prepare-module-sources.mjs';

const SOURCE = /\.(svelte|ts|js|mjs|cjs)$/;
const SKIP = new Set([
	'.git',
	'node_modules',
	'dist',
	'.svelte-kit',
	'.package-input',
	'generated'
]);

/** Generated files that are committed and must only describe public modules. */
export const GENERATED_PUBLIC_FILES = Object.freeze([
	'src/lib/index.ts',
	'modules/sandbox/domain/data/json/domain-page-manifest/index.json',
	'modules/sandbox/domain/data/json/domain-files/index.json',
	'modules/sandbox/domain/data/json/domain-component-intervals/index.json',
	'modules/sandbox/domain/data/json/domain-component-import-diagnostics/index.json'
]);

/** Local-only workspace artefacts (all modules); committing them publishes private names. */
export const LOCAL_ONLY_FILES = Object.freeze(['src/lib/index.full.ts']);

/** @param {string} root */
export function boundary(root) {
	const modules = readModules(root);
	const hidden = Object.entries(modules).filter(([, module]) => module.private);
	const shown = Object.entries(modules).filter(([, module]) => !module.private);
	const ownerPaths = (module) =>
		module.domainRoot ? [module.path] : module.domains.map((domain) => `${module.path}/${domain}`);
	return {
		privateModules: hidden.map(([name]) => name),
		privateDomains: new Set(hidden.flatMap(([, module]) => module.domains)),
		privatePaths: hidden.map(([, module]) => resolve(root, module.path)),
		publicOwners: shown
			.flatMap(([, module]) => ownerPaths(module))
			.map((path) => resolve(root, path))
	};
}

async function* walk(directory) {
	for (const entry of await readdir(directory, { withFileTypes: true })) {
		if (SKIP.has(entry.name)) continue;
		const path = join(directory, entry.name);
		if (entry.isDirectory()) yield* walk(path);
		else if (SOURCE.test(entry.name) && !entry.name.endsWith('.d.ts')) yield path;
	}
}

const inside = (path, parent) => {
	const rest = relative(parent, path);
	return rest === '' || (!rest.startsWith('..') && !rest.startsWith('/') && !/^[a-z]:/i.test(rest));
};

/** Why a specifier crosses into private code, or null.
 * @param {string} specifier @param {string} filename @param {ReturnType<typeof boundary>} scope
 */
export function privateTarget(specifier, filename, scope) {
	const clean = specifier.split('?')[0];
	if (clean === 'stylist-svelte-travel' || clean.startsWith('stylist-svelte-travel/'))
		return 'private package stylist-svelte-travel';
	for (const prefix of ['$stylist/', 'stylist-svelte/']) {
		if (
			clean.startsWith(prefix) &&
			scope.privateDomains.has(clean.slice(prefix.length).split('/')[0])
		) {
			return `private domain ${clean.slice(prefix.length).split('/')[0]}`;
		}
	}
	if (clean.startsWith('.')) {
		const target = resolve(dirname(filename), clean);
		const owner = scope.privatePaths.find((path) => inside(target, path));
		if (owner) return `private module path ${relative(dirname(owner), owner)}`;
	}
	return null;
}

/** Literal mentions of private module paths or domains inside a generated file.
 * @param {string} content @param {string} path @param {ReturnType<typeof boundary>} scope @param {string} root
 */
function generatedMentions(content, path, scope, root) {
	const found = new Set();
	for (const owner of scope.privatePaths) {
		const physical = relative(root, owner).replaceAll('\\', '/');
		if (content.includes(`${physical}/`) || content.includes(`'../../${physical}'`))
			found.add(physical);
	}
	if (path.endsWith('.json')) {
		const data = JSON.parse(content);
		for (const domain of Object.keys(data.tree ?? {}))
			if (scope.privateDomains.has(domain)) found.add(`domain ${domain}`);
		for (const row of data.rows ?? [])
			if (scope.privateDomains.has(row.domain)) found.add(`domain ${row.domain}`);
		for (const domain of Object.keys(data.domains ?? {}))
			if (scope.privateDomains.has(domain)) found.add(`domain ${domain}`);
	}
	return [...found];
}

function trackedByGit(root, path) {
	try {
		execFileSync('git', ['ls-files', '--error-unmatch', path], { cwd: root, stdio: 'ignore' });
		return true;
	} catch {
		return false;
	}
}

/** Scan public module sources, src/ (stories included: the sandbox renders them) and
 * committed generated files for any dependency on, or mention of, private modules.
 * @param {string} packageRoot
 * @param {{ git?: boolean }} [options]
 */
export async function checkPublicBoundary(packageRoot, { git = true } = {}) {
	const root = resolve(packageRoot);
	const scope = boundary(root);
	/** @type {Array<{ kind: string, file: string, detail: string }>} */
	const violations = [];
	let scanned = 0;
	const roots = [...scope.publicOwners, join(root, 'src')].filter((path) => existsSync(path));
	for (const sourceRoot of roots) {
		for await (const filename of walk(sourceRoot)) {
			if (scope.privatePaths.some((path) => inside(filename, path))) continue;
			scanned++;
			const content = await readFile(filename, 'utf8');
			if (filename === join(root, 'src/lib/index.full.ts')) continue;
			let imports;
			try {
				imports = localImports(filename, content);
			} catch (error) {
				violations.push({ kind: 'parse', file: relative(root, filename), detail: String(error) });
				continue;
			}
			for (const specifier of imports) {
				const reason = privateTarget(specifier, filename, scope);
				if (reason)
					violations.push({
						kind: 'import',
						file: relative(root, filename),
						detail: `${specifier} (${reason})`
					});
			}
		}
	}
	for (const path of GENERATED_PUBLIC_FILES) {
		const filename = join(root, path);
		if (!existsSync(filename)) continue;
		for (const mention of generatedMentions(await readFile(filename, 'utf8'), path, scope, root)) {
			violations.push({ kind: 'generated', file: path, detail: `mentions ${mention}` });
		}
	}
	if (git) {
		for (const path of LOCAL_ONLY_FILES) {
			if (trackedByGit(root, path))
				violations.push({
					kind: 'tracked',
					file: path,
					detail: 'all-modules root must stay local (.gitignore)'
				});
		}
	}
	return { violations, scanned, privateModules: scope.privateModules };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
	const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
	const { violations, scanned, privateModules } = await checkPublicBoundary(root);
	for (const violation of violations)
		console.error(`${violation.kind}: ${violation.file} -> ${violation.detail}`);
	console.log(
		`Public boundary: ${scanned} files scanned, private modules: ${privateModules.join(', ')}; ${violations.length} violation(s).`
	);
	process.exitCode = violations.length ? 1 : 0;
}
