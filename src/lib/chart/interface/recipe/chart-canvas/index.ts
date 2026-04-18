/**
 * ChartCanvas — canvas для графика..
 *
 * LEGO-состав:

 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { ChartSeries } from '$stylist/chart/type/struct/chart-series';
import type { ChartScale } from '$stylist/chart/type/struct/chart-scale';

export interface ChartCanvasRecipe
	extends StructIntersectAll<[
		ThemeAttributes<HTMLDivElement>
	]>
{
	width?: number;
	height?: number;
	padding?: number;
	series?: ChartSeries[];
	xScale?: ChartScale;
	yScale?: ChartScale;
	xTickCount?: number;
	yTickCount?: number;
	zTickCount?: number;
	showAxisArrows?: boolean;
	showGrid?: boolean;
	showZAxis?: boolean;
	xAxisLabel?: string;
	yAxisLabel?: string;
	zAxisLabel?: string;
	title?: string;
}

