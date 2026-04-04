/**
 * CurrencyConverterContract — конвертер валют.
 *
 * LEGO-состав:
 *   IClickable        (interaction) — disabled, loading
 *   ThemeAttributes   (theme)       — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface CurrencyContract {
	code: string;
	name: string;
	symbol: string;
	flag?: string;
}

export interface ExchangeRateContract {
	[key: string]: number;
}

export interface ConversionResultContract {
	fromAmount: number;
	fromCurrency: string;
	toAmount: number;
	toCurrency: string;
	exchangeRate: number;
	feeAmount?: number;
}

export interface CurrencyConverterEventsContract {
	onConvert?: (result: ConversionResultContract) => void;
	onCurrencyChange?: (from: string, to: string) => void;
}

export interface CurrencyConverterContract
	extends RecordArchitectureMerge<[
		IClickable,
		ThemeAttributes<HTMLDivElement>
	]>, CurrencyConverterEventsContract {
	/** Amount to convert */
	amount: number;
	/** Source currency code */
	fromCurrency: string;
	/** Target currency code */
	toCurrency: string;
	/** List of available currencies */
	currencies: CurrencyContract[];
	/** Exchange rates map */
	exchangeRates: ExchangeRateContract;
	/** Show input field */
	showInput?: boolean;
	/** Show labels */
	showLabels?: boolean;
	/** Show conversion rate */
	showConversionRate?: boolean;
	/** Show fee estimate */
	showFeeEstimate?: boolean;
	/** Fee percentage */
	feePercentage?: number;
	/** Additional CSS class for input */
	inputClass?: string;
	/** Additional CSS class for selects */
	selectClass?: string;
	/** Additional CSS class for result */
	resultClass?: string;
}
