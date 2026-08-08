import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorClickable as IClickable } from '$stylist/layout/interface/behavior/clickable';
import type { BehaviorFocusable as IFocusable } from '$stylist/layout/interface/behavior/focusable';

export interface RecipeClick extends ComputeIntersectAll<[IClickable, IFocusable]> {}
