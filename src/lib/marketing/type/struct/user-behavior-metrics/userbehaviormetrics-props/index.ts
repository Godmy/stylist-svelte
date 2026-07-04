import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { TimeRange } from '$stylist/marketing/type/alias/traffic-analytics-time-range';
import type { UserBehaviorMetric } from '$stylist/marketing/type/struct/user-behavior-metrics/userbehaviormetric';

export type UserBehaviorMetricsProps = {
	title?: string;
	subtitle?: string;
	metrics: UserBehaviorMetric[];
	timeRange?: TimeRange;
	onTimeRangeChange?: (range: TimeRange) => void;
	class?: string;
	headerClass?: string;
	metricsClass?: string;
	metricCardClass?: string;
} & HTMLAttributes<HTMLDivElement> & SlotThemeBorder & BehaviorTypography;

