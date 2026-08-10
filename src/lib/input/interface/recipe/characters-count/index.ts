import type { RecipeInputHelper } from '$stylist/input/interface/recipe/input-helper';
import type { SlotCharacterCount } from '$stylist/input/interface/slot/character-count';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeCharacterCount
	extends ComputeIntersectAll<[RecipeInputHelper<HTMLDivElement>, SlotCharacterCount]> {}
