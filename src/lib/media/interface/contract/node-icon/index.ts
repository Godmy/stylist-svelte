import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export interface ContractNodeIcon
	extends Omit<InformationHTMLAttributes<HTMLSpanElement>, 'class'> {
	/** Additional CSS class */
	class?: string;
}
