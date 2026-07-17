import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotReview } from '$stylist/product/interface/slot/review';
import type { BehaviorProductReviewsEvents } from '$stylist/product/interface/behavior/product-reviews-events';

export interface RecipeProductReviews
	extends ComputeIntersectAll<
		[SlotTheme, BehaviorProductReviewsEvents, HTMLAttributes<HTMLDivElement>]
	> {
	reviews: SlotReview[];
	averageRating?: number;
	totalReviews?: number;
	showAddReview?: boolean;
}
