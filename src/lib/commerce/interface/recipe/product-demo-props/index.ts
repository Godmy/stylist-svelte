import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { Snippet } from 'svelte';

export interface ProductDemoProps extends StructIntersectAll<[]> {	title?: string;
	description?: string;
	demoContent: Snippet;
	features?: string[];
	onDemo?: () => void;
	class?: string;
}
