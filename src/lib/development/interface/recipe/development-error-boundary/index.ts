import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { Snippet } from 'svelte';

export interface RecipeDevelopmentErrorBoundary extends StructIntersectAll<[Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>]> {
	/** Error fallback content */
	errorFallback?: Snippet;
	/** Additional CSS class */
	class?: string;
}
