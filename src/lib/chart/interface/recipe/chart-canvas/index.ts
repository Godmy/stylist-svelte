/**
 * ChartCanvas — canvas для графика..
 *
 * LEGO-состав:

 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { ChartFunctionPoint } from '$stylist/chart/type/struct/chart-point';
import type { ChartSeries } from '$stylist/chart/type/struct/chart-series';

export type ChartScale = [number, number];

export type { ChartFunctionPoint, ChartSeries };

export interface ChartCanvasRecipe
	extends RecordArchitectureMerge<[
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
