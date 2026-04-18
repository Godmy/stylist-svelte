/**
 * Overlay — перекрывающий слой.
 *
 * LEGO-состав:
 *   IClickable                (interaction/clickable)
 *   ISizable                  (architecture/sizable)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';

export interface OverlayRecipe
	extends StructIntersectAll<[
		IClickable,
		ISizable
	]>
{}

