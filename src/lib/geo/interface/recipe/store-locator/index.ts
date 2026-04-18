import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { StoreLocatorStore, StoreLocatorProps } from '$stylist/geo/type/struct/store-locator';

export interface StoreLocatorStateProps extends StructIntersectAll<[StoreLocatorProps]> {}
