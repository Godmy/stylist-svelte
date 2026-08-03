import type { SlotInputName } from '$stylist/input/interface/slot/input-name';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeInputName
	extends ComputeIntersectAll<[SlotInputName]> {}
