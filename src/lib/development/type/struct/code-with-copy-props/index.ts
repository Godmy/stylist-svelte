import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { CodeSectionVariant } from '$stylist/development/type/struct/code-section-variant';

export type CodeWithCopyProps = {
	language?: string;
	variant?: CodeSectionVariant;
	showLineNumbers?: boolean;
	startLineNumber?: number;
	copySuccessMessage?: string;
	copyErrorMessage?: string;
	children: import('svelte').Snippet;
} & HTMLAttributes<HTMLElement> & BehaviorBorderToken & BehaviorTypography;
