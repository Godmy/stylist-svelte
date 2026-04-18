/**
 * ProductComparisonTableContract вЂ” С‚Р°Р±Р»РёС†Р° СЃСЂР°РІРЅРµРЅРёСЏ С‚РѕРІР°СЂРѕРІ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { SlotProductComparisonTableItem } from '$stylist/commerce/interface/slot/product-comparison-table-item';

export interface RecipeProductComparisonTable extends StructIntersectAll<[ ThemeAttributes<HTMLDivElement> ]> {
	/** List of products to compare */
	products: SlotProductComparisonTableItem[];
	/** List of features to compare */
	features: string[];
}
