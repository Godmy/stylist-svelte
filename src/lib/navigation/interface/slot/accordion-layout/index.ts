import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export interface SlotAccordionLayout extends HTMLAttributes<HTMLDivElement> {
	value: string;
	title: string;
	children?: Snippet;
	disabled?: boolean;
	class?: string;
}
