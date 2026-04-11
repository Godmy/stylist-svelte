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
