import type { RFQProduct } from '$stylist/commerce/type/struct/rfq-product';

export type RFQFormData = {
	requesterName: string;
	requesterEmail: string;
	requesterPhone?: string;
	companyName?: string;
	companyAddress?: string;
	shippingAddress?: string;
	products: RFQProduct[];
	message: string;
	urgent?: boolean;
	validUntil?: Date;
	deliveryTerms?: string;
	paymentTerms?: string;
	currency?: string;
	attachments: File[];
};
