/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';

export interface IStore {
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
}

export interface IStoreLocatorProps extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	stores: IStore[];
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
	onStoreSelect?: (store: IStore) => void;
	onGetDirections?: (store: IStore) => void;
	onCallStore?: (store: IStore) => void;
	class?: string;
	headerClass?: string;
	searchClass?: string;
	storeClass?: string;
	mapClass?: string;
	filterClass?: string;
}
