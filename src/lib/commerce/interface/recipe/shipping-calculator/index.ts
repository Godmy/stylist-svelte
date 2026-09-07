import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotShippingOption } from '$stylist/commerce/interface/slot/shipping-option';
export interface RecipeShippingCalculator extends ComputeIntersectAll<[SlotTheme]> {
	onCalculate?: (options: SlotShippingOption[]) => void;
	onOptionSelect?: (option: SlotShippingOption) => void;

	shippingOptions: SlotShippingOption[];

	countries: {
		code: string;
		name: string;
	}[];

	states?: {
		code: string;
		name: string;
		countryCode?: string;
	}[];

	defaultOriginCountry?: string;

	defaultDestinationCountry?: string;

	defaultWeight?: number;

	defaultDimensions?: {
		length: number;
		width: number;
		height: number;
	};

	currency?: string;

	locale?: string;

	showWeightInput?: boolean;

	showDimensionsInput?: boolean;

	showCountrySelector?: boolean;

	showStateSelector?: boolean;

	formClass?: string;

	resultClass?: string;
}
