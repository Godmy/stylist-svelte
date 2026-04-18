/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { SlotRoutePlannerLocation } from '$stylist/geo/interface/slot/route-planner-location';
import type { SlotRouteOption } from '$stylist/geo/interface/slot/route-option';

export interface SlotRoutePlanner extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	startLocation?: SlotRoutePlannerLocation;
	endLocation?: SlotRoutePlannerLocation;
	waypoints?: SlotRoutePlannerLocation[];
	routeOptions?: SlotRouteOption[];
	selectedRoute?: string;
	showSearch?: boolean;
	showRouteOptions?: boolean;
	showDirections?: boolean;
	showMap?: boolean;
	showTravelMode?: boolean;
	travelModes?: ('driving' | 'walking' | 'cycling' | 'transit')[];
	class?: string;
	mapClass?: string;
	inputClass?: string;
	directionsClass?: string;
	optionClass?: string;
	onRouteCalculated?: (route: SlotRouteOption) => void;
	onRouteSelect?: (routeId: string) => void;
	onLocationChange?: (type: 'start' | 'end' | 'waypoint', location: SlotRoutePlannerLocation) => void;
	height?: string;
	width?: string;
}
