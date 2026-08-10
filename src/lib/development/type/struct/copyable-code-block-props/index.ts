import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';

export type CopyableCodeBlockProps = (Omit<HTMLAttributes<HTMLDivElement>, 'class'> & SlotThemeBorder & SlotTypography) & {
	code?: string;
	language?: string;
	title?: string;
	class?: string;
	contentClass?: string;
	headerClass?: string;
};
