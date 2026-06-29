import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';

import type { TOKEN_COLOR_TONE } from '$stylist/color/const/array/tone';
export interface SlotDocumentationBlock extends HTMLAttributes<HTMLElement>, BehaviorBorderToken, BehaviorTypography {
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
