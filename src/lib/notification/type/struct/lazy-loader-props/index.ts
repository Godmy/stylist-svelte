import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { Snippet } from 'svelte';

export type LazyLoaderProps = InteractionHTMLAttributes<HTMLDivElement> & {
	loading?: boolean;
	text?: string;
	children?: Snippet;
	class?: string;
}
