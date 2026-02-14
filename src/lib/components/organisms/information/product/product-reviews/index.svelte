<script lang="ts">
  let {
    reviews = [],
    averageRating = 0,
    totalReviews = 0,
    showAddReview = false,
    onAddReview = (review: {title: string, content: string, rating: number}) => {},
    class: className = ''
  } = $props<{
    reviews: Array<{
      id: string;
      author: string;
      rating: number;
      title: string;
      content: string;
      date: string;
      verified?: boolean;
    }>;
    averageRating?: number;
    totalReviews?: number;
    showAddReview?: boolean;
    onAddReview?: (review: {title: string, content: string, rating: number}) => void;
    class?: string;
  }>();

  let newReview = $state({
    title: '',
    content: '',
    rating: 5
  });

  const submitReview = () => {
    if (newReview.title && newReview.content) {
      onAddReview({
        title: newReview.title,
        content: newReview.content,
        rating: newReview.rating
      });
      newReview = { title: '', content: '', rating: 5 };
    }
  };
</script>

<div class={`bg-white rounded-lg shadow p-4 ${className}`}>
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
        <div class="text-sm text-gray-600">{totalReviews} reviews</div>
      </div>
    </div>
  </div>
  
  {#if showAddReview}
    <div class="mb-8 p-4 border rounded-lg bg-gray-50">
      <h3 class="font-bold mb-3">Write a Review</h3>
      <div class="mb-3">
        <label class="block text-sm font-medium mb-1" for="rating">Rating</label>
        <div class="flex">
          {#each Array(5) as _, i}
            <button
              onclick={() => newReview.rating = i + 1}
              class="mr-1"
              aria-label={`Rate ${i + 1} out of 5 stars`}
            >
              <svg
                class={`w-6 h-6 ${i < newReview.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </button>
          {/each}
        </div>
      </div>
      <div class="mb-3">
        <label for="review-title" class="block text-sm font-medium mb-1">Review Title</label>
        <input
          id="review-title"
          type="text"
          bind:value={newReview.title}
          class="w-full p-2 border border-gray-300 rounded"
          placeholder="Summarize your review"
        />
      </div>
      <div class="mb-3">
        <label for="review-content" class="block text-sm font-medium mb-1">Review</label>
        <textarea
          id="review-content"
          bind:value={newReview.content}
          class="w-full p-2 border border-gray-300 rounded"
          rows="3"
          placeholder="Share your experience"
        ></textarea>
      </div>
      <button
        onclick={submitReview}
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit Review
      </button>
    </div>
  {/if}
  
  <div class="space-y-4">
    {#each reviews as review}
      <div class="border-b pb-4 last:border-b-0 last:pb-0">
        <div class="flex justify-between mb-1">
          <div class="font-bold">{review.title}</div>
          {#if review.verified}
            <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Verified Purchase</span>
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
          <span class="text-sm text-gray-600 ml-2">{review.date}</span>
        </div>
        <div class="text-gray-700">{review.content}</div>
        <div class="text-sm text-gray-600 mt-1">By {review.author}</div>
      </div>
    {/each}
  </div>
</div>