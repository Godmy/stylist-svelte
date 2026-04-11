import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { SortOption } from '../sort-option';

export type ProductSortingProps = Omit<HTMLAttributes<HTMLDivElement> & 'class'> & {
	options: SortOption[];
	value: string;
	class?: string;
	children?: Snippet;
	oninput?: (event: Event) => void;
	onchange?: (event: Event) => void;
}
