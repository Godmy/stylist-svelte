/**
 * CurrencyConverterContract вЂ” РєРѕРЅРІРµСЂС‚РµСЂ РІР°Р»СЋС‚.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   IClickable        (interaction) вЂ” disabled, loading
 *   ThemeAttributes   (theme)       вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { SlotCurrency } from '$stylist/commerce/interface/slot/currency';
import type { SlotExchangeRate } from '$stylist/commerce/interface/slot/exchange-rate';
import type { BehaviorCurrencyConverterEvents } from '$stylist/commerce/interface/behavior/currency-converter-events';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';

export interface RecipeCurrencyConverter extends StructIntersectAll<[ BehaviorClickable, ThemeAttributes<HTMLDivElement> ]>, BehaviorCurrencyConverterEvents {
	/** Amount to convert */
	amount: number;
	/** Source currency code */
	fromCurrency: string;
	/** Target currency code */
	toCurrency: string;
	/** List of available currencies */
	currencies: SlotCurrency[];
	/** Exchange rates map */
	exchangeRates: SlotExchangeRate;
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
