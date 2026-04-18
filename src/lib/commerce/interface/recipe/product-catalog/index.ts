/**
 * ProductCatalogContract вЂ” РєР°С‚Р°Р»РѕРі С‚РѕРІР°СЂРѕРІ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { SlotProductCatalogItem } from '$stylist/commerce/interface/slot/product-catalog-item';

export interface RecipeProductCatalog extends StructIntersectAll<[ ThemeAttributes<HTMLDivElement> ]> {
	/** List of products */
	products: SlotProductCatalogItem[];
	/** Layout type */
	layout?: 'grid' | 'list';
}
