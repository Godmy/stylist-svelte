<script lang="ts">
	import type { LocationSelectorLocation } from '$stylist/geo/type/object/location-selector/locationselectorlocation';
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import LocationSelector from './index.svelte';

	const locations: LocationSelectorLocation[] = [
		{
			id: '1',
			name: 'Central Park',
			address: 'New York, NY',
			latitude: 40.7812,
			longitude: -73.9665,
			description: 'Large urban park in Manhattan',
			category: 'Park',
			rating: 4.8,
			distance: 2.5,
			tags: ['park', 'outdoors', 'famous']
		},
		{
			id: '2',
			name: 'Times Square',
			address: 'New York, NY',
			latitude: 40.758,
			longitude: -73.9855,
			description: 'Major commercial intersection and tourist destination',
			category: 'Landmark',
			rating: 4.2,
			distance: 1.2,
			tags: ['landmark', 'shopping', 'tourist']
		},
		{
			id: '3',
			name: 'Brooklyn Bridge',
			address: 'New York, NY',
			latitude: 40.7061,
			longitude: -73.9969,
			description: 'Historic suspension bridge connecting Manhattan and Brooklyn',
			category: 'Landmark',
			rating: 4.7,
			distance: 3.1,
			tags: ['bridge', 'landmark', 'historic']
		},
		{
			id: '4',
			name: 'Metropolitan Museum of Art',
			address: 'New York, NY',
			latitude: 40.7794,
			longitude: -73.9632,
			description: 'Art museum on the eastern edge of Central Park',
			category: 'Museum',
			rating: 4.9,
			distance: 1.8,
			tags: ['museum', 'art', 'culture']
		},
		{
			id: '5',
			name: 'Statue of Liberty',
			address: 'New York, NY',
			latitude: 40.6892,
			longitude: -74.0445,
			description: 'Colossal neoclassical sculpture on Liberty Island',
			category: 'Landmark',
			rating: 4.8,
			distance: 8.7,
			tags: ['statue', 'landmark', 'freedom']
		}
	];

	let currentView: 'list' | 'grid' | 'map' = 'list';
	let showSearch = true;
	let showCategoryFilter = true;
	let showMapToggle = true;
	let showDistance = true;
	let maxLocations = 10;

	const controls: SlotStory[] = [
		{ name: 'currentView', type: 'select', options: ['list', 'grid', 'map'], defaultValue: 'list' },
		{ name: 'showSearch', type: 'boolean', defaultValue: true },
		{ name: 'showCategoryFilter', type: 'boolean', defaultValue: true },
		{ name: 'showMapToggle', type: 'boolean', defaultValue: true },
		{ name: 'showDistance', type: 'boolean', defaultValue: true },
		{ name: 'searchPlaceholder', type: 'text', defaultValue: 'Search locations...' },
		{ name: 'defaultCategory', type: 'text', defaultValue: 'all' },
		{ name: 'maxLocations', type: 'number', defaultValue: 10 }
	];
</script>

<Story
	id="organisms-location-selector"
	title="Organisms / Interaction / Geo / LocationSelector"
	component={LocationSelector}
	category="Organisms/Interaction/Geo"
	description="Interactive location selector with list and grid views, search and filtering capabilities."
	{controls}
>
	{#snippet children(values: any)}
		<div class="sb-organisms-location-selector _c1">
			<h1 class="_c2">LocationSelector Component</h1>

			<div class="_c3">
				<h2 class="_c4">Interactive LocationSelector</h2>
				<div class="_c5">
					<LocationSelector
						{locations}
						currentView={values.currentView}
						showSearch={values.showSearch}
						showCategoryFilter={values.showCategoryFilter}
						showMapToggle={values.showMapToggle}
						showDistance={values.showDistance}
						searchPlaceholder={values.searchPlaceholder}
						defaultCategory={values.defaultCategory}
						maxLocations={values.maxLocations}
						onLocationSelect={(location: LocationSelectorLocation) => {
							console.log('Location selected:', location.name);
						}}
						onSearch={(query: string) => {
							console.log('Search query:', query);
						}}
						onCategoryChange={(category: string) => {
							console.log('Category changed to:', category);
						}}
					/>
				</div>

				<div class="_c6">
					<div>
						<label for="view-type" class="_c7">View Type:</label>
						<select id="view-type" bind:value={currentView} class="_c8">
							<option value="list">List</option>
							<option value="grid">Grid</option>
						</select>
					</div>

					<div class="_c9">
						<label for="show-search" class="_c10">
							<input id="show-search" type="checkbox" bind:checked={showSearch} />
							Show Search
						</label>
					</div>

					<div class="_c9">
						<label for="show-category" class="_c10">
							<input id="show-category" type="checkbox" bind:checked={showCategoryFilter} />
							Show Category Filter
						</label>
					</div>

					<div class="_c9">
						<label for="show-map-toggle" class="_c10">
							<input id="show-map-toggle" type="checkbox" bind:checked={showMapToggle} />
							Show View Toggle
						</label>
					</div>

					<div class="_c9">
						<label for="show-distance" class="_c10">
							<input id="show-distance" type="checkbox" bind:checked={showDistance} />
							Show Distance
						</label>
					</div>

					<div>
						<label for="max-locations" class="_c7">Max Locations:</label>
						<input
							id="max-locations"
							type="number"
							bind:value={maxLocations}
							class="_c11"
							min="1"
							max="50"
						/>
					</div>
				</div>
			</div>

			<div class="_c12">
				<h2 class="_c4">LocationSelector Variations</h2>
				<div class="_c13">
					<div>
						<h3 class="_c14">Grid View</h3>
						<div class="_c5">
							<LocationSelector
								{locations}
								currentView="grid"
								showSearch={true}
								showCategoryFilter={true}
								showDistance={true}
							/>
						</div>
					</div>
					<div>
						<h3 class="_c14">Without Distance</h3>
						<div class="_c5">
							<LocationSelector
								{locations}
								currentView="list"
								showSearch={true}
								showCategoryFilter={false}
								showDistance={false}
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
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}
	._c11 {
		width: 4rem;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding: 0.25rem;
	}
	._c12 {
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding: 1rem;
	}
	._c13 > * + * {
		margin-top: 1rem;
	}
	._c14 {
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
		margin-bottom: 0.25rem;
		display: block;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	._c8 {
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding: 0.25rem;
	}
	._c9 {
		display: flex;
		align-items: flex-end;
	}
</style>
