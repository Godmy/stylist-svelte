export type PriceFilterProps = {
	minPrice?: number;
	maxPrice?: number;
	currentMin?: number;
	currentMax?: number;
	currency?: string;
	onPriceChange?: (min: number, max: number) => void;
	class?: string;
}
