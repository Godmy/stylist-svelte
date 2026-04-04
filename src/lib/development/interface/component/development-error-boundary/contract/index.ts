import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';
import type { Snippet } from 'svelte';

export interface DevelopmentErrorBoundaryContract extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Error fallback content */
	errorFallback?: Snippet;
	/** Additional CSS class */
	class?: string;
}
