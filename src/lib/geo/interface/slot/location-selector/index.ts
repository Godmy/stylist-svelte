/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotLocation } from '$stylist/geo/interface/slot/location';

export interface SlotLocationSelector extends Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'> {
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
