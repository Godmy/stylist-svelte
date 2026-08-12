import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorDraggable } from '$stylist/layout/interface/behavior/draggable';
import type { BehaviorFocusable } from '$stylist/layout/interface/behavior/focusable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
export interface RecipeDragAndDrop
	extends ComputeIntersectAll<[BehaviorDraggable, BehaviorFocusable, BehaviorSizable]> {}
