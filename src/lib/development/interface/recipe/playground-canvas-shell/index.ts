import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { Snippet } from 'svelte';

export interface RecipePlaygroundCanvasShell extends StructIntersectAll<[Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>]> {
	/** Content snippet */
	children?: Snippet;
	/** Additional CSS class */
	class?: string;
}
