import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { LocationSelectorLocation, LocationSelectorProps } from '$stylist/geo/type/struct/location-selector';

export interface LocationSelectorStateProps extends StructIntersectAll<[LocationSelectorProps]> {}
