import type { ProductReviewItem } from '$stylist/commerce/type/struct/product-review-item';

export type ProductReviewsProps = {
	reviews: ProductReviewItem[];
	averageRating?: number;
	totalReviews?: number;
	showAddReview?: boolean;
	onAddReview?: (review: { title: string; content: string; rating: number }) => void;
	class?: string;
};
