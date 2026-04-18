import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface ContractNodeIcon extends Omit<InformationHTMLAttributes<HTMLSpanElement>, 'class'> {
	/** Additional CSS class */
	class?: string;
}
