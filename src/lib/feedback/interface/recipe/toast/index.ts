/**
 * Toast / Alert — всплывающее уведомление.
 *
 * LEGO-состав:
 *   ILabelSlot                (information/label-slot)
 *   ICaptionSlot              (information/caption-slot)
 *   IIconSlot                 (information/icon-slot)
 *   IStatusSlot               (information/status-slot)
 *   IClickable                (interaction/clickable)
 *   IMotionToken              (theme/motion-token)
 *   ISizable                  (architecture/sizable)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { ICaptionSlot } from '$stylist/information/interface/proto/caption-slot';
import type { IIconSlot } from '$stylist/information/interface/proto/icon-slot';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { IStatusSlot } from '$stylist/information/interface/proto/status-slot';
import type { IMotionToken } from '$stylist/interaction/interface/proto/motion-token';

export interface ToastRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IIconSlot,
		IStatusSlot,
		IClickable,
		IMotionToken,
		ISizable
	]>
{}
