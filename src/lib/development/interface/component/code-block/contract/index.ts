import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';

export interface CodeBlockContract extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
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
