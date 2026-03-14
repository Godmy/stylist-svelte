import type { HTMLAttributes } from 'svelte/elements';

import type { GeoJSONViewerRestProps, GeoJsonFeature, GeoJsonFeatureCollection, GeoJsonLayer, MapView } from '../../types/information/geo-jsonviewer';
export interface IGeoJSONViewerProps extends GeoJSONViewerRestProps {
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


