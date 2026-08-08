import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotFormFooter } from '$stylist/form/interface/slot/form-footer';
import type { BehaviorClickable as IClickable } from '$stylist/layout/interface/behavior/clickable';
import type { BehaviorFocusable as IFocusable } from '$stylist/layout/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';

export interface RecipeFormFooter
	extends ComputeIntersectAll<[SlotFormFooter, IClickable, IFocusable, ISizable]> {}
