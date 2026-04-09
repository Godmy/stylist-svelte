import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface PlaygroundComponentInfoCardContract extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Component name */
	componentName?: string;
	/** Component description */
	description?: string;
	/** Component category */
	category?: string;
	/** Component status */
	status?: 'stable' | 'beta' | 'alpha' | 'deprecated';
	/** Additional CSS class */
	class?: string;
}
