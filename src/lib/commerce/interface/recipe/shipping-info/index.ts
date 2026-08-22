import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotShippingOptionInfo } from '$stylist/commerce/interface/slot/shipping-option-info';
import type { RecipeShippingRegion } from '$stylist/commerce/interface/recipe/shipping-region';
export interface RecipeShippingInfo extends ComputeIntersectAll<[SlotTheme]> {
	shippingOptions: SlotShippingOptionInfo[];

	regions?: RecipeShippingRegion[];

	estimatedDeliveryDate?: Date;

	freeShippingThreshold?: number;

	deliveryEstimate?: Date;

	showOptions?: boolean;

	showRegions?: boolean;

	showDeliveryEstimate?: boolean;

	showFreeShippingInfo?: boolean;

	showRestrictions?: boolean;

	showCarbonNeutralOptions?: boolean;

	showEstimates?: boolean;

	showFreeShipping?: boolean;

	headerClass?: string;

	optionClass?: string;

	regionClass?: string;
}
