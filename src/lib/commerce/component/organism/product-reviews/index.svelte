<script lang="ts">
  import type { ProductReviewsProps } from '$stylist/commerce/type/struct/product-reviews-props';
  import { createProductReviewsState } from '$stylist/commerce/function/state/product-reviews';

  let {
    reviews = [],
    averageRating = 0,
    totalReviews = 0,
    showAddReview = false,
    onAddReview = (review: {title: string, content: string, rating: number}) => {},
    class: className = ''
  }: ProductReviewsProps = $props();

  const state = createProductReviewsState({ reviews, averageRating, totalReviews, showAddReview, onAddReview, class: className });
</script>

<div class={`bg-[var(--color-background-primary)] rounded-lg shadow p-4 ${className}`}>
  <div class="mb-6">
    <h2 class="text-xl font-bold mb-2">Customer Reviews</h2>
    <div class="flex items-center">
      <div class="text-3xl font-bold mr-4">{averageRating.toFixed(1)}</div>
      <div>
        <div class="flex text-yellow-400">
          {#each Array(5) as _, i}
            <svg
              class={`w-5 h-5 ${i < Math.floor(averageRating) ? 'fill-current' : 'fill-gray-300'}`}
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          {/each}
        </div>
        <div class="text-sm text-[var(--color-text-secondary)]">{totalReviews} reviews</div>
      </div>
    </div>
  </div>
  
  {#if showAddReview}
    <div class="mb-8 p-4 border rounded-lg bg-[var(--color-background-secondary)]">
      <h3 class="font-bold mb-3">Write a SlotReview</h3>
      <div class="mb-3">
        <label class="block text-sm font-medium mb-1" for="rating">Rating</label>
        <div class="flex">
          {#each Array(5) as _, i}
            <button
              onclick={() => state.setRating(i + 1)}
              class="mr-1"
              aria-label={`Rate ${i + 1} out of 5 stars`}
            >
              <svg
                class={`w-6 h-6 ${i < state.newReview.rating ? 'text-yellow-400 fill-current' : 'text-[var(--color-text-tertiary)]'}`}
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </button>
          {/each}
        </div>
      </div>
      <div class="mb-3">
        <label for="review-title" class="block text-sm font-medium mb-1">SlotReview Title</label>
        <input
          id="review-title"
          type="text"
          bind:value={state.newReview.title}
          class="w-full p-2 border border-[var(--color-border-primary)] rounded"
          placeholder="Summarize your review"
        />
      </div>
      <div class="mb-3">
        <label for="review-content" class="block text-sm font-medium mb-1">SlotReview</label>
        <textarea
          id="review-content"
          bind:value={state.newReview.content}
          class="w-full p-2 border border-[var(--color-border-primary)] rounded"
          rows="3"
          placeholder="Share your experience"
        ></textarea>
      </div>
      <button
        onclick={() => state.submitReview()}
        class="px-4 py-2 bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] rounded hover:bg-[var(--color-primary-600)]"
      >
        Submit SlotReview
      </button>
    </div>
  {/if}
  
  <div class="space-y-4">
    {#each reviews as review}
      <div class="border-b pb-4 last:border-b-0 last:pb-0">
        <div class="flex justify-between mb-1">
          <div class="font-bold">{review.title}</div>
          {#if review.verified}
            <span class="text-xs bg-[var(--color-success-100)] text-[var(--color-success-800)] px-2 py-1 rounded">Verified Purchase</span>
          {/if}
        </div>
        <div class="flex items-center mb-2">
          <div class="flex text-yellow-400">
            {#each Array(5) as _, i}
              <svg
                class={`w-4 h-4 ${i < Math.floor(review.rating) ? 'fill-current' : 'fill-gray-300'}`}
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            {/each}
          </div>
          <span class="text-sm text-[var(--color-text-secondary)] ml-2">{review.date}</span>
        </div>
        <div class="text-[var(--color-text-primary)]">{review.content}</div>
        <div class="text-sm text-[var(--color-text-secondary)] mt-1">By {review.author}</div>
      </div>
    {/each}
  </div>
</div>



