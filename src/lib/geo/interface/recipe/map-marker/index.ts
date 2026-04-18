import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotMapMarker as IMapMarkerProps } from '$stylist/geo/interface/slot/map-marker';

export interface MapMarkerStateProps extends StructIntersectAll<[IMapMarkerProps]> {
	class?: string;
}
