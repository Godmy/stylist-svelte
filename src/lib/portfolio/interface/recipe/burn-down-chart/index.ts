import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotBurnDownData } from '$stylist/portfolio/interface/slot/burn-down-data';
export interface RecipeBurnDownChart extends ComputeIntersectAll<[]> {
	data: SlotBurnDownData;
	width?: number;
	height?: number;
	title?: string;
}
