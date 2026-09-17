import type { AdminProductDomain } from '$stylist/travel-admin/type/alias/admin-product-domain';

/** Presentation-side shape of a catalog product. Decoupled from any server/D1 type on purpose. */
export type AdminProduct = {
	id: number;
	domain: AdminProductDomain;
	slug: string;
	title: string;
	summary: string;
	heroImageId: string | null;
	gallery: string[];
	badges: string[];
	priceUnit: 'per_person' | 'per_tour';
	basePriceCents: number;
	oldPriceCents: number | null;
	minAdvanceDays: number;
	status: 'draft' | 'published';
	sortOrder: number;
};
