<script lang="ts">
	import type { ProductSortProps } from '$stylist/commerce/type/struct/product-sort-props';
	import { createProductSortState } from '$stylist/commerce/function/state/product-sort';

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
