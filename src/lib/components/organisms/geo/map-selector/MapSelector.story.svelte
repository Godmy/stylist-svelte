<script>
  import MapSelector from './MapSelector.svelte';

  const locations = [
    { id: '1', name: 'London', latitude: 51.5074, longitude: -0.1278 },
    { id: '2', name: 'Paris', latitude: 48.8566, longitude: 2.3522 },
    { id: '3', name: 'New York', latitude: 40.7128, longitude: -74.0060 }
  ];
</script>

<div class="p-4">
  <h1>MapSelector Story</h1>
  <MapSelector
    {locations}
    class="my-2"
  />
</div>