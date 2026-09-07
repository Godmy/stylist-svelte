import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { SlotFunnelStep } from '$stylist/marketing/interface/slot/funnel-step';

export interface RecipeConversionFunnel
	extends HTMLAttributes<HTMLDivElement>,
		SlotThemeBorder,
		SlotTypography {
	title?: string;
	subtitle?: string;
	steps: SlotFunnelStep[];
	showPercentage?: boolean;
	showValues?: boolean;
	showTrend?: boolean;
	showConversionRate?: boolean;
	height?: number;
	class?: string;
	headerClass?: string;
	stepClass?: string;
}
