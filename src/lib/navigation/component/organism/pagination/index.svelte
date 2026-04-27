<script lang="ts">
	import type { PaginationStateProps } from '$stylist/navigation/interface/recipe/pagination-pagination-state-props';
	import Icon from '$stylist/media/component/atom/icon/index.svelte';
	import { createPaginationState } from '$stylist/navigation/function/state/pagination';

	let props: PaginationStateProps = $props();
	const state = createPaginationState(props);
</script>

<div class={state.containerClass} {...state.restProps}>
	<nav class={state.navClass} aria-label="pagination">
		{#if state.showFirstLast}
			<button
				type="button"
				class={state.currentPage === 1 ? state.disabledButtonClassComputed : state.buttonClassComputed}
				onclick={state.goToFirst}
				disabled={state.currentPage === 1 || state.disabled}
				aria-label="First page"
			>
				&laquo;
			</button>
		{/if}

		{#if state.showPrevNext}
			<button
				type="button"
				class={state.currentPage === 1 ? state.disabledButtonClassComputed : state.iconButtonClass}
				onclick={state.goToPrev}
				disabled={state.currentPage === 1 || state.disabled}
				aria-label="Previous page"
			>
				<Icon name="chevron-down" direction="left" size="sm" />
			</button>
		{/if}

		{#if state.showDots && state.getVisiblePages()[0] > 1}
			<button
				type="button"
				class={state.buttonClassComputed}
				onclick={() => state.goToPage(1)}
				aria-label="Go to page 1"
			>
				1
			</button>
			{#if state.getVisiblePages()[0] > 2}
				<span class={state.dotsClass} aria-hidden="true">...</span>
			{/if}
		{/if}

		{#each state.getVisiblePages() as page}
			<button
				type="button"
				class={page === state.currentPage ? state.activeButtonClassComputed : state.buttonClassComputed}
				onclick={() => state.goToPage(page)}
				aria-current={page === state.currentPage ? 'page' : undefined}
				aria-label={`Go to page ${page}`}
			>
				{page}
			</button>
		{/each}

		{#if state.showDots && state.getVisiblePages()[state.getVisiblePages().length - 1] < state.totalPages}
			{#if state.getVisiblePages()[state.getVisiblePages().length - 1] < state.totalPages - 1}
				<span class={state.dotsClass} aria-hidden="true">...</span>
			{/if}
			<button
				type="button"
				class={state.buttonClassComputed}
				onclick={() => state.goToPage(state.totalPages)}
				aria-label={`Go to page ${state.totalPages}`}
			>
				{state.totalPages}
			</button>
		{/if}

		{#if state.showPrevNext}
			<button
				type="button"
				class={state.currentPage === state.totalPages ? state.disabledButtonClassComputed : state.iconButtonClass}
				onclick={state.goToNext}
				disabled={state.currentPage === state.totalPages || state.disabled}
				aria-label="Next page"
			>
				<Icon name="chevron-down" direction="right" size="sm" />
			</button>
		{/if}

		{#if state.showFirstLast}
			<button
				type="button"
				class={state.currentPage === state.totalPages ? state.disabledButtonClassComputed : state.buttonClassComputed}
				onclick={state.goToLast}
				disabled={state.currentPage === state.totalPages || state.disabled}
				aria-label="Last page"
			>
				&raquo;
			</button>
		{/if}
	</nav>
</div>
