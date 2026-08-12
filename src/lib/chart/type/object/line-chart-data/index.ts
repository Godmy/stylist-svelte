import type { LineChartPoint } from '$stylist/chart/type/object/line-chart';

export type LineChartData = {
	id: string;
	label: string;
	data: LineChartPoint[];
	color?: string;
};
