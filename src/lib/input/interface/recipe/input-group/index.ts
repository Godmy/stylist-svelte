import type { SlotInputBase } from '$stylist/input/interface/slot/input-base';
import type { SlotInputGroup } from '$stylist/input/interface/slot/input-group';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeInputGroup
	extends ComputeIntersectAll<[Omit<SlotInputBase, 'type'>, SlotInputGroup]> {}
