import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
export interface PriceHistoryProps extends StructIntersectAll<[]> {	data?: Array<{ date: string; price: number }>;
	title?: string;
	currency?: string;
	class?: string;
}
