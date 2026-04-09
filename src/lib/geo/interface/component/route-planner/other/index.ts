/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface IRoutePlannerLocation {
	id: string;
	name: string;
	address: string;
	latitude: number;
	longitude: number;
	arrivalTime?: Date;
	departureTime?: Date;
}

export interface IRouteOption {
	id: string;
	name: string;
	duration: number;
	distance: number;
	tolls?: boolean;
	highways?: boolean;
	ecoFriendly?: boolean;
	cost?: number;
}

export interface IRoutePlannerProps extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	startLocation?: IRoutePlannerLocation;
	endLocation?: IRoutePlannerLocation;
	waypoints?: IRoutePlannerLocation[];
	routeOptions?: IRouteOption[];
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
	onRouteCalculated?: (route: IRouteOption) => void;
	onRouteSelect?: (routeId: string) => void;
	onLocationChange?: (type: 'start' | 'end' | 'waypoint', location: IRoutePlannerLocation) => void;
	height?: string;
	width?: string;
}
