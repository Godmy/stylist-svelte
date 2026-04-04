import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';

export interface GeoJsonGeometry {
	type:
		| 'Point'
		| 'MultiPoint'
		| 'LineString'
		| 'MultiLineString'
		| 'Polygon'
		| 'MultiPolygon'
		| 'GeometryCollection';
	coordinates: any[] | any[][];
}

export interface GeoJsonFeature {
	type: 'Feature';
	geometry: GeoJsonGeometry;
	properties?: Record<string, any>;
}

export interface GeoJsonFeatureCollection {
	type: 'FeatureCollection';
	features: GeoJsonFeature[];
}

export interface GeoJsonLayer {
	id: string;
	name: string;
	data: GeoJsonFeatureCollection;
	visible: boolean;
	color: string;
	opacity: number;
}

export interface MapView {
	center: { lat: number; lng: number };
	zoom: number;
}

export interface IGeoJSONViewerProps extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	geojsonData?: GeoJsonFeatureCollection;
	layers?: GeoJsonLayer[];
	class?: string;
	mapClass?: string;
	initialView?: MapView;
	showControls?: boolean;
	showLayers?: boolean;
	showLegend?: boolean;
	maxZoom?: number;
	minZoom?: number;
	mapType?: 'roadmap' | 'satellite' | 'terrain' | 'hybrid';
	onFeatureClick?: (feature: GeoJsonFeature) => void;
	onMapClick?: (coordinates: { lat: number; lng: number }) => void;
	onDataChange?: (data: GeoJsonFeatureCollection) => void;
}
