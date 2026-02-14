<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { ChevronLeft, ChevronRight } from 'lucide-svelte';
  import { PaginationStyleManager } from '$stylist/design-system/styles';
  import type { PaginationProps } from '$stylist/design-system/props';

  let {
    currentPage = 1,
    totalPages = 1,
    showFirstLast = true,
    showPrevNext = true,
    showDots = true,
    maxVisible = 5,
    variant = 'default',
    size = 'md',
    disabled = false,
    class: className = '',
    buttonClass = '',
    activeButtonClass = '',
    disabledButtonClass = '',
    onPageChange,
    ...restProps
  }: PaginationProps = $props();

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
    if (page < 1 || page > totalPages || page === currentPage || disabled) return;

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

<div class={PaginationStyleManager.getHostClasses(className)} {...restProps}>
  <nav class={PaginationStyleManager.getNavClasses()}>
    {#if showFirstLast}
      <button
        type="button"
        class={PaginationStyleManager.getButtonClasses(false, currentPage === 1, disabledButtonClass)}
        onclick={goToFirst}
        disabled={currentPage === 1}
        aria-label="First page"
      >
        &laquo;
      </button>
    {/if}

    {#if showPrevNext}
      <button
        type="button"
        class={PaginationStyleManager.getIconButtonClasses(false, currentPage === 1, disabledButtonClass)}
        onclick={goToPrev}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <ChevronLeft class="h-4 w-4" />
      </button>
    {/if}

    {#if showDots && getVisiblePages()[0] > 1}
      <button
        type="button"
        class={PaginationStyleManager.getButtonClasses(false, false, buttonClass)}
        onclick={() => goToPage(1)}
      >
        1
      </button>
      {#if getVisiblePages()[0] > 2}
        <span class={PaginationStyleManager.getDotsClasses()}>...</span>
      {/if}
    {/if}

    {#each getVisiblePages() as page}
      <button
        type="button"
        class={PaginationStyleManager.getButtonClasses(page === currentPage, false, page === currentPage ? activeButtonClass : buttonClass)}
        onclick={() => goToPage(page)}
        aria-current={page === currentPage ? 'page' : undefined}
      >
        {page}
      </button>
    {/each}

    {#if showDots && getVisiblePages()[getVisiblePages().length - 1] < totalPages}
      {#if getVisiblePages()[getVisiblePages().length - 1] < totalPages - 1}
        <span class={PaginationStyleManager.getDotsClasses()}>...</span>
      {/if}
      <button
        type="button"
        class={PaginationStyleManager.getButtonClasses(false, false, buttonClass)}
        onclick={() => goToPage(totalPages)}
      >
        {totalPages}
      </button>
    {/if}

    {#if showPrevNext}
      <button
        type="button"
        class={PaginationStyleManager.getIconButtonClasses(false, currentPage === totalPages, disabledButtonClass)}
        onclick={goToNext}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <ChevronRight class="h-4 w-4" />
      </button>
    {/if}

    {#if showFirstLast}
      <button
        type="button"
        class={PaginationStyleManager.getButtonClasses(false, currentPage === totalPages, disabledButtonClass)}
        onclick={goToLast}
        disabled={currentPage === totalPages}
        aria-label="Last page"
      >
        &raquo;
      </button>
    {/if}
  </nav>
</div>

