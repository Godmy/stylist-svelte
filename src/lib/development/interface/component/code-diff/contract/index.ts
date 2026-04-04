import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';

export interface CodeDiffContract extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Original code */
	original?: string;
	/** Modified code */
	modified?: string;
	/** Programming language */
	language?: string;
	/** Show line numbers */
	showLineNumbers?: boolean;
	/** Additional CSS class */
	class?: string;
	/** Content CSS class */
	contentClass?: string;
	/** Header CSS class */
	headerClass?: string;
}
