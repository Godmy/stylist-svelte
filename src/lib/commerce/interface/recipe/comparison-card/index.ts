/**
 * ComparisonCard — карточка сравнения..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   ICaptionSlot        (information) — caption (Caption)
 *   IMediaSlot        (information) — media (Media)
 *   IBadgeSlot        (information) — badge (Badge)
 *   IStatusSlot        (information) — status (Status)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IBadgeSlot } from '$stylist/typography/interface/proto/badge-slot';
import type { ICaptionSlot } from '$stylist/typography/interface/proto/caption-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { IMediaSlot } from '$stylist/media/interface/proto/media-slot';
import type { IStatusSlot } from '$stylist/information/interface/proto/status-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { ComparisonCardColumn } from '$stylist/commerce/interface/recipe/comparison-card-column';

export interface ComparisonCardRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IMediaSlot,
		IBadgeSlot,
		IStatusSlot,
		ThemeAttributes<HTMLDivElement>
	]>
{
	title?: string;
	before: ComparisonCardColumn;
	after: ComparisonCardColumn;
}
