/**
 * Shared Canvas — общая канва.
 *
 * LEGO-состав:
 *   IDraggable                (interaction/draggable)
 *   ITransformable            (interaction/transformable)
 *   ISizable                  (architecture/sizable)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IDraggable } from '$stylist/interaction/interface/proto/draggable';
import type { ITransformable } from '$stylist/interaction/interface/proto/transformable';
import type { ISizable } from '$stylist/architecture/interface/proto/sizable';

export interface SharedCanvasRecipe
	extends RecordArchitectureMerge<[
		IDraggable,
		ITransformable,
		ISizable
	]>
{}
