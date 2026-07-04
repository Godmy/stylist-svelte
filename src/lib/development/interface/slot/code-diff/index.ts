import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';

export interface SlotCodeDiff extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SlotThemeBorder, BehaviorTypography {
	original?: string;
	modified?: string;
	language?: string;
	showLineNumbers?: boolean;
	class?: string;
	contentClass?: string;
	headerClass?: string;
}
