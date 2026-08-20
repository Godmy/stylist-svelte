import { mkdir, writeFile } from 'node:fs/promises';

const cloudflareOutputDirectory = new URL('../.svelte-kit/cloudflare/', import.meta.url);
const assetsIgnoreFile = new URL('.assetsignore', cloudflareOutputDirectory);
const assetsIgnoreContent = ['_worker.js', '_routes.json', '_headers', ''].join('\n');

await mkdir(cloudflareOutputDirectory, { recursive: true });
await writeFile(assetsIgnoreFile, assetsIgnoreContent);
