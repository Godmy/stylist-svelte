import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type StoreLocatorStore = {
	id: string;
	name: string;
	address: string;
	city: string;
	state: string;
	zipCode: string;
	country: string;
	phone: string;
	hours: string;
	rating: number;
	distance: number;
	latitude: number;
	longitude: number;
	inventory?: Record<string, number>;
	services?: string[];
	pickupAvailable?: boolean;
};

export type StoreLocatorRestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;

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
