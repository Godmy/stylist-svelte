import type { SlotInputBase } from '$stylist/input/interface/slot/input-base';
import type { SlotInputEmail } from '$stylist/input/interface/slot/input-email';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeInputEmail
	extends ComputeIntersectAll<[Omit<SlotInputBase, 'type'>, SlotInputEmail]> {}
