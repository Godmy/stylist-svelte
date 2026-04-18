import type { RecipeCurrencyConverter as CurrencyConverterContract } from '$stylist/commerce/interface/recipe/currency-converter';
import type { SlotCurrency as CurrencyContract } from '$stylist/commerce/interface/slot/currency';
import type { SlotExchangeRate as ExchangeRateContract } from '$stylist/commerce/interface/slot/exchange-rate';
import { CurrencyConverterStyleManager } from '$stylist/commerce/class/style-manager/currency-converter';

export function createCurrencyConverterState(props: CurrencyConverterContract) {
	let inputAmount = $state(props.amount ?? 0);

	const exchangeKey = $derived(`${props.fromCurrency}_${props.toCurrency}`);
	const rate = $derived((props.exchangeRates as ExchangeRateContract)?.[exchangeKey] ?? 1);
	const convertedAmount = $derived(inputAmount * rate);
	const feeAmount = $derived(
		props.showFeeEstimate ? inputAmount * ((props.feePercentage ?? 0) / 100) : 0
	);

	const containerClasses = $derived(CurrencyConverterStyleManager.getContainerClasses(String(props.class ?? '')));
	const headerClasses = $derived(CurrencyConverterStyleManager.getHeaderClasses());
	const titleClasses = $derived(CurrencyConverterStyleManager.getTitleClasses());
	const formContainerClasses = $derived(CurrencyConverterStyleManager.getFormContainerClasses());
	const fieldGroupClasses = $derived(CurrencyConverterStyleManager.getFieldGroupClasses());
	const labelClasses = $derived(CurrencyConverterStyleManager.getLabelClasses());
	const inputClasses = $derived(CurrencyConverterStyleManager.getInputClasses());
	const selectClasses = $derived(CurrencyConverterStyleManager.getSelectClasses());
	const resultContainerClasses = $derived(CurrencyConverterStyleManager.getResultContainerClasses());
	const resultClasses = $derived(CurrencyConverterStyleManager.getResultClasses());
	const exchangeRateClasses = $derived(CurrencyConverterStyleManager.getExchangeRateClasses());
	const feeClasses = $derived(CurrencyConverterStyleManager.getFeeClasses());
	const buttonClasses = $derived(CurrencyConverterStyleManager.getButtonClasses());
	const switchContainerClasses = $derived(CurrencyConverterStyleManager.getSwitchContainerClasses());
	const switchButtonClasses = $derived(CurrencyConverterStyleManager.getSwitchButtonClasses());

	function getCurrencySymbol(code: string) {
		const currency = (props.currencies as CurrencyContract[])?.find(c => c.code === code);
		return currency?.symbol ?? code;
	}

	function handleConvert() {
		props.onConvert?.({
			fromAmount: inputAmount,
			fromCurrency: props.fromCurrency,
			toAmount: convertedAmount,
			toCurrency: props.toCurrency,
			exchangeRate: rate,
			feeAmount: feeAmount || undefined
		});
	}

	return {
		get inputAmount() { return inputAmount; },
		set inputAmount(v: number) { inputAmount = v; },
		get rate() { return rate; },
		get convertedAmount() { return convertedAmount; },
		get feeAmount() { return feeAmount; },
		get containerClasses() { return containerClasses; },
		get headerClasses() { return headerClasses; },
		get titleClasses() { return titleClasses; },
		get formContainerClasses() { return formContainerClasses; },
		get fieldGroupClasses() { return fieldGroupClasses; },
		get labelClasses() { return labelClasses; },
		get inputClasses() { return inputClasses; },
		get selectClasses() { return selectClasses; },
		get resultContainerClasses() { return resultContainerClasses; },
		get resultClasses() { return resultClasses; },
		get exchangeRateClasses() { return exchangeRateClasses; },
		get feeClasses() { return feeClasses; },
		get buttonClasses() { return buttonClasses; },
		get switchContainerClasses() { return switchContainerClasses; },
		get switchButtonClasses() { return switchButtonClasses; },
		getCurrencySymbol,
		handleConvert
	};
}

export default createCurrencyConverterState;
