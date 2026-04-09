/**
 * Screen Reader Style Manager
 */
export class ScreenReaderStyleManager {
	/**
	 * Get classes for skip link
	 */
	static skipLink(base: string, className?: string): string {
		return `${base} sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[--color-primary-600] text-[--color-text-inverse] px-4 py-2 rounded-md z-[var(--z-index-modal)] ${className || ''}`.trim();
	}

	/**
	 * Get classes for ARIA live region
	 */
	static liveRegion(base: string, className?: string): string {
		return `${base} sr-only ${className || ''}`.trim();
	}

	/**
	 * Get classes for announcement
	 */
	static announcement(base: string, className?: string): string {
		return `${base} ${className || ''}`.trim();
	}
}
