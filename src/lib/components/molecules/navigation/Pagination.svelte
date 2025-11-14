<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { ChevronLeft, ChevronRight } from 'lucide-svelte';

  type Props = {
    currentPage: number;
    totalPages: number;
    showFirstLast?: boolean;
    showPrevNext?: boolean;
    showDots?: boolean;
    maxVisible?: number;
    class?: string;
    buttonClass?: string;
    activeButtonClass?: string;
    disabledButtonClass?: string;
    onPageChange?: (page: number) => void;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    currentPage = 1,
    totalPages = 1,
    showFirstLast = true,
    showPrevNext = true,
    showDots = true,
    maxVisible = 5,
    class: className = '',
    buttonClass = '',
    activeButtonClass = '',
    disabledButtonClass = '',
    onPageChange,
    ...restProps
  }: Props = $props();

  // Calculate visible page range
  function getVisiblePages() {
    // Ensure maxVisible is odd so we can have a symmetric range around current page
    const visibleCount = maxVisible % 2 === 0 ? maxVisible + 1 : maxVisible;
    const half = Math.floor(visibleCount / 2);
    
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, currentPage + half);
    
    // Adjust the range if it's near the beginning or end
    if (end - start + 1 < visibleCount) {
      if (start === 1) {
        end = Math.min(totalPages, start + visibleCount - 1);
      } else if (end === totalPages) {
        start = Math.max(1, end - visibleCount + 1);
      }
    }
    
    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    return pages;
  }

  function goToPage(page: number) {
    if (page < 1 || page > totalPages || page === currentPage) return;
    
    if (onPageChange) {
      onPageChange(page);
    }
  }

  function goToFirst() {
    goToPage(1);
  }

  function goToLast() {
    goToPage(totalPages);
  }

  function goToPrev() {
    goToPage(currentPage - 1);
  }

  function goToNext() {
    goToPage(currentPage + 1);
  }
</script>

<div class={`flex items-center justify-center ${className}`} {...restProps}>
  <nav class="flex items-center space-x-1">
    {#if showFirstLast}
      <button
        type="button"
        class={`px-3 py-2 rounded-md text-sm font-medium ${
          currentPage === 1 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed ' + disabledButtonClass 
            : 'text-gray-700 hover:bg-gray-100 ' + buttonClass
        }`}
        on:click={goToFirst}
        disabled={currentPage === 1}
        aria-label="First page"
      >
        &laquo;
      </button>
    {/if}
    
    {#if showPrevNext}
      <button
        type="button"
        class={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium ${
          currentPage === 1 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed ' + disabledButtonClass 
            : 'text-gray-700 hover:bg-gray-100 ' + buttonClass
        }`}
        on:click={goToPrev}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <ChevronLeft class="h-4 w-4" />
      </button>
    {/if}
    
    {#if showDots && getVisiblePages()[0] > 1}
      <button
        type="button"
        class={`px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 ${buttonClass}`}
        on:click={() => goToPage(1)}
      >
        1
      </button>
      {#if getVisiblePages()[0] > 2}
        <span class="px-3 py-2 text-sm text-gray-500">...</span>
      {/if}
    {/if}
    
    {#each getVisiblePages() as page}
      <button
        type="button"
        class={`px-3 py-2 rounded-md text-sm font-medium ${
          page === currentPage 
            ? 'bg-blue-500 text-white ' + activeButtonClass 
            : 'text-gray-700 hover:bg-gray-100 ' + buttonClass
        }`}
        on:click={() => goToPage(page)}
        aria-current={page === currentPage ? 'page' : undefined}
      >
        {page}
      </button>
    {/each}
    
    {#if showDots && getVisiblePages()[getVisiblePages().length - 1] < totalPages}
      {#if getVisiblePages()[getVisiblePages().length - 1] < totalPages - 1}
        <span class="px-3 py-2 text-sm text-gray-500">...</span>
      {/if}
      <button
        type="button"
        class={`px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 ${buttonClass}`}
        on:click={() => goToPage(totalPages)}
      >
        {totalPages}
      </button>
    {/if}
    
    {#if showPrevNext}
      <button
        type="button"
        class={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium ${
          currentPage === totalPages 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed ' + disabledButtonClass 
            : 'text-gray-700 hover:bg-gray-100 ' + buttonClass
        }`}
        on:click={goToNext}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <ChevronRight class="h-4 w-4" />
      </button>
    {/if}
    
    {#if showFirstLast}
      <button
        type="button"
        class={`px-3 py-2 rounded-md text-sm font-medium ${
          currentPage === totalPages 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed ' + disabledButtonClass 
            : 'text-gray-700 hover:bg-gray-100 ' + buttonClass
        }`}
        on:click={goToLast}
        disabled={currentPage === totalPages}
        aria-label="Last page"
      >
        &raquo;
      </button>
    {/if}
  </nav>
</div>