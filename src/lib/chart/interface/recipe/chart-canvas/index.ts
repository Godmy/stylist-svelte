import type { SlotTheme } from '$stylist/theme/interface/slot/theme';

import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { ChartSeries } from '$stylist/chart/type/struct/chart-series';
import type { ChartScale } from '$stylist/chart/type/struct/chart-scale';

export interface RecipeChartCanvas
	extends ComputeIntersectAll<[SlotTheme]> {
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
