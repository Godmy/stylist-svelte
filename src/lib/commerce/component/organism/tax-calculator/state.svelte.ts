import type { RecipeTaxCalculator as TaxCalculatorContract } from '$stylist/commerce/interface/recipe/tax-calculator';
export function createTaxCalculatorState(props: TaxCalculatorContract) {
	let amount = $state(props.defaultAmount ?? 100);
	let selectedLocationId = $state(props.defaultLocation ?? props.locations?.[0]?.id ?? '');
	let includeTax = $state(props.defaultIncludeTax ?? false);

	const selectedLocation = $derived(
		props.locations?.find((l) => l.id === selectedLocationId) ?? props.locations?.[0]
	);
	const taxRates = $derived(selectedLocation?.taxRates ?? []);
	const totalTaxAmount = $derived(
		taxRates.reduce((sum, rate) => sum + (amount * rate.rate) / 100, 0)
	);
	const totalAmount = $derived(amount + totalTaxAmount);

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
		get amount() {
			return amount;
		},
		set amount(v: number) {
			amount = v;
		},
		get selectedLocationId() {
			return selectedLocationId;
		},
		set selectedLocationId(v: string) {
			selectedLocationId = v;
		},
		get includeTax() {
			return includeTax;
		},
		set includeTax(v: boolean) {
			includeTax = v;
		},
		get selectedLocation() {
			return selectedLocation;
		},
		get taxRates() {
			return taxRates;
		},
		get totalTaxAmount() {
			return totalTaxAmount;
		},
		get totalAmount() {
			return totalAmount;
		},
		formatPrice,
		handleCalculate
	};
}

export default createTaxCalculatorState;
