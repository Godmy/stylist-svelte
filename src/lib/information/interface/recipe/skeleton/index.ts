import type { SlotSkeleton } from '$stylist/information/interface/slot/skeleton';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeSkeleton
	extends ComputeIntersectAll<[SlotSkeleton]> {}
