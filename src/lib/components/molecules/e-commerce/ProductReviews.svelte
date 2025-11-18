<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import {
    Star,
    User,
    Calendar,
    MessageCircle,
    ThumbsUp,
    ThumbsDown,
    MoreHorizontal,
    ChevronLeft,
    ChevronRight
  } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';
  import Badge from '../../atoms/typography/elements/badge/Badge.svelte';

  type Review = {
    id: string;
    author: string;
    rating: number;
    title: string;
    content: string;
    date: Date;
    verifiedPurchase?: boolean;
    helpfulCount?: number;
    responses?: ReviewResponse[];
    isHelpful?: boolean;
    tags?: string[];
  };

  type ReviewResponse = {
    id: string;
    author: string;
    content: string;
    date: Date;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    reviews: Review[];
    productId?: string;
    showVerification?: boolean;
    showHelpfulness?: boolean;
    showTags?: boolean;
    showResponses?: boolean;
    maxReviews?: number;
    showPagination?: boolean;
    showAddReview?: boolean;
    class?: string;
    reviewClass?: string;
    headerClass?: string;
    footerClass?: string;
    onReviewHelpful?: (reviewId: string, isHelpful: boolean) => void;
    onAddReview?: () => void;
    onMoreActions?: (review: Review) => void;
    showRatings?: boolean;
    dateFormat?: Intl.DateTimeFormatOptions['month'];
    locale?: string;
  };

  let {
    reviews = [],
    productId,
    showVerification = true,
    showHelpfulness = true,
    showTags = true,
    showResponses = true,
    maxReviews = 5,
    showPagination = true,
    showAddReview = true,
    class: hostClass = '',
    reviewClass = '',
    headerClass = '',
    footerClass = '',
    onReviewHelpful,
    onAddReview,
    onMoreActions,
    showRatings = true,
    dateFormat = 'short',
    locale = 'en-US',
    ...restProps
  }: Props = $props();

  const reviewsPerPage = $derived(Math.max(1, maxReviews));
  let currentPage = $state(1);

  function handleReviewHelpful(reviewId: string, isHelpful: boolean) {
    onReviewHelpful?.(reviewId, isHelpful);
  }

  function handleAddReview() {
    onAddReview?.();
  }

  function handleMoreActions(review: Review) {
    onMoreActions?.(review);
  }

  function formatDate(date: Date): string {
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: dateFormat,
      day: 'numeric'
    }).format(new Date(date));
  }

  const totalPages = $derived(Math.max(1, Math.ceil(reviews.length / reviewsPerPage)));
  const displayedReviews = $derived.by(() => {
    if (!showPagination) {
      return reviews.slice(0, maxReviews);
    }
    const startIndex = (currentPage - 1) * reviewsPerPage;
    return reviews.slice(startIndex, startIndex + reviewsPerPage);
  });

  $effect(() => {
    if (currentPage > totalPages) {
      currentPage = totalPages;
    }
  });
  
  function goToPage(page: number) {
    const safePage = Math.min(Math.max(page, 1), totalPages);
    currentPage = safePage;
  }
</script>

