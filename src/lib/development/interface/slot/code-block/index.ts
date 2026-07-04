import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { TokenCodeLanguage } from '$stylist/development/type/alias/code-language';
import type { TokenCodeView } from '$stylist/development/type/alias/code-view';

export interface SlotCodeBlock extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SlotThemeBorder, SlotTypography {
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
