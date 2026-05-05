import type { SlotGeoJsonLayer as GeoJsonLayer } from '$stylist/geo/interface/slot/geo-json-layer';
import type { SlotMapView as MapView } from '$stylist/geo/interface/slot/map-view';
import type { SlotGeoJsonFeature as GeoJsonFeature } from '$stylist/geo/interface/slot/geo-json-feature';
import type { SlotGeoJsonFeatureCollection as GeoJsonFeatureCollection } from '$stylist/geo/interface/slot/geo-json-feature-collection';
import { GeoJSONViewerStyleManager } from '$stylist/geo/class/style-manager/geo-jsonviewer';
import type { GeoJSONViewerStateProps } from '$stylist/geo/interface/recipe/geo-jsonviewer-state-props';
import { untrack } from 'svelte';

export function createGeoJSONViewerState(props: GeoJSONViewerStateProps) {
	// Props with defaults
	const geojsonData = $derived(props.geojsonData);
	const layers = $derived(props.layers ?? []);
	const initialView = $derived(props.initialView ?? { center: { lat: 51.505, lng: -0.09 }, zoom: 10 });
	const showControls = $derived(props.showControls ?? true);
	const showLayers = $derived(props.showLayers ?? true);
	const showLegend = $derived(props.showLegend ?? true);
	const maxZoom = $derived(props.maxZoom ?? 18);
	const minZoom = $derived(props.minZoom ?? 1);
	const mapType = $derived(props.mapType ?? 'roadmap');

	// SlotState
	let currentLayers = $state<GeoJsonLayer[]>([]);
	let currentView = $state<MapView>({ ...untrack(() => initialView) });
	let selectedFeature: GeoJsonFeature | null = $state(null);
	let mapOffset = $state({ x: 0, y: 0 });
	let isDragging = $state(false);
	let dragStart = $state({ x: 0, y: 0 });

	// Initialize layers
	$effect(() => {
		if (geojsonData) {
			currentLayers = [{
				id: 'default',
				name: 'Default Layer',
				data: geojsonData,
				visible: true,
				color: 'var(--color-primary-500)',
				opacity: 0.8
			}];
		} else if (layers.length > 0) {
			currentLayers = [...layers];
		}
	});

	// Sync view with initialView prop
	$effect(() => {
		currentView = { ...initialView };
		mapOffset = { x: 0, y: 0 };
	});

	// Rest props - extract remaining props
	const restProps = $derived.by(() => {
		const {
			class: _class,
			geojsonData: _geojsonData,
			layers: _layers,
			mapClass: _mapClass,
			initialView: _initialView,
			showControls: _showControls,
			showLayers: _showLayers,
			showLegend: _showLegend,
			maxZoom: _maxZoom,
			minZoom: _minZoom,
			mapType: _mapType,
			onFeatureClick: _onFeatureClick,
			onMapClick: _onMapClick,
			onDataChange: _onDataChange,
			...rest
		} = props;
		return rest;
	});

	// Computed
	const hostClasses = $derived(GeoJSONViewerStyleManager.getHostClasses({ class: props.class ?? '', ...restProps }));
	const mapContainerClasses = $derived(GeoJSONViewerStyleManager.getMapContainerClasses({ mapClass: props.mapClass ?? '', ...restProps }));
	const mapContainerStyles = $derived(GeoJSONViewerStyleManager.getMapContainerStyles());
	const layersPanelClasses = $derived(GeoJSONViewerStyleManager.getLayersPanelClasses());
	const layersPanelStyles = $derived(GeoJSONViewerStyleManager.getLayersPanelStyles());
	const fileUploadButtonClasses = $derived(GeoJSONViewerStyleManager.getFileUploadButtonClasses());
	const fileUploadButtonStyles = $derived(GeoJSONViewerStyleManager.getFileUploadButtonStyles());
	const fileUploadButtonHoverClasses = $derived(GeoJSONViewerStyleManager.getFileUploadButtonClasses());
	const fileUploadButtonHoverStyles = $derived(GeoJSONViewerStyleManager.getFileUploadButtonHoverStyles());
	const layerControlItemClasses = $derived(GeoJSONViewerStyleManager.getLayerControlItemClasses());
	const layerControlItemStyles = $derived(GeoJSONViewerStyleManager.getLayerControlItemStyles());
	const layerVisibilityCheckboxClasses = $derived(GeoJSONViewerStyleManager.getLayerVisibilityCheckboxClasses());
	const layerVisibilityCheckboxStyles = $derived(GeoJSONViewerStyleManager.getLayerVisibilityCheckboxStyles());
	const layerOpacitySliderClasses = $derived(GeoJSONViewerStyleManager.getLayerOpacitySliderClasses());
	const svgClasses = $derived(GeoJSONViewerStyleManager.getSvgClasses());
	const geometryElementClasses = $derived(GeoJSONViewerStyleManager.getGeometryElementClasses());
	const featureInfoPanelClasses = $derived(GeoJSONViewerStyleManager.getFeatureInfoPanelClasses());
	const featureInfoPanelStyles = $derived(GeoJSONViewerStyleManager.getFeatureInfoPanelStyles());

	// Methods
	function handleMapClick(e: MouseEvent): void {
		const target = e.currentTarget as HTMLElement;
		const rect = target.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const lat = currentView.center.lat - (y - rect.height / 2) * 0.00001 * Math.pow(2, 20 - currentView.zoom);
		const lng = currentView.center.lng + (x - rect.width / 2) * 0.00001 * Math.pow(2, 20 - currentView.zoom);

		props.onMapClick?.({ lat, lng });
	}

	function handleFeatureClick(feature: GeoJsonFeature, e: MouseEvent): void {
		e.stopPropagation();
		selectedFeature = feature;
		props.onFeatureClick?.(feature);
	}

	function handleZoomIn(): void {
		if (currentView.zoom < maxZoom) {
			currentView = { ...currentView, zoom: currentView.zoom + 1 };
		}
	}

	function handleZoomOut(): void {
		if (currentView.zoom > minZoom) {
			currentView = { ...currentView, zoom: currentView.zoom - 1 };
		}
	}

	function handleResetView(): void {
		currentView = { ...initialView };
		mapOffset = { x: 0, y: 0 };
	}

	function toggleLayerVisibility(layerId: string): void {
		currentLayers = currentLayers.map(layer =>
			layer.id === layerId ? { ...layer, visible: !layer.visible } : layer
		);
	}

	function changeLayerOpacity(layerId: string, opacity: number): void {
		currentLayers = currentLayers.map(layer =>
			layer.id === layerId ? { ...layer, opacity } : layer
		);
	}

	function handleLayerDragStart(e: DragEvent, index: number): void {
		e.dataTransfer?.setData('text/plain', index.toString());
	}

	function calculatePixelPosition(lng: number, lat: number): { x: number; y: number } {
		const x = 50 + ((lng - currentView.center.lng) * 1000 * Math.pow(2, currentView.zoom - 10));
		const y = 50 + ((currentView.center.lat - lat) * 1000 * Math.pow(2, currentView.zoom - 10));
		return { x, y };
	}

	async function loadFromFile(file: File): Promise<void> {
		try {
			const text = await file.text();
			const parsed = JSON.parse(text) as GeoJsonFeatureCollection;

			if (parsed.type !== 'FeatureCollection' || !Array.isArray(parsed.features)) {
				throw new Error('Invalid GeoJSON format');
			}

			currentLayers = [{
				id: 'uploaded-data',
				name: file.name.replace('.geojson', ''),
				data: parsed,
				visible: true,
				color: 'var(--color-primary-500)',
				opacity: 0.8
			}];

			props.onDataChange?.(parsed);
		} catch (error) {
			console.error('Error loading GeoJSON file:', error);
			alert('Invalid GeoJSON file. Please check the format and try again.');
		}
	}

	function handleFileUpload(e: Event): void {
		const target = e.target as HTMLInputElement;
		if (target.files && target.files.length > 0) {
			const file = target.files[0];
			if (file.type === 'application/json' || file.name.endsWith('.geojson')) {
				loadFromFile(file);
			} else {
				alert('Please upload a valid GeoJSON file (.geojson or .json)');
			}
		}
	}

	function getPointStyles(color: string, opacity: number): string {
		return GeoJSONViewerStyleManager.getPointStyles(color, opacity);
	}

	function getPolygonStyles(color: string, opacity: number): string {
		return GeoJSONViewerStyleManager.getPolygonStyles(color, opacity);
	}

	function getLineStringStyles(color: string, opacity: number): string {
		return GeoJSONViewerStyleManager.getLineStringStyles(color, opacity);
	}

	function handleKeyDown(e: KeyboardEvent, fn: () => void): void {
		if (e.key === 'Enter' || e.key === ' ') fn();
	}

	function handleFeatureKeyDown(feature: GeoJsonFeature, e: KeyboardEvent): void {
		if (e.key === 'Enter' || e.key === ' ') handleFeatureClick(feature, e as unknown as MouseEvent);
	}

	return {
		get geojsonData() { return geojsonData; },
		get layers() { return layers; },
		get initialView() { return initialView; },
		get showControls() { return showControls; },
		get showLayers() { return showLayers; },
		get showLegend() { return showLegend; },
		get maxZoom() { return maxZoom; },
		get minZoom() { return minZoom; },
		get mapType() { return mapType; },
		get currentLayers() { return currentLayers; },
		get currentView() { return currentView; },
		get selectedFeature() { return selectedFeature; },
		get mapOffset() { return mapOffset; },
		get isDragging() { return isDragging; },
		get dragStart() { return dragStart; },
		get hostClasses() { return hostClasses; },
		get mapContainerClasses() { return mapContainerClasses; },
		get mapContainerStyles() { return mapContainerStyles; },
		get layersPanelClasses() { return layersPanelClasses; },
		get layersPanelStyles() { return layersPanelStyles; },
		get fileUploadButtonClasses() { return fileUploadButtonClasses; },
		get fileUploadButtonStyles() { return fileUploadButtonStyles; },
		get fileUploadButtonHoverClasses() { return fileUploadButtonHoverClasses; },
		get fileUploadButtonHoverStyles() { return fileUploadButtonHoverStyles; },
		get layerControlItemClasses() { return layerControlItemClasses; },
		get layerControlItemStyles() { return layerControlItemStyles; },
		get layerVisibilityCheckboxClasses() { return layerVisibilityCheckboxClasses; },
		get layerVisibilityCheckboxStyles() { return layerVisibilityCheckboxStyles; },
		get layerOpacitySliderClasses() { return layerOpacitySliderClasses; },
		get svgClasses() { return svgClasses; },
		get geometryElementClasses() { return geometryElementClasses; },
		get featureInfoPanelClasses() { return featureInfoPanelClasses; },
		get featureInfoPanelStyles() { return featureInfoPanelStyles; },
		get restProps() { return restProps; },
		handleMapClick,
		handleFeatureClick,
		handleZoomIn,
		handleZoomOut,
		handleResetView,
		toggleLayerVisibility,
		changeLayerOpacity,
		handleLayerDragStart,
		calculatePixelPosition,
		handleFileUpload,
		getPointStyles,
		getPolygonStyles,
		getLineStringStyles,
		handleKeyDown,
		handleFeatureKeyDown,
		set currentLayers(value: GeoJsonLayer[]) { currentLayers = value; },
		set currentView(value: MapView) { currentView = value; },
		set selectedFeature(value: GeoJsonFeature | null) { selectedFeature = value; },
		set mapOffset(value: { x: number; y: number }) { mapOffset = value; },
		set isDragging(value: boolean) { isDragging = value; },
		set dragStart(value: { x: number; y: number }) { dragStart = value; }
	};
}

export default createGeoJSONViewerState;
