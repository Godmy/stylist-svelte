<script>
  import MapMarker from './index.svelte';

  let coordinates = { lat: 51.5074, lng: -0.1278 };
</script>

<div class="p-4">
  <h1>MapMarker Story</h1>
  <div class="relative w-64 h-64 border">
    <MapMarker
      title="London"
      {coordinates}
      class="my-2"
    />
  </div>
</div>