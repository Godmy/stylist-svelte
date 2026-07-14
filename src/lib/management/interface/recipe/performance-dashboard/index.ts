import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { BehaviorTimeRangeFilter as ITimeRangeFilter } from '$stylist/management/interface/behavior/time-range-filter';
import type { Metric } from '$stylist/management/type/struct/performance-dashboard';

export interface RecipePerformanceDashboard
	extends ComputeIntersectAll<
		[
			SlotTheme,
			ILabelSlot,
			ICaptionSlot,
			ITimeRangeFilter,
			ISizable,
			HTMLAttributes<HTMLDivElement>
		]
	> {
	metrics: Metric[];
	headerClass?: string;
	metricsClass?: string;
	metricCardClass?: string;
	variant?: 'default' | 'compact' | 'minimal';
}
