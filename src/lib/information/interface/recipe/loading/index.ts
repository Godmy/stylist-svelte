import type { BehaviorLoadingState } from '$stylist/information/interface/behavior/loading-state';
import type { SlotLoading } from '$stylist/information/interface/slot/loading';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeLoading
	extends ComputeIntersectAll<[BehaviorLoadingState, SlotLoading]> {}
