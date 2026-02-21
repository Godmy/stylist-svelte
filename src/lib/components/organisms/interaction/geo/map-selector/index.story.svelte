<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';

  import MapSelector from './index.svelte';

  const locations = [
    { id: '1', name: 'London', latitude: 51.5074, longitude: -0.1278 },
    { id: '2', name: 'Paris', latitude: 48.8566, longitude: 2.3522 },
    { id: '3', name: 'New York', latitude: 40.7128, longitude: -74.0060 }
  ];

  type Props = {
    showSearch: boolean;
    showZoomControls: boolean;
    showCurrentLocation: boolean;
    showMarkers: boolean;
    height: string;
    width: string;
  };

  const controls: ControlConfig[] = [
    { name: 'showSearch', type: 'boolean', defaultValue: true },
    { name: 'showZoomControls', type: 'boolean', defaultValue: true },
    { name: 'showCurrentLocation', type: 'boolean', defaultValue: true },
    { name: 'showMarkers', type: 'boolean', defaultValue: true },
    { name: 'height', type: 'text', defaultValue: '400px' },
    { name: 'width', type: 'text', defaultValue: '100%' }
  ];
</script>

<Story
  id="organisms-map-selector"
  title="Organisms / Interaction / Geo / MapSelector"
  component={MapSelector}
  category="Organisms/Interaction/Geo"
  description="Interactive map selector with location markers and controls."
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="sb-organisms-map-selector p-4">
      <h1>MapSelector Story</h1>
      <MapSelector
        {locations}
        showSearch={values.showSearch}
        showZoomControls={values.showZoomControls}
        showCurrentLocation={values.showCurrentLocation}
        showMarkers={values.showMarkers}
        height={values.height}
        width={values.width}
        class="my-2"
      />
    </div>
  {/snippet}
</Story>


