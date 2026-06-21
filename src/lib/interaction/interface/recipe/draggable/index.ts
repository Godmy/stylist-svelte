import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { BehaviorDraggable } from '$stylist/interaction/interface/behavior/draggable';
import type { SlotDraggable } from '$stylist/interaction/interface/slot/draggable';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeDraggable extends ComputeIntersectAll<[SlotDraggable, BehaviorDraggable, SlotChildren]> {}