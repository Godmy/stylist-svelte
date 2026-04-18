import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { SlotGeoJsonFeatureCollection } from '$stylist/geo/interface/slot/geo-json-feature-collection';

export interface SlotGeoJsonLayer {
	id: string;
	name: string;
	data: SlotGeoJsonFeatureCollection;
	visible: boolean;
	color: string;
	opacity: number;
}
