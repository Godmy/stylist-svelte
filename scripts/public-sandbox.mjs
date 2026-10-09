import path from 'node:path';
import {
	readModules,
	selectModules,
	SERVER_DOMAINS,
	MODULES_ENV,
	EXCLUDE_MODULES_ENV
} from './prepare-module-sources.mjs';

/** Module selection ('all', 'public' or a comma list): deploy builds are public unless
 * STYLIST_MODULES says otherwise; dev keeps every module.
 * @param {'build' | 'serve'} command
 * @param {Record<string, string | undefined>} [env]
 */
export function sandboxSelection(command, env = process.env) {
	return {
		modules: env[MODULES_ENV] || (command === 'build' ? 'public' : 'all'),
		exclude: env[EXCLUDE_MODULES_ENV] ?? ''
	};
}

/** @param {string} file */
const normalize = (file) => {
	const slashed = file.replace(/\\/g, '/');
	return process.platform === 'win32' ? slashed.toLowerCase() : slashed;
};

/** Modules, domains and physical roots hidden from a sandbox build.
 * @param {string} packageRoot
 * @param {{ modules?: string, exclude?: string }} [selection]
 */
export function sandboxExclusion(packageRoot, selection = {}) {
	const registry = readModules(packageRoot);
	const kept = selectModules(registry, selection);
	const hidden = Object.entries(registry).filter(([name]) => !(name in kept));
	return {
		modules: new Set(hidden.map(([name]) => name)),
		domains: new Set(hidden.flatMap(([, module]) => module.domains)),
		/** Package-relative module folders, e.g. modules/travel. */
		paths: [
			...new Set(hidden.map(([, module]) => path.posix.normalize(module.path.replace(/\\/g, '/'))))
		]
	};
}

/** Domains the public source mirror never contains: hidden modules plus server code.
 * @param {ReturnType<typeof sandboxExclusion>} exclusion
 */
export const mirrorExcludedDomains = (exclusion) =>
	new Set([...exclusion.domains, ...SERVER_DOMAINS]);

/** Adds negative patterns to every import.meta.glob call so hidden files are never globbed.
 * @param {string} code
 * @param {string[]} negatives root-relative patterns such as '!/modules/travel/**'
 */
