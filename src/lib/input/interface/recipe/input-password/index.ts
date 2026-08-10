import type { SlotInputBase } from '$stylist/input/interface/slot/input-base';
import type { SlotInputPassword } from '$stylist/input/interface/slot/input-password';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeInputPassword
	extends ComputeIntersectAll<[Omit<SlotInputBase, 'type'>, SlotInputPassword]> {}
