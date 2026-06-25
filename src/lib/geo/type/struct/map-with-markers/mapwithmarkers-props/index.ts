import type { MapWithMarkersMarker } from '$stylist/geo/type/struct/map-with-markers/mapwithmarkersmarker';
import type { MapWithMarkersRestProps } from '$stylist/geo/type/struct/map-with-markers/mapwithmarkersrest-props';
import type { MapWithMarkersView } from '$stylist/geo/type/struct/map-with-markers/mapwithmarkersview';

export type MapWithMarkersProps = MapWithMarkersRestProps & {
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
	mapType?: 'roadmap' | 'satellite' | 'terrain' | 'hybrid';
	onMarkerClick?: (marker: MapWithMarkersMarker) => void;
	onMapClick?: (coordinates: { lat: number; lng: number }) => void;
	onMapMove?: (view: MapWithMarkersView) => void;
	onMapZoom?: (zoom: number) => void;
	currency?: string;
	locale?: string;
};
