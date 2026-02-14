<script>
  import MapWithMarkers from './index.svelte';

  const markers = [
    { id: '1', lat: 51.5074, lng: -0.1278, title: 'London' },
    { id: '2', lat: 48.8566, lng: 2.3522, title: 'Paris' },
    { id: '3', lat: 40.7128, lng: -74.0060, title: 'New York' }
  ];

  const initialView = { center: { lat: 51.5074, lng: -0.1278 }, zoom: 4 };
</script>

<div class="p-4">
  <h1>MapWithMarkers Story</h1>
  <MapWithMarkers
    {markers}
    {initialView}
    class="my-2"
  />
</div>