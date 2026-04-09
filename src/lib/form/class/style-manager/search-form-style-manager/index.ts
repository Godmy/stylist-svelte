/**
 * Search Form Style Manager
 */
export class SearchFormStyleManager {
	/**
	 * Get classes for search container
	 */
	static container(base: string, className?: string): string {
		return `${base} relative ${className || ''}`.trim();
	}

	/**
	 * Get classes for search input wrapper
	 */
	static inputWrapper(base: string, className?: string): string {
		return `${base} relative ${className || ''}`.trim();
	}

	/**
	 * Get classes for search icon
	 */
	static icon(base: string, className?: string): string {
		return `${base} absolute left-3 top-1/2 -translate-y-1/2 text-[--color-text-tertiary] ${className || ''}`.trim();
	}

	/**
	 * Get classes for search input
	 */
	static input(base: string, className?: string): string {
		return `${base} pl-10 pr-4 py-2 border border-[--color-border-secondary] rounded-lg w-full focus:border-[--color-primary-500] focus:ring-2 focus:ring-[--color-primary-200] ${className || ''}`.trim();
	}

	/**
	 * Get classes for recent searches
	 */
	static recentSearches(base: string, className?: string): string {
		return `${base} absolute top-full left-0 right-0 mt-1 border rounded-lg bg-[--color-background-primary] shadow-lg ${className || ''}`.trim();
	}

	/**
	 * Get classes for search filter
	 */
	static filter(base: string, active?: boolean, className?: string): string {
		const activeClass = active ? 'bg-[--color-primary-100] text-[--color-primary-700] border-[--color-primary-300]' : 'bg-[--color-background-primary] text-[--color-text-primary] border-[--color-border-secondary]';
		return `${base} ${activeClass} border rounded px-3 py-1 text-sm cursor-pointer ${className || ''}`.trim();
	}
}
