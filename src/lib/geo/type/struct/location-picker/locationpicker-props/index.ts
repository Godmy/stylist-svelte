import type { Coordinates } from '$stylist/geo/type/struct/location-picker/coordinates';

import type { MapMarker } from '$stylist/geo/type/struct/location-picker/mapmarker';

import type { HTMLAttributes } from 'svelte/elements';
export type LocationPickerProps = (Omit<HTMLAttributes<HTMLDivElement>, 'class'>) & {
	center?: Coordinates;
	zoom?: number;
	markers?: MapMarker[];
	selectedMarker?: string;
	class?: string;
	mapClass?: string;
	onLocationSelect?: (coordinates: Coordinates) => void;
	onMarkerClick?: (marker: MapMarker) => void;
	onMapClick?: (coordinates: Coordinates) => void;
	showSearch?: boolean;
	showCoordinates?: boolean;
	showCurrentLocation?: boolean;
	disableInteraction?: boolean;
	maxZoom?: number;
	minZoom?: number;
};
