import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { TimeRange } from '$stylist/marketing/type/alias/traffic-analytics-time-range';

export type UserBehaviorMetricsProps = {
	title?: string;
	subtitle?: string;
	metrics: {
	id: string;
	name: string;
	value: string | number;
	previousValue?: string | number;
	change?: number;
	changeType?: 'positive' | 'negative';
	description: string;
}[];
	timeRange?: TimeRange;
	onTimeRangeChange?: (range: TimeRange) => void;
	class?: string;
	headerClass?: string;
	metricsClass?: string;
	metricCardClass?: string;
} & HTMLAttributes<HTMLDivElement> & SlotThemeBorder & SlotTypography;

