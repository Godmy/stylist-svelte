import type { HTMLAttributes } from 'svelte/elements';
import type { DevelopmentErrorBoundaryErrorInfo } from '$stylist/development/type/struct/development-error-boundary-error-info';
import type { Snippet } from 'svelte';

export interface SlotDevelopmentErrorBoundary extends HTMLAttributes<HTMLDivElement> {
	fallback?: (errorInfo: DevelopmentErrorBoundaryErrorInfo) => HTMLElement;
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
}
