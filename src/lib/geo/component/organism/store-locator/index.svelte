<script lang="ts">
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	import Button from '$stylist/control/component/atom/button/index.svelte';
	import createStoreLocatorState from '$stylist/geo/function/state/store-locator/index.svelte';

	let props = $props();
	const state = createStoreLocatorState(props);
</script>

<div class="c-store-locator {props.class ?? ''}" {...state.restProps}>
	<div class="c-store-locator__header {props.headerClass ?? ''}">
		<div class="c-store-locator__header-inner">
			<BaseIcon name="map-pin" class="c-store-locator__header-icon" />
			<h2 class="c-store-locator__header-title">Find a Store</h2>
		</div>
		<p class="c-store-locator__header-sub">Locate stores near you and check product availability</p>
	</div>

	<div class="c-store-locator__layout">
		<div class="c-store-locator__sidebar">
			<div class="c-store-locator__filters">
				{#if state.showSearch}
					<div class="c-store-locator__search-group">
						<label for="store-search" class="c-store-locator__label">Search Location</label>
						<div class="c-store-locator__search-wrap">
							<div class="c-store-locator__search-icon-wrap">
								<BaseIcon name="search" class="c-store-locator__icon" />
							</div>
							<input
								id="store-search"
								type="text"
								class="c-store-locator__search-input {props.searchClass ?? ''}"
								placeholder="City, state, or ZIP code"
								value={state.searchTerm}
								oninput={state.handleSearchInput}
							/>
						</div>
					</div>
				{/if}

				{#if state.showFilters}
					<div>
						<h3 class="c-store-locator__filter-title">Filters</h3>

						{#if state.enablePickupFilter}
							<div class="c-store-locator__filter-row">
								<input
									id="pickup-only"
									type="checkbox"
									class="c-store-locator__checkbox"
									checked={state.showPickupOnly}
									onchange={state.handlePickupFilterChange}
								/>
								<label for="pickup-only" class="c-store-locator__filter-label">Pickup Only</label>
							</div>
						{/if}

						{#if state.enableServiceFilter && state.availableServices.length > 0}
							<div class="c-store-locator__filter-group">
								<p class="c-store-locator__filter-subtitle">Services</p>
								<div class="c-store-locator__filter-list">
									{#each state.availableServices as service}
										<div class="c-store-locator__filter-row">
											<input
												id={`service-${service}`}
												type="checkbox"
												class="c-store-locator__checkbox"
												checked={state.selectedService === service}
												onchange={() => state.handleServiceFilterChange(service)}
											/>
											<label for={`service-${service}`} class="c-store-locator__filter-label"
												>{service}</label
											>
										</div>
									{/each}
								</div>
							</div>
						{/if}

						<div>
							<label for="search-radius" class="c-store-locator__label">Search Radius</label>
							<div class="c-store-locator__radius-row">
								<input
									id="search-radius"
									type="range"
									min="1"
									max="100"
									value={state.radius}
									oninput={(e) => (state.radius = parseInt((e.target as HTMLInputElement).value))}
									class="c-store-locator__slider"
								/>
								<span class="c-store-locator__radius-value">{state.radius} km</span>
							</div>
						</div>
					</div>
				{/if}
			</div>
		</div>

		{#if state.showMap}
			<div class="c-store-locator__map-col">
				<div class="c-store-locator__map-wrap {props.mapClass ?? ''}">
					<div class="c-store-locator__map">
						<div class="c-store-locator__map-bg"></div>

						{#each state.filteredStores as store}
							{@const x = 20 + ((store.longitude * 0.7) % 60)}
							{@const y = 20 + ((store.latitude * 0.7) % 60)}
							<button
								type="button"
								class="c-store-locator__map-marker"
								style={`left: ${x}%; top: ${y}%;`}
								onclick={() => state.handleStoreSelect(store)}
								aria-label={`Select ${store.name}`}
							>
								<div class="c-store-locator__map-pin">
									<BaseIcon name="map-pin" class="c-store-locator__map-pin-icon" />
								</div>
								<div class="c-store-locator__map-pin-label">{store.name}</div>
							</button>
						{/each}

						<div class="c-store-locator__map-origin">
							<BaseIcon name="dot" class="c-store-locator__map-origin-icon" />
						</div>
					</div>
				</div>
			</div>
		{/if}

		<div
			class="c-store-locator__list-col {state.showMap ? 'c-store-locator__list-col--narrow' : ''}"
		>
			<div class="c-store-locator__list-wrap">
				{#if state.filteredStores.length === 0}
					<div class="c-store-locator__empty">
						<BaseIcon name="map-pin" class="c-store-locator__empty-icon" />
						<h3 class="c-store-locator__empty-title">No stores found</h3>
						<p class="c-store-locator__empty-text">Try adjusting your search or moving the map.</p>
					</div>
				{:else}
					<ul class="c-store-locator__list">
						{#each state.filteredStores as store}
							<li class="c-store-locator__list-item {props.storeClass ?? ''}">
								<div class="c-store-locator__store-row">
									<div>
										<h3 class="c-store-locator__store-name">{store.name}</h3>
										<p class="c-store-locator__store-addr">
											{store.address}, {store.city}, {store.state}
											{store.zipCode}
										</p>

										<div class="c-store-locator__store-meta">
											{#if state.showRating}
												<div class="c-store-locator__rating">
													<BaseIcon name="star" class="c-store-locator__star" />
													<span class="c-store-locator__rating-value"
														>{store.rating.toFixed(1)}</span
													>
												</div>
											{/if}
											{#if state.showDistance}
												<div class="c-store-locator__distance">
													<BaseIcon name="navigation" class="c-store-locator__distance-icon" />
													{state.formatDistance(store.distance)}
												</div>
											{/if}
											{#if store.pickupAvailable}
												<span class="c-store-locator__badge c-store-locator__badge--pickup"
													>Pickup Available</span
												>
											{/if}
										</div>

										{#if state.showHours}
											<div class="c-store-locator__hours">
												<BaseIcon name="clock" class="c-store-locator__hours-icon" />
												{store.hours}
											</div>
										{/if}

										{#if state.showServices && store.services && store.services.length > 0}
											<div class="c-store-locator__services">
												{#each store.services as service}
													<span class="c-store-locator__badge c-store-locator__badge--service"
														>{service}</span
													>
												{/each}
											</div>
										{/if}
									</div>

									<div class="c-store-locator__store-actions">
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
			<div class="c-store-locator__count">
				Showing {state.filteredStores.length} of {state.stores.length} stores
			</div>
		</div>
	</div>
</div>

<style>
	.c-store-locator__header {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		margin-bottom: 1.5rem;
		border-radius: 0.5rem;
		border: 1px solid var(--color-border-primary);
		padding: 1.5rem;
	}

	.c-store-locator__header-inner {
		display: flex;
		align-items: center;
	}
	.c-store-locator__header-icon {
		width: 1.5rem;
		height: 1.5rem;
		margin-right: 0.75rem;
		color: var(--color-primary-500);
	}
	.c-store-locator__header-title {
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--color-text-primary);
		margin: 0;
	}
	.c-store-locator__header-sub {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
		margin: 0.25rem 0 0;
	}

	.c-store-locator__layout {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	@media (min-width: 1024px) {
		.c-store-locator__layout {
			flex-direction: row;
		}
	}

	.c-store-locator__sidebar {
	}
	@media (min-width: 1024px) {
		.c-store-locator__sidebar {
			width: 25%;
		}
	}

	.c-store-locator__filters {
		border-radius: 0.5rem;
		border: 1px solid var(--color-border-primary);
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.c-store-locator__search-group {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	.c-store-locator__label {
		display: block;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin-bottom: 0.25rem;
	}
	.c-store-locator__search-wrap {
		position: relative;
	}
	.c-store-locator__search-icon-wrap {
		pointer-events: none;
		position: absolute;
		inset-block: 0;
		left: 0;
		display: flex;
		align-items: center;
		padding-left: 0.75rem;
	}
	.c-store-locator__icon {
		width: 1.25rem;
		height: 1.25rem;
		color: var(--color-text-tertiary, var(--color-text-secondary));
	}
	.c-store-locator__search-input {
		display: block;
		width: 100%;
		border-radius: 0.375rem;
		border: 1px solid var(--color-border-primary);
		background: var(--color-background-primary);
		padding: 0.5rem 0.75rem 0.5rem 2.5rem;
		font-size: 0.875rem;
	}
	.c-store-locator__search-input:focus {
		outline: none;
		border-color: var(--color-primary-500);
		box-shadow: 0 0 0 1px var(--color-primary-500);
	}

	.c-store-locator__filter-title {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin: 0 0 0.75rem;
	}
	.c-store-locator__filter-subtitle {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin: 0 0 0.5rem;
	}
	.c-store-locator__filter-row {
		display: flex;
		align-items: center;
		margin-bottom: 0.75rem;
	}
	.c-store-locator__filter-group {
		margin-bottom: 0.75rem;
	}
	.c-store-locator__filter-list {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.c-store-locator__filter-label {
		margin-left: 0.5rem;
		font-size: 0.875rem;
		color: var(--color-text-primary);
	}
	.c-store-locator__checkbox {
		width: 1rem;
		height: 1rem;
		border-radius: 0.25rem;
		border: 1px solid var(--color-border-primary);
		accent-color: var(--color-primary-600);
	}
	.c-store-locator__radius-row {
		display: flex;
		align-items: center;
	}
	.c-store-locator__slider {
		flex: 1;
		height: 0.5rem;
		cursor: pointer;
		appearance: none;
		border-radius: 9999px;
		background: var(--color-background-tertiary, var(--color-background-secondary));
	}
	.c-store-locator__radius-value {
		margin-left: 0.75rem;
		min-width: 3.125rem;
		font-size: 0.875rem;
		color: var(--color-text-primary);
	}

	@media (min-width: 1024px) {
		.c-store-locator__map-col {
			width: 50%;
		}
	}

	.c-store-locator__map-wrap {
		border-radius: 0.5rem;
		border: 1px solid var(--color-border-primary);
		overflow: hidden;
	}

	.c-store-locator__map {
		position: relative;
		height: 24rem;
		width: 100%;
		background: var(--color-primary-50, var(--color-background-secondary));
	}

	.c-store-locator__map-bg {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(rgb(0 0 0 / 0.04) 1px, transparent 1px),
			linear-gradient(90deg, rgb(0 0 0 / 0.04) 1px, transparent 1px);
		background-size: 10% 10%;
	}

	.c-store-locator__map-marker {
		position: absolute;
		z-index: var(--z-index-docked, 10);
		transform: translate(-50%, -50%);
		background: none;
		border: none;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.c-store-locator__map-pin {
		display: flex;
		width: 2rem;
		height: 2rem;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		border: 2px solid var(--color-background-primary);
		background: var(--color-primary-500);
		color: var(--color-text-inverse);
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
	}

	.c-store-locator__map-pin-icon {
		width: 1rem;
		height: 1rem;
	}

	.c-store-locator__map-pin-label {
		margin-top: 0.25rem;
		border-radius: 0.25rem;
		background: var(--color-background-primary);
		padding: 0.25rem 0.5rem;
		font-size: 0.75rem;
		white-space: nowrap;
		box-shadow: 0 1px 2px rgb(0 0 0 / 0.05);
	}

	.c-store-locator__map-origin {
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: var(--z-index-docked, 10);
		transform: translate(-50%, -50%);
		display: flex;
		width: 1.5rem;
		height: 1.5rem;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		background: var(--color-danger-500);
		color: var(--color-text-inverse);
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
	}

	.c-store-locator__map-origin-icon {
		width: 0.75rem;
		height: 0.75rem;
	}

	@media (min-width: 1024px) {
		.c-store-locator__list-col {
			width: 25%;
		}
		.c-store-locator__list-col--narrow {
			width: 25%;
		}
	}

	.c-store-locator__list-wrap {
		overflow: hidden;
		border-radius: 0.5rem;
		border: 1px solid var(--color-border-primary);
	}

	.c-store-locator__empty {
		padding: 3rem 1rem;
		text-align: center;
	}
	.c-store-locator__empty-icon {
		width: 3rem;
		height: 3rem;
		color: var(--color-text-tertiary, var(--color-text-secondary));
		margin: 0 auto;
	}
	.c-store-locator__empty-title {
		margin: 0.5rem 0 0;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}
	.c-store-locator__empty-text {
		margin: 0.25rem 0 0;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}

	.c-store-locator__list {
		list-style: none;
		margin: 0;
		padding: 0;
		max-height: 24rem;
		overflow-y: auto;
	}

	.c-store-locator__list-item {
		padding: 1rem;
		border-top: 1px solid var(--color-border-secondary);
	}

	.c-store-locator__list-item:first-child {
		border-top: none;
	}
	.c-store-locator__list-item:hover {
		background: var(--color-background-secondary);
	}

	.c-store-locator__store-row {
		display: flex;
		justify-content: space-between;
	}
	.c-store-locator__store-name {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin: 0;
	}
	.c-store-locator__store-addr {
		margin: 0.25rem 0 0;
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}
	.c-store-locator__store-meta {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 0.5rem;
	}
	.c-store-locator__store-actions {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		flex-shrink: 0;
		margin-left: 0.5rem;
	}

	.c-store-locator__rating {
		display: flex;
		align-items: center;
	}
	.c-store-locator__star {
		width: 1rem;
		height: 1rem;
		fill: currentColor;
		color: #fbbf24;
	}
	.c-store-locator__rating-value {
		margin-left: 0.25rem;
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}

	.c-store-locator__distance {
		display: flex;
		align-items: center;
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}
	.c-store-locator__distance-icon {
		width: 0.75rem;
		height: 0.75rem;
		margin-right: 0.25rem;
		color: var(--color-text-tertiary, var(--color-text-secondary));
	}

	.c-store-locator__badge {
		display: inline-flex;
		align-items: center;
		border-radius: 9999px;
		padding: 0.125rem 0.5rem;
		font-size: 0.75rem;
		font-weight: 500;
	}
	.c-store-locator__badge--pickup {
		background: color-mix(in srgb, var(--color-success-500) 12%, transparent);
		color: var(--color-success-800, var(--color-success-700));
	}
	.c-store-locator__badge--service {
		background: color-mix(in srgb, var(--color-primary-500) 12%, transparent);
		color: var(--color-primary-800, var(--color-primary-700));
	}

	.c-store-locator__hours {
		display: flex;
		align-items: center;
		font-size: 0.75rem;
		color: var(--color-text-secondary);
		margin-top: 0.5rem;
	}
	.c-store-locator__hours-icon {
		width: 0.75rem;
		height: 0.75rem;
		margin-right: 0.25rem;
	}

	.c-store-locator__services {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
		margin-top: 0.5rem;
	}

	.c-store-locator__count {
		margin-top: 1rem;
		text-align: center;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}
</style>
