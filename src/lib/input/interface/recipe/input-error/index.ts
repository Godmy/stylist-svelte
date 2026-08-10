import type { RecipeInputHelper } from '$stylist/input/interface/recipe/input-helper';
import type { SlotInputError } from '$stylist/input/interface/slot/input-error';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeInputError
	extends ComputeIntersectAll<[RecipeInputHelper<HTMLParagraphElement>, SlotInputError]> {}
