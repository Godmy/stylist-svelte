import type { SlotProductOption } from '$stylist/product/interface/slot/product-option';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotBadge } from '$stylist/layout/interface/slot/badge';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { SlotImage } from '$stylist/image/interface/slot/image';
import type { SlotStatus } from '$stylist/ai/interface/slot/status';
export interface RecipeComparisonCard
	extends ComputeIntersectAll<[SlotTheme, SlotText, SlotImage, SlotBadge, SlotStatus]> {
	before: ({
title: string;
	items: SlotProductOption[];
});
	after: ({
title: string;
	items: SlotProductOption[];
});
}
