import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';

import type { TOKEN_COLOR_TONE } from '$stylist/theme/const/array/color-tone';
export interface SlotDocumentationBlock extends HTMLAttributes<HTMLElement>, SlotThemeBorder, SlotTypography {
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
