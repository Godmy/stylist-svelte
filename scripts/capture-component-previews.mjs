#!/usr/bin/env node
// Generates publishable catalog PNGs using the sandbox's own DOM capture function.
// Run against a local `yarn dev` server. Existing PNGs are reused unless --force is passed.
import { createHash } from 'node:crypto';
import { spawn } from 'node:child_process';
import { access, copyFile, mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const root = fileURLToPath(new URL('../', import.meta.url));
const options = {
	base: 'http://127.0.0.1:5174',
	limit: Infinity,
	timeout: 20000,
	force: false,
	list: false,
	only: []
};
for (let i = 2; i < process.argv.length; i++) {
	const arg = process.argv[i];
	if (arg === '--base') options.base = process.argv[++i];
	else if (arg === '--limit') options.limit = Number(process.argv[++i]);
	else if (arg === '--timeout') options.timeout = Number(process.argv[++i]);
	else if (arg === '--debug-port') options.debugPort = Number(process.argv[++i]);
	else if (arg === '--chrome') options.chrome = process.argv[++i];
	else if (arg === '--force') options.force = true;
	else if (arg === '--list') options.list = true;
	else if (arg.startsWith('--')) throw new Error(`Unknown argument: ${arg}`);
	else options.only.push(arg.replaceAll('\\', '/').replace(/\/$/, ''));
}
if (
	'debugPort' in options &&
	(!Number.isInteger(options.debugPort) || options.debugPort < 1 || options.debugPort > 65535)
)
	throw new Error('Debug port must be an integer from 1 to 65535.');
if (!(options.limit > 0) || !(options.timeout > 0))
	throw new Error('Limit and timeout must be positive.');
const base = new URL(options.base);
if (!['localhost', '127.0.0.1', '[::1]'].includes(base.hostname))
	throw new Error('Use a local development server.');
const domainRoot = new URL('../modules/sandbox/domain/', import.meta.url);
const presetSource = ts.transpileModule(
	await readFile(new URL('const/preset/file/index.ts', domainRoot), 'utf8'),
	{
		compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext }
	}
).outputText;
const { PRESET_FILE } = await import(
	`data:text/javascript;base64,${Buffer.from(presetSource).toString('base64')}`
);
const manifest = JSON.parse(
	await readFile(new URL('data/json/domain-page-manifest/index.json', domainRoot), 'utf8')
);
const entries = [];
function walk(families, prefix) {
	for (const [name, value] of Object.entries(families)) {
		const id = `${prefix}/${name}`;
		if (typeof value !== 'string') {
			walk(value, id);
			continue;
		}
		if (!id.split('/').every((part) => /^[a-zA-Z0-9_-]+$/.test(part)))
			throw new Error(`Invalid entity address: ${id}`);
		const files = PRESET_FILE[value]?.files;
		if (!files) throw new Error(`Unknown preset: ${value}`);
		const story = files.includes('index.story.ts')
			? 'index.story.ts'
			: files.includes('index.story.svelte')
				? 'index.story.svelte'
				: null;
		if (
			story &&
			(!options.only.length ||
				options.only.some((filter) => id === filter || id.startsWith(`${filter}/`)))
		)
			entries.push({ id, story: `${id}/${story}` });
	}
}
for (const [domain, clusters] of Object.entries(manifest.tree)) {
	for (const [joint, families] of Object.entries(clusters.component ?? {}))
		walk(families, `${domain}/component/${joint}`);
}
const selected = entries.slice(0, options.limit);
if (options.list) {
	console.log(selected.map((entry) => entry.story).join('\n'));
	process.exit(0);
}
if (!selected.length) throw new Error('No matching component stories.');
await fetch(new URL('/preview', base), { signal: AbortSignal.timeout(120000) }).then((response) => {
	if (!response.ok) throw new Error(`Preview route returned ${response.status}`);
});
const chromeCandidates = [
	options.chrome,
	process.env.CHROME_PATH,
	'C:/Program Files/Google/Chrome/Application/chrome.exe',
	'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
	'/usr/bin/google-chrome',
	'/usr/bin/chromium',
	'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
].filter(Boolean);
let chrome;
for (const candidate of chromeCandidates) {
	try {
		await access(candidate);
		chrome = candidate;
		break;
	} catch {}
}
if (!chrome && !options.debugPort)
	throw new Error('Chrome/Chromium not found. Pass --chrome or CHROME_PATH.');
