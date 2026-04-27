import { readdirSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Универсальная функция для итерации по папкам в указанной директории.
 * 
 * @param directoryPath - Путь к директории, папки в которой нужно обойти.
 * @param lambda - Функция, выполняемая для каждой найденной папки.
 * @param options - Опции фильтрации.
 */
export async function forEachDirectory(
	directoryPath: string,
	lambda: (context: {
		name: string;
		path: string;
		index: number;
		total: number;
	}) => void | Promise<void>,
	options: {
		filter?: (context: { name: string; path: string }) => boolean;
	} = {}
): Promise<void> {
	const entries = readdirSync(directoryPath, { withFileTypes: true })
		.filter((entry) => entry.isDirectory())
		.map((entry) => ({
			name: entry.name,
			path: join(directoryPath, entry.name)
		}))
		.filter((context) => options.filter?.(context) ?? true)
		.sort((left, right) => left.name.localeCompare(right.name));

	for (const [index, entry] of entries.entries()) {
		await lambda({
			...entry,
			index,
			total: entries.length
		});
	}
}
