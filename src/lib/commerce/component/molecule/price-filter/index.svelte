<script lang="ts">
import type { HTMLAttributes } from 'svelte/elements';
	import type { RecipePriceFilter } from '$stylist/commerce/interface/recipe/price-filter';
	import { createPriceFilterState } from '$stylist/commerce/function/state/price-filter/index.svelte';

	let props: RecipePriceFilter & HTMLAttributes<HTMLDivElement> = $props();
	const state = createPriceFilterState(props);
</script>

<div class={state.containerClass}>
	<div class={state.rangeContainerClass}>
		<div class={state.labelsContainerClass}>
			<span class={state.labelClass}>Min: {props.currency ?? '$'}{state.min}</span>
			<span class={state.labelClass}>Max: {props.currency ?? '$'}{state.max}</span>
		</div>
		<input
			type="range"
			min={props.minPrice ?? 0}
			max={props.maxPrice ?? 1000}
			value={state.min}
			oninput={state.handleMinChange}
			class={state.sliderClass}
		/>
		<input
			type="range"
			min={props.minPrice ?? 0}
			max={props.maxPrice ?? 1000}
			value={state.max}
			oninput={state.handleMaxChange}
			class={state.secondSliderClass}
		/>
	</div>
	<div class={state.priceRangeClass}>
		<span>{props.currency ?? '$'}{props.minPrice ?? 0}</span>
		<span>{props.currency ?? '$'}{props.maxPrice ?? 1000}</span>
	</div>
</div>

<style>
	.price-filter {
		padding: 1rem;
	}

	.price-filter__range-container {
		margin-bottom: 1rem;
	}

	.price-filter__labels-container {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.25rem;
	}

	.price-filter__label {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
	}

	.price-filter__slider {
		width: 100%;
		height: 0.5rem;
		background-color: var(--color-background-secondary);
		border-radius: 0.5rem;
		appearance: none;
		cursor: pointer;
	}

	.price-filter__second-slider {
		margin-top: 1rem;
	}

	.price-filter__price-range {
		display: flex;
		justify-content: space-between;
	}
</style>
