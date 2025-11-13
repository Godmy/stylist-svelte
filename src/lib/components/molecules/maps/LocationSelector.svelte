<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { MapPin, Search, List, Grid3X3, LocateFixed, Star } from 'lucide-svelte';
  import Input from '../../atoms/input/base/Input.svelte';
  import { Button } from '$lib/components/atoms';

  type Location = {
    id: string;
    name: string;
    address?: string;
    latitude: number;
    longitude: number;
    description?: string;
    category?: string;
    rating?: number;
    distance?: number; // Distance from current location in km
    tags?: string[];
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    locations: Location[];
    currentView?: 'list' | 'grid' | 'map';
    showSearch?: boolean;
    showCategoryFilter?: boolean;
    showMapToggle?: boolean;
    showDistance?: boolean;
    searchPlaceholder?: string;
    defaultCategory?: string;
    maxLocations?: number;
    onLocationSelect?: (location: Location) => void;
    onSearch?: (query: string) => void;
    onCategoryChange?: (category: string) => void;
    class?: string;
    itemClass?: string;
    headerClass?: string;
    searchClass?: string;
    viewToggleClass?: string;
    mapView?: boolean; // If true, renders a simplified map view
  };

  let {
    locations = [],
    currentView = 'list',
    showSearch = true,
    showCategoryFilter = true,
    showMapToggle = true,
    showDistance = true,
    searchPlaceholder = 'Search locations...',
    defaultCategory = 'all',
    maxLocations = 10,
    onLocationSelect,
    onSearch,
    onCategoryChange,
    class: hostClass = '',
    itemClass = '',
    headerClass = '',
    searchClass = '',
    viewToggleClass = '',
    mapView = false,
    ...restProps
  }: Props = $props();

  // Явно определяем типы для состояний
  let locationsState: Location[] = $state([]);
  $effect(() => {
    locationsState = locations;
  });

  let searchQuery = $state('');
  let selectedCategory = $state(defaultCategory);
  let filteredLocations = $state<Location[]>([]);
  let categories = $state<string[]>([]);

  // Обновляем filteredLocations при изменении зависимостей
  $effect(() => {
    let result: Location[] = [...locations];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(location =>
        location.name.toLowerCase().includes(query) ||
        (location.address && location.address.toLowerCase().includes(query)) ||
        (location.description && location.description.toLowerCase().includes(query)) ||
        (location.tags && location.tags.some(tag => tag.toLowerCase().includes(query)))
      );
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      result = result.filter(location => location.category === selectedCategory);
    }

    filteredLocations = result.slice(0, maxLocations);
  });

  // Обновляем categories при изменении locations
  $effect(() => {
    const uniqueCategories: Set<string> = new Set<string>();
    locations.forEach(location => {
      if (location.category) {
        uniqueCategories.add(location.category);
      }
    });
    categories = ['all', ...Array.from(uniqueCategories)];
  });

  function handleSearchInput(e: Event) {
    const target = e.target as HTMLInputElement;
    searchQuery = target.value;
    onSearch?.(searchQuery);
  }

  function handleCategoryChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    selectedCategory = target.value;
    onCategoryChange?.(selectedCategory);
  }

  function handleLocationSelect(location: Location) {
    onLocationSelect?.(location);
  }

  function formatDistance(distance: number): string {
    if (distance < 1) {
      return `${Math.round(distance * 1000)}m`;
    }
    return `${distance.toFixed(1)}km`;
  }
</script>

