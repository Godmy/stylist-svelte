import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { StoreLocatorProps } from '$stylist/geo/type/struct/store-locator/storelocator-props';

export interface StoreLocatorStateProps extends StructIntersectAll<[StoreLocatorProps]> {}
