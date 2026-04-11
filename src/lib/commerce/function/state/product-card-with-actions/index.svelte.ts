import type { Snippet } from 'svelte';

export interface ProductCardWithActionsProps {
	title?: string;
	price?: number;
	currency?: string;
	image?: string;
	rating?: number;
	reviewCount?: number;
	description?: string;
	actions?: Snippet;
	class?: string;
}

export function createProductCardWithActionsState(props: ProductCardWithActionsProps) {
	return { props };
}

export default createProductCardWithActionsState;
