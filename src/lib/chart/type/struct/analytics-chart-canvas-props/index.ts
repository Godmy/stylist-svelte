import type { ChartCanvasRecipe } from '$stylist/chart/interface/recipe/chart-canvas';

export type AnalyticsChartCanvasProps = ChartCanvasRecipe & {
	xAxisLabel?: string;
	yAxisLabel?: string;
	zAxisLabel?: string;
};
