/**
 * Form Header — заголовок формы.
 *
 * LEGO-состав:
 *   ILabelSlot                (information/label-slot)
 *   ICaptionSlot              (information/caption-slot)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ICaptionSlot } from '$stylist/typography/interface/proto/caption-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';

export interface FormHeaderRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot
	]>
{}
