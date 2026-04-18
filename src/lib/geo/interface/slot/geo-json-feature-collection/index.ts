import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { SlotGeoJsonFeature } from '$stylist/geo/interface/slot/geo-json-feature';

export interface SlotGeoJsonFeatureCollection {
	type: 'FeatureCollection';
	features: SlotGeoJsonFeature[];
}
