import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface PlaygroundTreeNodeContract extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Additional CSS class */
	class?: string;
}