export function excludeFromGlobs(code, negatives) {
	if (!negatives.length || !code.includes('import.meta.glob')) return code;
	const extra = negatives.map((pattern) => JSON.stringify(pattern)).join(', ');
	return code
		.replace(/import\.meta\.glob(\s*<[^()]*?>)?\s*\(\s*\[/g, (match) => `${match}${extra}, `)
		.replace(
			/import\.meta\.glob(\s*<[^()]*?>)?\s*\(\s*('[^']*'|"[^"]*"|`[^`$]*`)/g,
			(_, generic = '', pattern) => `import.meta.glob${generic}([${pattern}, ${extra}]`
		);
}

/** Drops re-export statements of a generated barrel that point into hidden modules or domains.
 * Used only on mirrored copies; the real generated barrels are never edited by hand.
 * @param {string} code
 * @param {{ paths: string[], domains: Set<string> }} hidden
 */
export function stripHiddenExports(code, hidden) {
	const segments = [...hidden.paths, ...[...hidden.domains]];
	const isHidden = (specifier) => {
		const parts = specifier.replace(/\\/g, '/').split('/');
		return segments.some((segment) => {
			const wanted = segment.split('/');
			return parts.some((_, index) =>
				wanted.every((part, offset) => parts[index + offset] === part)
			);
		});
	};
	return code.replace(
		/export\s+(?:type\s+)?(?:\*(?:\s+as\s+\w+)?|\{[^}]*\})\s+from\s+(['"])([^'"]+)\1;?[ \t]*\r?\n?/g,
		(statement, _quote, specifier) => (isHidden(specifier) ? '' : statement)
	);
}

const sum = (rows, read) => rows.reduce((total, row) => total + (Number(read(row)) || 0), 0);
const JOINTS = ['atom', 'molecule', 'organism', 'template', 'page'];

/** Removes hidden domains from a generated sandbox manifest; unknown files pass through.
 * @param {string} file
 * @param {any} data
 * @param {Set<string>} domains
 */
export function filterSandboxManifest(file, data, domains) {
	const name = normalize(file);
	if (name.endsWith('/modules.json')) {
		return Object.fromEntries(
			Object.entries(data).filter(
				([, module]) => !module.domains?.some((domain) => domains.has(domain))
			)
		);
	}
	if (name.endsWith('/domain-page-manifest/index.json')) {
		return {
			...data,
			tree: Object.fromEntries(
				Object.entries(data.tree ?? {}).filter(([domain]) => !domains.has(domain))
			)
		};
	}
	if (name.endsWith('/domain-files/index.json')) {
		const rows = data.domains.filter((row) => !domains.has(row.name));
		return {
			...data,
			domains: rows,
			totals: {
				...data.totals,
				domains: rows.length,
				files: sum(rows, (row) => row.fileCount),
				...Object.fromEntries(
					JOINTS.map((joint) => [`${joint}s`, sum(rows, (row) => row.components?.[`${joint}s`])])
				)
			}
		};
	}
	if (name.endsWith('/domain-component-intervals/index.json')) {
		const rows = data.domains.filter((row) => !domains.has(row.name));
		return {
			...data,
			domains: rows,
			totals: {
				...data.totals,
				domains: rows.length,
				components: sum(rows, (row) => row.value),
				...Object.fromEntries(JOINTS.map((joint) => [`${joint}s`, sum(rows, (row) => row[joint])]))
			}
		};
	}
	if (name.endsWith('/domain-component-import-diagnostics/index.json')) {
		const rows = data.rows.filter((row) => !domains.has(row.domain));
		const removed = data.rows.length - rows.length;
		return {
			...data,
			rows,
			summary: {
				...data.summary,
				total: rows.length,
				none: rows.filter((row) => row.status === 'none').length,
				missingRecipe: rows.filter((row) => row.status === 'missingRecipe').length,
				scanned: Math.max(0, (data.summary?.scanned ?? 0) - removed)
			}
		};
	}
	return data;
}

/** Vite plugin: a sandbox build without hidden (by default private) modules.
 * Globs skip them, generated manifests drop them, and any import that still reaches a
 * hidden module fails the build instead of shipping its code.
 * @param {string} packageRoot
 */
export function publicSandbox(packageRoot) {
	/** @type {ReturnType<typeof sandboxExclusion> | undefined} */
	let exclusion;
	/** @type {string[]} */
	let roots = [];
	/** @type {string[]} */
	let negatives = [];
	const hiddenRoot = (id) => {
		const file = normalize(id.replace(/^\0/, '').split('?')[0]);
		return roots.find((root) => file === root || file.startsWith(`${root}/`));
	};

	return {
		name: 'stylist-public-sandbox',
		enforce: /** @type {const} */ ('pre'),
		/** @param {{ command: 'build' | 'serve' }} config */
		configResolved(config) {
			const selection = sandboxSelection(config.command);
			exclusion = sandboxExclusion(packageRoot, selection);
			roots = exclusion.paths.map((modulePath) => normalize(path.resolve(packageRoot, modulePath)));
			negatives = [
				...exclusion.paths.map((modulePath) => `!/${modulePath}/**`),
				...[...exclusion.domains].map((domain) => `!/src/lib/${domain}/**`)
			];
			if (exclusion.modules.size) {
				console.log(
					`[stylist-public-sandbox] modules=${selection.modules}; hidden: ${[...exclusion.modules].sort().join(', ')}`
				);
			}
		},
		/** @param {string} id */
		load(id) {
			const root = hiddenRoot(id);
			if (root) {
				throw new Error(
					`[stylist-public-sandbox] ${id} belongs to a hidden module (${root}). Public sandbox code must not import it; set STYLIST_MODULES=all for a private build.`
				);
			}
			return null;
		},
		/** @param {string} code @param {string} id */
		transform(code, id) {
			if (!exclusion?.modules.size) return null;
			const file = id.split('?')[0];
			if (file.endsWith('.json')) {
				const filtered = filterSandboxManifest(file, JSON.parse(code), exclusion.domains);
				return { code: JSON.stringify(filtered), map: null };
			}
			const rewritten = excludeFromGlobs(code, negatives);
			return rewritten === code ? null : { code: rewritten, map: null };
		}
	};
}
