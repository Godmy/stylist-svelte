import type { CanvasChartRecipe } from '$stylist/chart/interface/recipe/canvas-chart';

export type CanvasChartProps = CanvasChartRecipe & {
	xAxisLabel?: string;
	yAxisLabel?: string;
};
