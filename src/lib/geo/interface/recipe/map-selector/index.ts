import type { HTMLAttributes } from 'svelte/elements';
import type { MapSelectorLocation as SlotMapSelectorLocation } from '$stylist/geo/type/struct/map-selector/mapselectorlocation';
import type { MapSelectorRestProps as LegacyMapSelectorProps2 } from '$stylist/geo/type/struct/map-selector/mapselectorrest-props';

import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { MapProvider } from '$stylist/geo/type/alias/map-provider';
import type { MapSelectorLocation } from '$stylist/geo/type/struct/map-selector/mapselectorlocation';
import type { MapSelectorRestProps } from '$stylist/geo/type/struct/map-selector/mapselectorrest-props';

export interface RecipeMapSelector
	extends ComputeIntersectAll<
		[LegacyMapSelectorProps2, (MapSelectorRestProps & {
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
		}), ((Omit<HTMLAttributes<HTMLDivElement>, 'class'> & {
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
}))]
	> {}
