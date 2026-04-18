import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface RecipePlaygroundCodeViewer extends StructIntersectAll<[Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>]> {
	/** Code content */
	code?: string;
	/** Programming language */
	language?: string;
	/** Read-only mode */
	readonly?: boolean;
	/** Additional CSS class */
	class?: string;
}
