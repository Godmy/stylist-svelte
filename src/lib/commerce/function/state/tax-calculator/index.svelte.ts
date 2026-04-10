import type { TaxCalculatorContract, LocationContract, TaxRateContract } from '$stylist/commerce/interface/component/tax-calculator';
import { TaxCalculatorStyleManager } from '$stylist/commerce/class/style-manager/tax-calculator';

export function createTaxCalculatorState(props: TaxCalculatorContract) {
	let amount = $state(props.defaultAmount ?? 100);
	let selectedLocationId = $state(props.defaultLocation ?? (props.locations?.[0]?.id ?? ''));
	let includeTax = $state(props.defaultIncludeTax ?? false);

	const selectedLocation = $derived(
		props.locations?.find(l => l.id === selectedLocationId) ?? props.locations?.[0]
	);
	const taxRates = $derived(selectedLocation?.taxRates ?? []);
	const totalTaxAmount = $derived(
		taxRates.reduce((sum, rate) => sum + (amount * rate.rate / 100), 0)
	);
	const totalAmount = $derived(amount + totalTaxAmount);

	const containerClasses = $derived(TaxCalculatorStyleManager.getContainerClasses(String(props.class ?? '')));
	const headerClasses = $derived(TaxCalculatorStyleManager.getHeaderClasses());
	const titleClasses = $derived(TaxCalculatorStyleManager.getTitleClasses());
	const formContainerClasses = $derived(TaxCalculatorStyleManager.getFormContainerClasses());
	const fieldGroupClasses = $derived(TaxCalculatorStyleManager.getFieldGroupClasses());
	const labelClasses = $derived(TaxCalculatorStyleManager.getLabelClasses());
	const inputClasses = $derived(TaxCalculatorStyleManager.getInputClasses());
	const selectClasses = $derived(TaxCalculatorStyleManager.getSelectClasses());
	const resultsContainerClasses = $derived(TaxCalculatorStyleManager.getResultsContainerClasses());
	const resultCardClasses = $derived(TaxCalculatorStyleManager.getResultCardClasses());
	const resultRowClasses = $derived(TaxCalculatorStyleManager.getResultRowClasses());
	const resultLabelClasses = $derived(TaxCalculatorStyleManager.getResultLabelClasses());
	const resultValueClasses = $derived(TaxCalculatorStyleManager.getResultValueClasses());
	const totalClasses = $derived(TaxCalculatorStyleManager.getTotalClasses());
	const totalLabelClasses = $derived(TaxCalculatorStyleManager.getTotalLabelClasses());
	const totalValueClasses = $derived(TaxCalculatorStyleManager.getTotalValueClasses());
	const calculateButtonClasses = $derived(TaxCalculatorStyleManager.getCalculateButtonClasses());
	const taxListClasses = $derived(TaxCalculatorStyleManager.getTaxListClasses());
	const taxItemClasses = $derived(TaxCalculatorStyleManager.getTaxItemClasses());
	const taxNameClasses = $derived(TaxCalculatorStyleManager.getTaxNameClasses());
	const taxValueClasses = $derived(TaxCalculatorStyleManager.getTaxValueClasses());
	const iconClasses = $derived(TaxCalculatorStyleManager.getIconClasses());

	function formatPrice(value: number) {
		return new Intl.NumberFormat(props.locale ?? 'en-US', {
			style: 'currency',
			currency: props.currency ?? 'USD'
		}).format(value);
	}

	function handleCalculate() {
		if (!selectedLocation) return;
		props.onCalculate?.({
			amount,
			taxAmount: totalTaxAmount,
			totalAmount,
			taxRates,
			location: selectedLocation
		});
	}

	return {
		get amount() { return amount; },
		set amount(v: number) { amount = v; },
		get selectedLocationId() { return selectedLocationId; },
		set selectedLocationId(v: string) { selectedLocationId = v; },
		get includeTax() { return includeTax; },
		set includeTax(v: boolean) { includeTax = v; },
		get selectedLocation() { return selectedLocation; },
		get taxRates() { return taxRates; },
		get totalTaxAmount() { return totalTaxAmount; },
		get totalAmount() { return totalAmount; },
		get containerClasses() { return containerClasses; },
		get headerClasses() { return headerClasses; },
		get titleClasses() { return titleClasses; },
		get formContainerClasses() { return formContainerClasses; },
		get fieldGroupClasses() { return fieldGroupClasses; },
		get labelClasses() { return labelClasses; },
		get inputClasses() { return inputClasses; },
		get selectClasses() { return selectClasses; },
		get resultsContainerClasses() { return resultsContainerClasses; },
		get resultCardClasses() { return resultCardClasses; },
		get resultRowClasses() { return resultRowClasses; },
		get resultLabelClasses() { return resultLabelClasses; },
		get resultValueClasses() { return resultValueClasses; },
		get totalClasses() { return totalClasses; },
		get totalLabelClasses() { return totalLabelClasses; },
		get totalValueClasses() { return totalValueClasses; },
		get calculateButtonClasses() { return calculateButtonClasses; },
		get taxListClasses() { return taxListClasses; },
		get taxItemClasses() { return taxItemClasses; },
		get taxNameClasses() { return taxNameClasses; },
		get taxValueClasses() { return taxValueClasses; },
		get iconClasses() { return iconClasses; },
		formatPrice,
		handleCalculate
	};
}

export default createTaxCalculatorState;
