import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { Snippet } from 'svelte';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenPin } from '$stylist/geo/type/enum/pin';
import type { TokenShape } from '$stylist/layout/type/enum/shape';
import type { SlotCoordinates } from '$stylist/geo/interface/slot/coordinates';
import type { SlotContactInfo } from '$stylist/geo/interface/slot/contact-info';

export interface SlotMapMarker extends InformationHTMLAttributes<HTMLDivElement> {
	coordinates: SlotCoordinates;
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
	contactInfo?: SlotContactInfo;
	distance?: string;
	selected?: boolean;
	onMarkerClick?: (coordinates: SlotCoordinates) => void;
	onInfoClick?: (coordinates: SlotCoordinates) => void;
	onNavigateClick?: (coordinates: SlotCoordinates) => void;
	class?: string;
	iconClass?: string;
	popupClass?: string;
	contentClass?: string;
}
