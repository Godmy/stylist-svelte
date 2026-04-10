import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { Snippet } from 'svelte';

export type ErrorInfo = {
	error: Error;
	errorInfo: { componentStack: string };
};

export type Props = {
	/** Custom fallback render function */
	fallback?: (errorInfo: ErrorInfo) => HTMLElement;
	/** Callback when error occurs */
	onError?: (error: Error, errorInfo: { componentStack: string }) => void;
	/** Show error details */
	showDetails?: boolean;
	/** Show reload button */
	showReload?: boolean;
	/** Show copy error button */
	showCopyError?: boolean;
	/** Show report issue button */
	showReportIssue?: boolean;
	/** URL for reporting issues */
	reportUrl?: string;
	/** Error title */
	title?: string;
	/** Error message */
	message?: string;
	/** Snippet content to wrap */
	children?: Snippet;
} & InteractionHTMLAttributes<HTMLDivElement>;
