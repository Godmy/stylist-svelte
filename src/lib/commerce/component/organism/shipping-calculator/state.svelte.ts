import type { RecipeShippingCalculator as ShippingCalculatorContract } from '$stylist/commerce/interface/recipe/shipping-calculator';
import type { SlotShippingOption as ShippingOptionContract } from '$stylist/commerce/interface/slot/shipping-option';
export function createShippingCalculatorState(props: ShippingCalculatorContract) {
	let selectedOptionId = $state<string | null>(null);
	let weight = $state(props.defaultWeight ?? 1);
	let dimensions = $state(props.defaultDimensions ?? { length: 10, width: 10, height: 10 });

	function handleCalculate() {
		props.onCalculate?.(props.shippingOptions ?? []);
	}

	function handleSelectOption(option: ShippingOptionContract) {
		selectedOptionId = option.id;
		props.onOptionSelect?.(option);
	}

	function updateDimension(key: keyof typeof dimensions, value: number) {
		dimensions = {
			...dimensions,
			[key]: value
		};
	}

	return {
		get selectedOptionId() {
			return selectedOptionId;
		},
		get weight() {
			return weight;
		},
		set weight(v: number) {
			weight = v;
		},
		get dimensions() {
			return dimensions;
		},
		handleCalculate,
		handleSelectOption,
		updateDimension
	};
}

export default createShippingCalculatorState;
