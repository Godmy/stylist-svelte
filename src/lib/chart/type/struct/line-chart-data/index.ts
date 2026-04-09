import type { LineChartPoint } from '$stylist/chart/type/struct/line-chart';

export type LineChartData = {
	id: string;
	label: string;
	data: LineChartPoint[];
	color?: string;
};
