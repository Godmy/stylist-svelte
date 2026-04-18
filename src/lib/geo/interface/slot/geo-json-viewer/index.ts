import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { SlotGeoJsonFeature } from '$stylist/geo/interface/slot/geo-json-feature';
import type { SlotGeoJsonFeatureCollection } from '$stylist/geo/interface/slot/geo-json-feature-collection';
import type { SlotGeoJsonLayer } from '$stylist/geo/interface/slot/geo-json-layer';
import type { SlotMapView } from '$stylist/geo/interface/slot/map-view';

export interface SlotGeoJSONViewer extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	geojsonData?: SlotGeoJsonFeatureCollection;
	layers?: SlotGeoJsonLayer[];
	class?: string;
	mapClass?: string;
	initialView?: SlotMapView;
	showControls?: boolean;
	showLayers?: boolean;
	showLegend?: boolean;
	maxZoom?: number;
	minZoom?: number;
	mapType?: 'roadmap' | 'satellite' | 'terrain' | 'hybrid';
	onFeatureClick?: (feature: SlotGeoJsonFeature) => void;
	onMapClick?: (coordinates: { lat: number; lng: number }) => void;
	onDataChange?: (data: SlotGeoJsonFeatureCollection) => void;
}
