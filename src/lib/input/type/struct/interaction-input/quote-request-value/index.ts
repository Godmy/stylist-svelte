import type { ProductForQuote } from '$stylist/input/type/struct/interaction-input/product-for-quote';

export type QuoteRequestValue = {
	requesterName: string;
	requesterEmail: string;
	requesterPhone?: string;
	companyName?: string;
	companyAddress?: string;
	shippingAddress?: string;
	products: ProductForQuote[];
	message: string;
	urgent?: boolean;
	validUntil?: Date;
};
