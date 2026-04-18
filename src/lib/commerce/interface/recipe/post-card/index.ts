/**
 * PostCard вЂ” РєР°СЂС‚РѕС‡РєР° РїРѕСЃС‚Р°..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” label (Label)
 *   ICaptionSlot        (information) вЂ” caption (Caption)
 *   IMediaSlot        (information) вЂ” media (Media)
 *   IBadgeSlot        (information) вЂ” badge (Badge)
 *   IIconSlot        (information) вЂ” icon (Icon)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotBadge as IBadgeSlot } from '$stylist/typography/interface/slot/badge';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';
import type { Snippet } from 'svelte';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { PostCardAction } from '$stylist/commerce/interface/slot/post-card-action';

export interface PostCardRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ICaptionSlot,
		IMediaSlot,
		IBadgeSlot,
		IIconSlot,
		ThemeAttributes<HTMLElement>
	]>
{
	title?: string;
	subtitle?: string;
	image?: string;
	date?: string;
	excerpt?: string;
	author?: string;
	tags?: string[];
	actions?: PostCardAction[];
	children?: Snippet;
}

