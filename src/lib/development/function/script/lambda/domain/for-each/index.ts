import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { forEachDirectory } from '$stylist/file/function/script/for-each';
import type { DomainForEachContext, DomainForEachOptions } from '$stylist/development';

const TREE_TRAVERSAL_DIRECTORY = dirname(fileURLToPath(import.meta.url));
const STYLIST_SVELTE_LIB_DIRECTORY = join(TREE_TRAVERSAL_DIRECTORY, '..', '..', '..', '..', '..', '..');

/**
 * Выполняет проход по всем доменам в директории lib.
 * Использует базовый кирпичик forEachDirectory для обхода папок.
 *
 * @param lambda - Функция, которая будет выполнена для каждого домена.
 * @param options - Опции для настройки процесса обхода.
 * @returns Промис, который разрешается после завершения всех итераций.
 */
export async function domainForEach(
	lambda: (context: DomainForEachContext) => void | Promise<void>,
	options: DomainForEachOptions = {}
): Promise<void> {
	const libPath = options.libPath ?? STYLIST_SVELTE_LIB_DIRECTORY;

	return forEachDirectory(
		libPath,
		async (entry) => {
			await lambda({
				domainName: entry.name,
				domainPath: entry.path,
				libPath,
				index: entry.index,
				total: entry.total
			});
		},
		{
			filter: (entry) =>
				options.filter?.({
					domainName: entry.name,
					domainPath: entry.path,
					libPath
				}) ?? true
		}
	);
}
