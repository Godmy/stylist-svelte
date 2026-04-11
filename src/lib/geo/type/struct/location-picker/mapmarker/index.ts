import type { Coordinates } from '../coordinates';

export type MapMarker = {
	id: string;
	coordinates: Coordinates;
	title?: string;
	description?: string;
};
