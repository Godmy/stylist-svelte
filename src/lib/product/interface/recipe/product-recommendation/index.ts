import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotRecommendationProduct } from '$stylist/product/interface/slot/recommendation-product';
import type { BehaviorProductRecommendationEvents } from '$stylist/product/interface/behavior/product-recommendation-events';
import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeProductRecommendation
	extends ComputeIntersectAll<[SlotTheme, SlotText, HTMLAttributes<HTMLDivElement>]>,
		BehaviorProductRecommendationEvents {
	products: SlotRecommendationProduct[];
}
