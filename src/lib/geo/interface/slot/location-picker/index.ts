import type { HTMLAttributes } from 'svelte/elements';
/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { MapMarker as SlotLocationPickerMarker } from '$stylist/geo/type/struct/location-picker/mapmarker';
import type { SlotCoordinates } from '$stylist/geo/interface/slot/coordinates';

export interface SlotLocationPicker
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
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
