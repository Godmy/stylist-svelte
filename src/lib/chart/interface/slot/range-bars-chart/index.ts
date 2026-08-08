import type { RangeBarChartItem } from '$stylist/chart/type/struct/range-bar-chart-item';

export interface SlotRangeBarsChart {
	items: RangeBarChartItem[];
	scaleMinLabel: string;
	scaleMaxLabel: string;
	labelWidth?: string;
	valueWidth?: string;
	class?: string;
}
