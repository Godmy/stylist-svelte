/**
 * Chart — график / диаграмма..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   ICaptionSlot        (information) — caption (Caption)
 *   IBadgeSlot        (information) — badge (Badge)
 */
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { ChartFunctionPoint } from '$stylist/chart/type/struct/chart-point';
import type { ChartSeries } from '$stylist/chart/type/struct/chart-series';

export type ChartScale = [number, number];

export type { ChartFunctionPoint, ChartSeries };

export interface ChartRecipe extends ThemeAttributes<SVGSVGElement> {
	label?: string;
	caption?: string;
	badge?: string | number;
	series?: ChartSeries[];
	width?: number;
	height?: number;
	showLegend?: boolean;
	showGrid?: boolean;
	showZAxis?: boolean;
	xScale?: ChartScale;
	yScale?: ChartScale;
	zTickCount?: number;
	showAxisArrows?: boolean;
	xAxisLabel?: string;
	yAxisLabel?: string;
	zAxisLabel?: string;
	title?: string;
}
