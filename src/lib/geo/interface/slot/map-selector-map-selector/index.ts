import type { MapProvider } from '$stylist/geo/type/alias/map-provider';
import type { MapSelectorLocation } from '$stylist/geo/interface/slot/map-selector-location';
/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */

export interface SlotMapSelector {
	locations: MapSelectorLocation[];
	initialCenter?: { lat: number; lng: number };
	initialZoom?: number;
	provider?: MapProvider;
	apiKey?: string;
	showSearch?: boolean;
	showZoomControls?: boolean;
	showCurrentLocation?: boolean;
	showMarkers?: boolean;
	enableMarkerClustering?: boolean;
	maxZoom?: number;
	minZoom?: number;
	class?: string;
	mapClass?: string;
	searchClass?: string;
	controlsClass?: string;
	onLocationSelect?: (location: MapSelectorLocation) => void;
	onMapClick?: (coordinates: { lat: number; lng: number }) => void;
	onMarkerClick?: (location: MapSelectorLocation) => void;
	height?: string;
	width?: string;
}

