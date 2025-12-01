<script lang="ts">
  import GeoLocationPicker from './GeoLocationPicker.svelte';

  type Location = {
    latitude: number;
    longitude: number;
    address?: string;
    name?: string;
  };

  let selectedLocation1: Location = {
    latitude: 35.6762,
    longitude: 139.6503,
    address: 'Tokyo, Japan',
    name: 'Tokyo'
  };
  let selectedLocation2: Location = {
    latitude: 51.5074,
    longitude: -0.1278,
    address: 'London, UK',
    name: 'London'
  };

  function handleLocationSelect1(location: Location) {
    selectedLocation1 = location;
    console.log('Location 1 selected:', location);
  }

  function handleLocationSelect2(location: Location) {
    selectedLocation2 = location;
    console.log('Location 2 selected:', location);
  }
</script>

<div class="p-4">
    <h1>Advanced GeoLocationPicker Stories</h1>

    <div class="my-4 p-4 border rounded">
        <h2>GeoLocationPicker with Initial Location</h2>
        <GeoLocationPicker
            initialLocation={selectedLocation1}
            onLocationSelect={handleLocationSelect1}
        />
        <p class="mt-2">Selected: {selectedLocation1?.address || 'No location selected'}</p>
    </div>

    <div class="my-4 p-4 border rounded">
        <h2>GeoLocationPicker with Coordinates Display</h2>
        <GeoLocationPicker
            initialLocation={selectedLocation2}
            onLocationSelect={handleLocationSelect2}
            showCoordinates={true}
        />
        <p class="mt-2">Selected: {selectedLocation2?.address || 'No location selected'}</p>
    </div>
</div>
