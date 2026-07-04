import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { TOKEN_CODE_VIEW } from '$stylist/development/const/array/code-view';

export type CopyCode = {
	language?: string;
	variant?: (typeof TOKEN_CODE_VIEW)[number];
	showLineNumbers?: boolean;
	startLineNumber?: number;
	copySuccessMessage?: string;
	copyErrorMessage?: string;
	children: import('svelte').Snippet;
} & HTMLAttributes<HTMLElement> &
	SlotThemeBorder &
	BehaviorTypography;
