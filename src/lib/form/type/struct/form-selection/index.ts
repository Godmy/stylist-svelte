import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { Snippet } from 'svelte';

export interface FormSelectionProps extends InteractionHTMLAttributes<HTMLElement> {
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
}
