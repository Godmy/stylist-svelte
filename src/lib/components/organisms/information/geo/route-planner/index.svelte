<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Navigation, MapPin, Clock, Car, Route, Plus, Minus, RotateCcw, X } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';

  type Location = {
    id: string;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    arrivalTime?: Date;
    departureTime?: Date;
  };

  type RouteOption = {
    id: string;
    name: string;
    duration: number; // in minutes
    distance: number; // in km
    tolls?: boolean;
    highways?: boolean;
    ecoFriendly?: boolean;
    cost?: number;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    startLocation?: Location;
    endLocation?: Location;
    waypoints?: Location[];
    routeOptions?: RouteOption[];
    selectedRoute?: string;
    showSearch?: boolean;
    showRouteOptions?: boolean;
    showDirections?: boolean;
    showMap?: boolean;
    showTravelMode?: boolean;
    travelModes?: ('driving' | 'walking' | 'cycling' | 'transit')[];
    class?: string;
    mapClass?: string;
    inputClass?: string;
    directionsClass?: string;
    optionClass?: string;
    onRouteCalculated?: (route: RouteOption) => void;
    onRouteSelect?: (routeId: string) => void;
    onLocationChange?: (type: 'start' | 'end' | 'waypoint', location: Location) => void;
    height?: string;
    width?: string;
  };

  let {
    startLocation,
    endLocation,
    waypoints = [],
    routeOptions = [],
    selectedRoute,
    showSearch = true,
    showRouteOptions = true,
    showDirections = true,
    showMap = true,
    showTravelMode = true,
    travelModes = ['driving', 'walking', 'cycling'],
    class: hostClass = '',
    mapClass = '',
    inputClass = '',
    directionsClass = '',
    optionClass = '',
    onRouteCalculated,
    onRouteSelect,
    onLocationChange,
    height = '500px',
    width = '100%',
    ...restProps
  }: Props = $props();

  let selectedStartLocation: Location | null = $state(startLocation || null);
  let selectedEndLocation: Location | null = $state(endLocation || null);
  let selectedWaypoints = $state<Location[]>(waypoints);
  let selectedTravelMode = $state<'driving' | 'walking' | 'cycling' | 'transit'>('driving');
  let searchQuery = $state('');
  let localShowMap = $state(showMap); // РР·РјРµРЅРёР»Рё РЅР°Р·РІР°РЅРёРµ, С‡С‚РѕР±С‹ РёР·Р±РµР¶Р°С‚СЊ РєРѕРЅС„Р»РёРєС‚Р°
  let selectedRouteId = $state(selectedRoute || '');

  // РћР±СЉСЏРІР»СЏРµРј С„СѓРЅРєС†РёРё РґР»СЏ СѓРїСЂР°РІР»РµРЅРёСЏ РјР°СЃС€С‚Р°Р±РѕРј РєР°СЂС‚С‹
  function handleZoomIn() {
    // Р’ СЂРµР°Р»СЊРЅРѕРј РїСЂРёР»РѕР¶РµРЅРёРё СЌС‚Рѕ Р±СѓРґРµС‚ РёР·РјРµРЅСЏС‚СЊ РјР°СЃС€С‚Р°Р± РєР°СЂС‚С‹
    console.log('Zoom in requested');
  }

  function handleZoomOut() {
    // Р’ СЂРµР°Р»СЊРЅРѕРј РїСЂРёР»РѕР¶РµРЅРёРё СЌС‚Рѕ Р±СѓРґРµС‚ РёР·РјРµРЅСЏС‚СЊ РјР°СЃС€С‚Р°Р± РєР°СЂС‚С‹
    console.log('Zoom out requested');
  }

  function handleResetView() {
    // Р’ СЂРµР°Р»СЊРЅРѕРј РїСЂРёР»РѕР¶РµРЅРёРё СЌС‚Рѕ Р±СѓРґРµС‚ СЃР±СЂР°СЃС‹РІР°С‚СЊ РІРёРґ РєР°СЂС‚С‹
    console.log('Reset view requested');
  }

  function formatCurrency(amount?: number) {
    if (amount === undefined) return '';
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  }

  function handleStartLocationChange(location: Location) {
    selectedStartLocation = location;
    onLocationChange?.('start', location);
  }

  function handleEndLocationChange(location: Location) {
    selectedEndLocation = location;
    onLocationChange?.('end', location);
  }

  function handleAddWaypoint() {
    if (searchQuery) {
      // In a real app, this would geocode the search query
      // For demo, we'll simulate a location with random coordinates
      const newWaypoint: Location = {
        id: `wp-${Date.now()}`,
        name: searchQuery,
        address: searchQuery,
        latitude: 51.505 + (Math.random() - 0.5) * 0.1,
        longitude: -0.09 + (Math.random() - 0.5) * 0.1
      };

      selectedWaypoints = [...selectedWaypoints, newWaypoint];
      onLocationChange?.('waypoint', newWaypoint);
      searchQuery = '';
    }
  }

  function handleRemoveWaypoint(index: number) {
    const newWaypoints = [...selectedWaypoints];
    newWaypoints.splice(index, 1);
    selectedWaypoints = newWaypoints;
  }

  function handleRouteSelect(routeId: string) {
    selectedRouteId = routeId;
    onRouteSelect?.(routeId);

    // Find and trigger callback with the selected route
    const route = routeOptions.find(r => r.id === routeId);
    if (route) {
      onRouteCalculated?.(route);
    }
  }

  function handleModeChange(mode: 'driving' | 'walking' | 'cycling' | 'transit') {
    selectedTravelMode = mode;
  }

  function calculateRoute() {
    // In a real app, this would call a routing service
    // For demo, we'll create a sample route
    const demoRoute: RouteOption = {
      id: 'demo-route',
      name: 'Recommended Route',
      duration: Math.floor(Math.random() * 60) + 15, // Random duration between 15-75 minutes
      distance: parseFloat((Math.random() * 20 + 5).toFixed(1)), // Random distance between 5-25 km
      tolls: Math.random() > 0.5,
      highways: Math.random() > 0.3,
      ecoFriendly: Math.random() > 0.7,
      cost: parseFloat((Math.random() * 5 + 1).toFixed(2)) // Random cost between 1-6 units
    };

    routeOptions = [demoRoute];
    onRouteCalculated?.(demoRoute);
  }
