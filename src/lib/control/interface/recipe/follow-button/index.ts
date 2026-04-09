/**
 * Follow Button — кнопка подписки.
 *
 * LEGO-состав:
 *   ILabelSlot                (information/label-slot)
 *   IBadgeSlot                (information/badge-slot)
 *   IClickable                (interaction/clickable)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { IBadgeSlot } from '$stylist/typography/interface/proto/badge-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';

export interface FollowButtonRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		IBadgeSlot,
		IClickable,
		IFocusable,
		ISizable
	]>
{}
