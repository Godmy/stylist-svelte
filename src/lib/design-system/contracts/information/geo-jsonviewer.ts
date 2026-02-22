import type { HTMLAttributes } from 'svelte/elements';

export type GeoJsonGeometry = {
  type: 'Point' | 'MultiPoint' | 'LineString' | 'MultiLineString' | 'Polygon' | 'MultiPolygon' | 'GeometryCollection';
  coordinates: any[] | any[][];
};

export type GeoJsonFeature = {
  type: 'Feature';
  geometry: GeoJsonGeometry;
  properties?: Record<string, any>;
};

export type GeoJsonFeatureCollection = {
  type: 'FeatureCollection';
  features: GeoJsonFeature[];
};

export type GeoJsonLayer = {
  id: string;
  name: string;
  data: GeoJsonFeatureCollection;
  visible: boolean;
  color: string;
  opacity: number;
};

export type MapView = {
  center: { lat: number; lng: number };
  zoom: number;
};

export type GeoJSONViewerRestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

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
