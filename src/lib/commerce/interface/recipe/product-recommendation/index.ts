/**
 * ProductRecommendationContract вЂ” Р±Р»РѕРє СЂРµРєРѕРјРµРЅРґР°С†РёР№.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” title (Р·Р°РіРѕР»РѕРІРѕРє Р±Р»РѕРєР°)
 *   ThemeAttributes   (theme)       вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { SlotRecommendationProduct } from '$stylist/commerce/interface/slot/recommendation-product';
import type { BehaviorProductRecommendationEvents } from '$stylist/commerce/interface/behavior/product-recommendation-events';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeProductRecommendation extends StructIntersectAll<[ SlotLabel, ThemeAttributes<HTMLDivElement> ]>, BehaviorProductRecommendationEvents {
	/** List of recommended products */
	products: SlotRecommendationProduct[];
}
