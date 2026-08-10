import type { SlotInputName } from '$stylist/input/interface/slot/input-name';
import type { SlotInputBase } from '$stylist/input/interface/slot/input-base';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeInputName
	extends ComputeIntersectAll<[Omit<SlotInputBase, 'type'>, SlotInputName]> {}
