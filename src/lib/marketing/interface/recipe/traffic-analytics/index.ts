import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { TokenTimeRange } from '$stylist/calendar/type/alias/token-time-range';

export interface RecipeTrafficAnalytics extends HTMLAttributes<HTMLDivElement>, SlotThemeBorder, SlotTypography {
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
	timeRange?: TokenTimeRange;
	onTimeRangeChange?: (range: TokenTimeRange) => void;
	class?: string;
	headerClass?: string;
	summaryClass?: string;
	chartClass?: string;
	sourcesClass?: string;
}
