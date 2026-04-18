import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
export interface PriceFilterProps extends StructIntersectAll<[]> {	minPrice?: number;
	maxPrice?: number;
	currentMin?: number;
	currentMax?: number;
	currency?: string;
	onPriceChange?: (min: number, max: number) => void;
	class?: string;
}
