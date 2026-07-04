import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';

export interface ContractNodeIcon
	extends Omit<HTMLAttributes<HTMLSpanElement>, 'class'>, SlotThemeBorder, BehaviorTypography {
	/** Additional CSS class */
	class?: string;
}
