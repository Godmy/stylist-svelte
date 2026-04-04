export type PieChartDataPoint = {
	label: string;
	value: number;
};

export type AnalyticsPieChartSegment = PieChartDataPoint & {
	startAngle: number;
	endAngle: number;
	color: string;
};
