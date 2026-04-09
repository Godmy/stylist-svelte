/**
 * CountryFlag — флаг страны..
 *
 * LEGO-состав:
 *   IMediaSlot        (information) — media (Media)
 *   ILabelSlot        (information) — label (Label)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { IMediaSlot } from '$stylist/media/interface/proto/media-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface CountryFlagRecipe
	extends RecordArchitectureMerge<[
		IMediaSlot,
		ILabelSlot,
		ThemeAttributes<HTMLSpanElement>
	]>
{
	countryCode?: string;
	size?: number;
	content?: string;
}
