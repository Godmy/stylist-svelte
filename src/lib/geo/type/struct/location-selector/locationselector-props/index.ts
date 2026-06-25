import type { LocationSelectorLocation } from '$stylist/geo/type/struct/location-selector/locationselectorlocation';
import type { LocationSelectorRestProps } from '$stylist/geo/type/struct/location-selector/locationselectorrest-props';

export type LocationSelectorProps = LocationSelectorRestProps & {
	locations: LocationSelectorLocation[];
	currentView?: 'list' | 'grid' | 'map';
	showSearch?: boolean;
	showCategoryFilter?: boolean;
	showMapToggle?: boolean;
	showDistance?: boolean;
	searchPlaceholder?: string;
	defaultCategory?: string;
	maxLocations?: number;
	onLocationSelect?: (location: LocationSelectorLocation) => void;
	onSearch?: (query: string) => void;
	onCategoryChange?: (category: string) => void;
	class?: string;
	itemClass?: string;
	headerClass?: string;
	searchClass?: string;
	viewToggleClass?: string;
	mapView?: boolean;
};
