export class SearchSuggestionStyleManager {
	static root(className = ''): string {
		return `search-suggestions bg-[var(--color-background-primary)] rounded-md shadow-lg ring-1 ring-black ring-opacity-[var(--opacity-5)] overflow-hidden z-[var(--z-index-docked)] ${className}`.trim();
	}

	static button(className = ''): string {
		return `w-full text-left px-4 py-2 text-sm hover:bg-[var(--color-primary-50)] hover:text-[var(--color-primary-700)] ${className}`.trim();
	}
}
