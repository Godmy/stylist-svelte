import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export interface ContractPromoBanner
	extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Additional CSS class */
	class?: string;
}
