import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
/**
 * ChartAxisZ — ось Z графика..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 */
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ChartAxisZRecipe extends StructIntersectAll<[ThemeAttributes<SVGGElement>]> {
	label?: string;
	startX?: number;
	startY?: number;
	endX?: number;
	endY?: number;
	tickCount?: number;
	showArrow?: boolean;
	color?: string;
}
