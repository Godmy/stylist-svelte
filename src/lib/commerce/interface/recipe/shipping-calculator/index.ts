import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotShippingOption } from '$stylist/commerce/interface/slot/shipping-option';
import type { SlotCountry } from '$stylist/commerce/interface/slot/country';
import type { SlotState } from '$stylist/commerce/interface/slot/state';
import type { SlotDimensions } from '$stylist/commerce/interface/slot/dimensions';
import type { BehaviorShippingCalculatorEvents } from '$stylist/commerce/interface/behavior/shipping-calculator-events';

export interface RecipeShippingCalculator
	extends ComputeIntersectAll<[SlotTheme]>,
		BehaviorShippingCalculatorEvents {
	shippingOptions: SlotShippingOption[];

	countries: SlotCountry[];

	states?: SlotState[];

	defaultOriginCountry?: string;

	defaultDestinationCountry?: string;

	defaultWeight?: number;

	defaultDimensions?: SlotDimensions;

	currency?: string;

	locale?: string;

	showWeightInput?: boolean;

	showDimensionsInput?: boolean;

	showCountrySelector?: boolean;

	showStateSelector?: boolean;

	formClass?: string;

	resultClass?: string;
}
