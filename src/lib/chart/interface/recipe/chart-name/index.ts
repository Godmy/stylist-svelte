import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
/**
 * ChartName — название графика..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 */
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ChartNameRecipe extends StructIntersectAll<[ThemeAttributes<HTMLHeadingElement>]> {
	label?: string;
	text?: string;
	x?: number;
	y?: number;
	color?: string;
}
