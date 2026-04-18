/**
 * ProductSearchContract вЂ” РїРѕРёСЃРє РїРѕ С‚РѕРІР°СЂР°Рј.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” placeholder (РїРѕРґСЃРєР°Р·РєР° РІ РїРѕР»Рµ РїРѕРёСЃРєР°)
 *   ThemeAttributes   (theme)       вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { BehaviorProductSearchEvents } from '$stylist/commerce/interface/behavior/product-search-events';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface ContractProductSearch
	extends StructIntersectAll<[
		SlotLabel,
		ThemeAttributes<HTMLDivElement>
	]>, BehaviorProductSearchEvents {
	/** Search suggestions */
	suggestions?: string[];
}
