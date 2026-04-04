/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface ILocation {
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
}

export interface ILocationSelectorProps extends Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'> {
	locations: ILocation[];
	currentView?: 'list' | 'grid' | 'map';
	showSearch?: boolean;
	showCategoryFilter?: boolean;
	showMapToggle?: boolean;
	showDistance?: boolean;
	searchPlaceholder?: string;
	defaultCategory?: string;
	maxLocations?: number;
	onLocationSelect?: (location: ILocation) => void;
	onSearch?: (query: string) => void;
	onCategoryChange?: (category: string) => void;
	class?: string;
	itemClass?: string;
	headerClass?: string;
	searchClass?: string;
	viewToggleClass?: string;
	mapView?: boolean;
}
