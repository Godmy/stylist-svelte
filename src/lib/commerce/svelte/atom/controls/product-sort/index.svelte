<script lang="ts">
	import type { ProductSortProps } from '$stylist/commerce/type/struct/product-sort-props';
	import { createProductSortState } from '$stylist/commerce/function/state/product-sort';

	let props: ProductSortProps = $props();
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				options: _options,
				selectedOption: _selectedOption,
				onValueChange: _onValueChange,
				...rest
			} = props;
			return rest;
		})()
	);

	const productSortState = createProductSortState(props);
</script>

<div class={productSortState.classes} {...restProps}>
	<span class={productSortState.labelClasses}>Sort by:</span>
	<select
		value={productSortState.selectedOption}
		onchange={(event) => {
			productSortState.handleSortChange((event.currentTarget as HTMLSelectElement).value);
		}}
		class={productSortState.selectClasses}
	>
		{#each productSortState.options as option}
			{#if typeof option === 'string'}
				<option value={option}>{option}</option>
			{:else}
				<option value={option.value}>{option.label}</option>
			{/if}
		{/each}
	</select>
</div>
