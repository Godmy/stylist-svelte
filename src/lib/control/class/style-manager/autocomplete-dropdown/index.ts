export class AutocompleteDropdownStyleManager {
	static root(className = ''): string {
		return `relative w-full ${className}`.trim();
	}

	static trigger(): string {
		return 'w-full px-4 py-2 text-left bg-[var(--color-background-primary)] border border-[var(--color-border-primary)] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500';
	}

	static chevron(isOpen: boolean): string {
		return `absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`.trim();
	}

	static listbox(): string {
		return 'absolute z-[var(--z-index-docked)] mt-1 w-full bg-[var(--color-background-primary)] shadow-lg rounded-md border border-[var(--color-border-primary)] max-h-60 overflow-auto';
	}

	static option(): string {
		return 'px-4 py-2 hover:bg-[var(--color-background-secondary)] cursor-pointer';
	}
}
