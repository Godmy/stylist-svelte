/**
 * PieChart — круговая диаграмма..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   IBadgeSlot        (information) — badge (Badge)
 */
import type { PieChartDataPoint } from '$stylist/chart/type/struct/pie-chart';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface PieChartRecipe extends ThemeAttributes<SVGSVGElement> {
	label?: string;
	badge?: string | number;
	data?: readonly PieChartDataPoint[];
	width?: number;
	height?: number;
	colors?: readonly string[];
}
