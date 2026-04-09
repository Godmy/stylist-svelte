import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface PlaygroundFeatureGridContract extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Additional CSS class */
	class?: string;
}
