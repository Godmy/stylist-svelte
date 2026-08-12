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
