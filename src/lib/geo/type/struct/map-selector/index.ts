import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export type MapProvider = 'google' | 'osm' | 'mapbox' | 'here' | 'tomtom';

export type MapSelectorLocation = {
	id: string;
	name: string;
	latitude: number;
	longitude: number;
	description?: string;
	metadata?: Record<string, any>;
};

export type MapSelectorRestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;

export type MapSelectorProps = MapSelectorRestProps & {
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
};
