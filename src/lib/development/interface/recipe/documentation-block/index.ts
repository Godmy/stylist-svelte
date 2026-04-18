import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { Snippet } from 'svelte';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface RecipeDocumentationBlock extends StructIntersectAll<[Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>]> {
	/** Block title */
	title?: string;
	/** Block description */
	description?: string;
	/** Documentation content */
	content?: Snippet;
	/** Additional CSS class */
	class?: string;
}
