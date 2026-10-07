#!/usr/bin/env node
// Captures screenshots of component stories from the running sandbox (`yarn dev`) for
// several device modes and writes an AI-ready `context.json` next to each PNG.
//
// There is no isolated `/preview/...` route yet (see src/routes/readme.md, section 6), so this
// script drives the sandbox explorer UI: domain -> cluster -> joint -> family -> device button.
//
// Usage (Playwright is not a project dependency; a global install is enough):
//   NODE_PATH="$(npm root -g)" node examples/capture-story-screenshots.mjs \
//     [--base http://localhost:5174] [--out artifacts/screenshots] \
//     travel-commerce/component/template/store-page button/component/atom/button
//
// Output: <out>/<domain>/<cluster>/<joint>/<family>/<device>.png and <device>.context.json

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const DEVICES = ['Mobile', 'Tablet', 'Desktop', 'Fullscreen'];

function parseArgs(argv) {
	const options = { base: 'http://localhost:5174', out: 'artifacts/screenshots', entities: [] };
	for (let i = 0; i < argv.length; i += 1) {
		if (argv[i] === '--base') options.base = argv[++i];
		else if (argv[i] === '--out') options.out = argv[++i];
		else options.entities.push(argv[i].replace(/\\/g, '/').replace(/\/$/, ''));
	}
	if (options.entities.length === 0) options.entities.push('button/component/atom/button');
	return options;
}

async function readIfExists(path) {
	try {
		return await readFile(path, 'utf8');
	} catch {
		return null;
	}
}

async function openEntity(page, [domain, cluster, joint, family]) {
	await page.getByRole('button', { name: domain, exact: true }).first().click();
	await page.getByRole('button', { name: cluster, exact: true }).first().click();
	await page.getByRole('button', { name: joint, exact: true }).first().click();
	await page.getByText(family, { exact: true }).first().click();
	await page.locator('.component-preview__surface').first().waitFor({ timeout: 60_000 });
}

// Layout problems a model cannot reliably infer from pixels alone.
function collectLayoutIssues() {
	const surface = document.querySelector('.component-preview__surface');
	if (!surface) return { error: 'preview surface not found' };
	const surfaceRect = surface.getBoundingClientRect();
	const overflowing = [];
	for (const element of surface.querySelectorAll('*')) {
		const rect = element.getBoundingClientRect();
		if (rect.width === 0 || rect.height === 0) continue;
		if (rect.right > surfaceRect.right + 1 || rect.left < surfaceRect.left - 1) {
			overflowing.push({
				tag: element.tagName.toLowerCase(),
				className: String(element.className).slice(0, 80),
				left: Math.round(rect.left - surfaceRect.left),
				right: Math.round(rect.right - surfaceRect.left)
			});
		}
	}
	const tinyText = [...surface.querySelectorAll('*')].filter((element) => {
		const hasText = [...element.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
		return hasText && parseFloat(getComputedStyle(element).fontSize) < 12;
	}).length;
	return {
		surfaceWidth: Math.round(surfaceRect.width),
		surfaceScrollWidth: surface.scrollWidth,
		windowMatchesMobileMedia: matchMedia('(max-width: 600px)').matches,
		overflowingElements: overflowing.length,
		overflowingSample: overflowing.slice(0, 10),
		tinyTextElements: tinyText
	};
}

async function main() {
	const options = parseArgs(process.argv.slice(2));
	const browser = await chromium.launch();
	const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
	const consoleErrors = [];
	page.on('console', (message) => message.type() === 'error' && consoleErrors.push(message.text()));
	page.on('pageerror', (error) => consoleErrors.push(String(error)));

	await page.goto(options.base, { waitUntil: 'networkidle', timeout: 120_000 });
	await page.getByText('Open Domain Workspace').first().click();

	for (const entityPath of options.entities) {
		const segments = entityPath.split('/');
		await openEntity(page, segments);
		const sourceDir = join('src/lib', entityPath);
		for (const device of DEVICES) {
			consoleErrors.length = 0;
			await page.getByRole('button', { name: device, exact: true }).click();
			await page.waitForTimeout(1500);
			const target = join(options.out, entityPath, device.toLowerCase());
			await mkdir(dirname(target), { recursive: true });
			await page
				.locator('.component-preview__surface')
				.first()
				.screenshot({ path: `${target}.png` });
			const context = {
				entityPath,
				device,
				window: page.viewportSize(),
				layout: await page.evaluate(collectLayoutIssues),
				consoleErrors: [...consoleErrors],
				sources: {
					component: await readIfExists(join(sourceDir, 'index.svelte')),
					story: await readIfExists(join(sourceDir, 'index.story.svelte'))
				}
			};
			await writeFile(`${target}.context.json`, JSON.stringify(context, null, '\t'));
			console.log(
				`${entityPath} ${device}: surface ${context.layout.surfaceWidth}px, ` +
					`scrollWidth ${context.layout.surfaceScrollWidth}px, ` +
					`${context.layout.overflowingElements} overflowing elements`
			);
		}
	}
	await browser.close();
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
