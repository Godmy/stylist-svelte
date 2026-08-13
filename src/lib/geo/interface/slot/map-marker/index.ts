import type { SlotCoordinates } from '$stylist/geo/interface/slot/coordinates';

export interface MapMarker {
	id: string;
	coordinates: SlotCoordinates;
	title?: string;
	description?: string;
}
