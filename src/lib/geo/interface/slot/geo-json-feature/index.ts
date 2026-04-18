import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { SlotGeoJsonGeometry } from '$stylist/geo/interface/slot/geo-json-geometry';

export interface SlotGeoJsonFeature {
	type: 'Feature';
	geometry: SlotGeoJsonGeometry;
	properties?: Record<string, any>;
}
