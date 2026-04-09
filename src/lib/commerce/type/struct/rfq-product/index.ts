export type RFQProduct = {
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
};
