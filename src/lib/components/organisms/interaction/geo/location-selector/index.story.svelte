<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import LocationSelector from './index.svelte';

  type Location = {
    id: string;
    name: string;
    address?: string;
    latitude: number;
    longitude: number;
    description?: string;
    category?: string;
    rating?: number;
    distance?: number;
    tags?: string[];
  };

  let locations: Location[] = [
    {
      id: '1',
      name: 'Central Park',
      address: 'New York, NY',
      latitude: 40.7812,
      longitude: -73.9665,
      description: 'Large urban park in Manhattan',
      category: 'Park',
      rating: 4.8,
      distance: 2.5,
      tags: ['park', 'outdoors', 'famous']
    },
    {
      id: '2',
      name: 'Times Square',
      address: 'New York, NY',
      latitude: 40.7580,
      longitude: -73.9855,
      description: 'Major commercial intersection and tourist destination',
      category: 'Landmark',
      rating: 4.2,
      distance: 1.2,
      tags: ['landmark', 'shopping', 'tourist']
    },
    {
      id: '3',
      name: 'Brooklyn Bridge',
      address: 'New York, NY',
      latitude: 40.7061,
      longitude: -73.9969,
      description: 'Historic suspension bridge connecting Manhattan and Brooklyn',
      category: 'Landmark',
      rating: 4.7,
      distance: 3.1,
      tags: ['bridge', 'landmark', 'historic']
    },
    {
      id: '4',
      name: 'Metropolitan Museum of Art',
      address: 'New York, NY',
      latitude: 40.7794,
      longitude: -73.9632,
      description: 'Art museum on the eastern edge of Central Park',
      category: 'Museum',
      rating: 4.9,
      distance: 1.8,
      tags: ['museum', 'art', 'culture']
    },
    {
      id: '5',
      name: 'Statue of Liberty',
      address: 'New York, NY',
      latitude: 40.6892,
      longitude: -74.0445,
      description: 'Colossal neoclassical sculpture on Liberty Island',
      category: 'Landmark',
      rating: 4.8,
      distance: 8.7,
      tags: ['statue', 'landmark', 'freedom']
    }
  ];

  let currentView: 'list' | 'grid' | 'map' = 'list';
  let showSearch: boolean = true;
  let showCategoryFilter: boolean = true;
  let showMapToggle: boolean = true;
  let showDistance: boolean = true;
  let searchPlaceholder: string = 'Search locations...';
  let defaultCategory: string = 'all';
  let maxLocations: number = 10;

  type Props = {
    currentView: 'list' | 'grid' | 'map';
    showSearch: boolean;
    showCategoryFilter: boolean;
    showMapToggle: boolean;
    showDistance: boolean;
    searchPlaceholder: string;
    defaultCategory: string;
    maxLocations: number;
  };

  const controls: ControlConfig[] = [
    { name: 'currentView', type: 'select', options: ['list', 'grid', 'map'], defaultValue: 'list' },
    { name: 'showSearch', type: 'boolean', defaultValue: true },
    { name: 'showCategoryFilter', type: 'boolean', defaultValue: true },
    { name: 'showMapToggle', type: 'boolean', defaultValue: true },
    { name: 'showDistance', type: 'boolean', defaultValue: true },
    { name: 'searchPlaceholder', type: 'text', defaultValue: 'Search locations...' },
    { name: 'defaultCategory', type: 'text', defaultValue: 'all' },
    { name: 'maxLocations', type: 'number', defaultValue: 10 }
  ];
</script>

<Story
  id="organisms-location-selector"
  title="Organisms / Interaction / Geo / LocationSelector"
  component={LocationSelector}
  category="Organisms/Interaction/Geo"
  description="Interactive location selector with list and grid views, search and filtering capabilities."
  controls={controls}
>
  {#snippet children(props)}
    <div class="sb-organisms-location-selector p-4">
      <h1 class="text-lg font-semibold mb-4">LocationSelector Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive LocationSelector</h2>
        <div class="max-w-3xl mx-auto">
          <LocationSelector
            {locations}
            currentView={props.currentView}
            showSearch={props.showSearch}
            showCategoryFilter={props.showCategoryFilter}
            showMapToggle={props.showMapToggle}
            showDistance={props.showDistance}
            searchPlaceholder={props.searchPlaceholder}
            defaultCategory={props.defaultCategory}
            maxLocations={props.maxLocations}
            onLocationSelect={(location) => {
              console.log('Location selected:', location.name);
            }}
            onSearch={(query) => {
              console.log('Search query:', query);
            }}
            onCategoryChange={(category) => {
              console.log('Category changed to:', category);
            }}
          />
        </div>

        <div class="mt-4 flex flex-wrap gap-2">
          <div>
            <label for="view-type" class="block text-sm mb-1">View Type:</label>
            <select
              id="view-type"
              bind:value={currentView}
              class="border rounded p-1"
            >
              <option value="list">List</option>
              <option value="grid">Grid</option>
            </select>
          </div>

          <div class="flex items-end">
            <label for="show-search" class="flex items-center gap-1">
              <input id="show-search" type="checkbox" bind:checked={showSearch} />
              Show Search
            </label>
          </div>

          <div class="flex items-end">
            <label for="show-category" class="flex items-center gap-1">
              <input id="show-category" type="checkbox" bind:checked={showCategoryFilter} />
              Show Category Filter
            </label>
          </div>

          <div class="flex items-end">
            <label for="show-map-toggle" class="flex items-center gap-1">
              <input id="show-map-toggle" type="checkbox" bind:checked={showMapToggle} />
              Show View Toggle
            </label>
          </div>

          <div class="flex items-end">
            <label for="show-distance" class="flex items-center gap-1">
              <input id="show-distance" type="checkbox" bind:checked={showDistance} />
              Show Distance
            </label>
          </div>

          <div>
            <label for="max-locations" class="block text-sm mb-1">Max Locations:</label>
            <input
              id="max-locations"
              type="number"
              bind:value={maxLocations}
              class="border rounded p-1 w-16"
              min="1"
              max="50"
            />
          </div>
        </div>
      </div>

      <div class="p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">LocationSelector Variations</h2>
        <div class="space-y-4">
          <div>
            <h3 class="text-sm font-medium mb-2">Grid View</h3>
            <div class="max-w-3xl mx-auto">
              <LocationSelector
                {locations}
                currentView="grid"
                showSearch={true}
                showCategoryFilter={true}
                showDistance={true}
              />
            </div>
          </div>
          <div>
            <h3 class="text-sm font-medium mb-2">Without Distance</h3>
            <div class="max-w-3xl mx-auto">
              <LocationSelector
                {locations}
                currentView="list"
                showSearch={true}
                showCategoryFilter={false}
                showDistance={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  {/snippet}
</Story>


