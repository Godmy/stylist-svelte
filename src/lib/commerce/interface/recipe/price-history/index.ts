import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotPriceHistoryDataPoint } from '$stylist/commerce/interface/slot/price-history-data-point';
import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipePriceHistory
	extends ComputeIntersectAll<[SlotTheme, SlotText]> {
	data?: SlotPriceHistoryDataPoint[];
	currency?: string;
	class?: string;
}
