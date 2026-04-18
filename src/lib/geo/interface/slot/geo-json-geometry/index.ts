import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface SlotGeoJsonGeometry {
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
