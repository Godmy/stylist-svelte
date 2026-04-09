import type { QuoteRequestValue } from '$stylist/input/type/struct/interaction-input/quote-request-value';

export type ExtendedQuoteRequestProps = {
	title?: string;
	description?: string;
	class?: string;
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
};
