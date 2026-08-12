import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TokenOrientation } from '$stylist/layout/type/alias/orientation';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { StatusItem } from '$stylist/management/type/object/status-item';
export interface RecipeStatusDashboard
	extends ComputeIntersectAll<
		[SlotTheme, SlotText, SlotText, BehaviorSizable, HTMLAttributes<HTMLDivElement>]
	> {
	items: StatusItem[];
	layout?: TokenOrientation;
	itemClass?: string;
	headerClass?: string;
	variant?: 'default' | 'compact' | 'minimal';
}
