import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotRfqFormData } from '$stylist/commerce/interface/slot/rfq-form-data';
import type { BehaviorRfqFormEvents } from '$stylist/commerce/interface/behavior/rfq-form-events';
import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeRfqForm
	extends ComputeIntersectAll<[SlotTheme, SlotText, SlotText]>,
		BehaviorRfqFormEvents {
	formData?: SlotRfqFormData;

	currency?: string;

	locale?: string;

	showCompanyInfo?: boolean;

	showShippingAddress?: boolean;

	showProductList?: boolean;

	showAttachments?: boolean;

	showUrgentOption?: boolean;

	showDeliveryTerms?: boolean;

	showPaymentTerms?: boolean;

	showValidUntil?: boolean;

	maxProducts?: number;

	maxAttachments?: number;

	allowedFileTypes?: string[];

	maxFileSize?: number;

	formClass?: string;

	productListClass?: string;

	actionsClass?: string;
}
