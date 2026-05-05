import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

/**
 * Document Preview Style Manager
 */
export class DocumentPreviewStyleManager {
	/**
	 * Get base classes for document preview
	 */
	static root(base: string, className?: string): string {
		return mergeClassNames(base, 'overflow-hidden rounded-lg border border-[var(--color-border-primary)]', className);
	}

	/**
	 * Get classes for preview content
	 */
	static content(base: string, className?: string): string {
		return mergeClassNames(base, 'overflow-auto p-4 font-mono text-sm text-[var(--color-text-primary)]', className);
	}

	/**
	 * Get classes for line numbers
	 */
	static lineNumbers(base: string, className?: string): string {
		return mergeClassNames(
			base,
			'select-none border-r border-[var(--color-border-primary)] pr-4 text-right text-[var(--color-text-tertiary)]',
			className
		);
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
