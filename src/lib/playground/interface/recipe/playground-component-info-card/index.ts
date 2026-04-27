import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface RecipePlaygroundComponentInfoCard extends StructIntersectAll<[Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>]> {
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
