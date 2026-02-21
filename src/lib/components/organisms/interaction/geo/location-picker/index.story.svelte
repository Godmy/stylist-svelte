<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';

  import LocationPicker from './index.svelte';

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

  let center: Coordinates = { lat: 37.7749, lng: -122.4194 }; // San Francisco
  let zoom: number = 12;
  let markers: MapMarker[] = [
    { id: '1', coordinates: { lat: 37.7749, lng: -122.4194 }, title: 'San Francisco', description: 'The city by the bay' },
    { id: '2', coordinates: { lat: 37.8044, lng: -122.2712 }, title: 'Oakland', description: 'East Bay city' },
    { id: '3', coordinates: { lat: 37.3692, lng: -122.0382 }, title: 'San Jose', description: 'Capital of Silicon Valley' }
  ];
  let selectedMarker: string = '1';
  let showSearch: boolean = true;
  let showCoordinates: boolean = true;
  let showCurrentLocation: boolean = true;
  let disableInteraction: boolean = false;
  let maxZoom: number = 18;
  let minZoom: number = 1;

  type Props = {
    showSearch: boolean;
    showCoordinates: boolean;
    showCurrentLocation: boolean;
    disableInteraction: boolean;
    maxZoom: number;
    minZoom: number;
  };

  const controls: ControlConfig[] = [
    { name: 'showSearch', type: 'boolean', defaultValue: true },
    { name: 'showCoordinates', type: 'boolean', defaultValue: true },
    { name: 'showCurrentLocation', type: 'boolean', defaultValue: true },
    { name: 'disableInteraction', type: 'boolean', defaultValue: false },
    { name: 'maxZoom', type: 'number', defaultValue: 18 },
    { name: 'minZoom', type: 'number', defaultValue: 1 }
  ];
</script>

<Story
  id="organisms-location-picker"
  title="Organisms / Interaction / Geo / LocationPicker"
  component={LocationPicker}
  category="Organisms/Interaction/Geo"
  description="Interactive map component for selecting locations with markers and search functionality."
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="sb-organisms-location-picker p-4">
      <h1 class="text-lg font-semibold mb-4">LocationPicker Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive LocationPicker</h2>
        <div class="max-w-3xl mx-auto">
          <LocationPicker
            {center}
            {zoom}
            {markers}
            {selectedMarker}
            showSearch={values.showSearch}
            showCoordinates={values.showCoordinates}
            showCurrentLocation={values.showCurrentLocation}
            disableInteraction={values.disableInteraction}
            maxZoom={values.maxZoom}
            minZoom={values.minZoom}
            onLocationSelect={(coords) => {
              console.log('Location selected:', coords);
            }}
            onMarkerClick={(marker) => {
              selectedMarker = marker.id;
              console.log('Marker clicked:', marker);
            }}
            onMapClick={(coords) => {
              console.log('Map clicked:', coords);
            }}
          />
        </div>

        <div class="mt-4 flex flex-wrap gap-2">
          <div class="flex items-end">
            <label for="show-search" class="flex items-center gap-1">
              <input id="show-search" type="checkbox" bind:checked={showSearch} />
              Show Search
            </label>
          </div>

          <div class="flex items-end">
            <label for="show-coordinates" class="flex items-center gap-1">
              <input id="show-coordinates" type="checkbox" bind:checked={showCoordinates} />
              Show Coordinates
            </label>
          </div>

          <div class="flex items-end">
            <label for="show-current-location" class="flex items-center gap-1">
              <input id="show-current-location" type="checkbox" bind:checked={showCurrentLocation} />
              Show Current Location
            </label>
          </div>

          <div class="flex items-end">
            <label for="disable-interaction" class="flex items-center gap-1">
              <input id="disable-interaction" type="checkbox" bind:checked={disableInteraction} />
              Disable Interaction
            </label>
          </div>

          <div>
            <label for="max-zoom" class="block text-sm mb-1">Max Zoom:</label>
            <input
              id="max-zoom"
              type="number"
              bind:value={maxZoom}
              class="border rounded p-1 w-16"
              min="1"
              max="20"
            />
          </div>

          <div>
            <label for="min-zoom" class="block text-sm mb-1">Min Zoom:</label>
            <input
              id="min-zoom"
              type="number"
              bind:value={minZoom}
              class="border rounded p-1 w-16"
              min="1"
              max="20"
            />
          </div>
        </div>
      </div>

      <div class="p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">LocationPicker Variations</h2>
        <div class="space-y-4">
          <div>
            <h3 class="text-sm font-medium mb-2">Without Search</h3>
            <div class="max-w-3xl mx-auto">
              <!-- New York -->
              <LocationPicker
                center={{ lat: 40.7128, lng: -74.0060 }}
                zoom={10}
                markers={[
                  { id: 'nyc', coordinates: { lat: 40.7128, lng: -74.0060 }, title: 'New York City' }
                ]}
                showSearch={false}
                showCoordinates={true}
                showCurrentLocation={false}
              />
            </div>
          </div>
          <div>
            <h3 class="text-sm font-medium mb-2">Without Coordinates Display</h3>
            <div class="max-w-3xl mx-auto">
              <!-- Los Angeles -->
              <LocationPicker
                center={{ lat: 34.0522, lng: -118.2437 }}
                zoom={8}
                markers={[
                  { id: 'la', coordinates: { lat: 34.0522, lng: -118.2437 }, title: 'Los Angeles' }
                ]}
                showSearch={true}
                showCoordinates={false}
                showCurrentLocation={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  {/snippet}
</Story>


