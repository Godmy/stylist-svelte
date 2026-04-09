/**
 * Dialog Controls — элементы управления диалогом.
 *
 * LEGO-состав:
 *   ILabelSlot                (information/label-slot)
 *   ICaptionSlot              (information/caption-slot)
 *   IClickable                (interaction/clickable)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { ICaptionSlot } from '$stylist/typography/interface/proto/caption-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';

export interface DialogControlsRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IClickable,
		IFocusable,
		ISizable
	]>
{}
