import type { HTMLAttributes } from 'svelte/elements';
import type { LocationSelectorLocation as SlotLocation } from '$stylist/geo/type/struct/location-selector/locationselectorlocation';
import type { LocationSelectorRestProps as LegacyLocationSelectorProps2 } from '$stylist/geo/type/struct/location-selector/locationselectorrest-props';

import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { LocationSelectorLocation } from '$stylist/geo/type/struct/location-selector/locationselectorlocation';
import type { LocationSelectorRestProps } from '$stylist/geo/type/struct/location-selector/locationselectorrest-props';

export interface RecipeLocationSelector
	extends ComputeIntersectAll<
		[
			LegacyLocationSelectorProps2,
			(LocationSelectorRestProps & {
				locations: LocationSelectorLocation[];
				currentView?: 'list' | 'grid' | 'map';
				showSearch?: boolean;
				showCategoryFilter?: boolean;
				showMapToggle?: boolean;
				showDistance?: boolean;
				searchPlaceholder?: string;
				defaultCategory?: string;
				maxLocations?: number;
				mapView?: unknown;
				onSearch?: (query: string) => void;
				onCategoryChange?: (category: string) => void;
				onLocationSelect?: (location: LocationSelectorLocation) => void;
			}),
			((Omit<HTMLAttributes<HTMLDivElement>, 'class'> & {
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
}))
		]
	> {}
