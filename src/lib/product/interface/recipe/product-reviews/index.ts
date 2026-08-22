import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeProductReviews extends ComputeIntersectAll<[SlotTheme]> {
	onAddReview?: (review: { title: string; content: string; rating: number }) => void;

	reviews: {
		id: string;
		author: string;
		rating: number;
		title: string;
		content: string;
		date: string;
		verified?: boolean;
	}[];
	averageRating?: number;
	totalReviews?: number;
	showAddReview?: boolean;
}
