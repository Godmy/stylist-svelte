<script lang="ts">
  import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';
  import { Icon as BaseIcon } from '$stylist';
const MapPin = 'map-pin';
const Search = 'search';
const Phone = 'phone';
const Clock = 'clock';
const Star = 'star';
const Navigation = 'navigation';
const Filter = 'filter';
const Dot = 'dot';

  import { Button } from '$lib';

  export type Store = {
    id: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    phone: string;
    hours: string; // Business hours
    rating: number;
    distance: number; // Distance from user in km
    latitude: number;
    longitude: number;
    inventory?: Record<string, number>; // Product ID to quantity mapping
    services?: string[]; // Services offered at this location
    pickupAvailable?: boolean;
  };

  type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;

  export type Props = RestProps & {
    stores: Store[];
    showSearch?: boolean;
    showFilters?: boolean;
    showDistance?: boolean;
    showRating?: boolean;
    showHours?: boolean;
    showServices?: boolean;
    enablePickupFilter?: boolean;
    enableServiceFilter?: boolean;
    maxStores?: number;
    radius?: number; // Search radius in km
    showMap?: boolean;
    onStoreSelect?: (store: Store) => void;
    onGetDirections?: (store: Store) => void;
    onCallStore?: (store: Store) => void;
    class?: string;
    headerClass?: string;
    searchClass?: string;
    storeClass?: string;
    mapClass?: string;
    filterClass?: string;
  };

  let {
    stores = [],
    showSearch = true,
    showFilters = true,
    showDistance = true,
    showRating = true,
    showHours = true,
    showServices = true,
    enablePickupFilter = true,
    enableServiceFilter = true,
    maxStores = 10,
    radius = 50, // km
    showMap = true,
    onStoreSelect,
    onGetDirections,
    onCallStore,
    class: hostClass = '',
    headerClass = '',
    searchClass = '',
    storeClass = '',
    mapClass = '',
    filterClass = '',
    ...restProps
  }: Props = $props();

  let searchTerm = $state('');
  let showPickupOnly = $state(false);
  let selectedService: string | null = $state(null);
  let filteredStores = $derived.by(() => {
    let result = [...stores];
    
    // Apply search filter
    if (searchTerm) {
      const query = searchTerm.toLowerCase();
      result = result.filter(store => 
        store.name.toLowerCase().includes(query) ||
        store.address.toLowerCase().includes(query) ||
        store.city.toLowerCase().includes(query) ||
        store.state.toLowerCase().includes(query)
      );
    }
    
    // Apply pickup filter
    if (showPickupOnly) {
      result = result.filter(store => store.pickupAvailable);
    }
    
    // Apply service filter
    if (selectedService) {
      result = result.filter(store => store.services?.includes(selectedService as string));
    }
    
    return result.slice(0, maxStores);
  });

  let availableServices = $derived.by(() => {
    const services = new Set<string>();
    for (const store of stores) {
      if (store.services) {
        for (const service of store.services) {
          services.add(service);
        }
      }
    }
    return Array.from(services);
  });

  function handleSearchInput(e: Event) {
    const target = e.target as HTMLInputElement;
    searchTerm = target.value;
  }

  function handlePickupFilterChange(e: Event) {
    const target = e.target as HTMLInputElement;
    showPickupOnly = (target as HTMLInputElement).checked;
  }

  function handleServiceFilterChange(service: string) {
    selectedService = selectedService === service ? null : service;
  }

  function handleStoreSelect(store: Store) {
    onStoreSelect?.(store);
  }

  function handleGetDirections(store: Store) {
    onGetDirections?.(store);
  }

  function handleCallStore(store: Store) {
    onCallStore?.(store);
  }

  function formatDistance(distance: number): string {
    if (distance < 1) {
      return `${Math.round(distance * 1000)} m`;
    }
    return `${distance.toFixed(1)} km`;
  }
</script>

