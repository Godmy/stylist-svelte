/**
 * TableRow — строка таблицы..
 *
 * LEGO-состав:

 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { Snippet } from 'svelte';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface TableRowRecipe
	extends RecordArchitectureMerge<[
		ThemeAttributes<HTMLTableRowElement>
	]>
{
	content?: Snippet;
	striped?: boolean;
	active?: boolean;
}
