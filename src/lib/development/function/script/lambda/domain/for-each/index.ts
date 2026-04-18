import { readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const TREE_TRAVERSAL_DIRECTORY = dirname(fileURLToPath(import.meta.url));
const STYLIST_SVELTE_LIB_DIRECTORY = join(TREE_TRAVERSAL_DIRECTORY, '..', '..', '..', '..', '..', '..');

export function domainForEach(
	lambda: (context: {
		domainName: string;
		domainPath: string;
		libPath: string;
		index: number;
		total: number;
	}) => void | Promise<void>,
	options: {
		libPath?: string;
		filter?: (context: { domainName: string; domainPath: string; libPath: string }) => boolean;
	} = {}
): Promise<void> {
	return (async () => {
	const libPath = options.libPath ?? STYLIST_SVELTE_LIB_DIRECTORY;
	const domainEntries = readdirSync(libPath, { withFileTypes: true })
		.filter((entry) => entry.isDirectory())
		.map((entry) => ({
			domainName: entry.name,
			domainPath: join(libPath, entry.name),
			libPath
		}))
		.filter((context) => options.filter?.(context) ?? true)
		.sort((left, right) => left.domainName.localeCompare(right.domainName));

	for (const [index, domain] of domainEntries.entries()) {
		await lambda({
			...domain,
			index,
			total: domainEntries.length
		});
	}
	})();
}
