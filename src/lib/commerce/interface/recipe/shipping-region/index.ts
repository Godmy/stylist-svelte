/**
 * ShippingInfoContract вЂ” РёРЅС„РѕСЂРјР°С†РёСЏ Рѕ РґРѕСЃС‚Р°РІРєРµ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface RecipeShippingRegion extends StructIntersectAll<[]> {
	id: string;
	name: string;
	countries: string[];
	additionalFee?: number;
	restrictions?: string[];
}
