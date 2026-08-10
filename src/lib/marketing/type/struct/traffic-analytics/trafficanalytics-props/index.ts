import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { TimeRange } from '$stylist/marketing/type/alias/traffic-analytics-time-range';

export type TrafficAnalyticsProps = {
	title?: string;
	subtitle?: string;
	totalVisitors: number;
	uniqueVisitors: number;
	pageViews: number;
	timeOnPage: string;
	bounceRate: number;
	trafficSources: {
	id: string;
	name: string;
	value: number;
	percentage: number;
	color: string;
}[];
	trafficData: {
	date: Date;
	value: number;
}[];
	timeRange?: TimeRange;
	onTimeRangeChange?: (range: TimeRange) => void;
	class?: string;
	headerClass?: string;
	summaryClass?: string;
	chartClass?: string;
	sourcesClass?: string;
} & HTMLAttributes<HTMLDivElement> & SlotThemeBorder & SlotTypography;

