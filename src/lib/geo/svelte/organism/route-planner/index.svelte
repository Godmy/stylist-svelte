<script lang="ts">
  import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';
  import { Icon as BaseIcon } from '$stylist';
const Navigation = 'navigation';
const MapPin = 'map-pin';
const Clock = 'clock';
const Car = 'car';
const Route = 'route';
const Plus = 'plus';
const Minus = 'minus';
const RotateCcw = 'rotate-ccw';
const X = 'x';

  import { Button } from '$lib';

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

  type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;

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
        <h2 class="text-xl font-bold text-[var(--color-text-primary)] flex items-center">
          <BaseIcon name={Route} class="h-5 w-5 mr-2 text-[var(--color-primary-500)]" />
          Plan Your Route
        </h2>
        <p class="text-sm text-[var(--color-text-secondary)]">Enter your start and end locations</p>
      </div>

      <!-- Travel mode selector -->
      {#if showTravelMode}
        <div class="flex space-x-2">
          {#each travelModes as mode}
            <button
              type="button"
              class={`flex-1 px-4 py-2 rounded-md text-sm font-medium ${
                selectedTravelMode === mode
                  ? 'bg-[var(--color-primary-100)] text-[var(--color-primary-700)] border border-[var(--color-primary-300)]'
                  : 'bg-[var(--color-background-primary)] text-[var(--color-text-primary)] border border-[var(--color-border-primary)] hover:bg-[var(--color-background-secondary)]'
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
          <label for="start-location-input" class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">Start Location</label>
          <div class="flex">
            <input
              id="start-location-input"
              type="text"
              class={`flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border-[var(--color-border-primary)] focus:outline-none focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${inputClass}`}
              placeholder="Starting point"
              value={selectedStartLocation?.address || ''}
              oninput={(e) => {
                // Update location when user types (in a real app, this would trigger geocoding)
              }}
            />
            <button
              type="button"
              class="inline-flex items-center px-4 rounded-r-md border border-l-0 border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] text-sm font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)]"
            >
              <BaseIcon name={MapPin} class="h-5 w-5 text-[var(--color-text-secondary)]" />
            </button>
          </div>
        </div>

        <div>
          <label for="end-location-input" class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">End Location</label>
          <div class="flex">
            <input
              id="end-location-input"
              type="text"
              class={`flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border-[var(--color-border-primary)] focus:outline-none focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${inputClass}`}
              placeholder="Destination"
              value={selectedEndLocation?.address || ''}
              oninput={(e) => {
                // Update location when user types (in a real app, this would trigger geocoding)
              }}
            />
            <button
              type="button"
              class="inline-flex items-center px-4 rounded-r-md border border-l-0 border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] text-sm font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)]"
            >
              <BaseIcon name={Navigation} class="h-5 w-5 text-[var(--color-success-500)]" />
            </button>
          </div>
        </div>

        <!-- Waypoints -->
        <div>
          <div class="flex items-center justify-between">
            <label for="waypoints-input" class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">Waypoints</label>
            <button
              type="button"
              class="text-sm text-[var(--color-primary-600)] hover:text-[var(--color-primary-500)]"
              onclick={handleAddWaypoint}
            >
              + Add
            </button>
          </div>

          {#if selectedWaypoints.length > 0}
            <div class="mt-2 space-y-2">
              {#each selectedWaypoints as waypoint, i}
                <div class="flex items-center justify-between p-2 border border-[var(--color-border-primary)] rounded">
                  <div class="flex items-center">
                    <div class="bg-[var(--color-background-secondary)] p-2 rounded">
                      <BaseIcon name={MapPin} class="h-4 w-4 text-[var(--color-text-secondary)]" />
                    </div>
                    <div class="ml-2">
                      <div class="text-sm font-medium text-[var(--color-text-primary)]">{waypoint.name}</div>
                      <div class="text-xs text-[var(--color-text-secondary)]">{waypoint.address}</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="text-[var(--color-text-tertiary)] hover:text-[var(--color-danger-500)]"
                    onclick={() => handleRemoveWaypoint(i)}
                  >
                    <BaseIcon name={X} class="h-4 w-4" />
                  </button>
                </div>
              {/each}
            </div>
          {/if}

          <div class="mt-2 flex">
            <input
              type="text"
              class={`flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border-[var(--color-border-primary)] focus:outline-none focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${inputClass}`}
              placeholder="Add waypoint..."
              value={searchQuery}
              oninput={(e) => searchQuery = (e.target as HTMLInputElement).value}
            />
            <button
              type="button"
              class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] text-sm font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)]"
              onclick={handleAddWaypoint}
            >
              <BaseIcon name={Plus} class="h-4 w-4" />
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
        <BaseIcon name={Route} class="h-5 w-5 mr-2" />
        Calculate Route
      </Button>

      <!-- Route options -->
      {#if showRouteOptions && routeOptions.length > 0}
        <div>
          <h3 class="text-lg font-medium text-[var(--color-text-primary)] mb-3">Route Options</h3>
          <div class="space-y-3">
            {#each routeOptions as option}
              <div
                class={`border rounded-lg p-4 cursor-pointer transition-all ${
                  selectedRouteId === option.id
                    ? 'border-[var(--color-primary-500)] bg-[var(--color-primary-50)]'
                    : 'border-[var(--color-border-primary)] hover:bg-[var(--color-background-secondary)]'
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
                    <h4 class="font-medium text-[var(--color-text-primary)]">{option.name}</h4>
                    <div class="flex items-center mt-1 text-sm text-[var(--color-text-secondary)]">
                      <BaseIcon name={Clock} class="h-4 w-4 mr-1" />
                      <span>{Math.floor(option.duration / 60)}h {option.duration % 60}m</span>
                      <span class="mx-2">вЂў</span>
                      <span>{option.distance} km</span>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="text-sm font-medium text-[var(--color-text-primary)]">{formatCurrency(option.cost)}</p>
                    <div class="flex space-x-1 mt-1">
                      {#if option.tolls}
                        <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          Tolls
                        </span>
                      {/if}
                      {#if option.highways}
                        <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[var(--color-primary-100)] text-[var(--color-primary-800)]">
                          Highway
                        </span>
                      {/if}
                      {#if option.ecoFriendly}
                        <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[var(--color-success-100)] text-[var(--color-success-800)]">
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
          <div class="relative w-full h-full [background-image:var(--gradient-forest)]">
            <!-- Grid lines to simulate map -->
            {#each Array(20) as _, i}
              <div
                class="absolute w-full h-px bg-[var(--color-background-tertiary)] opacity-[var(--opacity-20)]"
                style={`top: ${i * 5}%`}
              ></div>
              <div
                class="absolute h-full w-px bg-[var(--color-background-tertiary)] opacity-[var(--opacity-20)]"
                style={`left: ${i * 5}%`}
              ></div>
            {/each}

            <!-- Start location marker -->
            {#if selectedStartLocation}
              <div
                class="absolute w-8 h-8 rounded-full bg-[var(--color-success-500)] flex items-center justify-center text-[var(--color-text-inverse)] shadow-lg transform -translate-x-1/2 -translate-y-1/2 z-[var(--z-index-docked)]"
                style="top: 30%; left: 20%;"
              >
                <BaseIcon name={MapPin} class="h-5 w-5" />
              </div>

              <div
                class="absolute text-sm font-medium bg-[var(--color-background-primary)] px-2 py-1 rounded shadow"
                style="top: 25%; left: 25%;"
              >
                Start
              </div>
            {/if}

            <!-- End location marker -->
            {#if selectedEndLocation}
              <div
                class="absolute w-8 h-8 rounded-full bg-[var(--color-danger-500)] flex items-center justify-center text-[var(--color-text-inverse)] shadow-lg transform -translate-x-1/2 -translate-y-1/2 z-[var(--z-index-docked)]"
                style="top: 70%; left: 80%;"
              >
                <BaseIcon name={Navigation} class="h-5 w-5" />
              </div>

              <div
                class="absolute text-sm font-medium bg-[var(--color-background-primary)] px-2 py-1 rounded shadow"
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
                  class="absolute w-6 h-6 rounded-full bg-[var(--color-primary-500)] flex items-center justify-center text-[var(--color-text-inverse)] shadow-lg transform -translate-x-1/2 -translate-y-1/2 z-[var(--z-index-docked)]"
                  style={`top: ${position.top}; left: ${position.left};`}
                >
                  <BaseIcon name={MapPin} class="h-4 w-4" />
                </div>

                <div
                  class="absolute text-xs bg-[var(--color-background-primary)] px-2 py-0.5 rounded shadow"
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
                  stroke="var(--color-primary-500)"
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
          </div>
        </div>

        <!-- Directions -->
        {#if showDirections && selectedRouteId && routeOptions.length > 0}
          <div class="mt-4 border rounded-lg overflow-hidden">
            <div class="bg-[var(--color-background-secondary)] px-4 py-3 border-b">
              <h3 class="text-lg font-medium text-[var(--color-text-primary)]">Directions</h3>
            </div>
            <div class="p-4">
              <div class="space-y-3">
                <!-- Simplified directions based on route selection -->
                <div class="flex items-start">
                  <div class="flex-shrink-0 mt-0.5">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] text-xs">
                      1
                    </div>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-[var(--color-text-primary)]">Start at {selectedStartLocation?.name || 'Start Point'}</p>
                    <p class="mt-1 text-sm text-[var(--color-text-secondary)]">Head north on Main Street toward Oak Avenue</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 mt-0.5">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] text-xs">
                      2
                    </div>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-[var(--color-text-primary)]">Turn right onto Oak Avenue</p>
                    <p class="mt-1 text-sm text-[var(--color-text-secondary)]">Continue straight for 0.5 miles</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 mt-0.5">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] text-xs">
                      3
                    </div>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-[var(--color-text-primary)]">Arrive at {selectedEndLocation?.name || 'Destination'}</p>
                    <p class="mt-1 text-sm text-[var(--color-text-secondary)]">You have reached your destination</p>
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








