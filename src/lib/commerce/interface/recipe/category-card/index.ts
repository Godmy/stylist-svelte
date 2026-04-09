/**
 * CategoryCard — карточка категории..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   ICaptionSlot        (information) — caption (Caption)
 *   IMediaSlot        (information) — media (Media)
 *   IStatusSlot        (information) — status (Status)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ICaptionSlot } from '$stylist/typography/interface/proto/caption-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { IMediaSlot } from '$stylist/media/interface/proto/media-slot';
import type { IStatusSlot } from '$stylist/information/interface/proto/status-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface CategoryCardRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IMediaSlot,
		IStatusSlot,
		ThemeAttributes<HTMLDivElement>
	]>
{
	title?: string;
	icon?: string;
	count?: number;
	description?: string;
	link?: string;
	examples?: string[];
}
