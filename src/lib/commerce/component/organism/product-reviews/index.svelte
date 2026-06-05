<script lang="ts">
	import type { ProductReviewsProps } from '$stylist/commerce/type/struct/product-reviews-props';
	import createProductReviewsState from '$stylist/commerce/function/state/product-reviews/index.svelte';

	let {
		reviews = [],
		averageRating = 0,
		totalReviews = 0,
		showAddReview = false,
		onAddReview = (review: { title: string; content: string; rating: number }) => {},
		class: className = ''
	}: ProductReviewsProps = $props();

	const state = createProductReviewsState({
		reviews,
		averageRating,
		totalReviews,
		showAddReview,
		onAddReview,
		class: className
	});
</script>

<div class={`rounded-lg bg-[var(--color-background-primary)] p-4 shadow ${className}`}>
	<div class="mb-6">
		<h2 class="mb-2 text-xl font-bold">Customer Reviews</h2>
		<div class="flex items-center">
			<div class="mr-4 text-3xl font-bold">{averageRating.toFixed(1)}</div>
			<div>
				<div class="flex text-yellow-400">
					{#each Array(5) as _, i}
						<svg
							class={`h-5 w-5 ${i < Math.floor(averageRating) ? 'fill-current' : 'fill-gray-300'}`}
							viewBox="0 0 24 24"
						>
							<path
								d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
							/>
						</svg>
					{/each}
				</div>
				<div class="text-sm text-[var(--color-text-secondary)]">{totalReviews} reviews</div>
			</div>
		</div>
	</div>

	{#if showAddReview}
		<div class="mb-8 rounded-lg border bg-[var(--color-background-secondary)] p-4">
			<h3 class="mb-3 font-bold">Write a SlotReview</h3>
			<div class="mb-3">
				<label class="mb-1 block text-sm font-medium" for="rating">Rating</label>
				<div class="flex">
					{#each Array(5) as _, i}
						<button
							onclick={() => state.setRating(i + 1)}
							class="mr-1"
							aria-label={`Rate ${i + 1} out of 5 stars`}
						>
							<svg
								class={`h-6 w-6 ${i < state.newReview.rating ? 'fill-current text-yellow-400' : 'text-[var(--color-text-tertiary)]'}`}
								viewBox="0 0 24 24"
							>
								<path
									d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
								/>
							</svg>
						</button>
					{/each}
				</div>
			</div>
			<div class="mb-3">
				<label for="review-title" class="mb-1 block text-sm font-medium">SlotReview Title</label>
				<input
					id="review-title"
					type="text"
					bind:value={state.newReview.title}
					class="w-full rounded border border-[var(--color-border-primary)] p-2"
					placeholder="Summarize your review"
				/>
			</div>
			<div class="mb-3">
				<label for="review-content" class="mb-1 block text-sm font-medium">SlotReview</label>
				<textarea
					id="review-content"
					bind:value={state.newReview.content}
					class="w-full rounded border border-[var(--color-border-primary)] p-2"
					rows="3"
					placeholder="Share your experience"
				></textarea>
			</div>
			<button
				onclick={() => state.submitReview()}
				class="rounded bg-[var(--color-primary-500)] px-4 py-2 text-[var(--color-text-inverse)] hover:bg-[var(--color-primary-600)]"
			>
				Submit SlotReview
			</button>
		</div>
	{/if}

	<div class="space-y-4">
		{#each reviews as review}
			<div class="border-b pb-4 last:border-b-0 last:pb-0">
				<div class="mb-1 flex justify-between">
					<div class="font-bold">{review.title}</div>
					{#if review.verified}
						<span
							class="rounded bg-[var(--color-success-100)] px-2 py-1 text-xs text-[var(--color-success-800)]"
							>Verified Purchase</span
						>
					{/if}
				</div>
				<div class="mb-2 flex items-center">
					<div class="flex text-yellow-400">
						{#each Array(5) as _, i}
							<svg
								class={`h-4 w-4 ${i < Math.floor(review.rating) ? 'fill-current' : 'fill-gray-300'}`}
								viewBox="0 0 24 24"
							>
								<path
									d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
								/>
							</svg>
						{/each}
					</div>
					<span class="ml-2 text-sm text-[var(--color-text-secondary)]">{review.date}</span>
				</div>
				<div class="text-[var(--color-text-primary)]">{review.content}</div>
				<div class="mt-1 text-sm text-[var(--color-text-secondary)]">By {review.author}</div>
			</div>
		{/each}
	</div>
</div>
