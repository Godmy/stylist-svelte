<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { ProductSortProps } from '$stylist/design-system/props';
	import { createProductSortState } from '$stylist/design-system/models/product-sort.svelte';

	type Props = ProductSortProps & HTMLAttributes<HTMLDivElement>;
	let props: Props = $props();
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				options: _options,
				selectedOption: _selectedOption,
				onValueChange: _onValueChange,
				onSortChange: _onSortChange,
				...rest
			} = props;
			return rest;
		})()
	);

	const sortState = createProductSortState(props);
	let localSelectedOption = $state(sortState.selectedOption);

	$effect(() => {
		localSelectedOption = sortState.selectedOption;
	});
</script>

<div class={sortState.classes} {...restProps}>
	<span class={sortState.labelClasses}>Sort by:</span>
	<select
		bind:value={localSelectedOption}
		onchange={() => {
			props.onValueChange?.(localSelectedOption);
			props.onSortChange?.(localSelectedOption);
		}}
		class={sortState.selectClasses}
	>
		{#each sortState.options as option}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>
</div>




