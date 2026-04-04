/**
 * Quantity Selector — селектор количества.
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
import type { ISizable } from '$stylist/architecture/interface/proto/sizable';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';

export interface QuantitySelectorRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		IClickable,
		IFocusable,
		ISizable
	]>
{}
