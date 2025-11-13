<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { Globe, Layers, Info, Download, Upload, Plus, Minus, RotateCcw, X } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';
  import Tooltip from '../tooltips/Tooltip.svelte';

  // Define GeoJSON types
  type GeoJsonObject = {
    type: string;
    properties?: Record<string, any>;
    [key: string]: any;
  };

  type Geometry = {
    type: 'Point' | 'MultiPoint' | 'LineString' | 'MultiLineString' | 'Polygon' | 'MultiPolygon' | 'GeometryCollection';
    coordinates: any[] | any[][];
  };

  type Feature = {
    type: 'Feature';
    geometry: Geometry;
    properties?: Record<string, any>;
  };

  type FeatureCollection = {
    type: 'FeatureCollection';
    features: Feature[];
  };

  type Layer = {
    id: string;
    name: string;
    data: FeatureCollection;
    visible: boolean;
    color: string;
    opacity: number;
  };

  type MapView = {
    center: { lat: number; lng: number };
    zoom: number;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    geojsonData?: FeatureCollection;
    layers?: Layer[];
    class?: string;
    mapClass?: string;
    initialView?: MapView;
    showControls?: boolean;
    showLayers?: boolean;
    showLegend?: boolean;
    maxZoom?: number;
    minZoom?: number;
    mapType?: 'roadmap' | 'satellite' | 'terrain' | 'hybrid';
    onFeatureClick?: (feature: Feature) => void;
    onMapClick?: (coordinates: { lat: number; lng: number }) => void;
    onDataChange?: (data: FeatureCollection) => void;
  };

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
  }: Props = $props();

  let currentLayers = $state<Layer[]>([]);
  let currentView = $state<MapView>({ ...initialView });
  let selectedFeature: Feature | null = $state(null);
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

  function handleFeatureClick(feature: Feature, e: MouseEvent) {
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

  // Render a geometry object
  function renderGeometry(geometry: Geometry, layer: Layer) {
    switch (geometry.type) {
      case 'Point':
        return renderPoint(geometry.coordinates as [number, number], layer);
      case 'LineString':
        return renderLineString(geometry.coordinates as [number, number][], layer);
      case 'Polygon':
        return renderPolygon(geometry.coordinates as [number, number][][], layer);
      case 'MultiPoint':
        return (geometry.coordinates as [number, number][]).map(coord => renderPoint(coord, layer));
      case 'MultiLineString':
        return (geometry.coordinates as [number, number][][]).map(coords => renderLineString(coords, layer));
      case 'MultiPolygon':
        return (geometry.coordinates as [number, number][][][]).map(coords => renderPolygon(coords, layer));
      default:
        return null;
    }
  }

  // Render a point
  function renderPoint(coordinates: [number, number], layer: Layer) {
    const [lng, lat] = coordinates;
    // Convert lat/lng to pixel position (simplified)
    const x = 50 + ((lng - currentView.center.lng) * 1000 * Math.pow(2, currentView.zoom - 10));
    const y = 50 + ((currentView.center.lat - lat) * 1000 * Math.pow(2, currentView.zoom - 10));

    return `
      <circle
        cx="\${x}"
        cy="\${y}"
        r="5"
        fill="\${layer.color}"
        fill-opacity="\${layer.opacity}"
        class="cursor-pointer hover:opacity-90"
      />
    `;
  }

  // Render a line string
  function renderLineString(coordinates: [number, number][], layer: Layer) {
    const points = coordinates.map(([lng, lat]) => {
      const x = 50 + ((lng - currentView.center.lng) * 1000 * Math.pow(2, currentView.zoom - 10));
      const y = 50 + ((currentView.center.lat - lat) * 1000 * Math.pow(2, currentView.zoom - 10));
      return `${x},${y}`;
    }).join(' ');

    return `
      <polyline
        points="\${points}"
        fill="none"
        stroke="\${layer.color}"
        stroke-opacity="\${layer.opacity}"
        stroke-width="2"
        class="cursor-pointer hover:opacity-90"
      />
    `;
  }

  // Render a polygon
  function renderPolygon(coordinates: [number, number][][], layer: Layer) {
    const paths = coordinates.map(ring => {
      const points = ring.map(([lng, lat]) => {
        const x = 50 + ((lng - currentView.center.lng) * 1000 * Math.pow(2, currentView.zoom - 10));
        const y = 50 + ((currentView.center.lat - lat) * 1000 * Math.pow(2, currentView.zoom - 10));
        return `${x},${y}`;
      }).join(' ');

      return `<polygon points="${points}" fill="${layer.color}" fill-opacity="${layer.opacity * 0.5}" stroke="${layer.color}" stroke-opacity="${layer.opacity}" stroke-width="1" class="cursor-pointer hover:opacity-90" />`;
    });

    return paths.join(' ');
  }

  // Load GeoJSON from file
  async function loadFromFile(file: File) {
    try {
      const text = await file.text();
      const parsed = JSON.parse(text) as FeatureCollection;

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
</script>

<div class={`geojson-viewer ${hostClass}`} {...restProps}>
  <div class="flex flex-col h-full">
    {#if showLayers}
      <!-- Layer control panel -->
      <div class="mb-4 p-4 bg-gray-50 rounded-lg">
        <div class="flex justify-between items-center mb-3">
          <h3 class="text-lg font-medium">Layers</h3>
          <label class="relative cursor-pointer bg-white rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
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
            <div class="flex items-center justify-between p-2 bg-white rounded border">
              <div class="flex items-center">
                <input
                  type="checkbox"
                  checked={layer.visible}
                  onchange={() => toggleLayerVisibility(layer.id)}
                  class="h-4 w-4 text-blue-600 rounded"
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
                  class="w-16"
                />
                <div class="w-4 h-4 rounded-full" style={`background-color: ${layer.color}`} title={layer.color}></div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}

    <div class="flex-1 relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
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
          class="overflow-visible"
          viewBox="0 0 100 100"
        >
          <!-- Grid pattern to simulate map background -->
          <defs>
            <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
              <path d="M 5 0 L 0 0 0 5" fill="none" stroke="#ddd" stroke-width="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          <!-- Render each visible layer -->
          {#each currentLayers as layer}
            {#if layer.visible}
              {#each layer.data.features as feature}
                {@const geometry = feature.geometry}
                {@const renderedGeometry = renderGeometry(geometry, layer)}

                <!-- For points -->
                {#if geometry.type === 'Point'}
                  {@const [lng, lat] = geometry.coordinates as [number, number]}
                  {@const x = 50 + ((lng - currentView.center.lng) * 1000 * Math.pow(2, currentView.zoom - 10))}
                  {@const y = 50 + ((currentView.center.lat - lat) * 1000 * Math.pow(2, currentView.zoom - 10))}
                  <circle
                    cx={x}
                    cy={y}
                    r={6}
                    fill={layer.color}
                    fill-opacity={layer.opacity}
                    stroke="white"
                    stroke-width="1"
                    class="cursor-pointer hover:opacity-90 transition-opacity"
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
                  {@const paths = []}
                  {#each geometry.coordinates as ring}
                    {@const points = ring.map(([lng, lat]: [number, number]) => {
                      const x = 50 + ((lng - currentView.center.lng) * 1000 * Math.pow(2, currentView.zoom - 10));
                      const y = 50 + ((currentView.center.lat - lat) * 1000 * Math.pow(2, currentView.zoom - 10));
                      return `${x},${y}`;
                    }).join(' ')}

                    <polygon
                      points={points}
                      fill={layer.color}
                      fill-opacity={layer.opacity * 0.5}
                      stroke={layer.color}
                      stroke-opacity={layer.opacity}
                      stroke-width="1"
                      class="cursor-pointer hover:opacity-90 transition-opacity"
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
                    const x = 50 + ((lng - currentView.center.lng) * 1000 * Math.pow(2, currentView.zoom - 10));
                    const y = 50 + ((currentView.center.lat - lat) * 1000 * Math.pow(2, currentView.zoom - 10));
                    return `\${x},\${y}`;
                  }).join(' ')}

                  <polyline
                    points={points}
                    fill="none"
                    stroke={layer.color}
                    stroke-opacity={layer.opacity}
                    stroke-width="2"
                    class="cursor-pointer hover:opacity-90 transition-opacity"
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
      <div class="mt-4 p-4 bg-white border rounded-lg shadow">
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