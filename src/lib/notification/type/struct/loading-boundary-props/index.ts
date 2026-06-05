import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { Snippet } from 'svelte';

export type LoadingBoundaryProps = InteractionHTMLAttributes<HTMLDivElement> & {
	loading?: boolean;
	error?: string;
	children?: Snippet;
	class?: string;
};
