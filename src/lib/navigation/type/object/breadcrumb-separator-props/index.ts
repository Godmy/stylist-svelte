import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type BreadcrumbSeparatorProps = {
	class?: string;
	children?: Snippet;
} & HTMLAttributes<HTMLSpanElement>;
