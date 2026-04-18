import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface RecipePlaygroundDrawingOverlay extends StructIntersectAll<[Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>]> {
	/** Additional CSS class */
	class?: string;
}
