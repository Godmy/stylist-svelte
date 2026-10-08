import { readFile, stat } from 'node:fs/promises';
import { dirname, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const PRIVATE_DOMAINS = new Set(['geo', 'wbd', 'server']);

async function resolveSource(target) {
	const candidates = [target];
	if (target.endsWith('.svelte')) candidates.push(target + '.ts');
	if (target.endsWith('.js')) candidates.push(target.slice(0, -3) + '.ts');
	if (!extname(target)) candidates.push(target + '.ts', target + '.svelte', target + '.json');
	candidates.push(join(target, 'index.ts'), join(target, 'index.svelte'));
	for (const candidate of candidates) {
		try {
			if ((await stat(candidate)).isFile()) return candidate;
		} catch {
			// Try the next source extension.
		}
	}
	throw new Error(`Package dependency is missing: ${target}`);
}

function localImports(filename, content) {
	const scripts = filename.endsWith('.svelte')
		? [...content.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].map((match) => match[1])
		: [content];
	const imports = [];
	for (const script of scripts) {
		const source = ts.createSourceFile(filename + '.ts', script, ts.ScriptTarget.Latest, true);
		function visit(node) {
			if (
				(ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) &&
				node.moduleSpecifier &&
				ts.isStringLiteral(node.moduleSpecifier)
			) {
				imports.push(node.moduleSpecifier.text);
			} else if (
				ts.isCallExpression(node) &&
				node.expression.kind === ts.SyntaxKind.ImportKeyword &&
				node.arguments.length === 1 &&
				ts.isStringLiteral(node.arguments[0])
			) {
				imports.push(node.arguments[0].text);
			}
			ts.forEachChild(node, visit);
		}
		visit(source);
	}
	return imports;
}

export async function checkPackageSource(packageRoot) {
	const lib = resolve(packageRoot, 'src/lib');
	try {
		await stat(join(lib, 'index.full.ts'));
	} catch {
		throw new Error(
			'Generated public/full entrypoints are missing. Dmitrii must run yarn stylist:index from the site root before packaging.'
		);
	}
	const pending = [join(lib, 'index.ts')];
	const visited = new Set();
	while (pending.length) {
		const filename = await resolveSource(pending.pop());
		if (visited.has(filename)) continue;
		visited.add(filename);
		const path = relative(lib, filename).replaceAll('\\', '/');
		if (
			path.startsWith('../') ||
			PRIVATE_DOMAINS.has(path.split('/')[0]) ||
			/^index\.full\./.test(path) ||
			/\.(story|test|spec)\./.test(path) ||
			/(^|\/)story-[^/]+\.svelte/.test(path)
		) {
			throw new Error(`Public package depends on an excluded source: ${path}`);
		}
		if (!filename.endsWith('.ts') && !filename.endsWith('.svelte')) continue;
		const content = await readFile(filename, 'utf8');
		for (const specifier of localImports(filename, content)) {
			const clean = specifier.split('?')[0];
			if (clean === '$stylist') pending.push(join(lib, 'index.ts'));
			else if (clean.startsWith('$stylist/')) pending.push(join(lib, clean.slice(9)));
			else if (clean.startsWith('.')) pending.push(resolve(dirname(filename), clean));
		}
	}
	return visited.size;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
	const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
	checkPackageSource(root)
		.then((count) => console.log(`Public package source: ${count} dependencies checked.`))
		.catch((error) => {
			console.error(error.message);
			process.exitCode = 1;
		});
}
