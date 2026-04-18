/**
 * ProductReviewsContract вЂ” РѕС‚Р·С‹РІС‹ Рѕ С‚РѕРІР°СЂРµ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { SlotReview } from '$stylist/commerce/interface/slot/review';
import type { BehaviorProductReviewsEvents } from '$stylist/commerce/interface/behavior/product-reviews-events';

export interface RecipeProductReviews extends StructIntersectAll<[ ThemeAttributes<HTMLDivElement> ]>, BehaviorProductReviewsEvents {
	/** List of reviews */
	reviews: SlotReview[];
	/** Average rating */
	averageRating?: number;
	/** Total reviews count */
	totalReviews?: number;
	/** Show add review form */
	showAddReview?: boolean;
}
