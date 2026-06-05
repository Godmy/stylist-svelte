/**
 * CardWithImage — карточка с изображением..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   ICaptionSlot        (information) — caption (Caption)
 *   IMediaSlot        (information) — media (Media)
 *   IBadgeSlot        (information) — badge (Badge)
 *   IIconSlot        (information) — icon (Icon)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotBadge as IBadgeSlot } from '$stylist/information/interface/slot/badge';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';
import type { Snippet } from 'svelte';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface CardWithImageRecipe
	extends StructIntersectAll<
		[ILabelSlot, ICaptionSlot, IMediaSlot, IBadgeSlot, IIconSlot, ThemeAttributes<HTMLDivElement>]
	> {
	title?: string;
	subtitle?: string;
	description?: string;
	image?: string;
	imageClass?: string;
	footer?: Snippet;
	actions?: Snippet;
	headerClass?: string;
	bodyClass?: string;
	footerClass?: string;
	actionsClass?: string;
}
