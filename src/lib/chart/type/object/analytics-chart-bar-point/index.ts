import type { LineChartPoint } from '$stylist/chart/type/object/line-chart';

export type AnalyticsChartBarPoint = LineChartPoint & {
	label: string;
};
