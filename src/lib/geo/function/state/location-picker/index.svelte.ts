import type { Coordinates, MapMarker, LocationPickerProps } from '$stylist/geo/type/struct/location-picker';
import type { LocationPickerStateProps } from '$stylist/geo/interface/recipe/location-picker';

export function createLocationPickerState(props: LocationPickerStateProps) {
	const center = $derived(props.center ?? { lat: 51.505, lng: -0.09 });
	const zoom = $derived(props.zoom ?? 13);
	const markers = $derived(props.markers ?? []);
	const selectedMarker = $derived(props.selectedMarker);
	const showSearch = $derived(props.showSearch ?? true);
	const showCoordinates = $derived(props.showCoordinates ?? true);
	const showCurrentLocation = $derived(props.showCurrentLocation ?? true);
	const disableInteraction = $derived(props.disableInteraction ?? false);
	const maxZoom = $derived(props.maxZoom ?? 18);
	const minZoom = $derived(props.minZoom ?? 1);

	let currentCenter = $state<Coordinates>({ ...center });
	let currentZoom = $state(zoom);
	let searchQuery = $state('');
	let mapDimensions = $state({ width: 600, height: 400 });

	$effect(() => {
		currentCenter = { ...center };
		currentZoom = zoom;
	});

	function coordsToPixel(coords: Coordinates, containerWidth: number, containerHeight: number): { x: number; y: number } {
		const centerX = containerWidth / 2;
		const centerY = containerHeight / 2;
		const x = centerX + (coords.lng - currentCenter.lng) * 1000 * Math.pow(2, currentZoom - 10);
		const y = centerY - (coords.lat - currentCenter.lat) * 1000 * Math.pow(2, currentZoom - 10);
		return { x, y };
	}

	function pixelToCoords(x: number, y: number, containerWidth: number, containerHeight: number): Coordinates {
		const centerX = containerWidth / 2;
		const centerY = containerHeight / 2;
		const lng = currentCenter.lng + (x - centerX) / (1000 * Math.pow(2, currentZoom - 10));
		const lat = currentCenter.lat - (y - centerY) / (1000 * Math.pow(2, currentZoom - 10));
		return { lat, lng };
	}

	function handleMapClick(e: MouseEvent): void {
		if (disableInteraction) return;
		const target = e.currentTarget as HTMLElement;
		const rect = target.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const coords = pixelToCoords(x, y, rect.width, rect.height);
		props.onMapClick?.(coords);
	}

	function handleMarkerClick(marker: MapMarker): void {
		props.onMarkerClick?.(marker);
	}

	function handleZoomIn(): void {
		if (currentZoom < maxZoom) currentZoom += 1;
	}

	function handleZoomOut(): void {
		if (currentZoom > minZoom) currentZoom -= 1;
	}

	function handleResetView(): void {
		currentCenter = { ...center };
		currentZoom = zoom;
	}

	function handleCurrentLocation(): void {
		currentCenter = { ...center };
		currentZoom = 15;
	}

	function handleSearch(): void {
		console.log(`Searching for: ${searchQuery}`);
		currentCenter = { lat: currentCenter.lat + 0.01, lng: currentCenter.lng + 0.01 };
	}

	function handleKeyDown(e: KeyboardEvent, fn: () => void): void {
		if (e.key === 'Enter' || e.key === ' ') fn();
	}

	function handleMarkerKeyDown(marker: MapMarker, e: KeyboardEvent): void {
		if (e.key === 'Enter' || e.key === ' ') {
			e.stopPropagation();
			handleMarkerClick(marker);
		}
	}

	const restProps = $derived.by(() => {
		const {
			class: _class,
			center: _center,
			zoom: _zoom,
			markers: _markers,
			selectedMarker: _selectedMarker,
			mapClass: _mapClass,
			onLocationSelect: _onLocationSelect,
			onMarkerClick: _onMarkerClick,
			onMapClick: _onMapClick,
			showSearch: _showSearch,
			showCoordinates: _showCoordinates,
			showCurrentLocation: _showCurrentLocation,
			disableInteraction: _disableInteraction,
			maxZoom: _maxZoom,
			minZoom: _minZoom,
			...rest
		} = props;
		return rest;
	});

	return {
		get center() { return center; },
		get zoom() { return zoom; },
		get markers() { return markers; },
		get selectedMarker() { return selectedMarker; },
		get showSearch() { return showSearch; },
		get showCoordinates() { return showCoordinates; },
		get showCurrentLocation() { return showCurrentLocation; },
		get disableInteraction() { return disableInteraction; },
		get maxZoom() { return maxZoom; },
		get minZoom() { return minZoom; },
		get currentCenter() { return currentCenter; },
		get currentZoom() { return currentZoom; },
		get searchQuery() { return searchQuery; },
		get mapDimensions() { return mapDimensions; },
		get restProps() { return restProps; },
		handleMapClick,
		handleMarkerClick,
		handleZoomIn,
		handleZoomOut,
		handleResetView,
		handleCurrentLocation,
		handleSearch,
		coordsToPixel,
		pixelToCoords,
		handleKeyDown,
		handleMarkerKeyDown,
		set currentCenter(value: Coordinates) { currentCenter = value; },
		set currentZoom(value: number) { currentZoom = value; },
		set searchQuery(value: string) { searchQuery = value; },
		set mapDimensions(value: { width: number; height: number }) { mapDimensions = value; }
	};
}

export default createLocationPickerState;
