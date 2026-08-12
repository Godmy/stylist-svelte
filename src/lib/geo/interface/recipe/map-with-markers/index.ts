import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { MapWithMarkersMarker } from '$stylist/geo/type/object/map-with-markers/mapwithmarkersmarker';
import type { MapWithMarkersView } from '$stylist/geo/type/object/map-with-markers/mapwithmarkersview';
export interface RecipeMapWithMarkers
	extends ComputeIntersectAll<
		[
			Omit<HTMLAttributes<HTMLDivElement>, 'class'> & SlotThemeBorder & SlotTypography,
			{
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
			}
		]
	> {}
