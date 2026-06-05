/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { SlotLocationPickerMarker } from '$stylist/geo/interface/slot/location-picker-marker';
import type { SlotCoordinates } from '$stylist/geo/interface/slot/coordinates';

export interface SlotLocationPicker
	extends Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'> {
	center?: SlotCoordinates;
	zoom?: number;
	markers?: SlotLocationPickerMarker[];
	selectedMarker?: string;
	class?: string;
	mapClass?: string;
	onLocationSelect?: (coordinates: SlotCoordinates) => void;
	onMarkerClick?: (marker: SlotLocationPickerMarker) => void;
	onMapClick?: (coordinates: SlotCoordinates) => void;
	showSearch?: boolean;
	showCoordinates?: boolean;
	showCurrentLocation?: boolean;
	disableInteraction?: boolean;
	maxZoom?: number;
	minZoom?: number;
}
