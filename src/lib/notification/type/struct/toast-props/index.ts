import type { Snippet } from 'svelte';

export interface ToastProps {
	type?: 'info' | 'success' | 'warning' | 'error';
	visible?: boolean;
	duration?: number;
	title?: Snippet;
	description?: Snippet;
	class?: string;
	children?: Snippet;
	[propName: string]: unknown;
}
