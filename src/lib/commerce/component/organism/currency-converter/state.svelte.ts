import type { RecipeCurrencyConverter as CurrencyConverterContract } from '$stylist/commerce/interface/recipe/currency-converter';
import type { SlotCurrency as CurrencyContract } from '$stylist/commerce/interface/slot/currency';
import type { SlotExchangeRate as ExchangeRateContract } from '$stylist/commerce/interface/slot/exchange-rate';
export function createCurrencyConverterState(props: CurrencyConverterContract) {
	let inputAmount = $state(props.amount ?? 0);

	const exchangeKey = $derived(`${props.fromCurrency}_${props.toCurrency}`);
	const rate = $derived((props.exchangeRates as ExchangeRateContract)?.[exchangeKey] ?? 1);
	const convertedAmount = $derived(inputAmount * rate);
	const feeAmount = $derived(
		props.showFeeEstimate ? inputAmount * ((props.feePercentage ?? 0) / 100) : 0
	);

	function getCurrencySymbol(code: string) {
		const currency = (props.currencies as CurrencyContract[])?.find((c) => c.code === code);
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
		get inputAmount() {
			return inputAmount;
		},
		set inputAmount(v: number) {
			inputAmount = v;
		},
		get rate() {
			return rate;
		},
		get convertedAmount() {
			return convertedAmount;
		},
		get feeAmount() {
			return feeAmount;
		},
		getCurrencySymbol,
		handleConvert
	};
}

export default createCurrencyConverterState;
