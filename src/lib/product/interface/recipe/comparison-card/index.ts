import type { SlotProductOption } from '$stylist/product/interface/slot/product-option';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotBadge } from '$stylist/information/interface/slot/badge';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { SlotImage as SlotMedia } from '$stylist/image/interface/slot/image';
import type { SlotStatus } from '$stylist/information/interface/slot/status';
export interface RecipeComparisonCard
	extends ComputeIntersectAll<[SlotTheme, SlotText, SlotMedia, SlotBadge, SlotStatus]> {
	before: ({
title: string;
	items: SlotProductOption[];
});
	after: ({
title: string;
	items: SlotProductOption[];
});
}
