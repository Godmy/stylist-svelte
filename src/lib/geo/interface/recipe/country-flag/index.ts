/**
 * CountryFlag вЂ” С„Р»Р°Рі СЃС‚СЂР°РЅС‹..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   IMediaSlot        (information) вЂ” media (Media)
 *   ILabelSlot        (information) вЂ” label (Label)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface CountryFlagRecipe
	extends StructIntersectAll<[
		IMediaSlot,
		ILabelSlot,
		ThemeAttributes<HTMLSpanElement>
	]>
{
	countryCode?: string;
	size?: number;
	content?: string;
}

