import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotFormFooter } from '$stylist/form/interface/slot/form-footer';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';

export interface RecipeFormFooter
	extends StructIntersectAll<[SlotFormFooter, IClickable, IFocusable, ISizable]> {}