<div class={`store-locator ${hostClass}`} {...restProps}>
  <div class={`border border-[var(--color-border-primary)] rounded-lg p-6 mb-6 ${headerClass}`}>
    <div class="flex items-center">
      <BaseIcon name={MapPin} class="h-6 w-6 text-[var(--color-primary-500)] mr-3" />
      <h2 class="text-xl font-bold text-[var(--color-text-primary)]">Find a Store</h2>
    </div>
    
    <p class="mt-1 text-[var(--color-text-secondary)]">Locate stores near you and check product availability</p>
  </div>
  
  <div class="flex flex-col lg:flex-row gap-6">
    <!-- Search and filters -->
    <div class="lg:w-1/4">
      <div class="border border-[var(--color-border-primary)] rounded-lg p-4 mb-4">
        {#if showSearch}
          <div class="mb-4">
            <label for="store-search" class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
              Search Location
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <BaseIcon name={Search} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
              </div>
              <input
                id="store-search"
                type="text"
                class={`block w-full pl-10 pr-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${searchClass}`}
                placeholder="City, state, or ZIP code"
                value={searchTerm}
                oninput={handleSearchInput}
              />
            </div>
          </div>
        {/if}
        
        {#if showFilters}
          <div>
            <h3 class="text-sm font-medium text-[var(--color-text-primary)] mb-3">Filters</h3>
            
            {#if enablePickupFilter}
              <div class="flex items-center mb-3">
                <input
                  id="pickup-only"
                  type="checkbox"
                  class="h-4 w-4 text-[var(--color-primary-600)] focus:ring-blue-500 border-[var(--color-border-primary)] rounded"
                  checked={showPickupOnly}
                  onchange={handlePickupFilterChange}
                />
                <label for="pickup-only" class="ml-2 block text-sm text-[var(--color-text-primary)]">
                  Pickup Only
                </label>
              </div>
            {/if}
            
            {#if enableServiceFilter && availableServices.length > 0}
              <div class="mb-3">
                <p class="block text-sm font-medium text-[var(--color-text-primary)] mb-2">Services</p>
                <div class="space-y-2">
                  {#each availableServices as service}
                    <div class="flex items-center">
                      <input
                        id={`service-${service}`}
                        type="checkbox"
                        class="h-4 w-4 text-[var(--color-primary-600)] focus:ring-blue-500 border-[var(--color-border-primary)] rounded"
                        checked={selectedService === service}
                        onchange={() => handleServiceFilterChange(service)}
                      />
                      <label for={`service-${service}`} class="ml-2 block text-sm text-[var(--color-text-primary)]">
                        {service}
                      </label>
                    </div>
                  {/each}
                </div>
              </div>
            {/if}
            
            <div>
              <label for="search-radius" class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">Search Radius</label>
              <div class="flex items-center">
                <input
                  id="search-radius"
                  type="range"
                  min="1"
                  max="100"
                  value={radius}
                  oninput={(e) => radius = parseInt((e.target as HTMLInputElement).value)}
                  class="w-full h-2 bg-[var(--color-background-tertiary)] rounded-lg appearance-none cursor-pointer"
                />
                <span class="ml-3 text-sm text-[var(--color-text-primary)] min-w-[50px]">{radius} km</span>
              </div>
            </div>
          </div>
        {/if}
      </div>
    </div>
    
    <!-- Map section -->
    {#if showMap}
      <div class="lg:w-2/4">
        <div class={`border border-[var(--color-border-primary)] rounded-lg overflow-hidden ${mapClass}`}>
          <!-- Simplified map representation -->
          <div class="relative h-96 w-full bg-[var(--color-primary-50)]">
            <!-- Grid lines to simulate map -->
            {#each Array(10) as _, i}
              <div 
                class="absolute w-full h-px bg-[var(--color-background-tertiary)] opacity-[var(--opacity-20)]"
                style={`top: ${i * 10}%`}
              ></div>
              <div 
                class="absolute h-full w-px bg-[var(--color-background-tertiary)] opacity-[var(--opacity-20)]"
                style={`left: ${i * 10}%`}
              ></div>
            {/each}
            
            <!-- Water bodies simulation -->
            <div class="absolute w-1/3 h-1/4 bg-[var(--color-primary-200)] rounded-lg opacity-[var(--opacity-50)]" style="top: 20%; left: 30%;"></div>
            
            <!-- Road simulation -->
            <div class="absolute w-full h-1 bg-[var(--color-neutral-400)] opacity-[var(--opacity-40)]" style="top: 30%;"></div>
            <div class="absolute h-full w-1 bg-[var(--color-neutral-400)] opacity-[var(--opacity-40)]" style="left: 40%;"></div>
            
            <!-- Store markers -->
            {#each filteredStores as store}
              {@const x = 20 + (store.longitude * 0.7) % 60} <!-- Simplified positioning -->
              {@const y = 20 + (store.latitude * 0.7) % 60} <!-- Simplified positioning -->
              
              <button
                type="button"
                class="absolute transform -translate-x-1/2 -translate-y-1/2 z-[var(--z-index-docked)]"
                style={`left: ${x}%; top: ${y}%;`}
                onclick={() => handleStoreSelect(store)}
                aria-label={`Select ${store.name}`}
              >
                <div class="flex flex-col items-center">
                  <div class="w-8 h-8 rounded-full bg-[var(--color-primary-500)] flex items-center justify-center text-[var(--color-text-inverse)] shadow-lg border-2 border-[var(--color-background-primary)]">
                    <BaseIcon name={MapPin} class="h-4 w-4" />
                  </div>
                  <div class="mt-1 text-xs bg-[var(--color-background-primary)] px-2 py-1 rounded shadow whitespace-nowrap">
                    {store.name}
                  </div>
                </div>
              </button>
            {/each}
            
            <!-- Current user position -->
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[var(--z-index-docked)]">
              <div class="w-6 h-6 rounded-full bg-[var(--color-danger-500)] flex items-center justify-center text-[var(--color-text-inverse)] shadow-lg">
                <BaseIcon name={Dot} class="h-3 w-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    {/if}
    
    <!-- Store list -->
    <div class={`${showMap ? 'lg:w-1/4' : 'lg:w-3/4'}`}>
      <div class="border border-[var(--color-border-primary)] rounded-lg overflow-hidden">
        {#if filteredStores.length === 0}
          <div class="text-center py-12">
            <BaseIcon name={MapPin} class="mx-auto h-12 w-12 text-[var(--color-text-tertiary)]" />
            <h3 class="mt-2 text-sm font-medium text-[var(--color-text-primary)]">No stores found</h3>
            <p class="mt-1 text-sm text-[var(--color-text-secondary)]">Try adjusting your search or moving the map.</p>
          </div>
        {:else}
          <ul class="divide-y divide-gray-200 max-h-96 overflow-y-auto">
            {#each filteredStores as store}
              <li class={`p-4 hover:bg-[var(--color-background-secondary)] ${storeClass}`}>
                <div class="flex justify-between">
                  <div>
                    <h3 class="text-sm font-medium text-[var(--color-text-primary)]">{store.name}</h3>
                    <p class="mt-1 text-xs text-[var(--color-text-secondary)]">{store.address}, {store.city}, {store.state} {store.zipCode}</p>
                    
                    <div class="mt-2 flex items-center">
                      {#if showRating}
                        <div class="flex items-center">
                          <BaseIcon name={Star} class="h-4 w-4 text-yellow-400 fill-current" />
                          <span class="ml-1 text-xs text-[var(--color-text-secondary)]">{store.rating.toFixed(1)}</span>
                        </div>
                      {/if}
                      
                      {#if showDistance}
                        <div class="ml-3 flex items-center text-xs text-[var(--color-text-secondary)]">
                          <BaseIcon name={Navigation} class="h-3 w-3 mr-1 text-[var(--color-text-tertiary)]" />
                          {formatDistance(store.distance)}
                        </div>
                      {/if}
                      
                      {#if store.pickupAvailable}
                        <span class="ml-3 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[var(--color-success-100)] text-[var(--color-success-800)]">
                          Pickup Available
                        </span>
                      {/if}
                    </div>
                    
                    {#if showHours}
                      <div class="mt-2 flex items-center text-xs text-[var(--color-text-secondary)]">
                        <BaseIcon name={Clock} class="h-3 w-3 mr-1" />
                        {store.hours}
                      </div>
                    {/if}
                    
                    {#if showServices && store.services && store.services.length > 0}
                      <div class="mt-2 flex flex-wrap gap-1">
                        {#each store.services as service}
                          <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[var(--color-primary-100)] text-[var(--color-primary-800)]">
                            {service}
                          </span>
                        {/each}
                      </div>
                    {/if}
                  </div>
                  
                  <div class="flex flex-col space-y-2">
                    <Button variant="outline" size="sm" onclick={() => handleCallStore(store)}>
                      <BaseIcon name={Phone} class="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onclick={() => handleGetDirections(store)}
                    >
                      <BaseIcon name={Navigation} class="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </li>
            {/each}
          </ul>
        {/if}
      </div>
      
      <div class="mt-4 text-sm text-[var(--color-text-secondary)] text-center">
        Showing {filteredStores.length} of {stores.length} stores
      </div>
    </div>
  </div>
</div>








