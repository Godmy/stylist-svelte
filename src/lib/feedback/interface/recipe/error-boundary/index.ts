/**
 * Error Boundary — граница обработки ошибок.
 *
 * LEGO-состав:
 *   ILabelSlot                (information/label-slot)
 *   ICaptionSlot              (information/caption-slot)
 *   IStatusSlot               (information/status-slot)
 *   IClickable                (interaction/clickable)
 *   IFocusable                (interaction/focusable)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { ICaptionSlot } from '$stylist/information/interface/proto/caption-slot';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { IStatusSlot } from '$stylist/information/interface/proto/status-slot';

export interface ErrorBoundaryRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IStatusSlot,
		IClickable,
		IFocusable
	]>
{}
