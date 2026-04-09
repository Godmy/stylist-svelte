import type { ProductReviewsProps } from '$stylist/commerce/type/struct/product-reviews-props';

export function createProductReviewsState(props: ProductReviewsProps) {
	let newReview = $state({
		title: '',
		content: '',
		rating: 5
	});

	return {
		get newReview() {
			return newReview;
		},
		setRating(value: number) {
			newReview = { ...newReview, rating: value };
		},
		submitReview() {
			if (!newReview.title || !newReview.content) return;

			props.onAddReview?.({
				title: newReview.title,
				content: newReview.content,
				rating: newReview.rating
			});

			newReview = { title: '', content: '', rating: 5 };
		}
	};
}

export default createProductReviewsState;
