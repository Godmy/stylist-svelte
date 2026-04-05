import type { LineChartData, LineChartPoint } from '$stylist/analytics/type/struct/line-chart';

export type TokenAnalyticsChartType = 'line' | 'bar' | 'pie';

export type AnalyticsChartDataPoint = {
	label: string;
	value: number;
	color?: string;
};

export type AnalyticsChartBarPoint = LineChartPoint & {
	label: string;
};

export type AnalyticsChartPiePoint = AnalyticsChartDataPoint;

export type AnalyticsChartLineSeries = LineChartData;
