import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type LazyLoaderProps = HTMLAttributes<HTMLDivElement> & {
	loading?: boolean;
	text?: string;
	children?: Snippet;
	class?: string;
};
