import type { AdminProductDomain } from '$stylist/travel-admin/type/alias/admin-product-domain';

/** null `productId` + set `domain` = a global upsell offered across a whole category. */
export type AdminProductAddon = {
	id: number;
	productId: number | null;
	domain: AdminProductDomain | null;
	label: string;
	descriptionHtml: string;
	priceCents: number;
	priceUnit: 'flat' | 'per_person' | 'per_day';
	sortOrder: number;
};
