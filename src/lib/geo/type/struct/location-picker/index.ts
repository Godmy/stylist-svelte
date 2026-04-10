import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export type Coordinates = {
	lat: number;
	lng: number;
};

export type MapMarker = {
	id: string;
	coordinates: Coordinates;
	title?: string;
	description?: string;
};

export type LocationPickerRestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;

export type LocationPickerProps = LocationPickerRestProps & {
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
