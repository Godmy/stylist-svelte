import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorFocusable as IFocusable } from '$stylist/layout/interface/behavior/focusable';
import type { BehaviorTransformable as ITransformable } from '$stylist/animation/interface/behavior/transformable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';

export interface RecipeTransformation
	extends ComputeIntersectAll<[ITransformable, IFocusable, ISizable]> {}
