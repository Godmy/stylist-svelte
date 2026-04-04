/**
 * Drag and Drop — перетаскивание элементов.
 *
 * LEGO-состав:
 *   IDraggable                (interaction/draggable)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IDraggable } from '$stylist/interaction/interface/proto/draggable';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { ISizable } from '$stylist/architecture/interface/proto/sizable';

export interface DragAndDropRecipe
	extends RecordArchitectureMerge<[
		IDraggable,
		IFocusable,
		ISizable
	]>
{}
