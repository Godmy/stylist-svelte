/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export class LocationPickerStyleManager {
	static getHostClasses(hostClass: string): string {
		return `c-location-picker ${hostClass}`.trim();
	}

	static getSearchInputClasses(searchClass: string = ''): string {
		return `block w-full pl-10 pr-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)] sm:text-sm ${searchClass}`.trim();
	}

	static getMapContainerClasses(mapClass: string = ''): string {
		return `relative bg-[var(--color-primary-50)] cursor-crosshair ${mapClass}`.trim();
	}

	static getMarkerClasses(isSelected: boolean): string {
		const zIndex = isSelected ? 'z-[var(--z-index-docked)]' : 'z-[var(--z-index-base)]';
		return `absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer ${zIndex}`;
	}

	static getMarkerIconClasses(isSelected: boolean): string {
		return isSelected
			? 'h-6 w-6 text-[var(--color-danger-600)] fill-current scale-125'
			: 'h-6 w-6 text-[var(--color-primary-600)] fill-current';
	}

	static getTooltipClasses(): string {
		return 'absolute left-1/2 transform -translate-x-1/2 -top-8 bg-[var(--color-background-primary)] shadow-md rounded px-2 py-1 text-xs whitespace-nowrap';
	}

	static getCoordinatesDisplayClasses(): string {
		return 'absolute bottom-4 left-4 bg-[var(--color-background-primary)]/80 backdrop-blur-sm rounded-md px-3 py-2 text-sm';
	}
}
