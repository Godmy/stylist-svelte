<script lang="ts">
	import type { Coordinates } from '$stylist/geo/type/object/location-picker/coordinates';
	import type { MapMarker } from '$stylist/geo/type/object/location-picker/mapmarker';
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

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

	const controls: SlotStory[] = [
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
		<div class="sb-organisms-location-picker _c1">
			<h1 class="_c2">LocationPicker Component</h1>

			<div class="_c3">
				<h2 class="_c4">Interactive LocationPicker</h2>
				<div class="_c5">
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

				<div class="_c6">
					<div class="_c7">
						<label for="show-search" class="_c8">
							<input id="show-search" type="checkbox" bind:checked={showSearch} />
							Show Search
						</label>
					</div>

					<div class="_c7">
						<label for="show-coordinates" class="_c8">
							<input id="show-coordinates" type="checkbox" bind:checked={showCoordinates} />
							Show Coordinates
						</label>
					</div>

					<div class="_c7">
						<label for="show-current-location" class="_c8">
							<input
								id="show-current-location"
								type="checkbox"
								bind:checked={showCurrentLocation}
							/>
							Show Current Location
						</label>
					</div>

					<div class="_c7">
						<label for="disable-interaction" class="_c8">
							<input id="disable-interaction" type="checkbox" bind:checked={disableInteraction} />
							Disable Interaction
						</label>
					</div>

					<div>
						<label for="max-zoom" class="_c9">Max Zoom:</label>
						<input id="max-zoom" type="number" bind:value={maxZoom} class="_c10" min="1" max="20" />
					</div>

					<div>
						<label for="min-zoom" class="_c9">Min Zoom:</label>
						<input id="min-zoom" type="number" bind:value={minZoom} class="_c10" min="1" max="20" />
					</div>
				</div>
			</div>

			<div class="_c11">
				<h2 class="_c4">LocationPicker Variations</h2>
				<div class="_c12">
					<div>
						<h3 class="_c13">Without Search</h3>
						<div class="_c5">
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
						<h3 class="_c13">Without Coordinates Display</h3>
						<div class="_c5">
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

<style>
	._c1 {
		padding: 1rem;
	}
	._c10 {
		width: 4rem;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding: 0.25rem;
	}
	._c11 {
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding: 1rem;
	}
	._c12 > * + * {
		margin-top: 1rem;
	}
	._c13 {
		margin-bottom: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
	}
	._c2 {
		margin-bottom: 1rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
	._c3 {
		margin-bottom: 1.5rem;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding: 1rem;
	}
	._c4 {
		font-size: 1rem;
		line-height: 1.5rem;
		margin-bottom: 0.5rem;
		font-weight: 600;
	}
	._c5 {
		margin-left: auto;
		margin-right: auto;
		max-width: 48rem;
	}
	._c6 {
		margin-top: 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	._c7 {
		display: flex;
		align-items: flex-end;
	}
	._c8 {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}
	._c9 {
		margin-bottom: 0.25rem;
		display: block;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
</style>
