/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { Coordinates } from '$stylist/geo/interface/component/map-marker/other';

export interface ILocationPickerMarker {
	id: string;
	coordinates: Coordinates;
	title?: string;
	description?: string;
}

export interface ILocationPickerProps extends Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'> {
	center?: Coordinates;
	zoom?: number;
	markers?: ILocationPickerMarker[];
	selectedMarker?: string;
	class?: string;
	mapClass?: string;
	onLocationSelect?: (coordinates: Coordinates) => void;
	onMarkerClick?: (marker: ILocationPickerMarker) => void;
	onMapClick?: (coordinates: Coordinates) => void;
	showSearch?: boolean;
	showCoordinates?: boolean;
	showCurrentLocation?: boolean;
	disableInteraction?: boolean;
	maxZoom?: number;
	minZoom?: number;
}
