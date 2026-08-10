import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';

export type CodeDiffProps = (Omit<HTMLAttributes<HTMLDivElement>, 'class'> & SlotThemeBorder & SlotTypography) & {
	original?: string;
	modified?: string;
	language?: string;
	class?: string;
	contentClass?: string;
	headerClass?: string;
	showLineNumbers?: boolean;
};
