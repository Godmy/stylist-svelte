import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { Snippet } from 'svelte';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenPin } from '$stylist/geo/type/enum/pin';
import type { TokenShape } from '$stylist/layout/type/enum/shape';

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

export interface IMapMarkerProps extends InformationHTMLAttributes<HTMLDivElement> {
	coordinates: Coordinates;
	title?: string;
	description?: string;
	snippet?: Snippet;
	type?: TokenPin;
	color?: string;
	size?: TokenSize;
	showPopup?: boolean;
	popupContent?: Snippet;
	pinStyle?: TokenShape;
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