<div class={`product-reviews ${hostClass}`} {...restProps}>
  <div class="flex justify-between items-center mb-6">
    <h2 class="text-xl font-bold text-gray-900">Reviews ({reviews.length})</h2>
    
    {#if showAddReview}
      <Button variant="primary" onclick={handleAddReview}>
        Write a Review
      </Button>
    {/if}
  </div>
  
  {#if reviews.length === 0}
    <div class="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
      <MessageCircle class="mx-auto h-12 w-12 text-gray-400" />
      <h3 class="mt-2 text-sm font-medium text-gray-900">No reviews yet</h3>
      <p class="mt-1 text-sm text-gray-500">Be the first to review this product.</p>
    </div>
  {:else}
    <div class="space-y-8">
      {#each displayedReviews as review}
        <div class={`border rounded-lg p-6 ${reviewClass}`}>
          <div class="flex justify-between">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <User class="h-6 w-6 text-gray-600" />
                </div>
              </div>
              
              <div class="ml-4">
                <h3 class="text-sm font-medium text-gray-900">{review.author}</h3>
                
                {#if showRatings}
                  <div class="flex items-center mt-1">
                    {#each Array(5) as _, i}
                      <Star 
                        class={`h-4 w-4 ${
                          i < Math.floor(review.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : (i === Math.floor(review.rating) && review.rating % 1 >= 0.5 
                              ? 'text-yellow-400' 
                              : 'text-gray-300')
                        }`} 
                      />
                    {/each}
                    
                    <span class="ml-2 text-sm text-gray-500">
                      {review.rating.toFixed(1)}
                    </span>
                  </div>
                {/if}
                
                <div class="flex items-center mt-1 text-xs text-gray-500">
                  <Calendar class="h-3 w-3 mr-1" />
                  <time datetime={review.date.toISOString()}>
                    {formatDate(review.date)}
                  </time>
                  
                  {#if showVerification && review.verifiedPurchase}
                    <span class="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Verified Purchase
                    </span>
                  {/if}
                </div>
              </div>
            </div>
            
            <div class="flex items-center">
              <button
                type="button"
                class="text-gray-500 hover:text-gray-700"
                onclick={() => handleMoreActions(review)}
              >
                <MoreHorizontal class="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <h4 class="mt-4 text-base font-medium text-gray-900">{review.title}</h4>
          <p class="mt-2 text-gray-600">{review.content}</p>
          
          {#if showTags && review.tags && review.tags.length > 0}
            <div class="mt-3 flex flex-wrap gap-1">
              {#each review.tags as tag}
                <Badge variant="info" class="text-xs">{tag}</Badge>
              {/each}
            </div>
          {/if}
          
          {#if showHelpfulness}
            <div class="mt-4 flex items-center">
              <span class="text-sm text-gray-500 mr-3">Was this review helpful?</span>
              
              <button
                type="button"
                class="flex items-center text-sm text-gray-500 hover:text-gray-700"
                onclick={() => handleReviewHelpful(review.id, true)}
              >
                <ThumbsUp class="h-4 w-4 mr-1" />
                <span>{review.helpfulCount || 0}</span>
              </button>
              
              <button
                type="button"
                class="ml-4 flex items-center text-sm text-gray-500 hover:text-gray-700"
                onclick={() => handleReviewHelpful(review.id, false)}
              >
                <ThumbsDown class="h-4 w-4" />
              </button>
            </div>
          {/if}
          
          {#if showResponses && review.responses && review.responses.length > 0}
            <div class="mt-6 space-y-4 border-t border-gray-200 pt-6">
              {#each review.responses as response}
                <div class="flex">
                  <div class="flex-shrink-0 mr-3">
                    <div class="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <User class="h-5 w-5 text-gray-600" />
                    </div>
                  </div>
                  <div class="flex-1">
                    <div class="text-sm text-gray-900 font-medium">{response.author}</div>
                    <div class="mt-1 text-sm text-gray-700">{response.content}</div>
                    <div class="mt-1 flex items-center text-xs text-gray-500">
                      <Calendar class="h-3 w-3 mr-1" />
                      <time datetime={response.date.toISOString()}>
                        {formatDate(response.date)}
                      </time>
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </div>
    
    {#if showPagination && totalPages > 1}
      <div class={`mt-8 flex items-center justify-between ${footerClass}`}>
        <div class="flex-1 flex justify-between sm:hidden">
          <button
            type="button"
            class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            onclick={() => {
              if (currentPage > 1) currentPage--;
            }}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            type="button"
            class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            onclick={() => {
              if (currentPage < totalPages) currentPage++;
            }}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p class="text-sm text-gray-700">
              Showing <span class="font-medium">{(currentPage - 1) * reviewsPerPage + 1}</span> to 
              <span class="font-medium">{Math.min(currentPage * reviewsPerPage, reviews.length)}</span> of 
              <span class="font-medium">{reviews.length}</span> reviews
            </p>
          </div>
          <div>
            <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button
                type="button"
                class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                onclick={() => {
                  if (currentPage > 1) currentPage--;
                }}
                disabled={currentPage === 1}
              >
                <span class="sr-only">Previous</span>
                <ChevronLeft class="h-5 w-5" />
              </button>
              
              {#each Array.from({ length: totalPages }, (_, i) => i + 1) as page}
                <button
                  type="button"
                  class={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                    currentPage === page 
                      ? 'z-10 bg-blue-50 border-blue-500 text-blue-600' 
                      : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                  }`}
                  onclick={() => goToPage(page)}
                >
                  {page}
                </button>
              {/each}
              
              <button
                type="button"
                class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                onclick={() => {
                  if (currentPage < totalPages) currentPage++;
                }}
                disabled={currentPage === totalPages}
              >
                <span class="sr-only">Next</span>
                <ChevronRight class="h-5 w-5" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    {/if}
  {/if}
</div>


