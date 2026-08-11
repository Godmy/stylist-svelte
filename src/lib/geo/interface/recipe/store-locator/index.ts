import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { StoreLocatorStore } from '$stylist/geo/type/struct/store-locator/storelocatorstore';

export interface RecipeStoreLocator
	extends ComputeIntersectAll<
		[
			Omit<HTMLAttributes<HTMLDivElement>, 'class'> & SlotThemeBorder & SlotTypography,
			{
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
			}
		]
	> {}
