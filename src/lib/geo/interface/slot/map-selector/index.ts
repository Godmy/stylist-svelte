/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotMapSelectorLocation } from '$stylist/geo/interface/slot/map-selector-location';
import type { MapProvider } from '$stylist/geo/type/struct/map-selector/mapprovider';

export interface SlotMapSelector extends Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'> {
	locations: SlotMapSelectorLocation[];
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
	onLocationSelect?: (location: SlotMapSelectorLocation) => void;
	onMapClick?: (coordinates: { lat: number; lng: number }) => void;
	onMarkerClick?: (location: SlotMapSelectorLocation) => void;
	height?: string;
	width?: string;
}
