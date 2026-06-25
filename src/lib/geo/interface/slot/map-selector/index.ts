import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { MapSelectorLocation as SlotMapSelectorLocation } from '$stylist/geo/type/struct/map-selector/mapselectorlocation';
import type { MapProvider } from '$stylist/token/type/alias/map-provider';

export interface SlotMapSelector extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SlotInteraction {
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

