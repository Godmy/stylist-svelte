<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';
	import { Button } from '$stylist/control';
	import { createLocationSelectorState } from '$stylist/geo/function/state/location-selector';
	import type { LocationSelectorLocation } from '$stylist/geo/type/struct/location-selector';

	let props = $props();
	const state = createLocationSelectorState(props);

	function handleKeyDown(e: KeyboardEvent, location: LocationSelectorLocation): void {
		if (e.key === 'Enter' || e.key === ' ') state.handleLocationSelect(location);
	}
</script>

<div class={`c-location-selector ${props.class ?? ''}`} {...state.restProps}>
	<div class={`mb-4 ${props.headerClass ?? ''}`}>
		<div class="flex flex-wrap items-center gap-4">
			{#if state.showSearch}
				<div class="min-w-[200px] flex-grow">
					<div class="relative">
						<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<BaseIcon name="search" class="h-5 w-5 text-[var(--color-text-tertiary)]" />
						</div>
						<input
							type="text"
							class={`block w-full rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] py-2 pr-3 pl-10 leading-5 placeholder-gray-500 focus:border-[var(--color-primary-500)] focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:outline-none sm:text-sm ${props.searchClass ?? ''}`}
							placeholder={state.searchPlaceholder}
							value={state.searchQuery}
							oninput={state.handleSearchInput}
						/>
					</div>
				</div>
			{/if}

			{#if state.showCategoryFilter}
				<div>
					<select
						class="block w-full rounded-md border-[var(--color-border-primary)] py-2 pr-10 pl-3 text-base focus:border-[var(--color-primary-500)] focus:ring-blue-500 focus:outline-none sm:text-sm"
						value={state.selectedCategory}
						onchange={state.handleCategoryChangeEvent}
					>
						{#each state.categories as category}
							<option value={category}>
								{category === 'all' ? 'All Categories' : category}
							</option>
						{/each}
					</select>
				</div>
			{/if}

			{#if state.showMapToggle}
				<div class={`flex rounded-md border ${props.viewToggleClass ?? ''}`}>
					<button
						type="button"
						class={`p-2 ${state.currentView === 'list' ? 'bg-[var(--color-primary-100)] text-[var(--color-primary-700)]' : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'}`}
						aria-label="List view"
						onclick={() => (state.currentView = 'list')}
					>
						<BaseIcon name="list" class="h-5 w-5" />
					</button>
					<button
						type="button"
						class={`p-2 ${state.currentView === 'grid' ? 'bg-[var(--color-primary-100)] text-[var(--color-primary-700)]' : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'}`}
						aria-label="Grid view"
						onclick={() => (state.currentView = 'grid')}
					>
						<BaseIcon name="grid-3-x-3" class="h-5 w-5" />
					</button>
				</div>
			{/if}
		</div>
	</div>

	{#if state.currentView === 'list'}
		<div class="space-y-4">
			{#each state.filteredLocations as location}
				<div
					class={`flex cursor-pointer items-center rounded-lg border p-4 transition-shadow hover:shadow-md ${props.itemClass ?? ''}`}
					onclick={() => state.handleLocationSelect(location)}
					role="button"
					tabindex={0}
					onkeydown={(e: KeyboardEvent) => handleKeyDown(e, location)}
				>
					<div
						class="flex-shrink-0 rounded-md bg-[var(--color-primary-100)] p-3 text-[var(--color-primary-600)]"
					>
						<BaseIcon name="map-pin" class="h-6 w-6" />
					</div>

					<div class="ml-4 min-w-0 flex-1">
						<div class="flex items-baseline justify-between">
							<h3 class="truncate text-sm font-medium text-[var(--color-text-primary)]">
								{location.name}
							</h3>
							{#if location.distance !== undefined && state.showDistance}
								<span
									class="ml-2 inline-flex items-center rounded-full bg-[var(--color-primary-100)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-primary-800)]"
								>
									{state.formatDistance(location.distance)}
								</span>
							{/if}
						</div>

						{#if location.address}
							<p class="mt-1 truncate text-sm text-[var(--color-text-secondary)]">
								{location.address}
							</p>
						{/if}

						<div class="mt-2 flex items-center">
							{#if location.rating !== undefined}
								<div class="flex items-center">
									{#each Array(5) as _, i}
										<BaseIcon
											name="star"
											class={`h-4 w-4 ${
												i < Math.floor(location.rating)
													? 'fill-current text-yellow-400'
													: i === Math.floor(location.rating) && location.rating % 1 >= 0.5
														? 'text-yellow-400'
														: 'text-[var(--color-text-tertiary)]'
											}`}
										/>
									{/each}
									<span class="ml-1 text-sm text-[var(--color-text-secondary)]"
										>{location.rating.toFixed(1)}</span
									>
								</div>
							{/if}

							{#if location.category}
								<span
									class="ml-2 inline-flex items-center rounded-full bg-[var(--color-background-secondary)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-text-primary)]"
								>
									{location.category}
								</span>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	{:else if state.currentView === 'grid'}
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			{#each state.filteredLocations as location}
				<div
					class={`cursor-pointer rounded-lg border p-4 transition-shadow hover:shadow-md ${props.itemClass ?? ''}`}
					onclick={() => state.handleLocationSelect(location)}
					role="button"
					tabindex={0}
					onkeydown={(e: KeyboardEvent) => handleKeyDown(e, location)}
				>
					<div class="flex items-start">
						<div
							class="flex-shrink-0 rounded-md bg-[var(--color-primary-100)] p-2 text-[var(--color-primary-600)]"
						>
							<BaseIcon name="map-pin" class="h-5 w-5" />
						</div>

						<div class="ml-4 min-w-0">
							<h3 class="truncate text-sm font-medium text-[var(--color-text-primary)]">
								{location.name}
							</h3>

							{#if location.address}
								<p class="mt-1 line-clamp-2 text-sm text-[var(--color-text-secondary)]">
									{location.address}
								</p>
							{/if}

							<div class="mt-3 flex items-center justify-between">
								{#if location.distance !== undefined && state.showDistance}
									<span
										class="inline-flex items-center rounded-full bg-[var(--color-primary-100)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-primary-800)]"
									>
										{state.formatDistance(location.distance)}
									</span>
								{/if}

								{#if location.rating !== undefined}
									<div class="flex items-center">
										{#each Array(5) as _, i}
											<BaseIcon
												name="star"
												class={`h-4 w-4 ${
													i < Math.floor(location.rating)
														? 'fill-current text-yellow-400'
														: i === Math.floor(location.rating) && location.rating % 1 >= 0.5
															? 'text-yellow-400'
															: 'text-[var(--color-text-tertiary)]'
												}`}
											/>
										{/each}
									</div>
								{/if}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	{/if}

	{#if state.filteredLocations.length === 0}
		<div
			class="rounded-lg border-2 border-dashed border-[var(--color-border-primary)] py-12 text-center"
		>
			<BaseIcon name="map-pin" class="mx-auto h-12 w-12 text-[var(--color-text-tertiary)]" />
			<h3 class="mt-2 text-sm font-medium text-[var(--color-text-primary)]">No locations found</h3>
			<p class="mt-1 text-sm text-[var(--color-text-secondary)]">
				Try adjusting your search or filter to find what you're looking for.
			</p>
		</div>
	{/if}
</div>