<div class={`location-selector ${hostClass}`} {...restProps}>
  <!-- Header with search and filters -->
  <div class={`mb-4 ${headerClass}`}>
    <div class="flex flex-wrap gap-4 items-center">
      {#if showSearch}
        <div class="flex-grow min-w-[200px]">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search class="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              class={`block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${searchClass}`}
              placeholder={searchPlaceholder}
              value={searchQuery}
              oninput={handleSearchInput}
            />
          </div>
        </div>
      {/if}

      {#if showCategoryFilter}
        <div>
          <select
            class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            value={selectedCategory}
            onchange={handleCategoryChange}
          >
            {#each categories as category}
              <option value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            {/each}
          </select>
        </div>
      {/if}

      {#if showMapToggle}
        <div class={`flex border rounded-md ${viewToggleClass}`}>
          <button
            type="button"
            class={`p-2 ${currentView === 'list' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:text-gray-700'}`}
            aria-label="List view"
            onclick={() => currentView = 'list'}
          >
            <List class="h-5 w-5" />
          </button>
          <button
            type="button"
            class={`p-2 ${currentView === 'grid' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:text-gray-700'}`}
            aria-label="Grid view"
            onclick={() => currentView = 'grid'}
          >
            <Grid3X3 class="h-5 w-5" />
          </button>
        </div>
      {/if}
    </div>
  </div>

  <!-- Locations display -->
  {#if currentView === 'list'}
    <div class="space-y-4">
      {#each filteredLocations as location}
        <div
          class={`flex items-center p-4 border rounded-lg cursor-pointer hover:shadow-md transition-shadow ${itemClass}`}
          onclick={() => handleLocationSelect(location)}
          role="button"
          tabindex={0}
          onkeydown={(e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') handleLocationSelect(location);
          }}
        >
          <div class="flex-shrink-0 p-3 rounded-md bg-blue-100 text-blue-600">
            <MapPin class="h-6 w-6" />
          </div>

          <div class="ml-4 flex-1 min-w-0">
            <div class="flex items-baseline justify-between">
              <h3 class="text-sm font-medium text-gray-900 truncate">{location.name}</h3>
              {#if location.distance !== undefined && showDistance}
                <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {formatDistance(location.distance)}
                </span>
              {/if}
            </div>

            {#if location.address}
              <p class="mt-1 text-sm text-gray-500 truncate">{location.address}</p>
            {/if}

            <div class="mt-2 flex items-center">
              {#if location.rating !== undefined}
                <div class="flex items-center">
                  {#each Array(5) as _, i}
                    <Star
                      class={`h-4 w-4 ${
                        i < Math.floor(location.rating)
                          ? 'text-yellow-400 fill-current'
                          : (i === Math.floor(location.rating) && location.rating % 1 >= 0.5
                            ? 'text-yellow-400'
                            : 'text-gray-300')
                      }`}
                    />
                  {/each}
                  <span class="ml-1 text-sm text-gray-500">{location.rating.toFixed(1)}</span>
                </div>
              {/if}

              {#if location.category}
                <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {location.category}
                </span>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  {:else if currentView === 'grid'}
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {#each filteredLocations as location}
        <div
          class={`border rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow ${itemClass}`}
          onclick={() => handleLocationSelect(location)}
          role="button"
          tabindex={0}
          onkeydown={(e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') handleLocationSelect(location);
          }}
        >
          <div class="flex items-start">
            <div class="flex-shrink-0 p-2 rounded-md bg-blue-100 text-blue-600">
              <MapPin class="h-5 w-5" />
            </div>

            <div class="ml-4 min-w-0">
              <h3 class="text-sm font-medium text-gray-900 truncate">{location.name}</h3>

              {#if location.address}
                <p class="mt-1 text-sm text-gray-500 line-clamp-2">{location.address}</p>
              {/if}

              <div class="mt-3 flex items-center justify-between">
                {#if location.distance !== undefined && showDistance}
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {formatDistance(location.distance)}
                  </span>
                {/if}

                {#if location.rating !== undefined}
                  <div class="flex items-center">
                    {#each Array(5) as _, i}
                      <Star
                        class={`h-4 w-4 ${
                          i < Math.floor(location.rating)
                            ? 'text-yellow-400 fill-current'
                            : (i === Math.floor(location.rating) && location.rating % 1 >= 0.5
                              ? 'text-yellow-400'
                              : 'text-gray-300')
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

  {#if filteredLocations.length === 0}
    <div class="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
      <MapPin class="mx-auto h-12 w-12 text-gray-400" />
      <h3 class="mt-2 text-sm font-medium text-gray-900">No locations found</h3>
      <p class="mt-1 text-sm text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
    </div>
  {/if}
</div>
