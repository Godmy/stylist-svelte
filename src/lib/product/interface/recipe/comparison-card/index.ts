import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotBadge } from '$stylist/information/interface/slot/badge';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { SlotMedia } from '$stylist/media/interface/slot/media';
import type { SlotStatus } from '$stylist/information/interface/slot/status';
import type { ComparisonCardColumn } from '$stylist/product/interface/slot/comparison-card-column';

export interface RecipeComparisonCard
	extends ComputeIntersectAll<
			[
			SlotTheme,
			SlotText,
			SlotMedia,
			SlotBadge,
			SlotStatus,
			HTMLAttributes<HTMLDivElement>
	]
	> {
	before: ComparisonCardColumn;
	after: ComparisonCardColumn;
}
