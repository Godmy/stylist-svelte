<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { MapPin, Search, Locate, Plus, Minus, RotateCcw } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';
  import Input from '../../atoms/input/base/Input.svelte';

  type Location = {
    latitude: number;
    longitude: number;
    address?: string;
    name?: string;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    initialLocation?: Location;
    showSearch?: boolean;
    showCurrentLocation?: boolean;
    showCoordinates?: boolean;
    class?: string;
    mapClass?: string;
    searchClass?: string;
    controlsClass?: string;
    onLocationSelect?: (location: Location) => void;
    onCoordinateChange?: (coordinates: { latitude: number; longitude: number }) => void;
    height?: string;
    width?: string;
    zoom?: number;
    maxZoom?: number;
    minZoom?: number;
  };

  let {
    initialLocation = {
      latitude: 51.505,
      longitude: -0.09,
      address: 'London, UK',
      name: 'London'
    },
    showSearch = true,
    showCurrentLocation = true,
    showCoordinates = true,
    class: hostClass = '',
    mapClass = '',
    searchClass = '',
    controlsClass = '',
    onLocationSelect,
    onCoordinateChange,
    height = '400px',
    width = '100%',
    zoom = 13,
    maxZoom = 18,
    minZoom = 1,
    ...restProps
  }: Props = $props();

  let currentLocation = $state<Location>({ ...initialLocation });
  let searchQuery = $state('');
  let selectedLocation = $state<Location | null>(null);
  let mapZoom = $state(zoom);

  $effect(() => {
    currentLocation = { ...initialLocation };
  });

  function handleSearch() {
    // In a real app, this would connect to a geocoding service
    console.log(`Searching for: ${searchQuery}`);
    // For demo purposes, we'll just center on the initial location
    selectedLocation = currentLocation;
    onLocationSelect?.(currentLocation);
  }

  function handleCurrentLocation() {
    // In a real app, this would use the Geolocation API
    // For demo, we'll just center on the initial location
    selectedLocation = currentLocation;
    onLocationSelect?.(currentLocation);
  }

  function handleMapClick(e: MouseEvent) {
    // Calculate where the click happened in terms of map coordinates
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // This is a simplified calculation - a real map implementation would use proper projection formulas
    // For this demo, we'll just adjust the coordinates proportionally to the click position
    const latChange = (rect.height / 2 - y) * 0.001;  // Adjust these values based on map projection
    const lngChange = (x - rect.width / 2) * 0.001;

    const newLocation = {
      latitude: currentLocation.latitude + latChange,
      longitude: currentLocation.longitude + lngChange,
    };

    currentLocation = newLocation;
    onCoordinateChange?.(newLocation);
    onLocationSelect?.(newLocation);
  }

  function handleZoomIn() {
    if (mapZoom < maxZoom) {
      mapZoom += 1;
    }
  }

  function handleZoomOut() {
    if (mapZoom > minZoom) {
      mapZoom -= 1;
    }
  }

  function handleResetView() {
    currentLocation = { ...initialLocation };
    mapZoom = zoom;
  }

  function formatCoordinate(coord: number, isLatitude: boolean): string {
    const absolute = Math.abs(coord);
    const degrees = Math.floor(absolute);
    const minutes = Math.floor((absolute - degrees) * 60);
    const seconds = (((absolute - degrees) * 60) - minutes) * 60;

    const direction = isLatitude
      ? (coord >= 0 ? 'N' : 'S')
      : (coord >= 0 ? 'E' : 'W');

    return `${degrees}° ${minutes}' ${seconds.toFixed(2)}" ${direction}`;
  }
</script>

<div class={`geo-location-picker ${hostClass}`} style={`width: ${width};`} {...restProps}>
  <div class="mb-4">
    <h3 class="text-lg font-medium text-gray-900 flex items-center">
      <MapPin class="h-5 w-5 mr-2 text-blue-500" />
      Select Location
    </h3>
    <p class="text-sm text-gray-500">Click on the map to select a location</p>
  </div>

  {#if showSearch}
    <div class="mb-4 relative">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search class="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        class={`block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${searchClass}`}
        placeholder="Search for a place..."
        value={searchQuery}
        oninput={(e) => searchQuery = (e.target as HTMLInputElement).value}
        onkeypress={(e) => e.key === 'Enter' && handleSearch()}
      />
      <button
        class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
        onclick={handleSearch}
      >
        <Search class="h-5 w-5" />
      </button>
    </div>
  {/if}

  <div class="relative rounded-lg overflow-hidden border border-gray-300" style={`height: ${height}`}>
    <div
      class={`w-full h-full bg-blue-50 relative ${mapClass}`}
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
        {#each Array(10) as _, i}
          <div
            class="absolute w-full h-px bg-gray-300 opacity-30"
            style={`top: ${i * 10}%`}
          ></div>
          <div
            class="absolute h-full w-px bg-gray-300 opacity-30"
            style={`left: ${i * 10}%`}
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

      <!-- Current center marker -->
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        style="margin-top: -12px; margin-left: -12px;"
      >
        <div class="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white shadow-lg">
          <MapPin class="h-4 w-4" />
        </div>
      </div>

      <!-- Selected location marker -->
      {#if selectedLocation}
        <div
          class="absolute z-10"
          style={`left: 50%; top: 50%; transform: translate(-50%, -50%); margin-top: -12px; margin-left: -12px;`}
        >
          <div class="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg">
            <MapPin class="h-4 w-4" />
          </div>
        </div>
      {/if}
    </div>

    <!-- Map controls -->
    <div class={`absolute right-4 top-4 flex flex-col space-y-2 ${controlsClass}`}>
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
      <Button
        variant="secondary"
        size="sm"
        onclick={handleResetView}
        aria-label="Reset view"
      >
        <RotateCcw class="h-4 w-4" />
      </Button>

      {#if showCurrentLocation}
        <Button
          variant="secondary"
          size="sm"
          onclick={handleCurrentLocation}
          aria-label="Use current location"
        >
          <Locate class="h-4 w-4" />
        </Button>
      {/if}
    </div>

    <!-- Coordinates display -->
    {#if showCoordinates}
      <div class="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-md px-3 py-2 text-sm">
        <div class="font-medium">Coordinates</div>
        <div class="text-xs text-gray-700">Lat: {currentLocation.latitude.toFixed(6)}</div>
        <div class="text-xs text-gray-700">Lng: {currentLocation.longitude.toFixed(6)}</div>
        <div class="text-xs text-gray-500 mt-1">{formatCoordinate(currentLocation.latitude, true)}, {formatCoordinate(currentLocation.longitude, false)}</div>
      </div>
    {/if}
  </div>

  {#if selectedLocation}
    <div class="mt-4 p-4 bg-gray-50 rounded-lg">
      <h4 class="font-medium text-gray-900">Selected Location</h4>
      <div class="mt-2 space-y-1">
        {#if selectedLocation.name}
          <div class="text-sm text-gray-700"><span class="font-medium">Name:</span> {selectedLocation.name}</div>
        {/if}
        {#if selectedLocation.address}
          <div class="text-sm text-gray-700"><span class="font-medium">Address:</span> {selectedLocation.address}</div>
        {/if}
        <div class="text-sm text-gray-700"><span class="font-medium">Latitude:</span> {selectedLocation.latitude.toFixed(6)}</div>
        <div class="text-sm text-gray-700"><span class="font-medium">Longitude:</span> {selectedLocation.longitude.toFixed(6)}</div>
      </div>
    </div>
  {/if}
</div>
