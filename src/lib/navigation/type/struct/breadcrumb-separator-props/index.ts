import type { Snippet } from 'svelte';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export type BreadcrumbSeparatorProps = {
	class?: string;
	children?: Snippet;
} & InteractionHTMLAttributes<HTMLSpanElement>;
