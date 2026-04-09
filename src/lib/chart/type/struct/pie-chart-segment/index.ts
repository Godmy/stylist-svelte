import type { PieChartDataPoint } from '$stylist/chart/type/struct/pie-chart';

export type { PieChartDataPoint } from '$stylist/chart/type/struct/pie-chart';

export type AnalyticsPieChartSegment = PieChartDataPoint & {
	startAngle: number;
	endAngle: number;
	color: string;
};
