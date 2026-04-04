/**
 * TaxCalculatorContract — калькулятор налогов.
 *
 * LEGO-состав:
 *   ThemeAttributes   (theme) — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface TaxRateContract {
	id: string;
	name: string;
	rate: number;
	description?: string;
	compound?: boolean;
}

export interface LocationContract {
	id: string;
	name: string;
	countryCode: string;
	stateCode?: string;
	zipCode?: string;
	city?: string;
	taxRates: TaxRateContract[];
}

export interface CalculationResultContract {
	amount: number;
	taxAmount: number;
	totalAmount: number;
	taxRates: TaxRateContract[];
	location: LocationContract;
}

export interface TaxCalculatorEventsContract {
	onCalculate?: (result: CalculationResultContract) => void;
}

export interface TaxCalculatorContract
	extends RecordArchitectureMerge<[
		ThemeAttributes<HTMLDivElement>
	]>, TaxCalculatorEventsContract {
	/** List of locations */
	locations: LocationContract[];
	/** List of tax rates */
	taxRates?: TaxRateContract[];
	/** Default location ID */
	defaultLocation?: string;
	/** Default tax rate IDs */
	defaultTaxRates?: string[];
	/** Default amount */
	defaultAmount?: number;
	/** Default include tax */
	defaultIncludeTax?: boolean;
	/** Currency code */
	currency?: string;
	/** Locale for formatting */
	locale?: string;
	/** Show location selector */
	showLocationSelector?: boolean;
	/** Show tax rate selector */
	showTaxRateSelector?: boolean;
	/** Show include tax toggle */
	showIncludeTaxToggle?: boolean;
	/** Additional CSS class for form */
	formClass?: string;
	/** Additional CSS class for results */
	resultClass?: string;
}
