import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { FunnelStep } from '$stylist/marketing/type/object/conversion-funnel/funnelstep';

export interface RecipeConversionFunnel extends HTMLAttributes<HTMLDivElement>, SlotThemeBorder, SlotTypography {
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
}
