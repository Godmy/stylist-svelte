/**
 * Page Button — кнопка страницы (пагинация).
 *
 * LEGO-состав:
 *   ILabelSlot                (information/label-slot)
 *   IClickable                (interaction/clickable)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';

export interface PageButtonRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		IClickable,
		IFocusable,
		ISizable
	]>
{}
