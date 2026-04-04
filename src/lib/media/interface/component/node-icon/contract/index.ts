import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';

export interface NodeIconContract extends Omit<InformationHTMLAttributes<HTMLSpanElement>, 'class'> {
	/** Additional CSS class */
	class?: string;
}
