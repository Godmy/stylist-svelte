export interface SlotUpsellProduct {
	id: string;
	name: string;
	description?: string;
	price: number;
	originalPrice?: number;
	thumbnail?: string;
	rating?: number;
	reviewCount?: number;
	inStock?: boolean;
	isRecommended?: boolean;
	category?: string;
	discountPercent?: number;
	tags?: string[];
}
