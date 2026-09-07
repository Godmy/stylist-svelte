import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText } from '$stylist/typography/interface/slot/text';
export interface RecipePriceHistory extends ComputeIntersectAll<[SlotTheme, SlotText]> {
	data?: {
		date: string;
		price: number;
	}[];
	currency?: string;
	class?: string;
}
