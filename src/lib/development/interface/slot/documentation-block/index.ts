import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';

import type { TOKEN_COLOR_TONE } from '$stylist/theme/const/array/color-tone';
export interface SlotDocumentationBlock extends HTMLAttributes<HTMLElement>, SlotThemeBorder, BehaviorTypography {
	title?: string;
	content: string;
	variant?: (typeof TOKEN_COLOR_TONE)[number];
	codeExamples?: {
		title?: string;
		code: string;
		language?: string;
		showLineNumbers?: boolean;
	}[];
	tags?: string[];
}
