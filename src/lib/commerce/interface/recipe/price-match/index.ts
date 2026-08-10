import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipePriceMatch
	extends ComputeIntersectAll<[SlotTheme]> {
	onFindLower?: () => void;

	targetPrice?: number;
	competitorPrices?: ComputeIntersectAll<[]> & {
name: string;
	price: number;
	url?: string;
}[];
	currency?: string;
	productName?: string;
	class?: string;
}
