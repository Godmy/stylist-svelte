import type { MapSelectorProps, MapSelectorLocation } from '$stylist/geo/type/struct/map-selector';
import type { MapSelectorStateProps } from '$stylist/geo/interface/recipe/map-selector';
import { untrack } from 'svelte';

export function createMapSelectorState(props: MapSelectorStateProps) {
	// Props with defaults
	const locations = $derived(props.locations ?? []);
	const initialCenter = $derived(props.initialCenter ?? { lat: 51.505, lng: -0.09 });
	const initialZoom = $derived(props.initialZoom ?? 10);
	const provider = $derived(props.provider ?? 'osm');
	const apiKey = $derived(props.apiKey);
	const showSearch = $derived(props.showSearch ?? true);
	const showZoomControls = $derived(props.showZoomControls ?? true);
	const showCurrentLocation = $derived(props.showCurrentLocation ?? true);
	const showMarkers = $derived(props.showMarkers ?? true);
	const enableMarkerClustering = $derived(props.enableMarkerClustering ?? false);
	const maxZoom = $derived(props.maxZoom ?? 18);
	const minZoom = $derived(props.minZoom ?? 1);
	const hostClass = $derived(props.class ?? '');
	const mapClass = $derived(props.mapClass ?? '');
	const searchClass = $derived(props.searchClass ?? '');
	const controlsClass = $derived(props.controlsClass ?? '');
	const height = $derived(props.height ?? '400px');
	const width = $derived(props.width ?? '100%');

	// SlotState
	let currentCenter = $state({ ...untrack(() => initialCenter) });
	let currentZoom = $state(untrack(() => initialZoom));
	let searchQuery = $state('');
	let isDragging = $state(false);
	let dragStart = $state({ x: 0, y: 0 });
	let mapOffset = $state({ x: 0, y: 0 });

	// Sync with initial props
	$effect(() => {
		currentCenter = { ...initialCenter };
		currentZoom = initialZoom;
	});

	// Methods
	function handleSearch(): void {
		console.log(`Searching for: ${searchQuery}`);
	}

	function handleZoomIn(): void {
		if (currentZoom < maxZoom) {
			currentZoom += 1;
		}
	}

	function handleZoomOut(): void {
		if (currentZoom > minZoom) {
			currentZoom -= 1;
		}
	}

	function handleResetView(): void {
		currentCenter = { ...initialCenter };
		currentZoom = initialZoom;
		mapOffset = { x: 0, y: 0 };
	}

	function handleCurrentLocation(): void {
		currentCenter = { lat: 51.505, lng: -0.09 };
		currentZoom = 15;
	}

	function handleMapClick(e: MouseEvent): void {
		const target = e.currentTarget as HTMLElement;
		const rect = target.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const offsetX = (x - rect.width / 2 - mapOffset.x) / Math.pow(2, currentZoom - 10);
		const offsetY = (y - rect.height / 2 - mapOffset.y) / Math.pow(2, currentZoom - 10);

		const lat = currentCenter.lat - offsetY * 0.01;
		const lng = currentCenter.lng + offsetX * 0.01;

		props.onMapClick?.({ lat, lng });
	}

	function handleMarkerClickEvent(location: MapSelectorLocation, e: Event): void {
		e.stopPropagation();
		props.onMarkerClick?.(location);
		props.onLocationSelect?.(location);
	}

	function handleMouseDown(e: MouseEvent): void {
		if (e.button !== 0) return;
		isDragging = true;
		dragStart = { x: e.clientX, y: e.clientY };
	}

	function handleMouseMove(e: MouseEvent): void {
		if (!isDragging) return;

		const dx = e.clientX - dragStart.x;
		const dy = e.clientY - dragStart.y;

		mapOffset = {
			x: mapOffset.x + dx,
			y: mapOffset.y + dy
		};

		dragStart = { x: e.clientX, y: e.clientY };
	}

	function handleMouseUp(): void {
		isDragging = false;
	}

	function calculateMarkerPosition(location: MapSelectorLocation): { x: number; y: number } {
		const offsetX = (location.longitude - currentCenter.lng) / 0.01 * Math.pow(2, currentZoom - 10);
		const offsetY = (currentCenter.lat - location.latitude) / 0.01 * Math.pow(2, currentZoom - 10);

		const x = 50 + offsetX + mapOffset.x;
		const y = 50 + offsetY + mapOffset.y;

		return { x, y };
	}

	function handleKeyDown(e: KeyboardEvent, fn: () => void): void {
		if (e.key === 'Enter' || e.key === ' ') fn();
	}

	function handleMarkerKeyDown(location: MapSelectorLocation, e: KeyboardEvent): void {
		if (e.key === 'Enter' || e.key === ' ') handleMarkerClickEvent(location, e);
	}

	// Rest props
	const restProps = $derived.by(() => {
		const {
			class: _class,
			locations: _locations,
			initialCenter: _initialCenter,
			initialZoom: _initialZoom,
			provider: _provider,
			apiKey: _apiKey,
			showSearch: _showSearch,
			showZoomControls: _showZoomControls,
			showCurrentLocation: _showCurrentLocation,
			showMarkers: _showMarkers,
			enableMarkerClustering: _enableMarkerClustering,
			maxZoom: _maxZoom,
			minZoom: _minZoom,
			mapClass: _mapClass,
			searchClass: _searchClass,
			controlsClass: _controlsClass,
			onLocationSelect: _onLocationSelect,
			onMapClick: _onMapClick,
			onMarkerClick: _onMarkerClick,
			height: _height,
			width: _width,
			...rest
		} = props;
		return rest;
	});

	return {
		get locations() {
			return locations;
		},
		get initialCenter() {
			return initialCenter;
		},
		get initialZoom() {
			return initialZoom;
		},
		get provider() {
			return provider;
		},
		get apiKey() {
			return apiKey;
		},
		get showSearch() {
			return showSearch;
		},
		get showZoomControls() {
			return showZoomControls;
		},
		get showCurrentLocation() {
			return showCurrentLocation;
		},
		get showMarkers() {
			return showMarkers;
		},
		get enableMarkerClustering() {
			return enableMarkerClustering;
		},
		get maxZoom() {
			return maxZoom;
		},
		get minZoom() {
			return minZoom;
		},
		get hostClass() {
			return hostClass;
		},
		get mapClass() {
			return mapClass;
		},
		get searchClass() {
			return searchClass;
		},
		get controlsClass() {
			return controlsClass;
		},
		get height() {
			return height;
		},
		get width() {
			return width;
		},
		get currentCenter() {
			return currentCenter;
		},
		set currentCenter(value: { lat: number; lng: number }) {
			currentCenter = value;
		},
		get currentZoom() {
			return currentZoom;
		},
		set currentZoom(value: number) {
			currentZoom = value;
		},
		get searchQuery() {
			return searchQuery;
		},
		set searchQuery(value: string) {
			searchQuery = value;
		},
		get isDragging() {
			return isDragging;
		},
		get dragStart() {
			return dragStart;
		},
		get mapOffset() {
			return mapOffset;
		},
		get restProps() {
			return restProps;
		},
		handleSearch,
		handleZoomIn,
		handleZoomOut,
		handleResetView,
		handleCurrentLocation,
		handleMapClick,
		handleMarkerClickEvent,
		handleMouseDown,
		handleMouseMove,
		handleMouseUp,
		calculateMarkerPosition,
		handleKeyDown,
		handleMarkerKeyDown
	};
}

export default createMapSelectorState;
