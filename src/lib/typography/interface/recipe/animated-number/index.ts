/**
 * AnimatedNumber вЂ” Р°РЅРёРјРёСЂРѕРІР°РЅРЅРѕРµ С‡РёСЃР»Рѕ..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” label (Label)
 *   IBadgeSlot        (information) вЂ” badge (Badge)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotBadge as IBadgeSlot } from '$stylist/typography/interface/slot/badge';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface AnimatedNumberRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		IBadgeSlot,
		ThemeAttributes<HTMLSpanElement>
	]>
{
	value?: number;
	format?: 'number' | 'currency' | 'percent';
	prefix?: string;
	suffix?: string;
	separator?: string;
	decimals?: number;
}

