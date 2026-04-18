/**
 * PageEllipsis — многоточие страницы..
 *
 * LEGO-состав:

 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface PageEllipsisRecipe
	extends StructIntersectAll<[
		ThemeAttributes<HTMLSpanElement>
	]>
{}

