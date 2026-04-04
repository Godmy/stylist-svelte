/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export class LocationSelectorStyleManager {
	static getHostClasses(hostClass: string): string {
		return `c-location-selector ${hostClass}`.trim();
	}

	static getSearchInputClasses(searchClass: string = ''): string {
		return `block w-full pl-10 pr-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)] sm:text-sm ${searchClass}`.trim();
	}

	static getViewToggleButtonClasses(isActive: boolean): string {
		return isActive
			? 'p-2 bg-[var(--color-primary-100)] text-[var(--color-primary-700)]'
			: 'p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]';
	}

	static getListItemClasses(itemClass: string = ''): string {
		return `flex items-center p-4 border rounded-lg cursor-pointer hover:shadow-md transition-shadow ${itemClass}`.trim();
	}

	static getGridItemClasses(itemClass: string = ''): string {
		return `border rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow ${itemClass}`.trim();
	}

	static getStarIconClasses(index: number, rating: number): string {
		if (index < Math.floor(rating)) return 'h-4 w-4 text-yellow-400 fill-current';
		if (index === Math.floor(rating) && rating % 1 >= 0.5) return 'h-4 w-4 text-yellow-400';
		return 'h-4 w-4 text-[var(--color-text-tertiary)]';
	}
}
