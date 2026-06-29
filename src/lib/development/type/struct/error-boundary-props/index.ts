import type { ComponentType, Snippet } from 'svelte';

export type ErrorBoundaryProps = {
	component: ComponentType | null | undefined;
	props?: Record<string, any>;
	children?: Snippet;
};
