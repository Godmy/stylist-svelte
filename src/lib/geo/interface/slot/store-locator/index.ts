/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { SlotStore } from '$stylist/geo/interface/slot/store';

export interface SlotStoreLocator extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	stores: SlotStore[];
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
	onStoreSelect?: (store: SlotStore) => void;
	onGetDirections?: (store: SlotStore) => void;
	onCallStore?: (store: SlotStore) => void;
	class?: string;
	headerClass?: string;
	searchClass?: string;
	storeClass?: string;
	mapClass?: string;
	filterClass?: string;
}
