import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { TimeRange } from '$stylist/marketing/type/alias/traffic-analytics-time-range';
import type { TrafficDataPoint } from '$stylist/marketing/type/struct/traffic-analytics/trafficdatapoint';
import type { TrafficSource } from '$stylist/marketing/type/struct/traffic-analytics/trafficsource';

export type TrafficAnalyticsProps = {
	title?: string;
	subtitle?: string;
	totalVisitors: number;
	uniqueVisitors: number;
	pageViews: number;
	timeOnPage: string;
	bounceRate: number;
	trafficSources: TrafficSource[];
	trafficData: TrafficDataPoint[];
	timeRange?: TimeRange;
	onTimeRangeChange?: (range: TimeRange) => void;
	class?: string;
	headerClass?: string;
	summaryClass?: string;
	chartClass?: string;
	sourcesClass?: string;
} & HTMLAttributes<HTMLDivElement> & SlotThemeBorder & BehaviorTypography;

