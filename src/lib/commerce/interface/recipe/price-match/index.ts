import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { RecipeCompetitorPrice } from '$stylist/commerce/interface/recipe/competitor-price';

export interface RecipePriceMatch
	extends ComputeIntersectAll<[SlotTheme]> {
	onFindLower?: () => void;

	targetPrice?: number;
	competitorPrices?: RecipeCompetitorPrice[];
	currency?: string;
	productName?: string;
	class?: string;
}
