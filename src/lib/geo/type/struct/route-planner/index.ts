import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type RoutePlannerLocation = {
	id: string;
	name: string;
	address: string;
	latitude: number;
	longitude: number;
	arrivalTime?: Date;
	departureTime?: Date;
};

export type RouteOption = {
	id: string;
	name: string;
	duration: number;
	distance: number;
	tolls?: boolean;
	highways?: boolean;
	ecoFriendly?: boolean;
	cost?: number;
};

export type RoutePlannerRestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;

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
