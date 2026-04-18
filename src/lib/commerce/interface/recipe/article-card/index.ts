/**
 * ArticleCard вЂ” РєР°СЂС‚РѕС‡РєР° СЃС‚Р°С‚СЊРё СЃ Р·Р°РіРѕР»РѕРІРєРѕРј, РѕРїРёСЃР°РЅРёРµРј Рё РјРµС‚Р°РґР°РЅРЅС‹РјРё..
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
import type { ArticleCardAction } from '$stylist/commerce/interface/slot/article-card-action';

export interface ArticleCardRecipe
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
	actions?: ArticleCardAction[];
	children?: Snippet;
}

