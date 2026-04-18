/**
 * LinkCard вЂ” РєР°СЂС‚РѕС‡РєР°-СЃСЃС‹Р»РєР°..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” label (Label)
 *   ICaptionSlot        (information) вЂ” caption (Caption)
 *   IMediaSlot        (information) вЂ” media (Media)
 *   IIconSlot        (information) вЂ” icon (Icon)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface LinkCardRecipe
	extends StructIntersectAll<[
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

