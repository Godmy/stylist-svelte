import type { MapWithMarkersMarker, MapWithMarkersView, MapWithMarkersProps } from '$stylist/geo/type/struct/map-with-markers';

export interface MapWithMarkersStateProps extends MapWithMarkersProps {}

export function createMapWithMarkersState(props: MapWithMarkersStateProps) {
	const markers = $derived(props.markers ?? []);
	const initialView = $derived(props.initialView ?? { center: { lat: 51.505, lng: -0.09 }, zoom: 13 });
	const maxZoom = $derived(props.maxZoom ?? 18);
	const minZoom = $derived(props.minZoom ?? 1);
	const mapType = $derived(props.mapType ?? 'roadmap');
	const showTooltip = $derived(props.showTooltip ?? true);
	const showSearch = $derived(props.showSearch ?? true);
	const showZoomControls = $derived(props.showZoomControls ?? true);
	const showCurrentLocation = $derived(props.showCurrentLocation ?? true);
	const showScale = $derived(props.showScale ?? true);
	const showCompass = $derived(props.showCompass ?? true);
	const showResetView = $derived(props.showResetView ?? true);
	const currency = $derived(props.currency ?? 'USD');
	const locale = $derived(props.locale ?? 'en-US');

	let currentView = $state<MapWithMarkersView>({
		center: { ...initialView.center },
		zoom: initialView.zoom
	});
	let searchQuery = $state('');
	let isDragging = $state(false);
	let dragStart = $state({ x: 0, y: 0 });
	let mapOffset = $state({ x: 0, y: 0 });
	let hoveredMarker: string | null = $state(null);

	$effect(() => {
		currentView = {
			center: { ...initialView.center },
			zoom: initialView.zoom
		};
		mapOffset = { x: 0, y: 0 };
	});

	function handleMarkerClick(marker: MapWithMarkersMarker, e: Event): void {
		e.stopPropagation();
		props.onMarkerClick?.(marker);
	}

	function handleMapClick(e: MouseEvent): void {
		const target = e.currentTarget as HTMLElement;
		const rect = target.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const offsetX = (x - rect.width / 2 - mapOffset.x) / Math.pow(2, currentView.zoom - 10) / 10000;
		const offsetY = (y - rect.height / 2 - mapOffset.y) / Math.pow(2, currentView.zoom - 10) / 10000;
		const lat = currentView.center.lat - offsetY;
		const lng = currentView.center.lng + offsetX;
		props.onMapClick?.({ lat, lng });
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

	function handleZoomIn(): void {
		if (currentView.zoom < maxZoom) {
			currentView = { ...currentView, zoom: currentView.zoom + 1 };
			props.onMapZoom?.(currentView.zoom);
		}
	}

	function handleZoomOut(): void {
		if (currentView.zoom > minZoom) {
			currentView = { ...currentView, zoom: currentView.zoom - 1 };
			props.onMapZoom?.(currentView.zoom);
		}
	}

	function handleResetView(): void {
		currentView = { ...initialView };
		mapOffset = { x: 0, y: 0 };
	}

	function handleCurrentLocation(): void {
		currentView = { ...initialView };
		mapOffset = { x: 0, y: 0 };
	}

	function latLngToPixel(lat: number, lng: number, containerWidth: number, containerHeight: number): { x: number; y: number } {
		const offsetX = (lng - currentView.center.lng) * 10000 * Math.pow(2, currentView.zoom - 10);
		const offsetY = (currentView.center.lat - lat) * 10000 * Math.pow(2, currentView.zoom - 10);
		const x = containerWidth / 2 + offsetX + mapOffset.x;
		const y = containerHeight / 2 + offsetY + mapOffset.y;
		return { x, y };
	}

	function handleKeyDown(e: KeyboardEvent, fn: () => void): void {
		if (e.key === 'Enter' || e.key === ' ') fn();
	}

	function handleMarkerKeyDown(marker: any, e: KeyboardEvent): void {
		if (e.key === 'Enter' || e.key === ' ') handleMarkerClick(marker, e);
	}

	const restProps = $derived.by(() => {
		const {
			class: _class,
			markers: _markers,
			mapClass: _mapClass,
			markerClass: _markerClass,
			showTooltip: _showTooltip,
			showSearch: _showSearch,
			showZoomControls: _showZoomControls,
			showCurrentLocation: _showCurrentLocation,
			showScale: _showScale,
			showCompass: _showCompass,
			showResetView: _showResetView,
			initialView: _initialView,
			maxZoom: _maxZoom,
			minZoom: _minZoom,
			mapType: _mapType,
			onMarkerClick: _onMarkerClick,
			onMapClick: _onMapClick,
			onMapMove: _onMapMove,
			onMapZoom: _onMapZoom,
			currency: _currency,
			locale: _locale,
			...rest
		} = props;
		return rest;
	});

	return {
		get markers() { return markers; },
		get initialView() { return initialView; },
		get maxZoom() { return maxZoom; },
		get minZoom() { return minZoom; },
		get mapType() { return mapType; },
		get showTooltip() { return showTooltip; },
		get showSearch() { return showSearch; },
		get showZoomControls() { return showZoomControls; },
		get showCurrentLocation() { return showCurrentLocation; },
		get showScale() { return showScale; },
		get showCompass() { return showCompass; },
		get showResetView() { return showResetView; },
		get currency() { return currency; },
		get locale() { return locale; },
		get currentView() { return currentView; },
		get searchQuery() { return searchQuery; },
		get isDragging() { return isDragging; },
		get dragStart() { return dragStart; },
		get mapOffset() { return mapOffset; },
		get hoveredMarker() { return hoveredMarker; },
		get restProps() { return restProps; },
		handleMarkerClick,
		handleMapClick,
		handleMouseDown,
		handleMouseMove,
		handleMouseUp,
		handleZoomIn,
		handleZoomOut,
		handleResetView,
		handleCurrentLocation,
		latLngToPixel,
		handleKeyDown,
		handleMarkerKeyDown,
		set currentView(value: MapWithMarkersView) { currentView = value; },
		set searchQuery(value: string) { searchQuery = value; },
		set isDragging(value: boolean) { isDragging = value; },
		set dragStart(value: { x: number; y: number }) { dragStart = value; },
		set mapOffset(value: { x: number; y: number }) { mapOffset = value; },
		set hoveredMarker(value: string | null) { hoveredMarker = value; }
	};
}

export default createMapWithMarkersState;
