/**
 * LinkCard — карточка-ссылка..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   ICaptionSlot        (information) — caption (Caption)
 *   IMediaSlot        (information) — media (Media)
 *   IIconSlot        (information) — icon (Icon)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ICaptionSlot } from '$stylist/information/interface/proto/caption-slot';
import type { IIconSlot } from '$stylist/information/interface/proto/icon-slot';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { IMediaSlot } from '$stylist/information/interface/proto/media-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface LinkCardRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IMediaSlot,
		IIconSlot,
		ThemeAttributes<HTMLAnchorElement>
	]>
{
	title?: string;
	description?: string;
	href: string;
	newTab?: boolean;
	variant?: 'default' | 'subtle' | 'outline';
	icon?: string;
	showArrow?: boolean;
}
