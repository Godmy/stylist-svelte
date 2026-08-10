export interface SlotGeoJsonFeature {
	type: 'Feature';
	geometry: ({
type:
		| 'Point'
		| 'MultiPoint'
		| 'LineString'
		| 'MultiLineString'
		| 'Polygon'
		| 'MultiPolygon'
		| 'GeometryCollection';
	coordinates: any[] | any[][];
});
	properties?: Record<string, any>;
}
