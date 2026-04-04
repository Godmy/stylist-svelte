/**
 * ShippingCalculatorContract — калькулятор стоимости доставки.
 *
 * LEGO-состав:
 *   ThemeAttributes   (theme) — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ShippingOptionContract {
	id: string;
	name: string;
	description: string;
	price: number;
	estimatedDays: number;
	carrier?: string;
	trackingAvailable?: boolean;
}

export interface CountryContract {
	code: string;
	name: string;
}

export interface StateContract {
	code: string;
	name: string;
	countryCode?: string;
}

export interface DimensionsContract {
	length: number;
	width: number;
	height: number;
}

export interface ShippingCalculatorEventsContract {
	onCalculate?: (options: ShippingOptionContract[]) => void;
	onOptionSelect?: (option: ShippingOptionContract) => void;
}

export interface ShippingCalculatorContract
	extends RecordArchitectureMerge<[
		ThemeAttributes<HTMLDivElement>
	]>, ShippingCalculatorEventsContract {
	/** List of shipping options */
	shippingOptions: ShippingOptionContract[];
	/** List of countries */
	countries: CountryContract[];
	/** List of states */
	states?: StateContract[];
	/** Default origin country */
	defaultOriginCountry?: string;
	/** Default destination country */
	defaultDestinationCountry?: string;
	/** Default weight */
	defaultWeight?: number;
	/** Default dimensions */
	defaultDimensions?: DimensionsContract;
	/** Currency code */
	currency?: string;
	/** Locale for formatting */
	locale?: string;
	/** Show weight input */
	showWeightInput?: boolean;
	/** Show dimensions input */
	showDimensionsInput?: boolean;
	/** Show country selector */
	showCountrySelector?: boolean;
	/** Show state selector */
	showStateSelector?: boolean;
	/** Additional CSS class for form */
	formClass?: string;
	/** Additional CSS class for results */
	resultClass?: string;
}
