/**
 * PriceFilterContract вЂ” С„РёР»СЊС‚СЂ РїРѕ РґРёР°РїР°Р·РѕРЅСѓ С†РµРЅ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface RecipePriceFilter extends StructIntersectAll<[ ThemeAttributes<HTMLDivElement> ]> {
	/** Minimum price value */
	minPrice?: number;
	/** Maximum price value */
	maxPrice?: number;
	/** Current minimum selected */
	currentMin?: number;
	/** Current maximum selected */
	currentMax?: number;
	/** SlotCurrency symbol */
	currency?: string;
	/** Price change callback */
	onPriceChange?: (min: number, max: number) => void;
}
