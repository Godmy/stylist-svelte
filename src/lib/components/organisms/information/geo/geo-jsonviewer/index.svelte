<script lang="ts">
  import type { IGeoJSONViewerProps, GeoJsonLayer, MapView, GeoJsonFeature, GeoJsonFeatureCollection } from '$lib/design-system/props/geo-jsonviewer';
  import { GeoJSONViewerStyleManager } from '$lib/design-system/styles/geo-jsonviewer';
  import { Button } from '$lib/components/atoms';
  import { Globe, Layers, Info, Download, Upload, Plus, Minus, RotateCcw, X } from 'lucide-svelte';

  let {
    geojsonData,
    layers = [],
    class: hostClass = '',
    mapClass = '',
    initialView = { center: { lat: 51.505, lng: -0.09 }, zoom: 10 }, // London as default
    showControls = true,
    showLayers = true,
    showLegend = true,
    maxZoom = 18,
    minZoom = 1,
    mapType = 'roadmap',
    onFeatureClick,
    onMapClick,
    onDataChange,
    ...restProps
  }: IGeoJSONViewerProps = $props();

  let currentLayers = $state<GeoJsonLayer[]>([]);
  let currentView = $state<MapView>({ ...initialView });
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
        color: '#3B82F6',
        opacity: 0.8
      }];
    } else if (layers.length > 0) {
      currentLayers = [...layers];
    }
  });

  function handleMapClick(e: MouseEvent) {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Convert pixel coordinates to lat/lng (simplified)
    // In a real implementation, this would use proper coordinate transformation
    const lat = currentView.center.lat - (y - rect.height / 2) * 0.00001 * Math.pow(2, 20 - currentView.zoom);
    const lng = currentView.center.lng + (x - rect.width / 2) * 0.00001 * Math.pow(2, 20 - currentView.zoom);

    onMapClick?.({ lat, lng });
  }

  function handleFeatureClick(feature: GeoJsonFeature, e: MouseEvent) {
    e.stopPropagation();
    selectedFeature = feature;
    onFeatureClick?.(feature);
  }

  function handleZoomIn() {
    if (currentView.zoom < maxZoom) {
      currentView = { ...currentView, zoom: currentView.zoom + 1 };
    }
  }

  function handleZoomOut() {
    if (currentView.zoom > minZoom) {
      currentView = { ...currentView, zoom: currentView.zoom - 1 };
    }
  }

  function handleResetView() {
    currentView = { ...initialView };
    mapOffset = { x: 0, y: 0 };
  }

  function toggleLayerVisibility(layerId: string) {
    currentLayers = currentLayers.map(layer =>
      layer.id === layerId ? { ...layer, visible: !layer.visible } : layer
    );
  }

  function changeLayerOpacity(layerId: string, opacity: number) {
    currentLayers = currentLayers.map(layer =>
      layer.id === layerId ? { ...layer, opacity } : layer
    );
  }

  function handleLayerDragStart(e: DragEvent, index: number) {
    e.dataTransfer?.setData('text/plain', index.toString());
  }

  // Calculate pixel position for coordinates
  function calculatePixelPosition(lng: number, lat: number) {
    const x = 50 + ((lng - currentView.center.lng) * 1000 * Math.pow(2, currentView.zoom - 10));
    const y = 50 + ((currentView.center.lat - lat) * 1000 * Math.pow(2, currentView.zoom - 10));
    return { x, y };
  }

  // Load GeoJSON from file
  async function loadFromFile(file: File) {
    try {
      const text = await file.text();
      const parsed = JSON.parse(text) as GeoJsonFeatureCollection;

      // Validate GeoJSON
      if (parsed.type !== 'FeatureCollection' || !Array.isArray(parsed.features)) {
        throw new Error('Invalid GeoJSON format');
      }

      currentLayers = [{
        id: 'uploaded-data',
        name: file.name.replace('.geojson', ''),
        data: parsed,
        visible: true,
        color: '#3B82F6',
        opacity: 0.8
      }];

      onDataChange?.(parsed);
    } catch (error) {
      console.error('Error loading GeoJSON file:', error);
      alert('Invalid GeoJSON file. Please check the format and try again.');
    }
  }

  // Handle file upload
  function handleFileUpload(e: Event) {
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

  // Get derived styles
  const hostClasses = $derived(GeoJSONViewerStyleManager.getHostClasses({ class: hostClass, ...restProps }));
  const mapContainerClasses = $derived(GeoJSONViewerStyleManager.getMapContainerClasses({ mapClass, ...restProps }));
  const mapContainerStyles = $derived(GeoJSONViewerStyleManager.getMapContainerStyles());
</script>

<div class={hostClasses} {...restProps}>
  <div class="flex flex-col h-full">
    {#if showLayers}
      <!-- Layer control panel -->
      <div class={GeoJSONViewerStyleManager.getLayersPanelClasses()} style={GeoJSONViewerStyleManager.getLayersPanelStyles()}>
        <div class="flex justify-between items-center mb-3">
          <h3 class="text-lg font-medium">Layers</h3>
          <label
            class={GeoJSONViewerStyleManager.getFileUploadButtonClasses()}
            style={GeoJSONViewerStyleManager.getFileUploadButtonStyles()}
            onmouseover={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.cssText = `${GeoJSONViewerStyleManager.getFileUploadButtonStyles()}${GeoJSONViewerStyleManager.getFileUploadButtonHoverStyles()}`;
            }}
            onmouseout={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.cssText = GeoJSONViewerStyleManager.getFileUploadButtonStyles();
            }}
            onfocus={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.cssText = `${GeoJSONViewerStyleManager.getFileUploadButtonStyles()}${GeoJSONViewerStyleManager.getFileUploadButtonHoverStyles()}`;
            }}
            onblur={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.cssText = GeoJSONViewerStyleManager.getFileUploadButtonStyles();
            }}
          >
            <Upload class="h-4 w-4 inline mr-1" />
            Upload GeoJSON
            <input
              type="file"
              class="hidden"
              accept=".geojson,.json"
              onchange={handleFileUpload}
            />
          </label>
        </div>

        <div class="space-y-2 max-h-60 overflow-y-auto">
          {#each currentLayers as layer}
            <div class={GeoJSONViewerStyleManager.getLayerControlItemClasses()} style={GeoJSONViewerStyleManager.getLayerControlItemStyles()}>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  checked={layer.visible}
                  onchange={() => toggleLayerVisibility(layer.id)}
                  class={GeoJSONViewerStyleManager.getLayerVisibilityCheckboxClasses()}
                  style={GeoJSONViewerStyleManager.getLayerVisibilityCheckboxStyles()}
                />
                <span class="ml-2 text-sm">{layer.name}</span>
              </div>

              <div class="flex items-center space-x-2">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={layer.opacity}
                  oninput={(e) => changeLayerOpacity(layer.id, parseFloat((e.target as HTMLInputElement).value))}
                  class={GeoJSONViewerStyleManager.getLayerOpacitySliderClasses()}
                />
                <div class="w-4 h-4 rounded-full" style={`background-color: ${layer.color}`} title={layer.color}></div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}

    <div class={mapContainerClasses} style={mapContainerStyles}>
      <!-- Map container -->
      <div
        class={`w-full h-full ${mapClass}`}
        onclick={handleMapClick}
        style="cursor: grab; \${isDragging ? 'cursor: grabbing' : ''}"
        role="button"
        tabindex={0}
        onkeydown={(e: KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') handleMapClick(e as unknown as MouseEvent);
        }}
      >
        <svg
          width="100%"
          height="100%"
          class={GeoJSONViewerStyleManager.getSvgClasses()}
          viewBox="0 0 100 100"
        >
          <!-- Grid pattern to simulate map background -->
          <defs>
            <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
              <path d="M 5 0 L 0 0 0 5" fill="none" stroke="var(--color-border-default)" stroke-width="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          <!-- Render each visible layer -->
          {#each currentLayers as layer}
            {#if layer.visible}
              {#each layer.data.features as feature}
                {@const geometry = feature.geometry}

                <!-- For points -->
                {#if geometry.type === 'Point'}
                  {@const [lng, lat] = geometry.coordinates as [number, number]}
                  {@const position = calculatePixelPosition(lng, lat)}
                  <circle
                    cx={position.x}
                    cy={position.y}
                    r={6}
                    style={GeoJSONViewerStyleManager.getPointStyles(layer.color, layer.opacity)}
                    class={GeoJSONViewerStyleManager.getGeometryElementClasses()}
                    onclick={(e) => handleFeatureClick(feature, e)}
                    role="button"
                    tabindex={-1}
                    onkeydown={(e: KeyboardEvent) => {
                      if (e.key === 'Enter' || e.key === ' ') handleFeatureClick(feature, e as unknown as MouseEvent);
                    }}
                  />
                {/if}

                <!-- For polygons -->
                {#if geometry.type === 'Polygon'}
                  {#each geometry.coordinates as ring}
                    {@const points = ring.map(([lng, lat]: [number, number]) => {
                      const pos = calculatePixelPosition(lng, lat);
                      return `${pos.x},${pos.y}`;
                    }).join(' ')}

                    <polygon
                      points={points}
                      style={GeoJSONViewerStyleManager.getPolygonStyles(layer.color, layer.opacity)}
                      class={GeoJSONViewerStyleManager.getGeometryElementClasses()}
                      onclick={(e) => handleFeatureClick(feature, e)}
                      role="button"
                      tabindex={-1}
                      onkeydown={(e: KeyboardEvent) => {
                        if (e.key === 'Enter' || e.key === ' ') handleFeatureClick(feature, e as unknown as MouseEvent);
                      }}
                    />
                  {/each}
                {/if}

                <!-- For lines -->
                {#if geometry.type === 'LineString'}
                  {@const points = geometry.coordinates.map(([lng, lat]) => {
                    const pos = calculatePixelPosition(lng, lat);
                    return `${pos.x},${pos.y}`;
                  }).join(' ')}

                  <polyline
                    points={points}
                    fill="none"
                    style={GeoJSONViewerStyleManager.getLineStringStyles(layer.color, layer.opacity)}
                    class={GeoJSONViewerStyleManager.getGeometryElementClasses()}
                    onclick={(e) => handleFeatureClick(feature, e)}
                    role="button"
                    tabindex={-1}
                    onkeydown={(e: KeyboardEvent) => {
                      if (e.key === 'Enter' || e.key === ' ') handleFeatureClick(feature, e as unknown as MouseEvent);
                    }}
                  />
                {/if}
              {/each}
            {/if}
          {/each}
        </svg>
      </div>

      <!-- Map controls -->
      {#if showControls}
        <div class="absolute right-4 top-4 flex flex-col space-y-2">
          <Button variant="secondary" size="sm" onclick={handleZoomIn}>
            <Plus class="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="sm" onclick={handleZoomOut}>
            <Minus class="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="sm" onclick={handleResetView}>
            <RotateCcw class="h-4 w-4" />
          </Button>
        </div>
      {/if}
    </div>

    {#if selectedFeature && selectedFeature.properties}
      <!-- Feature details panel -->
      <div class={GeoJSONViewerStyleManager.getFeatureInfoPanelClasses()} style={GeoJSONViewerStyleManager.getFeatureInfoPanelStyles()}>
        <div class="flex justify-between items-start">
          <h3 class="text-lg font-medium">Selected Feature</h3>
          <Button variant="ghost" size="sm" onclick={() => selectedFeature = null}>
            <X class="h-4 w-4" />
          </Button>
        </div>

        <div class="mt-3 grid grid-cols-2 gap-2">
          {#each Object.entries(selectedFeature.properties) as [key, value]}
            <div class="flex flex-col">
              <span class="text-xs text-gray-500">{key}</span>
              <span class="text-sm">{String(value)}</span>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</div>
