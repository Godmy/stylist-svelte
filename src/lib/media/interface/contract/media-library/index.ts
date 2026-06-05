import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export interface ContractMediaLibrary
	extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Additional CSS class */
	class?: string;
}
