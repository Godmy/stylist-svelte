import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { registerModuleSources } from './register-module-sources.mjs';

registerModuleSources();
const { HTML_STYLE } =
	await import('../modules/design-system/html/const/array/html-style/index.ts');
const { resolveStyleTokenUsage } =
	await import('../modules/design-system/design-token/function/resolve/style-token-usage/index.ts');

const usages = resolveStyleTokenUsage(HTML_STYLE);
const names = [...new Set(usages.map((usage) => usage.name))].sort();
const directory = fileURLToPath(
	new URL('../modules/design-system/design-token/data/json/html-requirement/', import.meta.url)
);
mkdirSync(directory, { recursive: true });
writeFileSync(
	`${directory}/index.json`,
	JSON.stringify(
		{
			date: '2026-10-11',
			source: 'html/const/array/html-style/index.ts',
			scope:
				'Observed references; emission is verified separately against light/dark theme providers.',
			rules: HTML_STYLE.length,
			names,
			usages,
			proposedCoverage: [
				{
					family: 'typography',
					priority: 'P0',
					content: ['text', 'headings', 'caption', 'code'],
					required: ['font family including mono', 'size', 'weight', 'line height', 'tracking'],
					status: 'implemented: body/heading/caption/code presets and relative small-text scale',
					next: []
				},
				{
					family: 'color',
					priority: 'P0',
					content: ['text', 'links', 'surfaces', 'controls', 'validation'],
					required: ['text', 'background', 'border', 'accent', 'on-accent', 'danger', 'backdrop'],
					status: 'implemented: active links, selected options, placeholder and readonly',
					next: ['visited links require a separate privacy-aware visual contract']
				},
				{
					family: 'spacing',
					priority: 'P0',
					content: ['lists', 'tables', 'forms', 'disclosures'],
					required: ['block rhythm', 'inline indentation', 'padding', 'gap'],
					status: 'implemented: compact/comfortable density; compatible decimal names preserved',
					next: []
				},
				{
					family: 'border',
					priority: 'P1',
					content: ['controls', 'table cells', 'separators', 'code'],
					required: ['radius'],
					status: 'implemented: border/separator widths and focus width/offset',
					next: []
				},
				{
					family: 'state-motion',
					priority: 'P1',
					content: ['interactive controls', 'validation', 'dialog'],
					required: ['disabled opacity', 'transition duration'],
					status: 'implemented: active/hover/focus/invalid/readonly, easing and reduced motion',
					next: []
				},
				{
					family: 'layout-media',
					priority: 'P1',
					content: ['image', 'video', 'canvas', 'svg', 'dialog'],
					required: ['modal elevation'],
					status: 'implemented: dialog width/gutter and modal elevation/stacking',
					next: ['media aspect-ratio/object-fit deferred until a media API consumes them']
				},
				{
					family: 'foreign-service',
					priority: 'P2',
					content: ['svg/math roots', 'metadata', 'raw text'],
					required: [],
					next: [
						'namespace-specific contract only when needed; no fabricated visual controls for metadata'
					]
				}
			]
		},
		null,
		2
	) + '\n'
);
console.log(
	`${HTML_STYLE.length} rules; ${usages.length} references; ${names.length} unique tokens`
);
