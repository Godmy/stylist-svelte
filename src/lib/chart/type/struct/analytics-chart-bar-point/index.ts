import type { LineChartPoint } from '$stylist/chart/type/struct/line-chart';

export type AnalyticsChartBarPoint = LineChartPoint & {
	label: string;
};
