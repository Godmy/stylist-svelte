import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { Snippet } from 'svelte';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface RecipeComponentPreview extends StructIntersectAll<[Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>]> {
	/** Preview title */
	title: string;
	/** Preview description */
	description?: string;
	/** Source code */
	code: string;
	/** Programming language */
	language?: string;
	/** Component demo snippet */
	componentDemo: Snippet;
	/** Show code by default */
	showCode?: boolean;
	/** Additional CSS class */
	class?: string;
}
