import type { Snippet } from 'svelte';

export interface ErrorBoundaryProps {
	children: Snippet;
	fallback?: Snippet<[error: unknown, reset: () => void]>;
	class?: string;
	contentClass?: string;
	headerClass?: string;
	bodyClass?: string;
	footerClass?: string;
	title?: string;
	message?: string;
	showDetails?: boolean;
	onReset?: () => void;
	[propName: string]: unknown;
}
