<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/media';
  import { Button } from '$stylist/control';
  import { createLocationSelectorState } from '$stylist/geo/function/state/location-selector';
  import type { LocationSelectorLocation } from '$stylist/geo/type/struct/location-selector';

  let props = $props();
  const state = createLocationSelectorState(props);

  function handleKeyDown(e: KeyboardEvent, location: LocationSelectorLocation): void {
    if (e.key === 'Enter' || e.key === ' ') state.handleLocationSelect(location);
  }
</script>

<div class={`c-location-selector ${props.class ?? ''}`} {...state.restProps}>
  <div class={`mb-4 ${props.headerClass ?? ''}`}>
    <div class="flex flex-wrap gap-4 items-center">
      {#if state.showSearch}
        <div class="flex-grow min-w-[200px]">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <BaseIcon name="search" class="h-5 w-5 text-[var(--color-text-tertiary)]" />
            </div>
            <input
              type="text"
              class={`block w-full pl-10 pr-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${props.searchClass ?? ''}`}
              placeholder={state.searchPlaceholder}
              value={state.searchQuery}
              oninput={state.handleSearchInput}
            />
          </div>
        </div>
      {/if}

      {#if state.showCategoryFilter}
        <div>
          <select
            class="block w-full pl-3 pr-10 py-2 text-base border-[var(--color-border-primary)] focus:outline-none focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm rounded-md"
            value={state.selectedCategory}
            onchange={state.handleCategoryChangeEvent}
          >
            {#each state.categories as category}
              <option value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            {/each}
          </select>
        </div>
      {/if}

      {#if state.showMapToggle}
        <div class={`flex border rounded-md ${props.viewToggleClass ?? ''}`}>
          <button
            type="button"
            class={`p-2 ${state.currentView === 'list' ? 'bg-[var(--color-primary-100)] text-[var(--color-primary-700)]' : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'}`}
            aria-label="List view"
            onclick={() => state.currentView = 'list'}
          >
            <BaseIcon name="list" class="h-5 w-5" />
          </button>
          <button
            type="button"
            class={`p-2 ${state.currentView === 'grid' ? 'bg-[var(--color-primary-100)] text-[var(--color-primary-700)]' : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'}`}
            aria-label="Grid view"
            onclick={() => state.currentView = 'grid'}
          >
            <BaseIcon name="grid-3-x-3" class="h-5 w-5" />
          </button>
        </div>
      {/if}
    </div>
  </div>

  {#if state.currentView === 'list'}
    <div class="space-y-4">
      {#each state.filteredLocations as location}
        <div
          class={`flex items-center p-4 border rounded-lg cursor-pointer hover:shadow-md transition-shadow ${props.itemClass ?? ''}`}
          onclick={() => state.handleLocationSelect(location)}
          role="button"
          tabindex={0}
          onkeydown={(e: KeyboardEvent) => handleKeyDown(e, location)}
        >
          <div class="flex-shrink-0 p-3 rounded-md bg-[var(--color-primary-100)] text-[var(--color-primary-600)]">
            <BaseIcon name="map-pin" class="h-6 w-6" />
          </div>

          <div class="ml-4 flex-1 min-w-0">
            <div class="flex items-baseline justify-between">
              <h3 class="text-sm font-medium text-[var(--color-text-primary)] truncate">{location.name}</h3>
              {#if location.distance !== undefined && state.showDistance}
                <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--color-primary-100)] text-[var(--color-primary-800)]">
                  {state.formatDistance(location.distance)}
                </span>
              {/if}
            </div>

            {#if location.address}
              <p class="mt-1 text-sm text-[var(--color-text-secondary)] truncate">{location.address}</p>
            {/if}

            <div class="mt-2 flex items-center">
              {#if location.rating !== undefined}
                <div class="flex items-center">
                  {#each Array(5) as _, i}
                    <BaseIcon name="star"
                      class={`h-4 w-4 ${
                        i < Math.floor(location.rating)
                          ? 'text-yellow-400 fill-current'
                          : (i === Math.floor(location.rating) && location.rating % 1 >= 0.5
                            ? 'text-yellow-400'
                            : 'text-[var(--color-text-tertiary)]')
                      }`}
                    />
                  {/each}
                  <span class="ml-1 text-sm text-[var(--color-text-secondary)]">{location.rating.toFixed(1)}</span>
                </div>
              {/if}

              {#if location.category}
                <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--color-background-secondary)] text-[var(--color-text-primary)]">
                  {location.category}
                </span>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  {:else if state.currentView === 'grid'}
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {#each state.filteredLocations as location}
        <div
          class={`border rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow ${props.itemClass ?? ''}`}
          onclick={() => state.handleLocationSelect(location)}
          role="button"
          tabindex={0}
          onkeydown={(e: KeyboardEvent) => handleKeyDown(e, location)}
        >
          <div class="flex items-start">
            <div class="flex-shrink-0 p-2 rounded-md bg-[var(--color-primary-100)] text-[var(--color-primary-600)]">
              <BaseIcon name="map-pin" class="h-5 w-5" />
            </div>

            <div class="ml-4 min-w-0">
              <h3 class="text-sm font-medium text-[var(--color-text-primary)] truncate">{location.name}</h3>

              {#if location.address}
                <p class="mt-1 text-sm text-[var(--color-text-secondary)] line-clamp-2">{location.address}</p>
              {/if}

              <div class="mt-3 flex items-center justify-between">
                {#if location.distance !== undefined && state.showDistance}
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--color-primary-100)] text-[var(--color-primary-800)]">
                    {state.formatDistance(location.distance)}
                  </span>
                {/if}

                {#if location.rating !== undefined}
                  <div class="flex items-center">
                    {#each Array(5) as _, i}
                      <BaseIcon name="star"
                        class={`h-4 w-4 ${
                          i < Math.floor(location.rating)
                            ? 'text-yellow-400 fill-current'
                            : (i === Math.floor(location.rating) && location.rating % 1 >= 0.5
                              ? 'text-yellow-400'
                              : 'text-[var(--color-text-tertiary)]')
                        }`}
                      />
                    {/each}
                  </div>
                {/if}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}

  {#if state.filteredLocations.length === 0}
    <div class="text-center py-12 border-2 border-dashed border-[var(--color-border-primary)] rounded-lg">
      <BaseIcon name="map-pin" class="mx-auto h-12 w-12 text-[var(--color-text-tertiary)]" />
      <h3 class="mt-2 text-sm font-medium text-[var(--color-text-primary)]">No locations found</h3>
      <p class="mt-1 text-sm text-[var(--color-text-secondary)]">Try adjusting your search or filter to find what you're looking for.</p>
    </div>
  {/if}
</div>
