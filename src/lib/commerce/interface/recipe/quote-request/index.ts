import type { SlotQuoteRequestContract } from '$stylist/commerce/interface/slot/quote-request-contract';
import type { QuoteRequestValue } from '$stylist/input/type/struct/interaction-input/quote-request-value';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';

export interface RecipeQuoteRequest
	extends ComputeIntersectAll<[SlotQuoteRequestContract, SlotTheme, HTMLAttributes<HTMLDivElement>]> {
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