import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { RecipePaymentMethodSelector } from '$stylist/commerce/interface/recipe/payment-method-selector';
export interface RecipePaymentInfoProps extends ComputeIntersectAll<[RecipePaymentMethodSelector]> {
	acceptedCards?: string[];
	showMethods?: boolean;
	showSecurityInfo?: boolean;
	showAcceptedCards?: boolean;
	showFees?: boolean;
	showProcessingTime?: boolean;
}
