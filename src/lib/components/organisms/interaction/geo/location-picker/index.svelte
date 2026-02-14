<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { MapPin, Search, Crosshair, Plus, Minus, RotateCcw } from 'lucide-svelte';
  import { Button, InputField } from '$stylist/components/atoms';

  type Coordinates = {
    lat: number;
    lng: number;
  };

  type MapMarker = {
    id: string;
    coordinates: Coordinates;
    title?: string;
    description?: string;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    center?: Coordinates;
    zoom?: number;
    markers?: MapMarker[];
    selectedMarker?: string;
    class?: string;
    mapClass?: string;
    onLocationSelect?: (coordinates: Coordinates) => void;
    onMarkerClick?: (marker: MapMarker) => void;
    onMapClick?: (coordinates: Coordinates) => void;
    showSearch?: boolean;
    showCoordinates?: boolean;
    showCurrentLocation?: boolean;
    disableInteraction?: boolean;
    maxZoom?: number;
    minZoom?: number;
  };

  let {
    center = { lat: 51.505, lng: -0.09 }, // London as default
    zoom = 13,
    markers = [],
    selectedMarker,
    class: hostClass = '',
    mapClass = '',
    onLocationSelect,
    onMarkerClick,
    onMapClick,
    showSearch = true,
    showCoordinates = true,
    showCurrentLocation = true,
    disableInteraction = false,
    maxZoom = 18,
    minZoom = 1,
    ...restProps
  }: Props = $props();

  let currentCenter = $state<Coordinates>({ ...center });
  let currentZoom = $state(zoom);
  let searchQuery = $state('');
  let mapDimensions = $state({ width: 600, height: 400 });

  // Convert coordinates to pixel position for the simulated map
  function coordsToPixel(coords: Coordinates, containerWidth: number, containerHeight: number): { x: number; y: number } {
    // This is a simplified projection for demonstration
    // A real implementation would use proper map projections
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;

    // Approximate conversion (this is not a real projection)
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

  function handleMapClick(e: MouseEvent) {
    if (disableInteraction) return;

    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const coords = pixelToCoords(x, y, rect.width, rect.height);
    onMapClick?.(coords);
  }

  function handleMarkerClick(marker: MapMarker) {
    onMarkerClick?.(marker);
  }

  function handleZoomIn() {
    if (currentZoom < maxZoom) {
      currentZoom += 1;
    }
  }

  function handleZoomOut() {
    if (currentZoom > minZoom) {
      currentZoom -= 1;
    }
  }

  function handleResetView() {
    currentCenter = { ...center };
    currentZoom = zoom;
  }

  function handleCurrentLocation() {
    // In a real app, this would use Geolocation API
    // For demo purposes, we'll just center on default location
    currentCenter = { ...center };
    currentZoom = 15;
  }

  function handleSearch() {
    // In a real app, this would geocode the search query
    // For demo purposes, we'll just simulate a search result
    console.log(`Searching for: ${searchQuery}`);
    // Simulate centering on a location
    currentCenter = { lat: currentCenter.lat + 0.01, lng: currentCenter.lng + 0.01 };
  }

  // Update map dimensions after the component is mounted
  $effect(() => {
    const mapElement = document.querySelector(`.${mapClass}`);
    if (mapElement) {
      mapDimensions = {
        width: (mapElement as HTMLElement).clientWidth,
        height: (mapElement as HTMLElement).clientHeight
      };
    }
  });
</script>

<div class={`c-location-picker ${hostClass}`} {...restProps}>
  {#if showSearch}
    <div class="relative mb-4">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search class="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder="Search for a place..."
        value={searchQuery}
        oninput={(e) => searchQuery = (e.target as HTMLInputElement).value}
        onkeypress={(e) => e.key === 'Enter' && handleSearch()}
      />
      <button
        class="absolute inset-y-0 right-0 pr-3 flex items-center"
        onclick={handleSearch}
      >
        <Search class="h-5 w-5 text-gray-400 hover:text-gray-600" />
      </button>
    </div>
  {/if}

  <div class="relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
    <div
      class={`relative bg-blue-50 cursor-crosshair ${mapClass}`}
      style={`width: 100%; height: 400px;`}
      onclick={handleMapClick}
      role="button"
      tabindex={0}
      onkeydown={(e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') handleMapClick(e as unknown as MouseEvent);
      }}
    >
      <!-- Simplified map representation -->
      <div class="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100">
        <!-- Grid lines to simulate map -->
        {#each Array(10).fill(0) as _, i}
          <div
            class="absolute w-full h-px bg-gray-300 opacity-30"
            style={`top: ${i * 10}%`}
          ></div>
          <div
            class="absolute h-full w-px bg-gray-300 opacity-30"
            style={`left: ${i * 10}%`}
          ></div>
        {/each}

        <!-- Center marker -->
        <div
          class="absolute w-3 h-3 bg-red-500 rounded-full border-2 border-white transform -translate-x-1/2 -translate-y-1/2"
          style={`left: 50%; top: 50%;`}
        ></div>
      </div>

      <!-- Markers -->
      {#each markers as marker}
        {@const pos = coordsToPixel(marker.coordinates, mapDimensions.width, mapDimensions.height)}
        <div
          class={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer ${
            selectedMarker === marker.id ? 'z-10' : 'z-0'
          }`}
          style={`left: ${pos.x}px; top: ${pos.y}px;`}
          onclick={(e) => {
            e.stopPropagation();
            handleMarkerClick(marker);
          }}
          role="button"
          tabindex={0}
          onkeydown={(e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.stopPropagation();
              handleMarkerClick(marker);
            }
          }}
        >
          <MapPin
            class={`h-6 w-6 ${
              selectedMarker === marker.id
                ? 'text-red-600 fill-current scale-125'
                : 'text-blue-600 fill-current'
            }`}
          />
          {#if selectedMarker === marker.id || marker.title}
            <div class="absolute left-1/2 transform -translate-x-1/2 -top-8 bg-white shadow-md rounded px-2 py-1 text-xs whitespace-nowrap">
              {marker.title || `Marker ${marker.id}`}
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <!-- Map controls -->
    <div class="absolute right-4 top-4 flex flex-col space-y-2">
      <Button variant="secondary" size="sm" onclick={handleZoomIn} disabled={currentZoom >= maxZoom}>
        <Plus class="h-4 w-4" />
      </Button>
      <Button variant="secondary" size="sm" onclick={handleZoomOut} disabled={currentZoom <= minZoom}>
        <Minus class="h-4 w-4" />
      </Button>
      <Button variant="secondary" size="sm" onclick={handleResetView}>
        <RotateCcw class="h-4 w-4" />
      </Button>
      {#if showCurrentLocation}
        <Button variant="secondary" size="sm" onclick={handleCurrentLocation}>
          <Crosshair class="h-4 w-4" />
        </Button>
      {/if}
    </div>

    <!-- Coordinates display -->
    {#if showCoordinates}
      <div class="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-md px-3 py-2 text-sm">
        <div>Lat: {currentCenter.lat.toFixed(4)}</div>
        <div>Lng: {currentCenter.lng.toFixed(4)}</div>
        <div>Zoom: {currentZoom}</div>
      </div>
    {/if}
  </div>
</div>




