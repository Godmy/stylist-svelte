<script lang="ts">
	import type { RecipeProductReviews } from '$stylist/product/interface/recipe/product-reviews';
	import { createProductReviewsState } from '$stylist/product/function/state/product-reviews/index.svelte';

	let props: RecipeProductReviews = $props();
	const state = createProductReviewsState(props);
</script>

<div class={state.containerClass}>
	<div class={state.summaryClass}>
		<h2 class={state.titleClass}>Customer Reviews</h2>
		<div class={state.scoreRowClass}>
			<div class={state.scoreClass}>{(props.averageRating ?? 0).toFixed(1)}</div>
			<div>
				<div class={state.ratingClass}>
					{#each Array(5) as _, index}
						<svg
							class={state.getStarClass(index < Math.floor(props.averageRating ?? 0), 'lg')}
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
							/>
						</svg>
					{/each}
				</div>
				<div class={state.totalClass}>{props.totalReviews ?? 0} reviews</div>
			</div>
		</div>
	</div>

	{#if props.showAddReview}
		<div class={state.formClass}>
			<h3 class={state.formTitleClass}>Write a Review</h3>
			<div class={state.fieldClass}>
				<label class={state.labelClass} for="rating">Rating</label>
				<div class={state.ratingInputClass}>
					{#each Array(5) as _, index}
						<button
							onclick={() => state.setRating(index + 1)}
							class={state.ratingButtonClass}
							aria-label={`Rate ${index + 1} out of 5 stars`}
						>
							<svg
								class={state.getStarClass(index < state.newReview.rating, 'lg')}
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
								/>
							</svg>
						</button>
					{/each}
				</div>
			</div>
			<div class={state.fieldClass}>
				<label for="review-title" class={state.labelClass}>Review Title</label>
				<input
					id="review-title"
					type="text"
					bind:value={state.newReview.title}
					class={state.inputClass}
					placeholder="Summarize your review"
				/>
			</div>
			<div class={state.fieldClass}>
				<label for="review-content" class={state.labelClass}>Review</label>
				<textarea
					id="review-content"
					bind:value={state.newReview.content}
					class={state.inputClass}
					rows="3"
					placeholder="Share your experience"
				></textarea>
			</div>
			<button onclick={() => state.submitReview()} class={state.submitButtonClass}>
				Submit Review
			</button>
		</div>
	{/if}

	<div class={state.listClass}>
		{#each props.reviews as review}
			<div class={state.reviewClass}>
				<div class={state.reviewHeaderClass}>
					<div class={state.reviewTitleClass}>{review.title}</div>
					{#if review.verified}
						<span class={state.verifiedClass}>Verified Purchase</span>
					{/if}
				</div>
				<div class={state.reviewMetaClass}>
					<div class={state.ratingClass}>
						{#each Array(5) as _, index}
							<svg
								class={state.getStarClass(index < Math.floor(review.rating), 'sm')}
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
								/>
							</svg>
						{/each}
					</div>
					<span class={state.dateClass}>{review.date}</span>
				</div>
				<div class={state.contentClass}>{review.content}</div>
				<div class={state.authorClass}>By {review.author}</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.product-reviews {
		border-radius: 0.5rem;
		background-color: var(--color-background-primary);
		padding: 1rem;
		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);
	}

	.product-reviews__summary {
		margin-bottom: 1.5rem;
	}

	.product-reviews__title {
		margin-bottom: 0.5rem;
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 700;
	}

	.product-reviews__score-row,
	.product-reviews__review-meta {
		display: flex;
		align-items: center;
	}

	.product-reviews__score {
		margin-right: 1rem;
		font-size: 1.875rem;
		line-height: 2.25rem;
		font-weight: 700;
	}

	.product-reviews__rating,
	.product-reviews__rating-input {
		display: flex;
	}

	.product-reviews__star {
		fill: currentColor;
	}

	.product-reviews__star--sm {
		width: 1rem;
		height: 1rem;
	}

	.product-reviews__star--md,
	.product-reviews__star--lg {
		width: 1.25rem;
		height: 1.25rem;
	}

	.product-reviews__star--active {
		color: var(--color-warning-500, #facc15);
	}

	.product-reviews__star--inactive {
		color: var(--color-text-tertiary);
	}

	.product-reviews__total,
	.product-reviews__date,
	.product-reviews__author {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.product-reviews__form {
		margin-bottom: 2rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		background-color: var(--color-background-secondary);
		padding: 1rem;
	}

	.product-reviews__form-title {
		margin-bottom: 0.75rem;
		font-weight: 700;
	}

	.product-reviews__field {
		margin-bottom: 0.75rem;
	}

	.product-reviews__label {
		display: block;
		margin-bottom: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
	}

	.product-reviews__rating-button {
		margin-right: 0.25rem;
	}

	.product-reviews__input {
		width: 100%;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.25rem;
		padding: 0.5rem;
	}

	.product-reviews__submit {
		border-radius: 0.25rem;
		background-color: var(--color-primary-500);
		padding: 0.5rem 1rem;
		color: var(--color-text-inverse);
	}

	.product-reviews__submit:hover {
		background-color: var(--color-primary-600);
	}

	.product-reviews__list > * + * {
		margin-top: 1rem;
	}

	.product-reviews__review {
		border-bottom: 1px solid var(--color-border-primary);
		padding-bottom: 1rem;
	}

	.product-reviews__review:last-child {
		border-bottom: 0;
		padding-bottom: 0;
	}

	.product-reviews__review-header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.25rem;
	}

	.product-reviews__review-title {
		font-weight: 700;
	}

	.product-reviews__verified {
		border-radius: 0.25rem;
		background-color: var(--color-success-100);
		padding: 0.25rem 0.5rem;
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-success-800);
	}

	.product-reviews__date {
		margin-left: 0.5rem;
	}

	.product-reviews__content {
		color: var(--color-text-primary);
	}

	.product-reviews__author {
		margin-top: 0.25rem;
	}
</style>
