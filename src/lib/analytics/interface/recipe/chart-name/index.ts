/**
 * ChartName — название графика..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 */
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ChartNameRecipe extends ThemeAttributes<HTMLHeadingElement> {
	label?: string;
	text?: string;
	x?: number;
	y?: number;
	color?: string;
}

export type ChartNameProps = ChartNameRecipe;
