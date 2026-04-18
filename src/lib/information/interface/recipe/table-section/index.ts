/**
 * TableSection — секция таблицы (thead/tbody/tfoot)..
 *
 * LEGO-состав:

 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { Snippet } from 'svelte';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface TableSectionRecipe
	extends StructIntersectAll<[
		ThemeAttributes<HTMLTableSectionElement>
	]>
{
	content?: Snippet;
}

