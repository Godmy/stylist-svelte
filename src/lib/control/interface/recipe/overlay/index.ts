/**
 * Overlay — перекрывающий слой.
 *
 * LEGO-состав:
 *   IClickable                (interaction/clickable)
 *   ISizable                  (architecture/sizable)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';

export interface OverlayRecipe
	extends RecordArchitectureMerge<[
		IClickable,
		ISizable
	]>
{}
