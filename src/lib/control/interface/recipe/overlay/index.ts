import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorClickable as IClickable } from '$stylist/layout/interface/behavior/clickable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';

export interface RecipeOverlay extends ComputeIntersectAll<[IClickable, ISizable]> {}
