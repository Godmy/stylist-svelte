<script lang="ts">
	import type { ProductSortProps } from '$stylist/design-system/props';
	import { createProductSortState } from './state';

	let props: ProductSortProps = $props();

	const sortState = createProductSortState(props);
	let localSelectedOption = $state(sortState.selectedOption);

	$effect(() => {
		localSelectedOption = sortState.selectedOption;
	});
</script>

<div class={sortState.classes}>
	<span class={sortState.labelClasses}>Sort by:</span>
	<select
		bind:value={localSelectedOption}
		onchange={() => props.onSortChange?.(localSelectedOption)}
		class={sortState.selectClasses}
	>
		{#each sortState.options as option}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>
</div>

