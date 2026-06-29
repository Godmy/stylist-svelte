import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
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
} & HTMLAttributes<HTMLElement> & BehaviorBorderToken & BehaviorTypography;
