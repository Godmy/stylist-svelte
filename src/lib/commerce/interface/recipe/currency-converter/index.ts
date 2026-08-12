import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotCurrency } from '$stylist/commerce/interface/slot/currency';
import type { SlotExchangeRate } from '$stylist/commerce/interface/slot/exchange-rate';
import type { BehaviorClickable } from '$stylist/layout/interface/behavior/clickable';
export interface RecipeCurrencyConverter
	extends ComputeIntersectAll<[SlotTheme, BehaviorClickable]> {
	onConvert?: (result: ({
fromAmount: number;
	fromCurrency: string;
	toAmount: number;
	toCurrency: string;
	exchangeRate: number;
	feeAmount?: number;
})) => void;
	onCurrencyChange?: (from: string, to: string) => void;
	amount: number;
	fromCurrency: string;
	toCurrency: string;
	currencies: SlotCurrency[];
	exchangeRates: SlotExchangeRate;
	showInput?: boolean;
	showLabels?: boolean;
	showConversionRate?: boolean;
	showFeeEstimate?: boolean;
	feePercentage?: number;
	inputClass?: string;
	selectClass?: string;
	resultClass?: string;
}
