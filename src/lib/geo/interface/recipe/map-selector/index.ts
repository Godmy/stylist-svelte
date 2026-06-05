import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { MapSelectorProps } from '$stylist/geo/type/struct/map-selector/mapselector-props';

export interface MapSelectorStateProps extends StructIntersectAll<[MapSelectorProps]> {}
