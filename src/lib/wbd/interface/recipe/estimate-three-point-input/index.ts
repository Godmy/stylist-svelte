import type { SlotEstimateThreePointInput } from '$stylist/wbd/interface/slot/estimate-three-point-input';
import type { BehaviorWbdEstimateSubmit } from '$stylist/wbd/interface/behavior/estimate-submittable';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeEstimateThreePointInput
	extends ComputeIntersectAll<[SlotEstimateThreePointInput, BehaviorWbdEstimateSubmit]> {}
