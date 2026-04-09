/**
 * RFQFormContract — форма запроса коммерческого предложения.
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — title (заголовок формы)
 *   ICaptionSlot      (information) — description (описание)
 *   ThemeAttributes   (theme)       — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { ICaptionSlot } from '$stylist/typography/interface/proto/caption-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface RFQProductContract {
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
}

export interface RFQFormDataContract {
	requesterName: string;
	requesterEmail: string;
	requesterPhone?: string;
	companyName?: string;
	companyAddress?: string;
	shippingAddress?: string;
	products: RFQProductContract[];
	message: string;
	urgent?: boolean;
	validUntil?: Date;
	deliveryTerms?: string;
	paymentTerms?: string;
	currency?: string;
	attachments: File[];
}

export interface RFQFormEventsContract {
	onSubmit?: (data: RFQFormDataContract) => void;
	onProductAdd?: () => void;
	onProductRemove?: (productId: string) => void;
	onAttachmentChange?: (attachments: File[]) => void;
}

export interface RFQFormContract
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		ThemeAttributes<HTMLDivElement>
	]>, RFQFormEventsContract {
	/** Form data */
	formData?: RFQFormDataContract;
	/** Currency code */
	currency?: string;
	/** Locale for formatting */
	locale?: string;
	/** Show company info */
	showCompanyInfo?: boolean;
	/** Show shipping address */
	showShippingAddress?: boolean;
	/** Show product list */
	showProductList?: boolean;
	/** Show attachments */
	showAttachments?: boolean;
	/** Show urgent option */
	showUrgentOption?: boolean;
	/** Show delivery terms */
	showDeliveryTerms?: boolean;
	/** Show payment terms */
	showPaymentTerms?: boolean;
	/** Show valid until */
	showValidUntil?: boolean;
	/** Max products */
	maxProducts?: number;
	/** Max attachments */
	maxAttachments?: number;
	/** Allowed file types */
	allowedFileTypes?: string[];
	/** Max file size in MB */
	maxFileSize?: number;
	/** Additional CSS class for form */
	formClass?: string;
	/** Additional CSS class for product list */
	productListClass?: string;
	/** Additional CSS class for actions */
	actionsClass?: string;
}
