<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { MapPin, Navigation, Search, Plus, Minus, RotateCcw, Locate } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';
  import Input from '../../atoms/input/base/Input.svelte';

  type MapMarker = {
    id: string;
    lat: number;
    lng: number;
    title?: string;
    description?: string;
    color?: string;
    size?: 'sm' | 'md' | 'lg';
    icon?: string; // Custom icon identifier
  };

  type MapView = {
    center: { lat: number; lng: number };
    zoom: number;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    markers?: MapMarker[];
    class?: string;
    mapClass?: string;
    markerClass?: string;
    showTooltip?: boolean;
    showSearch?: boolean;
    showZoomControls?: boolean;
    showCurrentLocation?: boolean;
    showScale?: boolean;
    showCompass?: boolean;
    showResetView?: boolean;
    initialView?: MapView;
    maxZoom?: number;
    minZoom?: number;
    mapType?: 'roadmap' | 'satellite' | 'terrain' | 'hybrid';
    onMarkerClick?: (marker: MapMarker) => void;
    onMapClick?: (coordinates: { lat: number; lng: number }) => void;
    onMapMove?: (view: MapView) => void;
    onMapZoom?: (zoom: number) => void;
    currency?: string;
    locale?: string;
  };

  let {
    markers = [],
    class: hostClass = '',
    mapClass = '',
    markerClass = '',
    showTooltip = true,
    showSearch = true,
    showZoomControls = true,
    showCurrentLocation = true,
    showScale = true,
    showCompass = true,
    showResetView = true,
    initialView = { center: { lat: 51.505, lng: -0.09 }, zoom: 13 }, // London as default
    maxZoom = 18,
    minZoom = 1,
    mapType = 'roadmap',
    onMarkerClick,
    onMapClick,
    onMapMove,
    onMapZoom,
    currency = 'USD',
    locale = 'en-US',
    ...restProps
  }: Props = $props();

  let currentView = $state({
    center: { ...initialView.center },
    zoom: initialView.zoom
  });
  let searchQuery = $state('');
  let isDragging = $state(false);
  let dragStart = $state({ x: 0, y: 0 });
  let mapOffset = $state({ x: 0, y: 0 });
  let hoveredMarker: string | null = $state(null);

  function handleMarkerClick(marker: MapMarker, e: Event) {
    e.stopPropagation();
    onMarkerClick?.(marker);
  }

  function handleMapClick(e: MouseEvent) {
    // Calculate where the click happened in terms of map coordinates
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // In a real map implementation, this would use proper projection formulas
    // This is a simplified approximation for demonstration purposes
    const offsetX = (x - rect.width / 2 - mapOffset.x) / Math.pow(2, currentView.zoom - 10) / 10000;
    const offsetY = (y - rect.height / 2 - mapOffset.y) / Math.pow(2, currentView.zoom - 10) / 10000;

    const lat = currentView.center.lat - offsetY;
    const lng = currentView.center.lng + offsetX;

    onMapClick?.({ lat, lng });
  }

  function handleMouseDown(e: MouseEvent) {
    if (e.button !== 0) return; // Only left mouse button
    isDragging = true;
    dragStart = { x: e.clientX, y: e.clientY };
  }

  function handleMouseMove(e: MouseEvent) {
    if (!isDragging) return;

    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;

    mapOffset = {
      x: mapOffset.x + dx,
      y: mapOffset.y + dy
    };

    dragStart = { x: e.clientX, y: e.clientY };
  }

  function handleMouseUp() {
    isDragging = false;
  }

  function handleZoomIn() {
    if (currentView.zoom < maxZoom) {
      currentView = {
        ...currentView,
        zoom: currentView.zoom + 1
      };
      onMapZoom?.(currentView.zoom);
    }
  }

  function handleZoomOut() {
    if (currentView.zoom > minZoom) {
      currentView = {
        ...currentView,
        zoom: currentView.zoom - 1
      };
      onMapZoom?.(currentView.zoom);
    }
  }

  function handleResetView() {
    currentView = { ...initialView };
    mapOffset = { x: 0, y: 0 };
  }

  function handleCurrentLocation() {
    // In a real app, this would use Geolocation API
    // For demo, we'll just center on the initial view
    currentView = { ...initialView };
    mapOffset = { x: 0, y: 0 };
  }

  // Convert lat/lng to pixel position on the map
  function latLngToPixel(lat: number, lng: number, containerWidth: number, containerHeight: number) {
    // Calculate position relative to center of map view
    const offsetX = (lng - currentView.center.lng) * 10000 * Math.pow(2, currentView.zoom - 10);
    const offsetY = (currentView.center.lat - lat) * 10000 * Math.pow(2, currentView.zoom - 10);

    const x = containerWidth / 2 + offsetX + mapOffset.x;
    const y = containerHeight / 2 + offsetY + mapOffset.y;

    return { x, y };
  }

  let mapContainer: HTMLElement;

  function initializeMap() {
    // Set up initial map state
    currentView = { ...initialView };
  }

  $effect(() => {
    initializeMap();
  });
</script>

