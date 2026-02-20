<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { IconChevron } from '$stylist/components/atoms';
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
  }: PaginationProps & HTMLAttributes<HTMLDivElement> = $props();

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

  // Generate CSS classes using the style manager
  const containerClass = $derived(PaginationStyleManager.getHostClasses(className));
  const navClass = $derived(PaginationStyleManager.getNavClasses());
  const buttonClassComputed = $derived(PaginationStyleManager.getButtonClasses(false, false, buttonClass));
  const activeButtonClassComputed = $derived(PaginationStyleManager.getButtonClasses(true, false, activeButtonClass));
  const disabledButtonClassComputed = $derived(PaginationStyleManager.getButtonClasses(false, true, disabledButtonClass));
  const iconButtonClass = $derived(PaginationStyleManager.getIconButtonClasses(false, false, buttonClass));
  const dotsClass = $derived(PaginationStyleManager.getDotsClasses());
</script>

<div class={containerClass} {...restProps}>
  <nav class={navClass} aria-label="pagination">
    {#if showFirstLast}
      <button
        type="button"
        class={currentPage === 1 ? disabledButtonClassComputed : buttonClassComputed}
        onclick={goToFirst}
        disabled={currentPage === 1 || disabled}
        aria-label="First page"
      >
        &laquo;
      </button>
    {/if}

    {#if showPrevNext}
      <button
        type="button"
        class={currentPage === 1 ? disabledButtonClassComputed : iconButtonClass}
        onclick={goToPrev}
        disabled={currentPage === 1 || disabled}
        aria-label="Previous page"
      >
        <IconChevron direction="left" size="sm" />
      </button>
    {/if}

    {#if showDots && getVisiblePages()[0] > 1}
      <button
        type="button"
        class={buttonClassComputed}
        onclick={() => goToPage(1)}
        aria-label="Go to page 1"
      >
        1
      </button>
      {#if getVisiblePages()[0] > 2}
        <span class={dotsClass} aria-hidden="true">...</span>
      {/if}
    {/if}

    {#each getVisiblePages() as page}
      <button
        type="button"
        class={page === currentPage ? activeButtonClassComputed : buttonClassComputed}
        onclick={() => goToPage(page)}
        aria-current={page === currentPage ? 'page' : undefined}
        aria-label={`Go to page ${page}`}
      >
        {page}
      </button>
    {/each}

    {#if showDots && getVisiblePages()[getVisiblePages().length - 1] < totalPages}
      {#if getVisiblePages()[getVisiblePages().length - 1] < totalPages - 1}
        <span class={dotsClass} aria-hidden="true">...</span>
      {/if}
      <button
        type="button"
        class={buttonClassComputed}
        onclick={() => goToPage(totalPages)}
        aria-label={`Go to page ${totalPages}`}
      >
        {totalPages}
      </button>
    {/if}

    {#if showPrevNext}
      <button
        type="button"
        class={currentPage === totalPages ? disabledButtonClassComputed : iconButtonClass}
        onclick={goToNext}
        disabled={currentPage === totalPages || disabled}
        aria-label="Next page"
      >
        <IconChevron direction="right" size="sm" />
      </button>
    {/if}

    {#if showFirstLast}
      <button
        type="button"
        class={currentPage === totalPages ? disabledButtonClassComputed : buttonClassComputed}
        onclick={goToLast}
        disabled={currentPage === totalPages || disabled}
        aria-label="Last page"
      >
        &raquo;
      </button>
    {/if}
  </nav>
</div>
