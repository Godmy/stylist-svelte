import type { Coordinates } from '$stylist/geo/type/struct/location-picker/coordinates';

export type MapMarker = {
	id: string;
	coordinates: Coordinates;
	title?: string;
	description?: string;
};
