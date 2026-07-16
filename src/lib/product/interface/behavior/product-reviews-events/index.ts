import type { SlotAddReviewData } from '$stylist/product/interface/slot/add-review-data';

export interface BehaviorProductReviewsEvents {
	onAddReview?: (review: SlotAddReviewData) => void;
}
