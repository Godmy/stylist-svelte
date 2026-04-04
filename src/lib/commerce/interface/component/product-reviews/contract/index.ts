/**
 * ProductReviewsContract — отзывы о товаре.
 *
 * LEGO-состав:
 *   ThemeAttributes   (theme) — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ReviewContract {
	id: string;
	author: string;
	rating: number;
	title: string;
	content: string;
	date: string;
	verified?: boolean;
}

export interface AddReviewDataContract {
	title: string;
	content: string;
	rating: number;
}

export interface ProductReviewsEventsContract {
	onAddReview?: (review: AddReviewDataContract) => void;
}

export interface ProductReviewsContract
	extends RecordArchitectureMerge<[
		ThemeAttributes<HTMLDivElement>
	]>, ProductReviewsEventsContract {
	/** List of reviews */
	reviews: ReviewContract[];
	/** Average rating */
	averageRating?: number;
	/** Total reviews count */
	totalReviews?: number;
	/** Show add review form */
	showAddReview?: boolean;
}
