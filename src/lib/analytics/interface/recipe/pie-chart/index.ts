/**
 * PieChart — круговая диаграмма..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   IBadgeSlot        (information) — badge (Badge)
 */
import type { ChartDataPoint } from '$stylist/analytics/interface/recipe/canvas-chart';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface PieChartRecipe extends ThemeAttributes<SVGSVGElement> {
	label?: string;
	badge?: string | number;
	data?: readonly ChartDataPoint[];
	width?: number;
	height?: number;
	colors?: readonly string[];
}

export type PieChartProps = PieChartRecipe;
