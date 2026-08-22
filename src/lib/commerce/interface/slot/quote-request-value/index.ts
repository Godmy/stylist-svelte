export interface QuoteRequestValue {
	requesterName: string;
	requesterEmail: string;
	requesterPhone?: string;
	companyName?: string;
	companyAddress?: string;
	shippingAddress?: string;
	products: {
		id: string;
		name: string;
		quantity: number;
		unitPrice?: number;
		notes?: string;
	}[];
	message: string;
	urgent?: boolean;
	validUntil?: Date;
}
