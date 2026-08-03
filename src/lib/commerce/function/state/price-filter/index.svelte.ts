import type { HTMLAttributes } from 'svelte/elements';
import type { RecipePriceFilter } from '$stylist/commerce/interface/recipe/price-filter';

export function createPriceFilterState(props: RecipePriceFilter & HTMLAttributes<HTMLDivElement>) {
	let min = $state(props.currentMin ?? 0);
	let max = $state(props.currentMax ?? 1000);

	$effect(() => {
		min = props.currentMin ?? 0;
		max = props.currentMax ?? 1000;
	});

	function handleMinChange(e: Event) {
		const value = parseInt((e.target as HTMLInputElement).value);
		min = Math.min(value, max);
		(props.onPriceChange ?? (() => {}))(min, max);
	}

	function handleMaxChange(e: Event) {
		const value = parseInt((e.target as HTMLInputElement).value);
		max = Math.max(value, min);
		(props.onPriceChange ?? (() => {}))(min, max);
	}

	return {
		get min() {
			return min;
		},
		get max() {
			return max;
		},
		get containerClass() {
			return ['price-filter', props.class].filter(Boolean).join(' ');
		},
		get rangeContainerClass() {
			return 'price-filter__range-container';
		},
		get labelsContainerClass() {
			return 'price-filter__labels-container';
		},
		get labelClass() {
			return 'price-filter__label';
		},
		get sliderClass() {
			return 'price-filter__slider';
		},
		get secondSliderClass() {
			return 'price-filter__slider price-filter__second-slider';
		},
		get priceRangeClass() {
			return 'price-filter__price-range';
		},
		handleMinChange,
		handleMaxChange
	};
}
