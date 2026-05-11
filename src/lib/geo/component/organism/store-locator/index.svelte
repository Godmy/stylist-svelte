<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';
	import { Button } from '$lib';
	import { createStoreLocatorState } from '$stylist/geo/function/state/store-locator';
	import type { StoreLocatorStore } from '$stylist/geo/type/struct/store-locator';

	let props = $props();
	const state = createStoreLocatorState(props);
</script>

<div class={`store-locator ${props.class ?? ''}`} {...state.restProps}>
	<div
		class={`mb-6 rounded-lg border border-[var(--color-border-primary)] p-6 ${props.headerClass ?? ''}`}
	>
		<div class="flex items-center">
			<BaseIcon name="map-pin" class="mr-3 h-6 w-6 text-[var(--color-primary-500)]" />
			<h2 class="text-xl font-bold text-[var(--color-text-primary)]">Find a Store</h2>
		</div>
		<p class="mt-1 text-[var(--color-text-secondary)]">
			Locate stores near you and check product availability
		</p>
	</div>

	<div class="flex flex-col gap-6 lg:flex-row">
		<div class="lg:w-1/4">
			<div class="mb-4 rounded-lg border border-[var(--color-border-primary)] p-4">
				{#if state.showSearch}
					<div class="mb-4">
						<label
							for="store-search"
							class="mb-1 block text-sm font-medium text-[var(--color-text-primary)]"
						>
							Search SlotLocation
						</label>
						<div class="relative">
							<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<BaseIcon name="search" class="h-5 w-5 text-[var(--color-text-tertiary)]" />
							</div>
							<input
								id="store-search"
								type="text"
								class={`block w-full rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] py-2 pr-3 pl-10 leading-5 placeholder-gray-500 focus:border-[var(--color-primary-500)] focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:outline-none sm:text-sm ${props.searchClass ?? ''}`}
								placeholder="City, state, or ZIP code"
								value={state.searchTerm}
								oninput={state.handleSearchInput}
							/>
						</div>
					</div>
				{/if}

				{#if state.showFilters}
					<div>
						<h3 class="mb-3 text-sm font-medium text-[var(--color-text-primary)]">Filters</h3>

						{#if state.enablePickupFilter}
							<div class="mb-3 flex items-center">
								<input
									id="pickup-only"
									type="checkbox"
									class="h-4 w-4 rounded border-[var(--color-border-primary)] text-[var(--color-primary-600)] focus:ring-blue-500"
									checked={state.showPickupOnly}
									onchange={state.handlePickupFilterChange}
								/>
								<label
									for="pickup-only"
									class="ml-2 block text-sm text-[var(--color-text-primary)]"
								>
									Pickup Only
								</label>
							</div>
						{/if}

						{#if state.enableServiceFilter && state.availableServices.length > 0}
							<div class="mb-3">
								<p class="mb-2 block text-sm font-medium text-[var(--color-text-primary)]">
									Services
								</p>
								<div class="space-y-2">
									{#each state.availableServices as service}
										<div class="flex items-center">
											<input
												id={`service-${service}`}
												type="checkbox"
												class="h-4 w-4 rounded border-[var(--color-border-primary)] text-[var(--color-primary-600)] focus:ring-blue-500"
												checked={state.selectedService === service}
												onchange={() => state.handleServiceFilterChange(service)}
											/>
											<label
												for={`service-${service}`}
												class="ml-2 block text-sm text-[var(--color-text-primary)]"
											>
												{service}
											</label>
										</div>
									{/each}
								</div>
							</div>
						{/if}

						<div>
							<label
								for="search-radius"
								class="mb-1 block text-sm font-medium text-[var(--color-text-primary)]"
								>Search Radius</label
							>
							<div class="flex items-center">
								<input
									id="search-radius"
									type="range"
									min="1"
									max="100"
									value={state.radius}
									oninput={(e) => (state.radius = parseInt((e.target as HTMLInputElement).value))}
									class="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[var(--color-background-tertiary)]"
								/>
								<span class="ml-3 min-w-[50px] text-sm text-[var(--color-text-primary)]"
									>{state.radius} km</span
								>
							</div>
						</div>
					</div>
				{/if}
			</div>
		</div>

		{#if state.showMap}
			<div class="lg:w-2/4">
				<div
					class={`overflow-hidden rounded-lg border border-[var(--color-border-primary)] ${props.mapClass ?? ''}`}
				>
					<div class="relative h-96 w-full bg-[var(--color-primary-50)]">
						{#each Array(10) as _, i}
							<div
								class="absolute h-px w-full bg-[var(--color-background-tertiary)] opacity-[var(--opacity-20)]"
								style={`top: ${i * 10}%`}
							></div>
							<div
								class="absolute h-full w-px bg-[var(--color-background-tertiary)] opacity-[var(--opacity-20)]"
								style={`left: ${i * 10}%`}
							></div>
						{/each}

						<div
							class="absolute h-1/4 w-1/3 rounded-lg bg-[var(--color-primary-200)] opacity-[var(--opacity-50)]"
							style="top: 20%; left: 30%;"
						></div>
						<div
							class="absolute h-1 w-full bg-[var(--color-neutral-400)] opacity-[var(--opacity-40)]"
							style="top: 30%;"
						></div>
						<div
							class="absolute h-full w-1 bg-[var(--color-neutral-400)] opacity-[var(--opacity-40)]"
							style="left: 40%;"
						></div>

						{#each state.filteredStores as store}
							{@const x = 20 + ((store.longitude * 0.7) % 60)}
							{@const y = 20 + ((store.latitude * 0.7) % 60)}

							<button
								type="button"
								class="absolute z-[var(--z-index-docked)] -translate-x-1/2 -translate-y-1/2 transform"
								style={`left: ${x}%; top: ${y}%;`}
								onclick={() => state.handleStoreSelect(store)}
								aria-label={`Select ${store.name}`}
							>
								<div class="flex flex-col items-center">
									<div
										class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[var(--color-background-primary)] bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] shadow-lg"
									>
										<BaseIcon name="map-pin" class="h-4 w-4" />
									</div>
									<div
										class="mt-1 rounded bg-[var(--color-background-primary)] px-2 py-1 text-xs whitespace-nowrap shadow"
									>
										{store.name}
									</div>
								</div>
							</button>
						{/each}

						<div
							class="absolute top-1/2 left-1/2 z-[var(--z-index-docked)] -translate-x-1/2 -translate-y-1/2 transform"
						>
							<div
								class="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-danger-500)] text-[var(--color-text-inverse)] shadow-lg"
							>
								<BaseIcon name="dot" class="h-3 w-3" />
							</div>
						</div>
					</div>
				</div>
			</div>
		{/if}

		<div class={`${state.showMap ? 'lg:w-1/4' : 'lg:w-3/4'}`}>
			<div class="overflow-hidden rounded-lg border border-[var(--color-border-primary)]">
				{#if state.filteredStores.length === 0}
					<div class="py-12 text-center">
						<BaseIcon name="map-pin" class="mx-auto h-12 w-12 text-[var(--color-text-tertiary)]" />
						<h3 class="mt-2 text-sm font-medium text-[var(--color-text-primary)]">
							No stores found
						</h3>
						<p class="mt-1 text-sm text-[var(--color-text-secondary)]">
							Try adjusting your search or moving the map.
						</p>
					</div>
				{:else}
					<ul class="max-h-96 divide-y divide-gray-200 overflow-y-auto">
						{#each state.filteredStores as store}
							<li
								class={`p-4 hover:bg-[var(--color-background-secondary)] ${props.storeClass ?? ''}`}
							>
								<div class="flex justify-between">
									<div>
										<h3 class="text-sm font-medium text-[var(--color-text-primary)]">
											{store.name}
										</h3>
										<p class="mt-1 text-xs text-[var(--color-text-secondary)]">
											{store.address}, {store.city}, {store.state}
											{store.zipCode}
										</p>

										<div class="mt-2 flex items-center">
											{#if state.showRating}
												<div class="flex items-center">
													<BaseIcon name="star" class="h-4 w-4 fill-current text-yellow-400" />
													<span class="ml-1 text-xs text-[var(--color-text-secondary)]"
														>{store.rating.toFixed(1)}</span
													>
												</div>
											{/if}

											{#if state.showDistance}
												<div
													class="ml-3 flex items-center text-xs text-[var(--color-text-secondary)]"
												>
													<BaseIcon
														name="navigation"
														class="mr-1 h-3 w-3 text-[var(--color-text-tertiary)]"
													/>
													{state.formatDistance(store.distance)}
												</div>
											{/if}

											{#if store.pickupAvailable}
												<span
													class="ml-3 inline-flex items-center rounded-full bg-[var(--color-success-100)] px-2 py-0.5 text-xs font-medium text-[var(--color-success-800)]"
												>
													Pickup Available
												</span>
											{/if}
										</div>

										{#if state.showHours}
											<div
												class="mt-2 flex items-center text-xs text-[var(--color-text-secondary)]"
											>
												<BaseIcon name="clock" class="mr-1 h-3 w-3" />
												{store.hours}
											</div>
										{/if}

										{#if state.showServices && store.services && store.services.length > 0}
											<div class="mt-2 flex flex-wrap gap-1">
												{#each store.services as service}
													<span
														class="inline-flex items-center rounded-full bg-[var(--color-primary-100)] px-2 py-0.5 text-xs font-medium text-[var(--color-primary-800)]"
													>
														{service}
													</span>
												{/each}
											</div>
										{/if}
									</div>

									<div class="flex flex-col space-y-2">
										<Button
											variant="outline"
											size="sm"
											onclick={() => state.handleCallStore(store)}
										>
											<BaseIcon name="phone" class="h-4 w-4" />
										</Button>
										<Button
											variant="outline"
											size="sm"
											onclick={() => state.handleGetDirections(store)}
										>
											<BaseIcon name="navigation" class="h-4 w-4" />
										</Button>
									</div>
								</div>
							</li>
						{/each}
					</ul>
				{/if}
			</div>

			<div class="mt-4 text-center text-sm text-[var(--color-text-secondary)]">
				Showing {state.filteredStores.length} of {state.stores.length} stores
			</div>
		</div>
	</div>
</div>
