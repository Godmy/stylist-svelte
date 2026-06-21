import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { SlotFocusable } from '$stylist/interaction/interface/slot/focusable';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeFocusable extends ComputeIntersectAll<[SlotFocusable, BehaviorFocusable, SlotChildren]> {}