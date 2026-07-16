import type { RecipeProductReviews } from '$stylist/product/interface/recipe/product-reviews';

export function createProductReviewsState(props: RecipeProductReviews) {
	let newReview = $state({
		title: '',
		content: '',
		rating: 5
	});

	return {
		get newReview() {
			return newReview;
		},
		get containerClass() {
			return ['product-reviews', props.class].filter(Boolean).join(' ');
		},
		get summaryClass() {
			return 'product-reviews__summary';
		},
		get titleClass() {
			return 'product-reviews__title';
		},
		get scoreRowClass() {
			return 'product-reviews__score-row';
		},
		get scoreClass() {
			return 'product-reviews__score';
		},
		get ratingClass() {
			return 'product-reviews__rating';
		},
		get totalClass() {
			return 'product-reviews__total';
		},
		get formClass() {
			return 'product-reviews__form';
		},
		get formTitleClass() {
			return 'product-reviews__form-title';
		},
		get fieldClass() {
			return 'product-reviews__field';
		},
		get labelClass() {
			return 'product-reviews__label';
		},
		get ratingInputClass() {
			return 'product-reviews__rating-input';
		},
		get ratingButtonClass() {
			return 'product-reviews__rating-button';
		},
		get inputClass() {
			return 'product-reviews__input';
		},
		get submitButtonClass() {
			return 'product-reviews__submit';
		},
		get listClass() {
			return 'product-reviews__list';
		},
		get reviewClass() {
			return 'product-reviews__review';
		},
		get reviewHeaderClass() {
			return 'product-reviews__review-header';
		},
		get reviewTitleClass() {
			return 'product-reviews__review-title';
		},
		get verifiedClass() {
			return 'product-reviews__verified';
		},
		get reviewMetaClass() {
			return 'product-reviews__review-meta';
		},
		get dateClass() {
			return 'product-reviews__date';
		},
		get contentClass() {
			return 'product-reviews__content';
		},
		get authorClass() {
			return 'product-reviews__author';
		},
		getStarClass(active: boolean, size: 'sm' | 'md' | 'lg' = 'md') {
			return active
				? `product-reviews__star product-reviews__star--${size} product-reviews__star--active`
				: `product-reviews__star product-reviews__star--${size} product-reviews__star--inactive`;
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
