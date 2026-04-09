/**
 * TextAreaControl — многострочное поле ввода..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   ICaptionSlot        (information) — caption (Caption)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ICaptionSlot } from '$stylist/typography/interface/proto/caption-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface TextAreaControlRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		ThemeAttributes<HTMLTextAreaElement>
	]>
{}
