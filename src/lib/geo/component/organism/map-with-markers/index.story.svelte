<script lang="ts">
  import Story from '$stylist/playground/component/molecule/story/index.svelte';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import MapWithMarkers from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'title', type: 'text', defaultValue: 'Map with Markers' },
    { name: 'showSearch', type: 'boolean', defaultValue: true },
    { name: 'zoom', type: 'range', defaultValue: 5, min: 1, max: 18 },
    { name: 'height', type: 'text', defaultValue: '400px' }
  ];

  const markers = [
    { id: '1', name: 'Marker 1', lat: 59.93, lng: 30.33, size: 'md', color: 'primary' as const },
    { id: '2', name: 'Marker 2', lat: 55.75, lng: 37.62, size: 'lg', color: 'success' as const },
    { id: '3', name: 'Marker 3', lat: 56.85, lng: 60.61, size: 'sm', color: 'warning' as const }
  ];
</script>

<Story {controls} component={MapWithMarkers} title="MapWithMarkers" category="Organisms/Geo/MapWithMarkers" description="Interactive map with draggable markers">
  {#snippet children(values: any)}
    <MapWithMarkers
      title={values.title as string}
      markers={markers}
      showSearch={values.showSearch as boolean}
      zoom={Number(values.zoom)}
      height={values.height as string}
    />
  {/snippet}
</Story>
