import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { SlotClickable } from '$stylist/interaction/interface/slot/clickable';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeClickable extends ComputeIntersectAll<[SlotClickable, BehaviorClickable, SlotChildren]> {}