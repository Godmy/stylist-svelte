<script lang="ts">
	import type { ProductSortProps } from '$stylist/commerce/type/struct/product-sort-props';
	import createProductSortState from '$stylist/commerce/function/state/product-sort/index.svelte';

	let props: ProductSortProps = $props();
	const state = createProductSortState(props);
</script>

<div class={state.classes}>
	<span class={state.labelClasses}>Sort by:</span>
	<select
		value={state.selectedOption}
		onchange={(event) => {
			state.handleSortChange((event.currentTarget as HTMLSelectElement).value);
		}}
		class={state.selectClasses}
	>
		{#each state.options as option}
			{#if typeof option === 'string'}
				<option value={option}>{option}</option>
			{:else}
				<option value={option.value}>{option.label}</option>
			{/if}
		{/each}
	</select>
</div>

<style>
	.c-product-sort {
		display: flex;
		align-items: center;
	}

	.c-product-sort__label {
		margin-inline-end: 0.5rem;
		font-size: var(--text-size-sm, 0.875rem);
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.c-product-sort__select {
		width: auto;
		padding: 0.5rem;
		border-radius: 0.5rem;
		font-size: var(--text-size-sm, 0.875rem);
	}

	.c-product-sort__select:focus-visible {
		outline: none;
		box-shadow: 0 0 0 2px var(--color-primary-500);
	}
</style>
