<script lang="ts">
  import { ChevronLeft, ChevronRight } from 'lucide-svelte';

  type Props = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    siblingCount?: number;
    class?: string;
  };

  let {
    currentPage = $bindable(),
    totalPages,
    onPageChange,
    siblingCount = 1,
    class: className = ''
  }: Props = $props();

  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => start + idx);
  };

  const DOTS = '...';

  const paginationRange = $derived(() => {
    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + siblingCount * 2;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + siblingCount * 2;
      const rightRange = range(totalPages - rightItemCount + 1, totalPages);

      return [1, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);

      return [1, DOTS, ...middleRange, DOTS, totalPages];
    }
  });
</script>

<nav class="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 {className}">
  <div class="-mt-px flex w-0 flex-1">
    <button
      type="button"
      class="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
      onclick={() => currentPage > 1 && onPageChange(currentPage - 1)}
      disabled={currentPage <= 1}
    >
      <ChevronLeft class="mr-3 h-5 w-5 text-gray-400" />
      Previous
    </button>
  </div>
  <div class="hidden md:flex md:flex-1 md:justify-center">
    {#if paginationRange()}
      <div class="inline-flex -space-x-px rounded-md shadow-sm">
        {#each paginationRange() as pageNumber, index}
          {#if pageNumber === DOTS}
            <span class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">...</span>
          {:else}
            {#if pageNumber !== DOTS}
              <button
                type="button"
                class={`relative inline-flex items-center border px-4 py-2 text-sm font-medium ${
                  currentPage === pageNumber
                    ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                    : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
                }`}
                onclick={() => onPageChange(pageNumber as number)}
              >
                {pageNumber}
              </button>
            {/if}
          {/if}
        {/each}
      </div>
    {/if}
  </div>
  <div class="-mt-px flex w-0 flex-1 justify-end">
    <button
      type="button"
      class="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
      onclick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
      disabled={currentPage >= totalPages}
    >
      Next
      <ChevronRight class="ml-3 h-5 w-5 text-gray-400" />
    </button>
  </div>
</nav>