import type { RouteOption } from '$stylist/geo/type/struct/route-planner/routeoption';
import type { RoutePlannerLocation } from '$stylist/geo/type/struct/route-planner/routeplannerlocation';
import type { RoutePlannerRestProps } from '$stylist/geo/type/struct/route-planner/routeplannerrest-props';

export type RoutePlannerProps = RoutePlannerRestProps & {
	startLocation?: RoutePlannerLocation;
	endLocation?: RoutePlannerLocation;
	waypoints?: RoutePlannerLocation[];
	routeOptions?: RouteOption[];
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
	onRouteCalculated?: (route: RouteOption) => void;
	onRouteSelect?: (routeId: string) => void;
	onLocationChange?: (type: 'start' | 'end' | 'waypoint', location: RoutePlannerLocation) => void;
	height?: string;
	width?: string;
};
