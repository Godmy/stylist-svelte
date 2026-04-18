import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { MapWithMarkersMarker, MapWithMarkersView, MapWithMarkersProps } from '$stylist/geo/type/struct/map-with-markers';

export interface MapWithMarkersStateProps extends StructIntersectAll<[MapWithMarkersProps]> {}
