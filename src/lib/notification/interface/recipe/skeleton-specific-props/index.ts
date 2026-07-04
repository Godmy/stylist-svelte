import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface SkeletonSpecificProps extends ComputeIntersectAll<[SlotChildren]> {
	type?: 'skeleton' | 'circle' | 'rectangle' | 'text' | 'table';
	width?: string | number;
	height?: string | number;
	lines?: number;
	animated?: boolean;
}
