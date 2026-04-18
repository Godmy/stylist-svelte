/**
 * Transformation — трансформация элемента.
 *
 * LEGO-состав:
 *   ITransformable            (interaction/transformable)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorTransformable as ITransformable } from '$stylist/animation/interface/behavior/transformable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';

export interface TransformationRecipe
	extends StructIntersectAll<[
		ITransformable,
		IFocusable,
		ISizable
	]>
{}

