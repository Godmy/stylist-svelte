import type { SlotEstimateInputRow } from '$stylist/wbd/interface/slot/estimate-input-row';
import type { BehaviorWbdEstimateSubmit } from '$stylist/wbd/interface/behavior/estimate-submittable';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeEstimateInputRow
	extends ComputeIntersectAll<[SlotEstimateInputRow, BehaviorWbdEstimateSubmit]> {}
