import type { Snippet } from 'svelte';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface AvatarSelectorProps extends StructIntersectAll<[]> {
	src?: string;
	alt?: string;
	size?: string;
	class?: string;
	children?: Snippet;
}
