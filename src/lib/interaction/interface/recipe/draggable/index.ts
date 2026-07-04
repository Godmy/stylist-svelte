import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { BehaviorDraggable } from '$stylist/interaction/interface/behavior/draggable';
import type { SlotClass } from '$stylist/theme/interface/slot/class';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeDraggable extends ComputeIntersectAll<[SlotClass, BehaviorDraggable, SlotChildren]> {}
