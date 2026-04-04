export type CanvasChartDataPoint = {
	x: number | string;
	y: number;
	label?: string;
};

export type TokenCanvasChartType = 'line' | 'bar' | 'pie' | 'area' | 'scatter';

export type CanvasChartPadding = {
	top: number;
	right: number;
	bottom: number;
	left: number;
};
