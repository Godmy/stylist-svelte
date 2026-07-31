import type { StructWbdEstimate } from '$stylist/wbd/type/struct/estimate';

export interface SlotConfidenceRangeBar {
	estimate: StructWbdEstimate;
	scaleMin?: number;
	scaleMax?: number;
	class?: string;
}
