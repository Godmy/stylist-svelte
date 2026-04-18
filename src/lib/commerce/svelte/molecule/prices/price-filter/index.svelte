<script lang="ts">
	import type { PriceFilterProps } from '$stylist/commerce/interface/recipe/price-filter-props';
	import { createPriceFilterState } from '$stylist/commerce/function/state/price-filter';

	let props: PriceFilterProps = $props();
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
