import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface SortOption {
	value: string;
	label: string;
}

export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
	options: SortOption[];
	value: string;
	class?: string;
	children?: Snippet;
	oninput?: (event: Event) => void;
	onchange?: (event: Event) => void;
}
