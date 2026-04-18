import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
export interface PriceMatchProps extends StructIntersectAll<[]> {	targetPrice?: number;
	competitorPrices?: Array<{ name: string; price: number; url?: string }>;
	currency?: string;
	productName?: string;
	onFindLower?: () => void;
	class?: string;
}
