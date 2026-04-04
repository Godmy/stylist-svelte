/**
 * Transformation — трансформация элемента.
 *
 * LEGO-состав:
 *   ITransformable            (interaction/transformable)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { ITransformable } from '$stylist/interaction/interface/proto/transformable';
import type { ISizable } from '$stylist/architecture/interface/proto/sizable';

export interface TransformationRecipe
	extends RecordArchitectureMerge<[
		ITransformable,
		IFocusable,
		ISizable
	]>
{}
