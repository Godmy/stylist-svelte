import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorFocusable } from '$stylist/layout/interface/behavior/focusable';
import type { BehaviorTransformable } from '$stylist/animation/interface/behavior/transformable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
export interface RecipeTransformation
	extends ComputeIntersectAll<[BehaviorTransformable, BehaviorFocusable, BehaviorSizable]> {}
