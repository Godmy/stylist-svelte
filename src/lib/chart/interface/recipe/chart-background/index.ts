import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
/**
 * ChartBackground — фон графика..
 *
 * LEGO-состав:

 */
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ChartBackgroundRecipe extends StructIntersectAll<[ThemeAttributes<SVGRectElement>]> {
	width?: number;
	height?: number;
	fill?: string;
	stroke?: string;
}
