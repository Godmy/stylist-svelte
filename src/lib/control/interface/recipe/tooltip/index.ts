/**
 * Tooltip — всплывающая подсказка.
 *
 * LEGO-состав:
 *   ILabelSlot                (information/label-slot)
 *   ICaptionSlot              (information/caption-slot)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 *   IMotionToken              (theme/motion-token)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { ICaptionSlot } from '$stylist/information/interface/proto/caption-slot';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { IMotionToken } from '$stylist/interaction/interface/proto/motion-token';

export interface TooltipRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IFocusable,
		ISizable,
		IMotionToken
	]>
{}
