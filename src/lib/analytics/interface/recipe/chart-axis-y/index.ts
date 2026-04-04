/**
 * ChartAxisY — ось Y графика..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 */
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ChartAxisYRecipe extends ThemeAttributes<SVGGElement> {
	label?: string;
	x?: number;
	startY?: number;
	endY?: number;
	tickCount?: number;
	ticks?: number[];
	showArrow?: boolean;
	showGrid?: boolean;
	color?: string;
	gridEndX?: number;
	tickLabels?: Array<string | number>;
}

export type ChartAxisYProps = ChartAxisYRecipe;
