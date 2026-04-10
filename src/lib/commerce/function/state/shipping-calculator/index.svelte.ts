import type { ShippingCalculatorContract, ShippingOptionContract } from '$stylist/commerce/interface/component/shipping-calculator';
import { ShippingCalculatorStyleManager } from '$stylist/commerce/class/style-manager/shipping-calculator';

export function createShippingCalculatorState(props: ShippingCalculatorContract) {
	let selectedOptionId = $state<string | null>(null);
	let weight = $state(props.defaultWeight ?? 1);
	let dimensions = $state(props.defaultDimensions ?? { length: 10, width: 10, height: 10 });

	const containerClasses = $derived(ShippingCalculatorStyleManager.getContainerClasses(String(props.class ?? '')));
	const headerClasses = $derived(ShippingCalculatorStyleManager.getHeaderClasses());
	const titleClasses = $derived(ShippingCalculatorStyleManager.getTitleClasses());
	const formContainerClasses = $derived(ShippingCalculatorStyleManager.getFormContainerClasses());
	const fieldGroupClasses = $derived(ShippingCalculatorStyleManager.getFieldGroupClasses());
	const labelClasses = $derived(ShippingCalculatorStyleManager.getLabelClasses());
	const inputClasses = $derived(ShippingCalculatorStyleManager.getInputClasses());
	const selectClasses = $derived(ShippingCalculatorStyleManager.getSelectClasses());
	const resultsContainerClasses = $derived(ShippingCalculatorStyleManager.getResultsContainerClasses());
	const optionNameClasses = $derived(ShippingCalculatorStyleManager.getOptionNameClasses());
	const optionDescriptionClasses = $derived(ShippingCalculatorStyleManager.getOptionDescriptionClasses());
	const optionPriceClasses = $derived(ShippingCalculatorStyleManager.getOptionPriceClasses());
	const deliveryTimeClasses = $derived(ShippingCalculatorStyleManager.getDeliveryTimeClasses());
	const calculateButtonClasses = $derived(ShippingCalculatorStyleManager.getCalculateButtonClasses());
	const iconClasses = $derived(ShippingCalculatorStyleManager.getIconClasses());
	const badgeClasses = $derived(ShippingCalculatorStyleManager.getBadgeClasses());

	function getShippingOptionClasses(isSelected: boolean) {
		return ShippingCalculatorStyleManager.getShippingOptionClasses(isSelected);
	}

	function handleCalculate() {
		props.onCalculate?.(props.shippingOptions ?? []);
	}

	function handleSelectOption(option: ShippingOptionContract) {
		selectedOptionId = option.id;
		props.onOptionSelect?.(option);
	}

	return {
		get selectedOptionId() { return selectedOptionId; },
		get weight() { return weight; },
		set weight(v: number) { weight = v; },
		get dimensions() { return dimensions; },
		get containerClasses() { return containerClasses; },
		get headerClasses() { return headerClasses; },
		get titleClasses() { return titleClasses; },
		get formContainerClasses() { return formContainerClasses; },
		get fieldGroupClasses() { return fieldGroupClasses; },
		get labelClasses() { return labelClasses; },
		get inputClasses() { return inputClasses; },
		get selectClasses() { return selectClasses; },
		get resultsContainerClasses() { return resultsContainerClasses; },
		get optionNameClasses() { return optionNameClasses; },
		get optionDescriptionClasses() { return optionDescriptionClasses; },
		get optionPriceClasses() { return optionPriceClasses; },
		get deliveryTimeClasses() { return deliveryTimeClasses; },
		get calculateButtonClasses() { return calculateButtonClasses; },
		get iconClasses() { return iconClasses; },
		get badgeClasses() { return badgeClasses; },
		getShippingOptionClasses,
		handleCalculate,
		handleSelectOption
	};
}

export default createShippingCalculatorState;
