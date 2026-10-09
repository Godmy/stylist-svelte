import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { mkdtemp, mkdir, writeFile, readFile, stat, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { assemblePackageSource } from './assemble-package-source.mjs';
import { checkPackageSource } from './check-package-source.mjs';

test('physical modules validate and assemble one public package without private sources or Git metadata', async () => {
	const root = await mkdtemp(join(tmpdir(), 'stylist-assembly-'));
	try {
		const files = {
			'modules.json': JSON.stringify({
				common: { path: 'modules/common', sourceRoot: '.', domains: ['button', 'chat'] },
				travel: { path: 'modules/travel', sourceRoot: '.', private: true, domains: ['booking'] }
			}),
			'src/lib/index.ts': "export { BUTTON } from '../../modules/common/button';",
			'src/lib/index.full.ts': '',
			'modules/common/button/index.ts':
				"import { CHAT } from '$stylist/chat/index.js'; export const BUTTON = CHAT;",
			'modules/common/button/index.story.svelte': '<button />',
			'modules/common/button/.git/config': 'private git metadata',
			'modules/common/chat/index.ts': 'export const CHAT = 1;',
			'modules/travel/booking/index.ts': 'export const PRIVATE = 1;'
		};
		for (const [name, text] of Object.entries(files)) {
			await mkdir(join(root, name, '..'), { recursive: true });
			await writeFile(join(root, name), text);
		}
		assert.equal(await checkPackageSource(root), 3);
		const stage = await assemblePackageSource(root, join(root, '.package-input'));
		assert.equal(
			await readFile(join(stage, 'index.ts'), 'utf8'),
			"export { BUTTON } from './button';"
		);
		assert.match(await readFile(join(root, 'src/lib/index.ts'), 'utf8'), /modules\/common/);
		// Types are emitted only when the tsconfig sits in the package root (cwd), never in the stage.
		const tsconfig = JSON.parse(await readFile(join(root, 'tsconfig.package.json'), 'utf8'));
		assert.deepEqual(tsconfig.include, ['./.package-input/**/*']);
		for (const name of [
			'booking',
			'button/.git',
			'button/index.story.svelte',
			'index.full.ts',
			'tsconfig.json'
		]) {
			await assert.rejects(stat(join(stage, name)), /ENOENT/);
		}
		await writeFile(
			join(root, 'modules/common/button/index.ts'),
			"export { PRIVATE } from '$stylist/booking/index.js';"
		);
		await assert.rejects(checkPackageSource(root), /excluded source: booking/);
	} finally {
		await rm(root, { recursive: true, force: true });
	}
});
