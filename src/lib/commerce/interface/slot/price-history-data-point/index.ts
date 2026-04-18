/**
 * PriceHistoryContract вЂ” РіСЂР°С„РёРє РёСЃС‚РѕСЂРёРё С†РµРЅ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” title (Р·Р°РіРѕР»РѕРІРѕРє РіСЂР°С„РёРєР°)
 *   ThemeAttributes   (theme)       вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface SlotPriceHistoryDataPoint {
	date: string;
	price: number;
}
