import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { Snippet } from 'svelte';

export interface SlotComponentPreview
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SlotThemeBorder, BehaviorTypography {
	title: string;
	description?: string;
	code: string;
	language?: string;
	componentDemo: Snippet;
	showCode?: boolean;
	class?: string;
}
