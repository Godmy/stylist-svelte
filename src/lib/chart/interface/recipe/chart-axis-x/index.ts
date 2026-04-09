/**
 * ChartAxisX — ось X графика..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 */
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ChartAxisXRecipe extends ThemeAttributes<SVGGElement> {
	label?: string;
	y?: number;
	startX?: number;
	endX?: number;
	tickCount?: number;
	ticks?: number[];
	showArrow?: boolean;
	showGrid?: boolean;
	color?: string;
	tickLabels?: Array<string | number>;
}

export type ChartAxisXProps = ChartAxisXRecipe;
