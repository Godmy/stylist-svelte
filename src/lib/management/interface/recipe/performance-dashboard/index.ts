import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';

import type { TokenTimeRange } from '$stylist/management/type/alias/token-time-range';
export interface RecipePerformanceDashboard
	extends ComputeIntersectAll<
		[SlotTheme, ILabelSlot, ICaptionSlot, ISizable, HTMLAttributes<HTMLDivElement>]
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
