/**
 * ProductComparisonContract вЂ” СЃСЂР°РІРЅРµРЅРёРµ С‚РѕРІР°СЂРѕРІ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { SlotProductComparisonItem } from '$stylist/commerce/interface/slot/product-comparison-item';
import type { RecipeProductComparisonFeature } from '$stylist/commerce/interface/recipe/product-comparison-feature';

export interface RecipeProductComparison extends StructIntersectAll<[ ThemeAttributes<HTMLDivElement> ]> {
	/** List of products to compare */
	products: SlotProductComparisonItem[];
	/** List of features to compare */
	features: RecipeProductComparisonFeature[];
}
