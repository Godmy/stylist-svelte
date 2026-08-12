import type { HTMLAttributes } from 'svelte/elements';
import type { MapMarker } from '$stylist/geo/type/object/location-picker/mapmarker';
import type { SlotCoordinates } from '$stylist/geo/interface/slot/coordinates';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeLocationPicker extends ComputeIntersectAll<[((Omit<HTMLAttributes<HTMLDivElement>, 'class'> & {
center?: SlotCoordinates;
	zoom?: number;
	markers?: MapMarker[];
	selectedMarker?: string;
	class?: string;
	mapClass?: string;
	onLocationSelect?: (coordinates: SlotCoordinates) => void;
	onMarkerClick?: (marker: MapMarker) => void;
	onMapClick?: (coordinates: SlotCoordinates) => void;
	showSearch?: boolean;
	showCoordinates?: boolean;
	showCurrentLocation?: boolean;
	disableInteraction?: boolean;
	maxZoom?: number;
	minZoom?: number;
}))]> {}
