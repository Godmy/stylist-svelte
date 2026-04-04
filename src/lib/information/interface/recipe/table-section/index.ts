/**
 * TableSection — секция таблицы (thead/tbody/tfoot)..
 *
 * LEGO-состав:

 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { Snippet } from 'svelte';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface TableSectionRecipe
	extends RecordArchitectureMerge<[
		ThemeAttributes<HTMLTableSectionElement>
	]>
{
	content?: Snippet;
}
