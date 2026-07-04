import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';

export interface ContractCodeBlock
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SlotThemeBorder, SlotTypography {
	/** Code content */
	code?: string;
	/** Programming language */
	language?: string;
	/** Show line numbers */
	showLineNumbers?: boolean;
	/** Lines to highlight */
	highlightLines?: number[];
	/** Block title */
	title?: string;
	/** Copyable code */
	copyable?: boolean;
	/** Additional CSS class */
	class?: string;
	/** Content CSS class */
	contentClass?: string;
	/** Line number CSS class */
	lineNumberClass?: string;
	/** Code CSS class */
	codeClass?: string;
	/** Header CSS class */
	headerClass?: string;
}
