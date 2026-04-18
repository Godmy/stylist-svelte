/**
 * ProductCatalogContract вЂ” РєР°С‚Р°Р»РѕРі С‚РѕРІР°СЂРѕРІ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface SlotProductCatalogItem {
	id: string;
	title: string;
	price: number;
	currency: string;
	image: string;
	rating: number;
	badge?: string;
}
