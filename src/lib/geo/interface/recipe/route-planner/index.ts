import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { RouteOption } from '$stylist/geo/type/struct/route-planner/routeoption';
import type { RoutePlannerLocation } from '$stylist/geo/type/struct/route-planner/routeplannerlocation';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';

export interface RoutePlannerStateProps extends ComputeIntersectAll<[((Omit<HTMLAttributes<HTMLDivElement>, 'class'> & SlotThemeBorder & SlotTypography) & {
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
	height?: string;
	width?: string;
	onRouteCalculated?: (route: RouteOption) => void;
	onRouteSelect?: (routeId: string) => void;
	onLocationChange?: (
		locationType: 'start' | 'end' | 'waypoint',
		location: RoutePlannerLocation
	) => void;
})]> {}
