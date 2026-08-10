import type { StoreLocatorRestProps as LegacyStoreLocatorProps2 } from '$stylist/geo/type/struct/store-locator/storelocatorrest-props';

import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { StoreLocatorRestProps } from '$stylist/geo/type/struct/store-locator/storelocatorrest-props';
import type { StoreLocatorStore } from '$stylist/geo/type/struct/store-locator/storelocatorstore';

export interface RecipeStoreLocator
	extends ComputeIntersectAll<
		[LegacyStoreLocatorProps2, (StoreLocatorRestProps & {
			stores: StoreLocatorStore[];
			showSearch?: boolean;
			showFilters?: boolean;
			showDistance?: boolean;
			showRating?: boolean;
			showHours?: boolean;
			showServices?: boolean;
			enablePickupFilter?: boolean;
			enableServiceFilter?: boolean;
			maxStores?: number;
			radius?: number;
			showMap?: boolean;
			class?: string;
			headerClass?: string;
			searchClass?: string;
			storeClass?: string;
			mapClass?: string;
			filterClass?: string;
			onStoreSelect?: (store: StoreLocatorStore) => void;
			onGetDirections?: (store: StoreLocatorStore) => void;
			onCallStore?: (store: StoreLocatorStore) => void;
		})]
	> {}
