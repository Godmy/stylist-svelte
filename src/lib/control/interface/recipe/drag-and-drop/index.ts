/**
 * Drag and Drop — перетаскивание элементов.
 *
 * LEGO-состав:
 *   IDraggable                (interaction/draggable)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorDraggable as IDraggable } from '$stylist/interaction/interface/behavior/draggable';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';

export interface DragAndDropRecipe
	extends StructIntersectAll<[
		IDraggable,
		IFocusable,
		ISizable
	]>
{}

