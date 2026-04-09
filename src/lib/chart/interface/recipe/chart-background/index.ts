/**
 * ChartBackground — фон графика..
 *
 * LEGO-состав:

 */
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ChartBackgroundRecipe extends ThemeAttributes<SVGRectElement> {
	width?: number;
	height?: number;
	fill?: string;
	stroke?: string;
}
