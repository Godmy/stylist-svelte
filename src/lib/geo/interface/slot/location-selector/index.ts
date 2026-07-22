import type { HTMLAttributes } from 'svelte/elements';
/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { LocationSelectorLocation as SlotLocation } from '$stylist/geo/type/struct/location-selector/locationselectorlocation';

export interface SlotLocationSelector
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
	locations: SlotLocation[];
	currentView?: 'list' | 'grid' | 'map';
	showSearch?: boolean;
	showCategoryFilter?: boolean;
	showMapToggle?: boolean;
	showDistance?: boolean;
	searchPlaceholder?: string;
	defaultCategory?: string;
	maxLocations?: number;
	onLocationSelect?: (location: SlotLocation) => void;
	onSearch?: (query: string) => void;
	onCategoryChange?: (category: string) => void;
	class?: string;
	itemClass?: string;
	headerClass?: string;
	searchClass?: string;
	viewToggleClass?: string;
	mapView?: boolean;
}
