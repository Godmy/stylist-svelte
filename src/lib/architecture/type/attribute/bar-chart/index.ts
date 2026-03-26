export type IChartDataPoint = {
	id: string;
	name: string;
	value: number;
	color?: string;
	description?: string;
};

export type IBarPosition = {
	x: number;
	y: number;
	width: number;
	height: number;
	color: string;
};