let child;
let launchError;
let profile;
if (!options.debugPort) {
	profile = join(root, '.tmp', `component-previews-chrome-${process.pid}-${Date.now()}`);
	await mkdir(profile, { recursive: true });
	child = spawn(
		chrome,
		[
			'--headless=new',
			'--disable-gpu',
			'--disable-extensions',
			'--disable-background-networking',
			'--disable-component-update',
			'--disable-default-apps',
			'--disable-sync',
			'--no-first-run',
			'--no-default-browser-check',
			'--remote-debugging-port=0',
			`--user-data-dir=${profile}`,
			'about:blank'
		],
		{ windowsHide: true, stdio: 'ignore' }
	);
	child.on('error', (error) => {
		launchError = error;
	});
}
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function connect(url) {
	const socket = new WebSocket(url);
	await new Promise((resolve, reject) => {
		socket.addEventListener('open', resolve, { once: true });
		socket.addEventListener('error', reject, { once: true });
	});
	let id = 0;
	const pending = new Map();
	socket.addEventListener('close', () => {
		for (const task of pending.values()) {
			clearTimeout(task.timer);
			task.reject(new Error('Chrome debugging connection closed.'));
		}
		pending.clear();
	});
	socket.addEventListener('message', ({ data }) => {
		const message = JSON.parse(data);
		const task = pending.get(message.id);
		if (!task) return;
		pending.delete(message.id);
		clearTimeout(task.timer);
		if (message.error) task.reject(new Error(message.error.message));
		else task.resolve(message.result);
	});
	return {
		socket,
		call(method, params = {}) {
			return new Promise((resolve, reject) => {
				if (socket.readyState !== WebSocket.OPEN) {
					reject(new Error('Chrome debugging connection is not open.'));
					return;
				}
				const request = ++id;
				const timer = setTimeout(() => {
					pending.delete(request);
					reject(new Error(`Timed out: ${method}`));
				}, options.timeout);
				pending.set(request, { resolve, reject, timer });
				socket.send(JSON.stringify({ id: request, method, params }));
			});
		}
	};
}
let browser, tab, borrowedTarget;
let succeeded = 0,
	skipped = 0;
