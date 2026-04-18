/**
 * Shared Canvas — общая канва.
 *
 * LEGO-состав:
 *   IDraggable                (interaction/draggable)
 *   ITransformable            (interaction/transformable)
 *   ISizable                  (architecture/sizable)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorDraggable as IDraggable } from '$stylist/interaction/interface/behavior/draggable';
import type { BehaviorTransformable as ITransformable } from '$stylist/animation/interface/behavior/transformable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';

export interface SharedCanvasRecipe
	extends StructIntersectAll<[
		IDraggable,
		ITransformable,
		ISizable
	]>
{}

