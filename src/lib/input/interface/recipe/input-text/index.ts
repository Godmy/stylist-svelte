import type { SlotInputBase } from '$stylist/input/interface/slot/input-base';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenSize } from '$stylist/theme/type/alias/size';

export interface RecipeInputText
	extends ComputeIntersectAll<[SlotInputBase<TokenAppearance, TokenSize>]> {}
