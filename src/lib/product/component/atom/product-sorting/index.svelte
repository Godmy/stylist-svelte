<script lang="ts">
	import type { RecipeProductSorting } from '$stylist/product/interface/recipe/product-sorting';
	import { createProductSortingState } from '$stylist/product/function/state/product-sorting/index.svelte';

	let props: RecipeProductSorting = $props();
	const state = createProductSortingState(props);
</script>

<div class={state.containerClass}>
	<select
		class={state.selectClass}
		value={props.value}
		onchange={state.handleChange}
		oninput={state.handleInput}
	>
		{#each props.options as option (option.value)}
			<option class={state.optionClass} value={option.value}>
				{option.label}
			</option>
		{/each}
	</select>

	{#if props.children}
		{@render props.children()}
	{/if}
</div>

<style>
	.product-sorting {
		display: flex;
		align-items: center;
	}

	.product-sorting > * + * {
		margin-left: 0.5rem;
	}

	.product-sorting__select {
		border: 1px solid var(--color-border-primary);
		border-radius: 0.375rem;
		padding: 0.5rem 0.75rem;
	}

	.product-sorting__select:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 3px var(--color-primary-500);
	}
</style>
