import type { RoutePlannerLocation, RouteOption, RoutePlannerProps } from '$stylist/geo/type/struct/route-planner';

export interface RoutePlannerStateProps extends RoutePlannerProps {}

export function createRoutePlannerState(props: RoutePlannerStateProps) {
	const startLocation = $derived(props.startLocation);
	const endLocation = $derived(props.endLocation);
	const waypoints = $derived(props.waypoints ?? []);
	const routeOptions = $derived(props.routeOptions ?? []);
	const selectedRoute = $derived(props.selectedRoute);
	const showSearch = $derived(props.showSearch ?? true);
	const showRouteOptions = $derived(props.showRouteOptions ?? true);
	const showDirections = $derived(props.showDirections ?? true);
	const showMap = $derived(props.showMap ?? true);
	const showTravelMode = $derived(props.showTravelMode ?? true);
	const travelModes = $derived(props.travelModes ?? ['driving', 'walking', 'cycling']);
	const height = $derived(props.height ?? '500px');
	const width = $derived(props.width ?? '100%');

	let selectedStartLocation: RoutePlannerLocation | null = $state(startLocation || null);
	let selectedEndLocation: RoutePlannerLocation | null = $state(endLocation || null);
	let selectedWaypoints = $state<RoutePlannerLocation[]>(waypoints);
	let selectedTravelMode = $state<'driving' | 'walking' | 'cycling' | 'transit'>('driving');
	let searchQuery = $state('');
	let localShowMap = $state(showMap);
	let selectedRouteId = $state(selectedRoute || '');

	$effect(() => {
		selectedStartLocation = startLocation || null;
		selectedEndLocation = endLocation || null;
		selectedWaypoints = [...waypoints];
		selectedRouteId = selectedRoute || '';
	});

	$effect(() => {
		localShowMap = showMap;
	});

	function handleZoomIn(): void {
		console.log('Zoom in requested');
	}

	function handleZoomOut(): void {
		console.log('Zoom out requested');
	}

	function handleResetView(): void {
		console.log('Reset view requested');
	}

	function formatCurrency(amount?: number): string {
		if (amount === undefined) return '';
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 2
		}).format(amount);
	}

	function handleStartLocationChange(location: RoutePlannerLocation): void {
		selectedStartLocation = location;
		props.onLocationChange?.('start', location);
	}

	function handleEndLocationChange(location: RoutePlannerLocation): void {
		selectedEndLocation = location;
		props.onLocationChange?.('end', location);
	}

	function handleAddWaypoint(): void {
		if (searchQuery) {
			const newWaypoint: RoutePlannerLocation = {
				id: `wp-${Date.now()}`,
				name: searchQuery,
				address: searchQuery,
				latitude: 51.505 + (Math.random() - 0.5) * 0.1,
				longitude: -0.09 + (Math.random() - 0.5) * 0.1
			};
			selectedWaypoints = [...selectedWaypoints, newWaypoint];
			props.onLocationChange?.('waypoint', newWaypoint);
			searchQuery = '';
		}
	}

	function handleRemoveWaypoint(index: number): void {
		const newWaypoints = [...selectedWaypoints];
		newWaypoints.splice(index, 1);
		selectedWaypoints = newWaypoints;
	}

	function handleRouteSelect(routeId: string): void {
		selectedRouteId = routeId;
		props.onRouteSelect?.(routeId);
		const route = routeOptions.find(r => r.id === routeId);
		if (route) {
			props.onRouteCalculated?.(route);
		}
	}

	function handleModeChange(mode: string): void {
		selectedTravelMode = mode as 'driving' | 'walking' | 'cycling' | 'transit';
	}

	function calculateRoute(): void {
		const demoRoute: RouteOption = {
			id: 'demo-route',
			name: 'Recommended Route',
			duration: Math.floor(Math.random() * 60) + 15,
			distance: parseFloat((Math.random() * 20 + 5).toFixed(1)),
			tolls: Math.random() > 0.5,
			highways: Math.random() > 0.3,
			ecoFriendly: Math.random() > 0.7,
			cost: parseFloat((Math.random() * 5 + 1).toFixed(2))
		};
		props.onRouteCalculated?.(demoRoute);
	}

	const restProps = $derived.by(() => {
		const {
			class: _class,
			startLocation: _startLocation,
			endLocation: _endLocation,
			waypoints: _waypoints,
			routeOptions: _routeOptions,
			selectedRoute: _selectedRoute,
			showSearch: _showSearch,
			showRouteOptions: _showRouteOptions,
			showDirections: _showDirections,
			showMap: _showMap,
			showTravelMode: _showTravelMode,
			travelModes: _travelModes,
			mapClass: _mapClass,
			inputClass: _inputClass,
			directionsClass: _directionsClass,
			optionClass: _optionClass,
			onRouteCalculated: _onRouteCalculated,
			onRouteSelect: _onRouteSelect,
			onLocationChange: _onLocationChange,
			height: _height,
			width: _width,
			...rest
		} = props;
		return rest;
	});

	return {
		get startLocation() { return startLocation; },
		get endLocation() { return endLocation; },
		get waypoints() { return waypoints; },
		get routeOptions() { return routeOptions; },
		get selectedRoute() { return selectedRoute; },
		get showSearch() { return showSearch; },
		get showRouteOptions() { return showRouteOptions; },
		get showDirections() { return showDirections; },
		get showMap() { return showMap; },
		get showTravelMode() { return showTravelMode; },
		get travelModes() { return travelModes; },
		get height() { return height; },
		get width() { return width; },
		get selectedStartLocation() { return selectedStartLocation; },
		get selectedEndLocation() { return selectedEndLocation; },
		get selectedWaypoints() { return selectedWaypoints; },
		get selectedTravelMode() { return selectedTravelMode; },
		get searchQuery() { return searchQuery; },
		get localShowMap() { return localShowMap; },
		get selectedRouteId() { return selectedRouteId; },
		get restProps() { return restProps; },
		handleZoomIn,
		handleZoomOut,
		handleResetView,
		formatCurrency,
		handleStartLocationChange,
		handleEndLocationChange,
		handleAddWaypoint,
		handleRemoveWaypoint,
		handleRouteSelect,
		handleModeChange,
		calculateRoute,
		set selectedStartLocation(value: RoutePlannerLocation | null) { selectedStartLocation = value; },
		set selectedEndLocation(value: RoutePlannerLocation | null) { selectedEndLocation = value; },
		set selectedWaypoints(value: RoutePlannerLocation[]) { selectedWaypoints = value; },
		set selectedTravelMode(value: 'driving' | 'walking' | 'cycling' | 'transit') { selectedTravelMode = value; },
		set searchQuery(value: string) { searchQuery = value; },
		set localShowMap(value: boolean) { localShowMap = value; },
		set selectedRouteId(value: string) { selectedRouteId = value; }
	};
}

export default createRoutePlannerState;
