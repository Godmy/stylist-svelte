/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export type MapProvider = 'google' | 'osm' | 'mapbox' | 'here' | 'tomtom';

export interface IMapSelectorLocation {
	id: string;
	name: string;
	latitude: number;
	longitude: number;
	description?: string;
	metadata?: Record<string, unknown>;
}

export interface IMapSelectorProps extends Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'> {
	locations: IMapSelectorLocation[];
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
	onLocationSelect?: (location: IMapSelectorLocation) => void;
	onMapClick?: (coordinates: { lat: number; lng: number }) => void;
	onMarkerClick?: (location: IMapSelectorLocation) => void;
	height?: string;
	width?: string;
}
