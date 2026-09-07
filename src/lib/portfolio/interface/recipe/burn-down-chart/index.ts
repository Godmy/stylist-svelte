import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotBurnDownData } from '$stylist/portfolio/interface/slot/burn-down-data';
import type { SlotDimensionable } from '$stylist/layout/interface/slot/dimensionable';
export interface RecipeBurnDownChart extends ComputeIntersectAll<[SlotDimensionable]> {
	data: SlotBurnDownData;
	title?: string;
}
