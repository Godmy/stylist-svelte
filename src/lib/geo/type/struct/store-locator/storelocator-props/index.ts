import type { StoreLocatorRestProps } from '../storelocatorrest-props';
import type { StoreLocatorStore } from '../storelocatorstore';

export type StoreLocatorProps = StoreLocatorRestProps & {
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
	onStoreSelect?: (store: StoreLocatorStore) => void;
	onGetDirections?: (store: StoreLocatorStore) => void;
	onCallStore?: (store: StoreLocatorStore) => void;
	class?: string;
	headerClass?: string;
	searchClass?: string;
	storeClass?: string;
	mapClass?: string;
	filterClass?: string;
};
