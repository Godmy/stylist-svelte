import type { VerticalBarChartItem } from '$stylist/chart/type/struct/vertical-bar-chart-item';

export interface SlotVerticalBarsChart {
	title?: string;
	items: VerticalBarChartItem[];
	height?: string;
	barWidth?: string;
	gap?: string;
	color?: string;
	class?: string;
}
