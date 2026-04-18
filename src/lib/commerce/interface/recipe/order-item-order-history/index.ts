/**
 * OrderHistoryContract вЂ” РёСЃС‚РѕСЂРёСЏ Р·Р°РєР°Р·РѕРІ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface RecipeOrderItem extends StructIntersectAll<[]> {
	id: string;
	name: string;
	quantity: number;
	price: number;
	thumbnail?: string;
}
