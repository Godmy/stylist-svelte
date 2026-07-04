import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { TOKEN_CODE_VIEW } from '$stylist/development/const/array/code-view';

export type CodeSectionProps = {
	title?: string;
	language?: string;
	code: string;
	variant?: (typeof TOKEN_CODE_VIEW)[number];
	showLineNumbers?: boolean;
	startLineNumber?: number;
	showCopyButton?: boolean;
	copySuccessMessage?: string;
	copyErrorMessage?: string;
	tags?: string[];
} & HTMLAttributes<HTMLElement> & SlotThemeBorder & SlotTypography;
