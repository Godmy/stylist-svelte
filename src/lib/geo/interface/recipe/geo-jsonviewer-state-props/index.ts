import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotGeoJSONViewer as IGeoJSONViewerProps } from '$stylist/geo/interface/slot/geo-json-viewer';

export interface GeoJSONViewerStateProps extends StructIntersectAll<[IGeoJSONViewerProps]> {
	class?: string;
	mapClass?: string;
}
