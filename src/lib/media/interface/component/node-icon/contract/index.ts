import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface NodeIconContract extends Omit<InformationHTMLAttributes<HTMLSpanElement>, 'class'> {
	/** Additional CSS class */
	class?: string;
}