<div class={`map-with-markers ${hostClass}`} {...restProps}>
  <div class="flex flex-col h-full">
    {#if showSearch}
      <div class="mb-4">
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search class="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Search for places..."
            value={searchQuery}
            oninput={(e) => searchQuery = (e.target as HTMLInputElement).value}
          />
        </div>
      </div>
    {/if}

    <div
      class={`relative rounded-lg overflow-hidden border border-gray-200 ${mapClass}`}
      style="height: 500px;"
      bind:this={mapContainer}
      onclick={handleMapClick}
      onmousedown={handleMouseDown}
      onmousemove={handleMouseMove}
      onmouseup={handleMouseUp}
      onmouseleave={handleMouseUp}
      role="button"
      tabindex={0}
      onkeydown={(e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') handleMapClick(e as unknown as MouseEvent);
      }}
    >
      <!-- Simplified map representation -->
      <div class="absolute inset-0 bg-blue-50">
        <!-- Grid lines to simulate map -->
        {#each Array(20) as _, i}
          <div
            class="absolute w-full h-px bg-gray-300 opacity-20"
            style={`top: ${i * 5}%`}
          ></div>
          <div
            class="absolute h-full w-px bg-gray-300 opacity-20"
            style={`left: ${i * 5}%`}
          ></div>
        {/each}

        <!-- Water bodies simulation -->
        <div class="absolute w-1/3 h-1/4 bg-blue-200 rounded-lg opacity-50" style="top: 20%; left: 30%;"></div>
        <div class="absolute w-1/5 h-1/5 bg-blue-200 rounded-full opacity-50" style="top: 60%; left: 20%;"></div>

        <!-- Roads simulation -->
        <div class="absolute w-full h-1 bg-gray-400 opacity-40" style="top: 30%;"></div>
        <div class="absolute h-full w-1 bg-gray-400 opacity-40" style="left: 40%;"></div>

        <!-- Parks/green spaces -->
        <div class="absolute w-1/4 h-1/6 bg-green-200 rounded opacity-60" style="top: 50%; left: 60%;"></div>
      </div>

      <!-- Map markers -->
      {#each markers as marker}
        {@const pos = latLngToPixel(marker.lat, marker.lng, 100, 100)} <!-- Using placeholder size, will recalculate in effect -->
        <div
          class={`absolute transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer ${markerClass}`}
          style={`left: calc(50% + ${(marker.lng - currentView.center.lng) * 10000 * Math.pow(2, currentView.zoom - 10) + mapOffset.x}px); top: calc(50% + ${(currentView.center.lat - marker.lat) * 10000 * Math.pow(2, currentView.zoom - 10) + mapOffset.y}px);`}
          onclick={(e) => handleMarkerClick(marker, e)}
          onmouseover={() => hoveredMarker = marker.id}
          onmouseout={() => hoveredMarker = null}
          onfocus={() => hoveredMarker = marker.id}
          onblur={() => hoveredMarker = null}
          role="button"
          tabindex={0}
          onkeydown={(e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') handleMarkerClick(marker, e);
          }}
        >
          <div class={`flex flex-col items-center ${hoveredMarker === marker.id ? 'scale-110' : ''} transition-transform`}>
            <div
              class={`rounded-full flex items-center justify-center ${
                marker.size === 'sm' ? 'w-6 h-6' :
                marker.size === 'lg' ? 'w-10 h-10' : 'w-8 h-8'
              } ${
                marker.color || 'bg-blue-500'
              } border-2 border-white shadow-lg`}
            >
              <MapPin class={`${
                marker.size === 'sm' ? 'w-4 h-4' :
                marker.size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'
              } text-white`} />
            </div>

            {#if hoveredMarker === marker.id && marker.title}
              <div class="absolute top-full mt-2 bg-white shadow-lg rounded px-3 py-2 text-sm whitespace-nowrap z-20">
                <div class="font-medium">{marker.title}</div>
                {#if marker.description}
                  <div class="text-gray-600">{marker.description}</div>
                {/if}
              </div>
            {/if}
          </div>
        </div>
      {/each}

      <!-- Map controls -->
      <div class="absolute right-4 top-4 flex flex-col space-y-2">
        {#if showZoomControls}
          <Button
            variant="secondary"
            size="sm"
            onclick={handleZoomIn}
            aria-label="Zoom in"
          >
            <Plus class="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onclick={handleZoomOut}
            aria-label="Zoom out"
          >
            <Minus class="h-4 w-4" />
          </Button>
        {/if}

        {#if showCurrentLocation}
          <Button
            variant="secondary"
            size="sm"
            onclick={handleCurrentLocation}
            aria-label="Current location"
          >
            <Locate class="h-4 w-4" />
          </Button>
        {/if}

        {#if showResetView}
          <Button
            variant="secondary"
            size="sm"
            onclick={handleResetView}
            aria-label="Reset view"
          >
            <RotateCcw class="h-4 w-4" />
          </Button>
        {/if}
      </div>

      <!-- Map info -->
      <div class="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-md px-3 py-2 text-sm">
        {#if showScale}
          <div>Scale: 1:{Math.round(Math.pow(2, 20 - currentView.zoom) * 100)}m</div>
        {/if}
        <div>Zoom: {currentView.zoom}</div>
      </div>
    </div>
  </div>
</div>

<style>
  .map-container {
    position: relative;
    overflow: hidden;
  }

  .map-controls {
    position: absolute;
    z-index: 100;
  }
</style>
