import type { StructWbdTrendPoint } from '$stylist/wbd/type/struct/trend-point';

export interface SlotWbdMedianTrendChart {
	points: StructWbdTrendPoint[];
	title?: string;
	class?: string;
}
