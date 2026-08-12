import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { LocationSelectorLocation } from '$stylist/geo/type/object/location-selector/locationselectorlocation';
export interface RecipeLocationSelector
	extends ComputeIntersectAll<
		[
			Omit<HTMLAttributes<HTMLDivElement>, 'class'>,
			{
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
			},
			{
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
			}
		]
	> {}
