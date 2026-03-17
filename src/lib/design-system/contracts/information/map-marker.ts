import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { MapMarkerType, MarkerCategory, PinStyle } from '$stylist/design-system/tokens/information/map-marker';

export interface Coordinates {
	lat: number;
	lng: number;
}

export interface ContactInfo {
	phone?: string;
	email?: string;
	website?: string;
	hours?: string;
}

export interface IMapMarkerProps extends HTMLAttributes<HTMLDivElement> {
	coordinates: Coordinates;
	title?: string;
	description?: string;
	snippet?: Snippet;
	type?: MapMarkerType;
	category?: MarkerCategory;
	color?: string;
	size?: ComponentSize;
	showPopup?: boolean;
	popupContent?: Snippet;
	pinStyle?: PinStyle;
	rating?: number;
	contactInfo?: ContactInfo;
	distance?: string;
	selected?: boolean;
	onMarkerClick?: (coordinates: Coordinates) => void;
	onInfoClick?: (coordinates: Coordinates) => void;
	onNavigateClick?: (coordinates: Coordinates) => void;
	class?: string;
	iconClass?: string;
	popupClass?: string;
	contentClass?: string;
}
