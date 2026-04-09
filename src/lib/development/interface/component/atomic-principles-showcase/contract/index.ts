import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface AtomicPrinciplesShowcaseContract extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Additional CSS class */
	class?: string;
}
