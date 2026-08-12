import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { TokenTimeRange } from '$stylist/calendar/type/alias/token-time-range';

export interface RecipeUserBehaviorMetrics extends HTMLAttributes<HTMLDivElement>, SlotThemeBorder, SlotTypography {
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
	timeRange?: TokenTimeRange;
	onTimeRangeChange?: (range: TokenTimeRange) => void;
	class?: string;
	headerClass?: string;
	metricsClass?: string;
	metricCardClass?: string;
}
