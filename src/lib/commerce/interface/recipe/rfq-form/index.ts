import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText } from '$stylist/typography/interface/slot/text';
export interface RecipeRfqForm
	extends ComputeIntersectAll<[SlotTheme, SlotText]> {
	onSubmit?: (data: ({
requesterName: string;
	requesterEmail: string;
	requesterPhone?: string;
	companyName?: string;
	companyAddress?: string;
	shippingAddress?: string;
	products: ({
id: string;
	name: string;
	description?: string;
	quantity: number;
	unit?: string;
	unitPrice?: number;
	totalValue?: number;
	specifications?: string;
	deliveryDate?: string;
	notes?: string;
})[];
	message: string;
	urgent?: boolean;
	validUntil?: Date;
	deliveryTerms?: string;
	paymentTerms?: string;
	currency?: string;
	attachments: File[];
})) => void;
	onProductAdd?: () => void;
	onProductRemove?: (productId: string) => void;
	onAttachmentChange?: (attachments: File[]) => void;

	formData?: ({
requesterName: string;
	requesterEmail: string;
	requesterPhone?: string;
	companyName?: string;
	companyAddress?: string;
	shippingAddress?: string;
	products: ({
id: string;
	name: string;
	description?: string;
	quantity: number;
	unit?: string;
	unitPrice?: number;
	totalValue?: number;
	specifications?: string;
	deliveryDate?: string;
	notes?: string;
})[];
	message: string;
	urgent?: boolean;
	validUntil?: Date;
	deliveryTerms?: string;
	paymentTerms?: string;
	currency?: string;
	attachments: File[];
});

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
