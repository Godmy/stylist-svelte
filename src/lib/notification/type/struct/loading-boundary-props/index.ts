import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type LoadingBoundaryProps = HTMLAttributes<HTMLDivElement> & {
	loading?: boolean;
	error?: string;
	children?: Snippet;
	class?: string;
};
