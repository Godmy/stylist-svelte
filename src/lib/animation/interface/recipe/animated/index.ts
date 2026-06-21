import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorMotion } from '$stylist/animation/interface/behavior/motion';
import type { SlotAnimate } from '$stylist/animation/interface/slot/animate';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';

export interface RecipeAnimated
	extends ComputeIntersectAll<[BehaviorMotion, SlotAnimate, SlotTheme]> {}
