/**
 * NumberFlow вЂ” РїРѕС‚РѕРє С‡РёСЃРµР»..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” label (Label)
 *   IBadgeSlot        (information) вЂ” badge (Badge)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotBadge as IBadgeSlot } from '$stylist/typography/interface/slot/badge';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface NumberFlowRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		IBadgeSlot,
		ThemeAttributes<HTMLSpanElement>
	]>
{
	value?: number;
	locales?: Intl.LocalesArgument;
	format?: Intl.NumberFormatOptions;
	prefix?: string;
	suffix?: string;
}

