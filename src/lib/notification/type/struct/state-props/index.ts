import type { Snippet } from 'svelte';

export interface StateProps {
	title: string;
	description?: string;
	action?: {
		label: string;
		onClick: () => void;
	};
	class?: string;
	icon?: Snippet;
	children?: Snippet;
}
