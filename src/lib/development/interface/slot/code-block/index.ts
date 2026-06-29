import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { TokenSize } from '$stylist/layout/type/alias/size';
import type { TokenCodeLanguage } from '$stylist/development/type/alias/code-language';
import type { TokenCodeView } from '$stylist/development/type/alias/code-view';

export interface SlotCodeBlock extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, BehaviorBorderToken, BehaviorTypography {
	code?: string;
	language?: TokenCodeLanguage | 'text';
	variant?: TokenCodeView;
	size?: TokenSize;
	showLineNumbers?: boolean;
	startLineNumber?: number;
	highlightLines?: number[];
	title?: string;
	copyable?: boolean;
	class?: string;
	contentClass?: string;
	lineNumberClass?: string;
	codeClass?: string;
	headerClass?: string;
}
