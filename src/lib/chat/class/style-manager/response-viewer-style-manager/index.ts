import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { RESPONSE_VIEWER_STATUS_CLASSES } from '$stylist/chat/const/map/response-viewer-status-classes';

/**
 * Response Viewer Style Manager
 */
export class ResponseViewerStyleManager {
	/**
	 * Get base classes for response viewer
	 */
	static root(base: string, className?: string): string {
		return mergeClassNames(base, 'overflow-hidden rounded-lg border border-[var(--color-border-primary)]', className);
	}

	/**
	 * Get classes based on status
	 */
	static byStatus(status: 'success' | 'error' | 'loading' | 'info'): string {
		return RESPONSE_VIEWER_STATUS_CLASSES[status];
	}

	/**
	 * Get classes for code content
	 */
	static code(base: string, className?: string): string {
		return mergeClassNames(base, 'overflow-auto p-4 font-mono text-sm text-[var(--color-text-primary)]', className);
	}

	/**
	 * Get classes for toolbar
	 */
	static toolbar(base: string, className?: string): string {
		return mergeClassNames(
			base,
			'flex items-center justify-between border-b border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] px-4 py-2',
			className
		);
	}
}
