import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { RFQFormData } from '$stylist/commerce/type/struct/rfq-form-data';

export type RFQFormProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'> & {
	title?: string;
	description?: string;
	onSubmit?: (rfq: RFQFormData) => void;
	onCancel?: () => void;
	class?: string;
	formClass?: string;
	sectionClass?: string;
	inputClass?: string;
	buttonClass?: string;
	showCompanyFields?: boolean;
	showShippingFields?: boolean;
	showUrgentOption?: boolean;
	showValidUntil?: boolean;
	showDeliveryTerms?: boolean;
	showPaymentTerms?: boolean;
	showAttachments?: boolean;
	defaultCurrency?: string;
	maxAttachments?: number;
};
