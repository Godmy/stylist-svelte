/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface SlotStore {
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
