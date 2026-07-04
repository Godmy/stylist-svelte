import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorMotion } from '$stylist/animation/interface/behavior/motion';
import type { BehaviorTransform } from '$stylist/animation/interface/behavior/transform';
import type { SlotTransformation } from '$stylist/animation/interface/slot/transformation';

export interface RecipeLayoutTransformation
	extends ComputeIntersectAll<
		[BehaviorMotion, BehaviorTransform, SlotChildren, SlotTransformation]
	> {}