</script>

<div class={`route-planner ${hostClass}`} style={`width: ${width};`} {...restProps}>
  <div class="flex flex-col md:flex-row gap-6">
    <!-- Left panel: Inputs and controls -->
    <div class="md:w-1/3 space-y-6">
      <div>
        <h2 class="text-xl font-bold text-gray-900 flex items-center">
          <Route class="h-5 w-5 mr-2 text-blue-500" />
          Plan Your Route
        </h2>
        <p class="text-sm text-gray-500">Enter your start and end locations</p>
      </div>

      <!-- Travel mode selector -->
      {#if showTravelMode}
        <div class="flex space-x-2">
          {#each travelModes as mode}
            <button
              type="button"
              class={`flex-1 px-4 py-2 rounded-md text-sm font-medium ${
                selectedTravelMode === mode
                  ? 'bg-blue-100 text-blue-700 border border-blue-300'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
              onclick={() => handleModeChange(mode)}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
          {/each}
        </div>
      {/if}

      <!-- Location inputs -->
      <div class="space-y-4">
        <div>
          <label for="start-location-input" class="block text-sm font-medium text-gray-700 mb-1">Start Location</label>
          <div class="flex">
            <input
              id="start-location-input"
              type="text"
              class={`flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
              placeholder="Starting point"
              value={selectedStartLocation?.address || ''}
              oninput={(e) => {
                // Update location when user types (in a real app, this would trigger geocoding)
              }}
            />
            <button
              type="button"
              class="inline-flex items-center px-4 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <MapPin class="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>

        <div>
          <label for="end-location-input" class="block text-sm font-medium text-gray-700 mb-1">End Location</label>
          <div class="flex">
            <input
              id="end-location-input"
              type="text"
              class={`flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
              placeholder="Destination"
              value={selectedEndLocation?.address || ''}
              oninput={(e) => {
                // Update location when user types (in a real app, this would trigger geocoding)
              }}
            />
            <button
              type="button"
              class="inline-flex items-center px-4 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <Navigation class="h-5 w-5 text-green-500" />
            </button>
          </div>
        </div>

        <!-- Waypoints -->
        <div>
          <div class="flex items-center justify-between">
            <label for="waypoints-input" class="block text-sm font-medium text-gray-700 mb-1">Waypoints</label>
            <button
              type="button"
              class="text-sm text-blue-600 hover:text-blue-500"
              onclick={handleAddWaypoint}
            >
              + Add
            </button>
          </div>

          {#if selectedWaypoints.length > 0}
            <div class="mt-2 space-y-2">
              {#each selectedWaypoints as waypoint, i}
                <div class="flex items-center justify-between p-2 border border-gray-200 rounded">
                  <div class="flex items-center">
                    <div class="bg-gray-100 p-2 rounded">
                      <MapPin class="h-4 w-4 text-gray-600" />
                    </div>
                    <div class="ml-2">
                      <div class="text-sm font-medium text-gray-900">{waypoint.name}</div>
                      <div class="text-xs text-gray-500">{waypoint.address}</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="text-gray-400 hover:text-red-500"
                    onclick={() => handleRemoveWaypoint(i)}
                  >
                    <X class="h-4 w-4" />
                  </button>
                </div>
              {/each}
            </div>
          {/if}

          <div class="mt-2 flex">
            <input
              type="text"
              class={`flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
              placeholder="Add waypoint..."
              value={searchQuery}
              oninput={(e) => searchQuery = (e.target as HTMLInputElement).value}
            />
            <button
              type="button"
              class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              onclick={handleAddWaypoint}
            >
              <Plus class="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <!-- Calculate route button -->
      <Button
        variant="primary"
        class="w-full"
        onclick={calculateRoute}
        disabled={!selectedStartLocation || !selectedEndLocation}
      >
        <Route class="h-5 w-5 mr-2" />
        Calculate Route
      </Button>

      <!-- Route options -->
      {#if showRouteOptions && routeOptions.length > 0}
        <div>
          <h3 class="text-lg font-medium text-gray-900 mb-3">Route Options</h3>
          <div class="space-y-3">
            {#each routeOptions as option}
              <div
                class={`border rounded-lg p-4 cursor-pointer transition-all ${
                  selectedRouteId === option.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:bg-gray-50'
                } ${optionClass}`}
                onclick={() => handleRouteSelect(option.id)}
                onkeydown={(e: KeyboardEvent) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleRouteSelect(option.id);
                  }
                }}
                role="button"
                tabindex={0}
              >
                <div class="flex items-center justify-between">
                  <div>
                    <h4 class="font-medium text-gray-900">{option.name}</h4>
                    <div class="flex items-center mt-1 text-sm text-gray-500">
                      <Clock class="h-4 w-4 mr-1" />
                      <span>{Math.floor(option.duration / 60)}h {option.duration % 60}m</span>
                      <span class="mx-2">вЂў</span>
                      <span>{option.distance} km</span>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="text-sm font-medium text-gray-900">{formatCurrency(option.cost)}</p>
                    <div class="flex space-x-1 mt-1">
                      {#if option.tolls}
                        <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          Tolls
                        </span>
                      {/if}
                      {#if option.highways}
                        <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Highway
                        </span>
                      {/if}
                      {#if option.ecoFriendly}
                        <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Eco
                        </span>
                      {/if}
                    </div>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/if}
    </div>

    <!-- Right panel: Map visualization -->
    {#if localShowMap}
      <div class="md:w-2/3">
        <div class="border rounded-lg overflow-hidden" style={`height: ${height}`}>
          <!-- Simplified map visualization -->
          <div class="relative w-full h-full bg-gradient-to-br from-blue-100 to-green-100">
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

            <!-- Start location marker -->
            {#if selectedStartLocation}
              <div
                class="absolute w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 z-10"
                style="top: 30%; left: 20%;"
              >
                <MapPin class="h-5 w-5" />
              </div>

              <div
                class="absolute text-sm font-medium bg-white px-2 py-1 rounded shadow"
                style="top: 25%; left: 25%;"
              >
                Start
              </div>
            {/if}

            <!-- End location marker -->
            {#if selectedEndLocation}
              <div
                class="absolute w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 z-10"
                style="top: 70%; left: 80%;"
              >
                <Navigation class="h-5 w-5" />
              </div>

              <div
                class="absolute text-sm font-medium bg-white px-2 py-1 rounded shadow"
                style="top: 65%; left: 75%;"
              >
                Destination
              </div>
            {/if}

            <!-- Waypoints markers -->
            {#if selectedWaypoints.length > 0}
              {#each selectedWaypoints as waypoint, i}
                <!-- Place waypoints along a simple curved path from start to end -->
                {@const position = {
                  top: 30 + (i + 1) * (40 / (waypoints.length + 1)) + '%',
                  left: 20 + (i + 1) * (60 / (waypoints.length + 1)) + '%'
                }}

                <div
                  class="absolute w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 z-10"
                  style={`top: ${position.top}; left: ${position.left};`}
                >
                  <MapPin class="h-4 w-4" />
                </div>

                <div
                  class="absolute text-xs bg-white px-2 py-0.5 rounded shadow"
                  style="top: calc(${position.top} - 20px); left: calc(${position.left} + 15px);"
                >
                  {waypoint.name}
                </div>
              {/each}
            {/if}

            <!-- Route path visualization -->
            {#if selectedStartLocation && selectedEndLocation}
              <svg class="absolute inset-0 w-full h-full pointer-events-none">
                <path
                  d="M 20% 30% Q 40% 20% 50% 50% T 80% 70%"
                  stroke="#3B82F6"
                  stroke-width="4"
                  fill="none"
                  stroke-dasharray="8,4"
                />
              </svg>
            {/if}

            <!-- Map controls -->
            <div class="absolute right-4 top-4 flex flex-col space-y-2">
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
            </div>
          </div>
        </div>

        <!-- Directions -->
        {#if showDirections && selectedRouteId && routeOptions.length > 0}
          <div class="mt-4 border rounded-lg overflow-hidden">
            <div class="bg-gray-50 px-4 py-3 border-b">
              <h3 class="text-lg font-medium text-gray-900">Directions</h3>
            </div>
            <div class="p-4">
              <div class="space-y-3">
                <!-- Simplified directions based on route selection -->
                <div class="flex items-start">
                  <div class="flex-shrink-0 mt-0.5">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-blue-500 text-white text-xs">
                      1
                    </div>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">Start at {selectedStartLocation?.name || 'Start Point'}</p>
                    <p class="mt-1 text-sm text-gray-500">Head north on Main Street toward Oak Avenue</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 mt-0.5">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-blue-500 text-white text-xs">
                      2
                    </div>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">Turn right onto Oak Avenue</p>
                    <p class="mt-1 text-sm text-gray-500">Continue straight for 0.5 miles</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 mt-0.5">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-blue-500 text-white text-xs">
                      3
                    </div>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">Arrive at {selectedEndLocation?.name || 'Destination'}</p>
                    <p class="mt-1 text-sm text-gray-500">You have reached your destination</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/if}
      </div>
    {/if}
  </div>
</div>

