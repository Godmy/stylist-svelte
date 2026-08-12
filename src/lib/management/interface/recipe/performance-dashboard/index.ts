import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { TokenTimeRange } from '$stylist/calendar/type/alias/token-time-range';
export interface RecipePerformanceDashboard
	extends ComputeIntersectAll<
		[SlotTheme, SlotText, SlotText, BehaviorSizable, HTMLAttributes<HTMLDivElement>]
	> {
	timeRange?: TokenTimeRange;
	showTimeRangeSelector?: boolean;
	onTimeRangeChange?: (range: TokenTimeRange) => void;

	metrics: {
	id: string;
	title: string;
	value: string | number;
	change: number; // Percentage change
	changeType: 'positive' | 'negative';
	icon: any;
	color: string;
}[];
	headerClass?: string;
	metricsClass?: string;
	metricCardClass?: string;
	variant?: 'default' | 'compact' | 'minimal';
}
