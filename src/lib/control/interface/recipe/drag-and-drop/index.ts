import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorDraggable as IDraggable } from '$stylist/layout/interface/behavior/draggable';
import type { BehaviorFocusable as IFocusable } from '$stylist/layout/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';

export interface RecipeDragAndDrop
	extends ComputeIntersectAll<[IDraggable, IFocusable, ISizable]> {}
