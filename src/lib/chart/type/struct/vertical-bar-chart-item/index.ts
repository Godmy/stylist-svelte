export type VerticalBarChartItem = {
	id: string;
	label: string;
	valueLabel?: string | number;
	heightPercent: number;
	color?: string;
	minHeightPercent?: number;
	ariaLabel?: string;
};
