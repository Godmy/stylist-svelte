<script lang="ts">
  import GeoLocationPicker from './GeoLocationPicker.svelte';

  type Location = {
    latitude: number;
    longitude: number;
    address?: string;
    name?: string;
  };

  let selectedLocation: Location = {
    latitude: 51.5074,
    longitude: -0.1278,
    address: 'London, UK',
    name: 'London'
  };

  function handleLocationSelect(location: Location) {
    selectedLocation = location;
    console.log('Location selected:', location);
  }

  const initialPredefinedLocations: Location[] = [
    { latitude: 40.7128, longitude: -74.006, address: 'New York, USA', name: 'New York' },
    { latitude: 48.8566, longitude: 2.3522, address: 'Paris, France', name: 'Paris' },
    { latitude: 35.6895, longitude: 139.6917, address: 'Tokyo, Japan', name: 'Tokyo' }
  ];
</script>

<div class="p-4">
    <h1>GeoLocationPicker Stories</h1>

    <div class="my-4 p-4 border rounded">
        <h2>Default GeoLocationPicker</h2>
        <GeoLocationPicker
            initialLocation={selectedLocation}
            onLocationSelect={handleLocationSelect}
        />
        <p class="mt-2">Selected: {selectedLocation?.address || 'No location selected'}</p>
    </div>

    <div class="my-4 p-4 border rounded">
        <h2>GeoLocationPicker with Initial Location</h2>
        <GeoLocationPicker
            initialLocation={{
                latitude: 40.7128,
                longitude: -74.0060,
                address: 'New York, USA',
                name: 'New York'
            }}
            onLocationSelect={handleLocationSelect}
        />
        <p class="mt-2">Selected: {selectedLocation?.address || 'No location selected'}</p>
    </div>

    <div class="my-4 p-4 border rounded">
        <h2>GeoLocationPicker with Search Hidden</h2>
        <GeoLocationPicker
            initialLocation={selectedLocation}
            onLocationSelect={handleLocationSelect}
            showSearch={false}
            showCurrentLocation={false}
        />
        <p class="mt-2">Selected: {selectedLocation?.address || 'No location selected'}</p>
    </div>

    <div class="my-4 p-4 border rounded">
        <h2>GeoLocationPicker with Limited Zoom</h2>
        <GeoLocationPicker
            initialLocation={selectedLocation}
            onLocationSelect={handleLocationSelect}
            minZoom={5}
            maxZoom={15}
        />
        <p class="mt-2">Selected: {selectedLocation?.address || 'No location selected'}</p>
    </div>
</div>
