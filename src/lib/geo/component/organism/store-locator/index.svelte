<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import { Button } from '$lib';
  import { createStoreLocatorState } from '$stylist/geo/function/state/store-locator';
  import type { StoreLocatorStore } from '$stylist/geo/type/struct/store-locator';

  let props = $props();
  const state = createStoreLocatorState(props);
</script>

<div class={`store-locator ${props.class ?? ''}`} {...state.restProps}>
  <div class={`border border-[var(--color-border-primary)] rounded-lg p-6 mb-6 ${props.headerClass ?? ''}`}>
    <div class="flex items-center">
      <BaseIcon name="map-pin" class="h-6 w-6 text-[var(--color-primary-500)] mr-3" />
      <h2 class="text-xl font-bold text-[var(--color-text-primary)]">Find a Store</h2>
    </div>
    <p class="mt-1 text-[var(--color-text-secondary)]">Locate stores near you and check product availability</p>
  </div>

  <div class="flex flex-col lg:flex-row gap-6">
    <div class="lg:w-1/4">
      <div class="border border-[var(--color-border-primary)] rounded-lg p-4 mb-4">
        {#if state.showSearch}
          <div class="mb-4">
            <label for="store-search" class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
              Search SlotLocation
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <BaseIcon name="search" class="h-5 w-5 text-[var(--color-text-tertiary)]" />
              </div>
              <input
                id="store-search"
                type="text"
                class={`block w-full pl-10 pr-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${props.searchClass ?? ''}`}
                placeholder="City, state, or ZIP code"
                value={state.searchTerm}
                oninput={state.handleSearchInput}
              />
            </div>
          </div>
        {/if}

        {#if state.showFilters}
          <div>
            <h3 class="text-sm font-medium text-[var(--color-text-primary)] mb-3">Filters</h3>

            {#if state.enablePickupFilter}
              <div class="flex items-center mb-3">
                <input
                  id="pickup-only"
                  type="checkbox"
                  class="h-4 w-4 text-[var(--color-primary-600)] focus:ring-blue-500 border-[var(--color-border-primary)] rounded"
                  checked={state.showPickupOnly}
                  onchange={state.handlePickupFilterChange}
                />
                <label for="pickup-only" class="ml-2 block text-sm text-[var(--color-text-primary)]">
                  Pickup Only
                </label>
              </div>
            {/if}

            {#if state.enableServiceFilter && state.availableServices.length > 0}
              <div class="mb-3">
                <p class="block text-sm font-medium text-[var(--color-text-primary)] mb-2">Services</p>
                <div class="space-y-2">
                  {#each state.availableServices as service}
                    <div class="flex items-center">
                      <input
                        id={`service-${service}`}
                        type="checkbox"
                        class="h-4 w-4 text-[var(--color-primary-600)] focus:ring-blue-500 border-[var(--color-border-primary)] rounded"
                        checked={state.selectedService === service}
                        onchange={() => state.handleServiceFilterChange(service)}
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
                  value={state.radius}
                  oninput={(e) => state.radius = parseInt((e.target as HTMLInputElement).value)}
                  class="w-full h-2 bg-[var(--color-background-tertiary)] rounded-lg appearance-none cursor-pointer"
                />
                <span class="ml-3 text-sm text-[var(--color-text-primary)] min-w-[50px]">{state.radius} km</span>
              </div>
            </div>
          </div>
        {/if}
      </div>
    </div>

    {#if state.showMap}
      <div class="lg:w-2/4">
        <div class={`border border-[var(--color-border-primary)] rounded-lg overflow-hidden ${props.mapClass ?? ''}`}>
          <div class="relative h-96 w-full bg-[var(--color-primary-50)]">
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

            <div class="absolute w-1/3 h-1/4 bg-[var(--color-primary-200)] rounded-lg opacity-[var(--opacity-50)]" style="top: 20%; left: 30%;"></div>
            <div class="absolute w-full h-1 bg-[var(--color-neutral-400)] opacity-[var(--opacity-40)]" style="top: 30%;"></div>
            <div class="absolute h-full w-1 bg-[var(--color-neutral-400)] opacity-[var(--opacity-40)]" style="left: 40%;"></div>

            {#each state.filteredStores as store}
              {@const x = 20 + (store.longitude * 0.7) % 60}
              {@const y = 20 + (store.latitude * 0.7) % 60}

              <button
                type="button"
                class="absolute transform -translate-x-1/2 -translate-y-1/2 z-[var(--z-index-docked)]"
                style={`left: ${x}%; top: ${y}%;`}
                onclick={() => state.handleStoreSelect(store)}
                aria-label={`Select ${store.name}`}
              >
                <div class="flex flex-col items-center">
                  <div class="w-8 h-8 rounded-full bg-[var(--color-primary-500)] flex items-center justify-center text-[var(--color-text-inverse)] shadow-lg border-2 border-[var(--color-background-primary)]">
                    <BaseIcon name="map-pin" class="h-4 w-4" />
                  </div>
                  <div class="mt-1 text-xs bg-[var(--color-background-primary)] px-2 py-1 rounded shadow whitespace-nowrap">
                    {store.name}
                  </div>
                </div>
              </button>
            {/each}

            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[var(--z-index-docked)]">
              <div class="w-6 h-6 rounded-full bg-[var(--color-danger-500)] flex items-center justify-center text-[var(--color-text-inverse)] shadow-lg">
                <BaseIcon name="dot" class="h-3 w-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    {/if}

    <div class={`${state.showMap ? 'lg:w-1/4' : 'lg:w-3/4'}`}>
      <div class="border border-[var(--color-border-primary)] rounded-lg overflow-hidden">
        {#if state.filteredStores.length === 0}
          <div class="text-center py-12">
            <BaseIcon name="map-pin" class="mx-auto h-12 w-12 text-[var(--color-text-tertiary)]" />
            <h3 class="mt-2 text-sm font-medium text-[var(--color-text-primary)]">No stores found</h3>
            <p class="mt-1 text-sm text-[var(--color-text-secondary)]">Try adjusting your search or moving the map.</p>
          </div>
        {:else}
          <ul class="divide-y divide-gray-200 max-h-96 overflow-y-auto">
            {#each state.filteredStores as store}
              <li class={`p-4 hover:bg-[var(--color-background-secondary)] ${props.storeClass ?? ''}`}>
                <div class="flex justify-between">
                  <div>
                    <h3 class="text-sm font-medium text-[var(--color-text-primary)]">{store.name}</h3>
                    <p class="mt-1 text-xs text-[var(--color-text-secondary)]">{store.address}, {store.city}, {store.state} {store.zipCode}</p>

                    <div class="mt-2 flex items-center">
                      {#if state.showRating}
                        <div class="flex items-center">
                          <BaseIcon name="star" class="h-4 w-4 text-yellow-400 fill-current" />
                          <span class="ml-1 text-xs text-[var(--color-text-secondary)]">{store.rating.toFixed(1)}</span>
                        </div>
                      {/if}

                      {#if state.showDistance}
                        <div class="ml-3 flex items-center text-xs text-[var(--color-text-secondary)]">
                          <BaseIcon name="navigation" class="h-3 w-3 mr-1 text-[var(--color-text-tertiary)]" />
                          {state.formatDistance(store.distance)}
                        </div>
                      {/if}

                      {#if store.pickupAvailable}
                        <span class="ml-3 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[var(--color-success-100)] text-[var(--color-success-800)]">
                          Pickup Available
                        </span>
                      {/if}
                    </div>

                    {#if state.showHours}
                      <div class="mt-2 flex items-center text-xs text-[var(--color-text-secondary)]">
                        <BaseIcon name="clock" class="h-3 w-3 mr-1" />
                        {store.hours}
                      </div>
                    {/if}

                    {#if state.showServices && store.services && store.services.length > 0}
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
                    <Button variant="outline" size="sm" onclick={() => state.handleCallStore(store)}>
                      <BaseIcon name="phone" class="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" onclick={() => state.handleGetDirections(store)}>
                      <BaseIcon name="navigation" class="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </li>
            {/each}
          </ul>
        {/if}
      </div>

      <div class="mt-4 text-sm text-[var(--color-text-secondary)] text-center">
        Showing {state.filteredStores.length} of {state.stores.length} stores
      </div>
    </div>
  </div>
</div>
