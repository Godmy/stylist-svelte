/**
 * Range Slider — слайдер диапазона.
 *
 * LEGO-состав:
 *   ILabelSlot                (information/label-slot)
 *   ICaptionSlot              (information/caption-slot)
 *   ISelectable<number[]>     (interaction/selectable)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { ISelectable } from '$stylist/interaction/interface/proto/selectable';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { ICaptionSlot } from '$stylist/typography/interface/proto/caption-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';

export interface RangeSliderRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		ISelectable<number[]>,
		IFocusable,
		ISizable
	]>
{}
