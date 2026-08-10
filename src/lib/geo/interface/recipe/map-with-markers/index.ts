import type { MapWithMarkersRestProps as LegacyMapWithMarkersProps2 } from '$stylist/geo/type/struct/map-with-markers/mapwithmarkersrest-props';

import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { MapWithMarkersMarker } from '$stylist/geo/type/struct/map-with-markers/mapwithmarkersmarker';
import type { MapWithMarkersRestProps } from '$stylist/geo/type/struct/map-with-markers/mapwithmarkersrest-props';
import type { MapWithMarkersView } from '$stylist/geo/type/struct/map-with-markers/mapwithmarkersview';

export interface RecipeMapWithMarkers
	extends ComputeIntersectAll<
		[
			LegacyMapWithMarkersProps2,
			(MapWithMarkersRestProps & {
				markers?: MapWithMarkersMarker[];
				class?: string;
				mapClass?: string;
				markerClass?: string;
				showTooltip?: boolean;
				showSearch?: boolean;
				showZoomControls?: boolean;
				showCurrentLocation?: boolean;
				showScale?: boolean;
				showCompass?: boolean;
				showResetView?: boolean;
				initialView?: MapWithMarkersView;
				maxZoom?: number;
				minZoom?: number;
				currency?: string;
				locale?: string;
				mapType?: 'roadmap' | 'satellite' | 'terrain' | 'hybrid';
				onMarkerClick?: (marker: MapWithMarkersMarker) => void;
				onMapClick?: (coordinates: { lat: number; lng: number }) => void;
				onMapMove?: (view: MapWithMarkersView) => void;
				onMapZoom?: (zoom: number) => void;
			})
		]
	> {}
