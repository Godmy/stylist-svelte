import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface RecipePlaygroundToast extends StructIntersectAll<[Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>]> {
	/** Toast message */
	message?: string;
	/** Toast type */
	type?: 'success' | 'error' | 'warning' | 'info';
	/** Auto-close timeout in ms */
	autoCloseTimeout?: number;
	/** Show close button */
	showCloseButton?: boolean;
	/** Additional CSS class */
	class?: string;
	/** On close callback */
	onClose?: () => void;
}
