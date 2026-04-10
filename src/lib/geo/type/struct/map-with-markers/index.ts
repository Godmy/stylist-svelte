import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type MapWithMarkersMarker = {
	id: string;
	lat: number;
	lng: number;
	title?: string;
	description?: string;
	color?: string;
	size?: 'sm' | 'md' | 'lg';
	icon?: string;
};

export type MapWithMarkersView = {
	center: { lat: number; lng: number };
	zoom: number;
};

export type MapWithMarkersRestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;

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
