import type { RecipeChartCanvas } from '$stylist/chart/interface/recipe/chart-canvas';

export type AnalyticsChartCanvasProps = RecipeChartCanvas & {
	xAxisLabel?: string;
	yAxisLabel?: string;
	zAxisLabel?: string;
};
