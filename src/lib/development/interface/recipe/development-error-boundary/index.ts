import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeDevelopmentErrorBoundary extends ComputeIntersectAll<[((HTMLAttributes<HTMLDivElement> & {
fallback?: (errorInfo: ({
	error: Error;
	errorInfo: { componentStack: string };
})) => HTMLElement;
	onError?: (error: Error, errorInfo: { componentStack: string }) => void;
	showDetails?: boolean;
	showReload?: boolean;
	showCopyError?: boolean;
	showReportIssue?: boolean;
	reportUrl?: string;
	title?: string;
	message?: string;
	children?: Snippet;
	errorFallback?: Snippet;
	class?: string;
}))]> {}
