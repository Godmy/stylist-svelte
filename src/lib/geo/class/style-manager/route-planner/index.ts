/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export class RoutePlannerStyleManager {
	static getHostClasses(hostClass: string): string {
		return `route-planner ${hostClass}`.trim();
	}

	static getHostStyle(width: string): string {
		return `width: ${width};`;
	}

	static getTravelModeButtonClasses(isActive: boolean): string {
		return isActive
			? 'flex-1 px-4 py-2 rounded-md text-sm font-medium bg-[var(--color-primary-100)] text-[var(--color-primary-700)] border border-[var(--color-primary-300)]'
			: 'flex-1 px-4 py-2 rounded-md text-sm font-medium bg-[var(--color-background-primary)] text-[var(--color-text-primary)] border border-[var(--color-border-primary)] hover:bg-[var(--color-background-secondary)]';
	}

	static getLocationInputClasses(inputClass: string = ''): string {
		return `flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border-[var(--color-border-primary)] focus:outline-none focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)] sm:text-sm ${inputClass}`.trim();
	}

	static getWaypointInputClasses(inputClass: string = ''): string {
		return `flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border-[var(--color-border-primary)] focus:outline-none focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)] sm:text-sm ${inputClass}`.trim();
	}

	static getRouteOptionClasses(isSelected: boolean, optionClass: string = ''): string {
		const selectionClass = isSelected
			? 'border-[var(--color-primary-500)] bg-[var(--color-primary-50)]'
			: 'border-[var(--color-border-primary)] hover:bg-[var(--color-background-secondary)]';
		return `border rounded-lg p-4 cursor-pointer transition-all ${selectionClass} ${optionClass}`.trim();
	}

	static getMapContainerStyle(height: string): string {
		return `height: ${height}`;
	}
}
