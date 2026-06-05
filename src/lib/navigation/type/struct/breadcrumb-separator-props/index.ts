import type { Snippet } from 'svelte';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';

export type BreadcrumbSeparatorProps = {
	class?: string;
	children?: Snippet;
} & InteractionHTMLAttributes<HTMLSpanElement>;
