/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export class MapWithMarkersStyleManager {
	static getHostClasses(hostClass: string): string {
		return `map-with-markers ${hostClass}`.trim();
	}

	static getSearchInputClasses(): string {
		return 'block w-full pl-10 pr-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)] sm:text-sm';
	}

	static getMapContainerClasses(mapClass: string = ''): string {
		return `relative rounded-lg overflow-hidden border border-[var(--color-border-primary)] ${mapClass}`.trim();
	}

	static getMarkerContainerClasses(markerClass: string = ''): string {
		return `absolute transform -translate-x-1/2 -translate-y-1/2 z-[var(--z-index-docked)] cursor-pointer ${markerClass}`.trim();
	}

	static getMarkerIconContainerClasses(size: 'sm' | 'md' | 'lg' = 'md', color?: string): string {
		const sizeClass = size === 'sm' ? 'w-6 h-6' : size === 'lg' ? 'w-10 h-10' : 'w-8 h-8';
		const colorClass = color || 'bg-[var(--color-primary-500)]';
		return `rounded-full flex items-center justify-center ${sizeClass} ${colorClass} border-2 border-[var(--color-background-primary)] shadow-lg`;
	}

	static getMarkerIconClasses(size: 'sm' | 'md' | 'lg' = 'md'): string {
		return `${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} text-[var(--color-text-inverse)]`;
	}

	static getInfoPanelClasses(): string {
		return 'absolute bottom-4 left-4 bg-[var(--color-background-primary)]/80 backdrop-blur-sm rounded-md px-3 py-2 text-sm';
	}

	static getTooltipClasses(): string {
		return 'absolute top-full mt-2 bg-[var(--color-background-primary)] shadow-lg rounded px-3 py-2 text-sm whitespace-nowrap z-[var(--z-index-popover)]';
	}
}
