import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface PlaygroundGenericCodeViewerContract extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Additional CSS class */
	class?: string;
}