const failures = [];
const staged = [];
const stagingRoot = join(root, '.tmp', 'component-previews-staging');
try {
	let port = options.debugPort;
	for (let attempt = 0; !port && attempt < 100; attempt++) {
		if (launchError) throw launchError;
		if (child?.exitCode !== null && child?.exitCode !== undefined)
			throw new Error('Chrome exited before opening its debugging port.');
		try {
			port = (await readFile(join(profile, 'DevToolsActivePort'), 'utf8')).split('\n')[0];
			break;
		} catch {
			await delay(100);
		}
	}
	if (!port) throw new Error('Chrome debugging port did not become available.');
	const debugBase = `http://127.0.0.1:${port}`;
	browser = await connect(
		(await fetch(`${debugBase}/json/version`).then((r) => r.json())).webSocketDebuggerUrl
	);
	async function openCaptureTab() {
		if (tab) {
			tab.socket.close();
			try {
				await browser.call('Target.closeTarget', { targetId: borrowedTarget });
			} catch {}
		}
		borrowedTarget = (await browser.call('Target.createTarget', { url: 'about:blank' })).targetId;
		const pages = await fetch(`${debugBase}/json/list`).then((r) => r.json());
		tab = await connect(pages.find((page) => page.id === borrowedTarget).webSocketDebuggerUrl);
		await tab.call('Page.enable');
		await tab.call('Runtime.enable');
		await tab.call('Emulation.setDeviceMetricsOverride', {
			width: 960,
			height: 640,
			deviceScaleFactor: 1,
			mobile: false
		});
		await tab.call('Page.addScriptToEvaluateOnNewDocument', {
			source: `window.addEventListener('message', event => { if(event.source === window && event.data?.type === 'stylist:story-ready' && event.data.story === new URL(location.href).searchParams.get('story')) window.__componentPreviewReady = true; });`
		});
	}
	await openCaptureTab();
	async function evaluate(expression) {
		const result = await tab.call('Runtime.evaluate', {
			expression,
			returnByValue: true,
			awaitPromise: true
		});
		if (result.exceptionDetails)
			throw new Error(
				result.exceptionDetails.exception?.description ?? result.exceptionDetails.text
			);
		return result.result.value;
	}
	for (const [index, entry] of selected.entries()) {
		const target = join(root, 'static', 'component-previews', `${entry.id}.png`);
		if (!options.force) {
			try {
				await access(target);
				skipped++;
				continue;
			} catch {}
		}
		const stage = join(stagingRoot, `${entry.id}.png`);
		if (!options.force) {
			try {
				await access(stage);
				staged.push({ stage, target });
				skipped++;
				continue;
			} catch {}
		}
		try {
			const url = new URL('/preview', base);
			url.searchParams.set('story', entry.story);
			await tab.call('Page.bringToFront');
			await tab.call('Page.navigate', { url: url.href });
			const started = Date.now();
			while (true) {
				const state = await evaluate(
					`location.search.includes(encodeURIComponent(${JSON.stringify(entry.story)})) ? ({ready: !!window.__componentPreviewReady && !!document.querySelector('.c-story-canvas, .component-preview__surface, .preview-story > *'), error: document.querySelector('.preview-state[role="alert"]')?.textContent}) : null`
				);
				if (state?.error) throw new Error(state.error);
				if (state?.ready) break;
				if (Date.now() - started > options.timeout)
					throw new Error('Story did not render a capture surface.');
				await delay(150);
			}
			await delay(350);
			const surfaceInfo = await evaluate(`(() => {
				const element = document.querySelector('.c-story-canvas, .component-preview__surface, .preview-story > *');
				const rect = element.getBoundingClientRect();
				return {native: element.querySelectorAll('*').length > 500 || !!element.querySelector('canvas, iframe, video'), clip:{x:Math.max(0,rect.x),y:Math.max(0,rect.y),width:Math.max(1,Math.min(rect.width,innerWidth-Math.max(0,rect.x))),height:Math.max(1,Math.min(rect.height,innerHeight-Math.max(0,rect.y))),scale:1}};
			})()`);
			let encoded;
			if (surfaceInfo.native) {
				const shot = await tab.call('Page.captureScreenshot', {
					format: 'png',
					clip: surfaceInfo.clip,
					captureBeyondViewport: false
				});
				encoded = `data:image/png;base64,${shot.data}`;
			} else
				encoded = await evaluate(`(async () => {
    await Promise.race([document.fonts.ready, new Promise(resolve => setTimeout(resolve, 250))]);
    const style = document.createElement('style');
    style.textContent = '* { animation-play-state: paused !important; transition: none !important; caret-color: transparent !important; }'; document.head.append(style);
    const {captureElementImage} = await import('/modules/sandbox/domain/function/capture/element-image/index.ts');
    const {resolveContentArea} = await import('/modules/sandbox/domain/function/resolve/content-area/index.ts');
    const surface = document.querySelector('.c-story-canvas, .component-preview__surface, .preview-story > *');
    const area = resolveContentArea(surface);
    const png = await captureElementImage(surface, area, Math.min(1, 640/area.width, 400/area.height));
    return await new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.onerror = reject; reader.readAsDataURL(png); });
   })()`);
			const bytes = Buffer.from(encoded.split(',')[1], 'base64');
			if (!bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])))
				throw new Error('Capture did not return a PNG.');
			await mkdir(dirname(stage), { recursive: true });
			await writeFile(stage, bytes);
			staged.push({ stage, target });
			succeeded++;
			console.log(`[${index + 1}/${selected.length}] ${entry.id}`);
		} catch (error) {
			failures.push({ id: entry.id, error: error.message });
			if (/Timed out|connection|context|Target/i.test(error.message)) await openCaptureTab();
			console.error(
				`[${index + 1}/${selected.length}] FAILED ${entry.id}: ${error.message.split('\n')[0]}`
			);
		}
	}
	// Publish after capture so Vite cannot reload other stories while they are being captured.
	for (const { stage, target } of staged) {
		await mkdir(dirname(target), { recursive: true });
		await copyFile(stage, target);
	}
	const indexFile = join(root, 'static', 'component-previews', 'index.json');
	let imageIndex = {};
	try {
		imageIndex = JSON.parse(await readFile(indexFile, 'utf8'));
	} catch {}
	for (const entry of selected) {
		try {
			const bytes = await readFile(join(root, 'static', 'component-previews', `${entry.id}.png`));
			imageIndex[entry.id] =
				`/component-previews/${entry.id}.png?v=${createHash('sha256').update(bytes).digest('hex').slice(0, 12)}`;
		} catch {}
	}
	await mkdir(dirname(indexFile), { recursive: true });
	const indexTemporary = `${indexFile}.${process.pid}.tmp`;
	await writeFile(
		indexTemporary,
		JSON.stringify(
			Object.fromEntries(Object.entries(imageIndex).sort(([a], [b]) => a.localeCompare(b))),
			null,
			2
		) + '\n'
	);
	await rename(indexTemporary, indexFile);
	console.log(JSON.stringify({ succeeded, skipped, failed: failures.length, failures }, null, 2));
	if (failures.length) process.exitCode = 1;
} finally {
	tab?.socket.close();
	if (browser) {
		try {
			if (options.debugPort && borrowedTarget)
				await browser.call('Target.closeTarget', { targetId: borrowedTarget });
			else await browser.call('Browser.close');
		} catch {}
		browser.socket.close();
	}
	if (child?.exitCode === null) child.kill();
}
