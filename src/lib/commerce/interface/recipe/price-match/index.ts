/**
 * PriceMatchContract вЂ” Р±Р»РѕРє СЃСЂР°РІРЅРµРЅРёСЏ С†РµРЅ СЃ РєРѕРЅРєСѓСЂРµРЅС‚Р°РјРё.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { RecipeCompetitorPrice } from '$stylist/commerce/interface/recipe/competitor-price';
import type { BehaviorPriceMatchEvents } from '$stylist/commerce/interface/behavior/price-match-events';

export interface RecipePriceMatch extends StructIntersectAll<[ ThemeAttributes<HTMLDivElement> ]>, BehaviorPriceMatchEvents {
	/** Target price */
	targetPrice?: number;
	/** List of competitor prices */
	competitorPrices: RecipeCompetitorPrice[];
	/** SlotCurrency symbol */
	currency?: string;
	/** Product name */
	productName?: string;
}
