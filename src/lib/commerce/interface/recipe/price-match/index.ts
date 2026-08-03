import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { RecipeCompetitorPrice } from '$stylist/commerce/interface/recipe/competitor-price';
import type { BehaviorPriceMatchEvents } from '$stylist/commerce/interface/behavior/price-match-events';

export interface RecipePriceMatch
	extends ComputeIntersectAll<[SlotTheme, BehaviorPriceMatchEvents]> {
	targetPrice?: number;
	competitorPrices?: RecipeCompetitorPrice[];
	currency?: string;
	productName?: string;
	class?: string;
}
