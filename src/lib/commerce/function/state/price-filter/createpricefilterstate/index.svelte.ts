import { PriceFilterStyleManager } from '$stylist/commerce/class/style-manager/price-filter';
import type { PriceFilterProps } from '$stylist/commerce/interface/recipe/price-filter-props';

export function createPriceFilterState(props: PriceFilterProps) {
	let min = $state(props.currentMin ?? 0);
	let max = $state(props.currentMax ?? 1000);

	$effect(() => {
		min = props.currentMin ?? 0;
		max = props.currentMax ?? 1000;
	});

	const containerClass = $derived(PriceFilterStyleManager.getContainerClass(props.class ?? ''));
	const rangeContainerClass = $derived(PriceFilterStyleManager.getRangeContainerClass());
	const labelsContainerClass = $derived(PriceFilterStyleManager.getLabelsContainerClass());
	const labelClass = $derived(PriceFilterStyleManager.getLabelClass());
	const sliderClass = $derived(PriceFilterStyleManager.getSliderClass());
	const secondSliderClass = $derived(`${PriceFilterStyleManager.getSliderClass()} ${PriceFilterStyleManager.getSecondSliderClass()}`);
	const priceRangeClass = $derived(PriceFilterStyleManager.getPriceRangeClass());

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
		get min() { return min; },
		get max() { return max; },
		get containerClass() { return containerClass; },
		get rangeContainerClass() { return rangeContainerClass; },
		get labelsContainerClass() { return labelsContainerClass; },
		get labelClass() { return labelClass; },
		get sliderClass() { return sliderClass; },
		get secondSliderClass() { return secondSliderClass; },
		get priceRangeClass() { return priceRangeClass; },
		handleMinChange,
		handleMaxChange
	};
}

export default createPriceFilterState;
