import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export type LocationSelectorLocation = {
	id: string;
	name: string;
	address?: string;
	latitude: number;
	longitude: number;
	description?: string;
	category?: string;
	rating?: number;
	distance?: number;
	tags?: string[];
};

export type LocationSelectorRestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;

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
