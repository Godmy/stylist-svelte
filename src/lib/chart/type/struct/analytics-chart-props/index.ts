import type { ChartRecipe } from '$stylist/chart/interface/recipe/chart';

export type AnalyticsChartProps = ChartRecipe & {
	xTickCount?: number;
	yTickCount?: number;
	xAxisLabel?: string;
	yAxisLabel?: string;
	zAxisLabel?: string;
};
