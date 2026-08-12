import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type FormSelectionProps = HTMLAttributes<HTMLElement> & {
	title?: string;
	description?: string;
	collapsible?: boolean;
	initiallyCollapsed?: boolean;
	required?: boolean;
	border?: boolean;
	padding?: boolean;
	class?: string;
	headerClass?: string;
	contentClass?: string;
	children: Snippet;
};
