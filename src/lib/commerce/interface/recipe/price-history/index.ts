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
import type { SlotPriceHistoryDataPoint } from '$stylist/commerce/interface/slot/price-history-data-point';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipePriceHistory extends StructIntersectAll<[ SlotLabel, ThemeAttributes<HTMLDivElement> ]> {
	/** List of price history data points */
	data: SlotPriceHistoryDataPoint[];
	/** SlotCurrency symbol */
	currency?: string;
}
