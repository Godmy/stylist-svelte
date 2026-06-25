import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { FunnelStep } from '$stylist/marketing/type/struct/conversion-funnel/funnelstep';

export type ConversionFunnelProps = {
	title?: string;
	subtitle?: string;
	steps: FunnelStep[];
	showPercentage?: boolean;
	showValues?: boolean;
	showTrend?: boolean;
	showConversionRate?: boolean;
	height?: number;
	class?: string;
	headerClass?: string;
	stepClass?: string;
} & HTMLAttributes<HTMLDivElement> & BehaviorBorderToken & BehaviorTypography;
