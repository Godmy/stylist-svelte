import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { HTML_STYLE } from '../modules/design-system/html/const/array/html-style/index.ts';
import { resolveStyleTokenUsage } from '../modules/design-system/design-token/function/resolve/style-token-usage/index.ts';

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
			date: '2026-10-10',
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
					next: ['body/heading/caption/code presets', 'relative small-text scale']
				},
				{
					family: 'color',
					priority: 'P0',
					content: ['text', 'links', 'surfaces', 'controls', 'validation'],
					required: ['text', 'background', 'border', 'accent', 'on-accent', 'danger', 'backdrop'],
					next: ['visited/active links', 'selection', 'placeholder', 'readonly']
				},
				{
					family: 'spacing',
					priority: 'P0',
					content: ['lists', 'tables', 'forms', 'disclosures'],
					required: ['block rhythm', 'inline indentation', 'padding', 'gap'],
					next: ['logical spacing names without decimal punctuation', 'compact/comfortable density']
				},
				{
					family: 'border',
					priority: 'P1',
					content: ['controls', 'table cells', 'separators', 'code'],
					required: ['radius'],
					next: ['width/style', 'focus width/offset', 'separator width']
				},
				{
					family: 'state-motion',
					priority: 'P1',
					content: ['interactive controls', 'validation', 'dialog'],
					required: ['disabled opacity', 'transition duration'],
					next: ['active/hover/focus/invalid/readonly', 'easing', 'reduced-motion policy']
				},
				{
					family: 'layout-media',
					priority: 'P1',
					content: ['image', 'video', 'canvas', 'svg', 'dialog'],
					required: ['modal elevation'],
					next: ['content width', 'dialog width', 'aspect ratio', 'object fit', 'overlay stacking']
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
