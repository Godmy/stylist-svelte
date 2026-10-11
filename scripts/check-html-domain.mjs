import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, resolve, dirname, relative } from 'node:path';
import { pathToFileURL } from 'node:url';
import { compile } from 'svelte/compiler';
import { render } from 'svelte/server';
import { JSDOM } from 'jsdom';
import { HTML_ELEMENT } from '../modules/design-system/html/const/record/html-element/index.ts';
import assert from 'node:assert/strict';
import ts from 'typescript';
mkdirSync('.tmp/html-review', { recursive: true });
const root = resolve('modules/design-system/html');
const files = [];
function walk(dir) {
	for (const item of readdirSync(dir, { withFileTypes: true })) {
		const file = join(dir, item.name);
		if (item.isDirectory()) walk(file);
		else if (file.endsWith('.svelte')) files.push(file);
	}
}
walk(root);
const errors = [],
	warnings = [];
for (const file of files)
	for (const generate of ['client', 'server']) {
		try {
			const result = compile(readFileSync(file, 'utf8'), { filename: file, generate, runes: true });
			for (const warning of result.warnings) warnings.push({ file, generate, code: warning.code });
		} catch (e) {
			errors.push({ file, generate, message: e.message });
		}
	}
console.log(
	JSON.stringify(
		{
			files: files.length,
			tags: Object.keys(HTML_ELEMENT).length,
			restricted: Object.values(HTML_ELEMENT).filter((x) => x.restricted).length,
			errors,
			warnings
		},
		null,
		2
	)
);
assert.deepEqual(errors, []);
assert.deepEqual(warnings, []);
const compiled = new Map();
function compileFile(sourceFile) {
	if (compiled.has(sourceFile)) return compiled.get(sourceFile);
	const file = resolve(
		`.tmp/html-review/ssr-${relative(root, sourceFile).replaceAll(/[\\/.]/g, '_')}.mjs`
	);
	compiled.set(sourceFile, file);
	const source = readFileSync(sourceFile, 'utf8');
	const output = sourceFile.endsWith('.svelte')
		? compile(source, { filename: sourceFile, generate: 'server', runes: true }).js.code
		: ts.transpileModule(source, {
				compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 }
			}).outputText;
	const code = output.replace(/from (['"])([^'"]+)\1/g, (match, quote, specifier) => {
		if (!specifier.startsWith('.')) return match;
		const target = resolve(dirname(sourceFile), specifier);
		const dependency = compileFile(
			specifier.endsWith('.svelte') ? target : join(target, 'index.ts')
		);
		return `from '${pathToFileURL(dependency).href}'`;
	});
	writeFileSync(file, code);
	return file;
}
const artifacts = {};
for (const tag of ['script', 'style']) {
	const file = compileFile(join(root, `component/atom/${tag}/index.svelte`));
	const { default: Component } = await import(pathToFileURL(file).href);
	const result = render(Component, {
		props: { text: tag === 'script' ? 'globalThis.answer = 42;' : 'body { color: red; }' }
	});
	console.log(tag, JSON.stringify(result.body));
	if (tag === 'script') {
		const body = result.body.match(/<script[^>]*>([\s\S]*?)<\/script>/)?.[1];
		const sandbox = {};
		new Function('globalThis', body)(sandbox);
		assert.equal(sandbox.answer, 42);
		console.log('SSR script result:', JSON.stringify(sandbox));
	}
	if (tag === 'style') {
		const dom = new JSDOM(result.body);
		assert.equal(dom.window.document.querySelector('style').sheet.cssRules.length, 1);
		console.log(
			'SSR style cssRules:',
			dom.window.document.querySelector('style').sheet?.cssRules.length
		);
	}
	if (tag === 'script') {
		const json = render(Component, {
			props: { type: 'application/ld+json', text: '{"name":"test"}' }
		}).body.match(/<script[^>]*>([\s\S]*?)<\/script>/)?.[1];
		assert.deepEqual(JSON.parse(json), { name: 'test' });
		console.log('SSR JSON OK');
	}
	const text =
		tag === 'style' ? '.x::before { content: "&amp;"; }' : '{"name":"test","value":"&amp;"}';
	const props = tag === 'style' ? { text } : { type: 'application/ld+json', text };
	const html = render(Component, { props }).body;
	assert.equal(new JSDOM(html).window.document.querySelector(tag).textContent, text);
	artifacts[tag] = { html, props };
}
writeFileSync('.tmp/html-review/hydration.json', JSON.stringify(artifacts));
assert.deepEqual(
	artifacts,
	JSON.parse(readFileSync(join(root, 'data/json/html-hydration-sample/index.json'), 'utf8')),
	'Hydration fixtures must match current SSR output'
);
