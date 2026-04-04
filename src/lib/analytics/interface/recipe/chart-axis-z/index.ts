/**
 * ChartAxisZ — ось Z графика..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 */
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ChartAxisZRecipe extends ThemeAttributes<SVGGElement> {
	label?: string;
	startX?: number;
	startY?: number;
	endX?: number;
	endY?: number;
	tickCount?: number;
	showArrow?: boolean;
	color?: string;
}

export type ChartAxisZProps = ChartAxisZRecipe;
