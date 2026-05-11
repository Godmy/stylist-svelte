<script lang="ts">
	import type { Coordinates, MapMarker } from '$stylist/geo/type/struct/location-picker';
	import { Story } from '$stylist/playground/component';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

	import LocationPicker from './index.svelte';

	let center: Coordinates = { lat: 37.7749, lng: -122.4194 };
	let zoom = 12;
	const markers: MapMarker[] = [
		{
			id: '1',
			coordinates: { lat: 37.7749, lng: -122.4194 },
			title: 'San Francisco',
			description: 'The city by the bay'
		},
		{
			id: '2',
			coordinates: { lat: 37.8044, lng: -122.2712 },
			title: 'Oakland',
			description: 'East Bay city'
		},
		{
			id: '3',
			coordinates: { lat: 37.3692, lng: -122.0382 },
			title: 'San Jose',
			description: 'Capital of Silicon Valley'
		}
	];
	let selectedMarker = '1';
	let showSearch = true;
	let showCoordinates = true;
	let showCurrentLocation = true;
	let disableInteraction = false;
	let maxZoom = 18;
	let minZoom = 1;

	const controls: InterfaceControllerSettings[] = [
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
	{controls}
>
	{#snippet children(values: any)}
		<div class="sb-organisms-location-picker p-4">
			<h1 class="mb-4 text-lg font-semibold">LocationPicker Component</h1>

			<div class="mb-6 rounded border p-4">
				<h2 class="text-md mb-2 font-semibold">Interactive LocationPicker</h2>
				<div class="mx-auto max-w-3xl">
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
						onLocationSelect={(coords: Coordinates) => {
							console.log('Location selected:', coords);
						}}
						onMarkerClick={(marker: MapMarker) => {
							selectedMarker = marker.id;
							console.log('Marker clicked:', marker);
						}}
						onMapClick={(coords: Coordinates) => {
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
							<input
								id="show-current-location"
								type="checkbox"
								bind:checked={showCurrentLocation}
							/>
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
						<label for="max-zoom" class="mb-1 block text-sm">Max Zoom:</label>
						<input
							id="max-zoom"
							type="number"
							bind:value={maxZoom}
							class="w-16 rounded border p-1"
							min="1"
							max="20"
						/>
					</div>

					<div>
						<label for="min-zoom" class="mb-1 block text-sm">Min Zoom:</label>
						<input
							id="min-zoom"
							type="number"
							bind:value={minZoom}
							class="w-16 rounded border p-1"
							min="1"
							max="20"
						/>
					</div>
				</div>
			</div>

			<div class="rounded border p-4">
				<h2 class="text-md mb-2 font-semibold">LocationPicker Variations</h2>
				<div class="space-y-4">
					<div>
						<h3 class="mb-2 text-sm font-medium">Without Search</h3>
						<div class="mx-auto max-w-3xl">
							<!-- New York -->
							<LocationPicker
								center={{ lat: 40.7128, lng: -74.006 }}
								zoom={10}
								markers={[
									{ id: 'nyc', coordinates: { lat: 40.7128, lng: -74.006 }, title: 'New York City' }
								]}
								showSearch={false}
								showCoordinates={true}
								showCurrentLocation={false}
							/>
						</div>
					</div>
					<div>
						<h3 class="mb-2 text-sm font-medium">Without Coordinates Display</h3>
						<div class="mx-auto max-w-3xl">
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
