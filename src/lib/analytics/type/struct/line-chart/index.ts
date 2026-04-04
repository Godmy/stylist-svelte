export type LineChartPoint = {
	id: string;
	name: string;
	value: number;
	color?: string;
	description?: string;
};

export type LineChartData = {
	id: string;
	label: string;
	data: LineChartPoint[];
	color?: string;
};
