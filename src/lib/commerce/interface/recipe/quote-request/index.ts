import type { QuoteRequestValue } from '$stylist/commerce/interface/slot/quote-request-value';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeQuoteRequest
	extends ComputeIntersectAll<[({}), SlotTheme]> {
	title?: string;
	description?: string;
	formClass?: string;
	sectionClass?: string;
	inputClass?: string;
	buttonClass?: string;
	showCompanyFields?: boolean;
	showShippingFields?: boolean;
	showUrgentOption?: boolean;
	showValidUntil?: boolean;
	onSubmit?: (data: QuoteRequestValue) => void;
	onCancel?: () => void;
}