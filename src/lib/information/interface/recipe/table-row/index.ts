/**
 * TableRow — строка таблицы..
 *
 * LEGO-состав:

 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { Snippet } from 'svelte';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface TableRowRecipe
	extends StructIntersectAll<[
		ThemeAttributes<HTMLTableRowElement>
	]>
{
	content?: Snippet;
	striped?: boolean;
	active?: boolean;
}

