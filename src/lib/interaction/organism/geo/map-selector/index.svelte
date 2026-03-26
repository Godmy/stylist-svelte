<script lang="ts">
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';
  import { Icon as BaseIcon } from '$stylist';
const MapPin = 'map-pin';
const Search = 'search';
const Navigation = 'navigation';
const Plus = 'plus';
const Minus = 'minus';
const RotateCcw = 'rotate-ccw';

  import { Button, InputField } from '$stylist';

  type MapProvider = 'google' | 'osm' | 'mapbox' | 'here' | 'tomtom';

  type Location = {
    id: string;
    name: string;
    latitude: number;
    longitude: number;
    description?: string;
    metadata?: Record<string, any>;
  };

  type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    locations: Location[];
    initialCenter?: { lat: number; lng: number };
    initialZoom?: number;
    provider?: MapProvider;
    apiKey?: string;
    showSearch?: boolean;
    showZoomControls?: boolean;
    showCurrentLocation?: boolean;
    showMarkers?: boolean;
    enableMarkerClustering?: boolean;
    maxZoom?: number;
    minZoom?: number;
    class?: string;
    mapClass?: string;
    searchClass?: string;
    controlsClass?: string;
    onLocationSelect?: (location: Location) => void;
    onMapClick?: (coordinates: { lat: number; lng: number }) => void;
    onMarkerClick?: (location: Location) => void;
    height?: string;
    width?: string;
  };

  let {
    locations = [],
    initialCenter = { lat: 51.505, lng: -0.09 }, // London as default
    initialZoom = 10,
    provider = 'osm',
    apiKey,
    showSearch = true,
    showZoomControls = true,
    showCurrentLocation = true,
    showMarkers = true,
    enableMarkerClustering = false,
    maxZoom = 18,
    minZoom = 1,
    class: hostClass = '',
    mapClass = '',
    searchClass = '',
    controlsClass = '',
    onLocationSelect,
    onMapClick,
    onMarkerClick,
    height = '400px',
    width = '100%',
    ...restProps
  }: Props = $props();

  let currentCenter = $state({ ...initialCenter });
  let currentZoom = $state(initialZoom);
  let searchQuery = $state('');
  let isDragging = $state(false);
  let dragStart = $state({ x: 0, y: 0 });
  let mapOffset = $state({ x: 0, y: 0 });

  $effect(() => {
    currentCenter = { ...initialCenter };
    currentZoom = initialZoom;
  });

  function handleSearch() {
    // In a real implementation, this would connect to geocoding services
    console.log(`Searching for: ${searchQuery}`);
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
    currentCenter = { ...initialCenter };
    currentZoom = initialZoom;
    mapOffset = { x: 0, y: 0 };
  }

  function handleCurrentLocation() {
    // In a real app, this would use the Geolocation API
    // For demo, we'll just center on a default location
    currentCenter = { lat: 51.505, lng: -0.09 };
    currentZoom = 15;
  }

  function handleMapClick(e: MouseEvent) {
    // Calculate where the click happened in terms of map coordinates
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // This is a simplified calculation - a real map implementation would use proper projection formulas
    const offsetX = (x - rect.width / 2 - mapOffset.x) / Math.pow(2, currentZoom - 10);
    const offsetY = (y - rect.height / 2 - mapOffset.y) / Math.pow(2, currentZoom - 10);

    const lat = currentCenter.lat - offsetY * 0.01;
    const lng = currentCenter.lng + offsetX * 0.01;

    onMapClick?.({ lat, lng });
  }

  function handleMarkerClick(location: Location, e: Event) {
    e.stopPropagation(); // Prevent triggering map click
    onMarkerClick?.(location);
    onLocationSelect?.(location);
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

  // Calculate marker positions based on current view
  function calculateMarkerPosition(location: Location) {
    // Calculate position relative to center of map view
    const offsetX = (location.longitude - currentCenter.lng) / 0.01 * Math.pow(2, currentZoom - 10);
    const offsetY = (currentCenter.lat - location.latitude) / 0.01 * Math.pow(2, currentZoom - 10);

    const x = 50 + offsetX + mapOffset.x; // 50% represents the center of the container
    const y = 50 + offsetY + mapOffset.y;

    return { x, y };
  }
</script>

<div class={`c-map-selector ${hostClass}`} style={`width: ${width}; height: ${height};`} {...restProps}>
  {#if showSearch}
    <div class="relative z-[var(--z-index-docked)] mb-4">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <BaseIcon name={Search} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
      </div>
      <input
        type="text"
        class={`block w-full pl-10 pr-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${searchClass}`}
        placeholder="Search for places..."
        value={searchQuery}
        oninput={(e) => searchQuery = (e.target as HTMLInputElement).value}
        onkeypress={(e) => e.key === 'Enter' && handleSearch()}
      />
      <button
        class="absolute inset-y-0 right-0 px-3 flex items-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
        onclick={handleSearch}
      >
        <BaseIcon name={Search} class="h-5 w-5" />
      </button>
    </div>
  {/if}

  <div class={`relative rounded-lg overflow-hidden border border-[var(--color-border-primary)] ${mapClass}`}>
    <!-- Map visualization -->
    <div
      class="w-full h-full bg-[var(--color-primary-50)] relative"
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
      <!-- Simplified map representation with grid -->
      <div class="absolute inset-0 [background-image:var(--gradient-forest)]">
        <!-- Grid lines to simulate map -->
        {#each Array(10) as _, i}
          <div
            class="absolute w-full h-px bg-[var(--color-background-tertiary)] opacity-[var(--opacity-30)]"
            style={`top: ${i * 10}%`}
          ></div>
          <div
            class="absolute h-full w-px bg-[var(--color-background-tertiary)] opacity-[var(--opacity-30)]"
            style={`left: ${i * 10}%`}
          ></div>
        {/each}

        <!-- Water bodies simulation -->
        <div class="absolute w-1/3 h-1/4 bg-[var(--color-primary-200)] rounded-lg opacity-[var(--opacity-50)]" style="top: 20%; left: 30%;"></div>
        <div class="absolute w-1/5 h-1/5 bg-[var(--color-primary-200)] rounded-full opacity-[var(--opacity-50)]" style="top: 60%; left: 20%;"></div>

        <!-- Roads simulation -->
        <div class="absolute w-full h-1 bg-[var(--color-neutral-400)] opacity-[var(--opacity-40)]" style="top: 30%;"></div>
        <div class="absolute h-full w-1 bg-[var(--color-neutral-400)] opacity-[var(--opacity-40)]" style="left: 40%;"></div>

        <!-- Parks/green spaces -->
        <div class="absolute w-1/4 h-1/6 bg-[var(--color-success-200)] rounded opacity-[var(--opacity-60)]" style="top: 50%; left: 60%;"></div>
      </div>

      <!-- Center marker -->
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[var(--color-danger-500)] rounded-full border-2 border-[var(--color-background-primary)] shadow-lg"
        style="z-index: var(--z-index-docked);"
      ></div>

      <!-- Location markers -->
      {#if showMarkers}
        {#each locations as location}
          {@const pos = calculateMarkerPosition(location)}
          <div
            class="absolute w-6 h-6 bg-[var(--color-primary-500)] rounded-full border-2 border-[var(--color-background-primary)] shadow-md cursor-pointer transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-[var(--color-text-inverse)] text-xs"
            style={`left: ${pos.x}%; top: ${pos.y}%; z-index: var(--z-index-layer20);`}
            onclick={(e) => handleMarkerClick(location, e)}
            title={location.name}
            role="button"
            tabindex={0}
            onkeydown={(e: KeyboardEvent) => {
              if (e.key === 'Enter' || e.key === ' ') handleMarkerClick(location, e);
            }}
          >
            <BaseIcon name={MapPin} class="h-4 w-4" />
            {#if pos.y > 50}  <!-- Show label below if marker is in upper half of map -->
              <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-[var(--color-background-primary)] shadow-md rounded px-2 py-1 text-xs whitespace-nowrap">
                {location.name}
              </div>
            {/if}
          </div>
        {/each}
      {/if}
    </div>

    <!-- Map controls -->
    {#if showZoomControls}
      <div class={`absolute right-4 top-4 flex flex-col space-y-2 ${controlsClass}`}>
        <Button
          variant="secondary"
          size="sm"
          onclick={handleZoomIn}
          aria-label="Zoom in"
        >
          <BaseIcon name={Plus} class="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onclick={handleZoomOut}
          aria-label="Zoom out"
        >
          <BaseIcon name={Minus} class="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onclick={handleResetView}
          aria-label="Reset view"
        >
          <BaseIcon name={RotateCcw} class="h-4 w-4" />
        </Button>
      </div>
    {/if}

    {#if showCurrentLocation}
      <div class="absolute bottom-4 right-4">
        <Button
          variant="secondary"
          size="sm"
          onclick={handleCurrentLocation}
          aria-label="Show current location"
        >
          <BaseIcon name={Navigation} class="h-4 w-4" />
        </Button>
      </div>
    {/if}

    <!-- Map info -->
    <div class="absolute bottom-4 left-4 bg-[var(--color-background-primary)]/80 backdrop-blur-sm rounded-md px-3 py-2 text-sm">
      <div>Zoom: {currentZoom}</div>
      <div>Center: {currentCenter.lat.toFixed(4)}, {currentCenter.lng.toFixed(4)}</div>
    </div>
  </div>
</div>











