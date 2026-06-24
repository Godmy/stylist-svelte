<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import { createLocationSelectorState } from '$stylist/geo/function/state/location-selector/index.svelte';
	import type { LocationSelectorLocation } from '$stylist/geo/type/struct/location-selector/locationselectorlocation';

	let props = $props();
	const state = createLocationSelectorState(props);

	function handleKeyDown(e: KeyboardEvent, location: LocationSelectorLocation): void {
		if (e.key === 'Enter' || e.key === ' ') state.handleLocationSelect(location);
	}
</script>

<div class="c-location-selector {props.class ?? ''}" {...state.restProps}>
	<div class="c-location-selector__toolbar {props.headerClass ?? ''}">
		<div class="c-location-selector__toolbar-row">
			{#if state.showSearch}
				<div class="c-location-selector__search-field">
					<div class="c-location-selector__search-icon-wrap">
						<BaseIcon name="search" class="c-location-selector__icon" />
					</div>
					<input
						type="text"
						class="c-location-selector__search-input {props.searchClass ?? ''}"
						placeholder={state.searchPlaceholder}
						value={state.searchQuery}
						oninput={state.handleSearchInput}
					/>
				</div>
			{/if}

			{#if state.showCategoryFilter}
				<select
					class="c-location-selector__select"
					value={state.selectedCategory}
					onchange={state.handleCategoryChangeEvent}
				>
					{#each state.categories as category}
						<option value={category}>{category === 'all' ? 'All Categories' : category}</option>
					{/each}
				</select>
			{/if}

			{#if state.showMapToggle}
				<div class="c-location-selector__view-toggle {props.viewToggleClass ?? ''}">
					<button
						type="button"
						class="c-location-selector__view-btn {state.currentView === 'list'
							? 'c-location-selector__view-btn--active'
							: ''}"
						aria-label="List view"
						onclick={() => (state.currentView = 'list')}
					>
						<BaseIcon name="list" class="c-location-selector__icon" />
					</button>
					<button
						type="button"
						class="c-location-selector__view-btn {state.currentView === 'grid'
							? 'c-location-selector__view-btn--active'
							: ''}"
						aria-label="Grid view"
						onclick={() => (state.currentView = 'grid')}
					>
						<BaseIcon name="grid-3-x-3" class="c-location-selector__icon" />
					</button>
				</div>
			{/if}
		</div>
	</div>

	{#if state.currentView === 'list'}
		<div class="c-location-selector__list">
			{#each state.filteredLocations as location}
				<div
					class="c-location-selector__list-item {props.itemClass ?? ''}"
					onclick={() => state.handleLocationSelect(location)}
					role="button"
					tabindex={0}
					onkeydown={(e: KeyboardEvent) => handleKeyDown(e, location)}
				>
					<div class="c-location-selector__item-icon-wrap">
						<BaseIcon name="map-pin" class="c-location-selector__item-icon" />
					</div>
					<div class="c-location-selector__item-body">
						<div class="c-location-selector__item-head">
							<h3 class="c-location-selector__item-name">{location.name}</h3>
							{#if location.distance !== undefined && state.showDistance}
								<span class="c-location-selector__distance-badge">
									{state.formatDistance(location.distance)}
								</span>
							{/if}
						</div>
						{#if location.address}
							<p class="c-location-selector__item-address">{location.address}</p>
						{/if}
						<div class="c-location-selector__item-meta">
							{#if location.rating !== undefined}
								<div class="c-location-selector__stars">
									{#each Array(5) as _, i}
										<BaseIcon
											name="star"
											class="c-location-selector__star {i < Math.floor(location.rating)
												? 'c-location-selector__star--filled'
												: ''}"
										/>
									{/each}
									<span class="c-location-selector__rating-value">{location.rating.toFixed(1)}</span
									>
								</div>
							{/if}
							{#if location.category}
								<span class="c-location-selector__category-badge">{location.category}</span>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	{:else if state.currentView === 'grid'}
		<div class="c-location-selector__grid">
			{#each state.filteredLocations as location}
				<div
					class="c-location-selector__grid-item {props.itemClass ?? ''}"
					onclick={() => state.handleLocationSelect(location)}
					role="button"
					tabindex={0}
					onkeydown={(e: KeyboardEvent) => handleKeyDown(e, location)}
				>
					<div class="c-location-selector__grid-item-head">
						<div
							class="c-location-selector__item-icon-wrap c-location-selector__item-icon-wrap--sm"
						>
							<BaseIcon name="map-pin" class="c-location-selector__item-icon--sm" />
						</div>
						<div class="c-location-selector__grid-item-body">
							<h3 class="c-location-selector__item-name">{location.name}</h3>
							{#if location.address}
								<p
									class="c-location-selector__item-address c-location-selector__item-address--clamp"
								>
									{location.address}
								</p>
							{/if}
							<div class="c-location-selector__grid-item-foot">
								{#if location.distance !== undefined && state.showDistance}
									<span class="c-location-selector__distance-badge"
										>{state.formatDistance(location.distance)}</span
									>
								{/if}
								{#if location.rating !== undefined}
									<div class="c-location-selector__stars">
										{#each Array(5) as _, i}
											<BaseIcon
												name="star"
												class="c-location-selector__star {i < Math.floor(location.rating)
													? 'c-location-selector__star--filled'
													: ''}"
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
		<div class="c-location-selector__empty">
			<BaseIcon name="map-pin" class="c-location-selector__empty-icon" />
			<h3 class="c-location-selector__empty-title">No locations found</h3>
			<p class="c-location-selector__empty-text">Try adjusting your search or filter.</p>
		</div>
	{/if}
</div>

<style>
	.c-location-selector {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.c-location-selector__toolbar {
		margin-bottom: 1rem;
	}

	.c-location-selector__toolbar-row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1rem;
	}

	.c-location-selector__search-field {
		position: relative;
		flex: 1;
		min-width: 12.5rem;
	}

	.c-location-selector__search-icon-wrap {
		pointer-events: none;
		position: absolute;
		inset-block: 0;
		left: 0;
		display: flex;
		align-items: center;
		padding-left: 0.75rem;
	}

	.c-location-selector__icon {
		width: 1.25rem;
		height: 1.25rem;
		color: var(--color-text-tertiary, var(--color-text-secondary));
	}

	.c-location-selector__search-input {
		display: block;
		width: 100%;
		border-radius: 0.375rem;
		border: 1px solid var(--color-border-primary);
		background: var(--color-background-primary);
		padding: 0.5rem 0.75rem 0.5rem 2.5rem;
		font-size: 0.875rem;
	}

	.c-location-selector__search-input:focus {
		outline: none;
		border-color: var(--color-primary-500);
		box-shadow: 0 0 0 1px var(--color-primary-500);
	}

	.c-location-selector__select {
		display: block;
		border-radius: 0.375rem;
		border: 1px solid var(--color-border-primary);
		padding: 0.5rem 2.5rem 0.5rem 0.75rem;
		font-size: 0.875rem;
		background: var(--color-background-primary);
	}

	.c-location-selector__view-toggle {
		display: flex;
		border-radius: 0.375rem;
		border: 1px solid var(--color-border-primary);
		overflow: hidden;
	}

	.c-location-selector__view-btn {
		padding: 0.5rem;
		background: none;
		border: none;
		cursor: pointer;
		color: var(--color-text-secondary);
	}

	.c-location-selector__view-btn--active {
		background: color-mix(in srgb, var(--color-primary-500) 15%, transparent);
		color: var(--color-primary-700, var(--color-primary-600));
	}

	/* List */
	.c-location-selector__list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.c-location-selector__list-item {
		display: flex;
		align-items: center;
		border-radius: 0.5rem;
		border: 1px solid var(--color-border-primary);
		padding: 1rem;
		cursor: pointer;
		transition: box-shadow var(--duration-150, 150ms) ease;
	}

	.c-location-selector__list-item:hover {
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
	}

	.c-location-selector__item-icon-wrap {
		flex-shrink: 0;
		border-radius: 0.375rem;
		background: color-mix(in srgb, var(--color-primary-500) 12%, transparent);
		padding: 0.75rem;
		color: var(--color-primary-600);
	}

	.c-location-selector__item-icon-wrap--sm {
		padding: 0.5rem;
	}

	.c-location-selector__item-icon {
		width: 1.5rem;
		height: 1.5rem;
	}
	.c-location-selector__item-icon--sm {
		width: 1.25rem;
		height: 1.25rem;
	}

	.c-location-selector__item-body {
		margin-left: 1rem;
		flex: 1;
		min-width: 0;
	}

	.c-location-selector__item-head {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
	}

	.c-location-selector__item-name {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin: 0;
	}

	.c-location-selector__item-address {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.c-location-selector__item-address--clamp {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		white-space: normal;
	}

	.c-location-selector__item-meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-top: 0.5rem;
	}

	.c-location-selector__distance-badge {
		display: inline-flex;
		align-items: center;
		border-radius: 9999px;
		background: color-mix(in srgb, var(--color-primary-500) 12%, transparent);
		padding: 0.125rem 0.625rem;
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--color-primary-800, var(--color-primary-700));
	}

	.c-location-selector__stars {
		display: flex;
		align-items: center;
		gap: 0.125rem;
	}

	.c-location-selector__star {
		width: 1rem;
		height: 1rem;
		color: var(--color-text-tertiary, var(--color-text-secondary));
	}
	.c-location-selector__star--filled {
		color: #fbbf24;
		fill: currentColor;
	}

	.c-location-selector__rating-value {
		margin-left: 0.25rem;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}

	.c-location-selector__category-badge {
		display: inline-flex;
		align-items: center;
		border-radius: 9999px;
		background: var(--color-background-secondary);
		padding: 0.125rem 0.625rem;
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	/* Grid */
	.c-location-selector__grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	@media (min-width: 640px) {
		.c-location-selector__grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.c-location-selector__grid-item {
		cursor: pointer;
		border-radius: 0.5rem;
		border: 1px solid var(--color-border-primary);
		padding: 1rem;
		transition: box-shadow var(--duration-150, 150ms) ease;
	}

	.c-location-selector__grid-item:hover {
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
	}

	.c-location-selector__grid-item-head {
		display: flex;
		align-items: flex-start;
	}

	.c-location-selector__grid-item-body {
		margin-left: 1rem;
		min-width: 0;
	}

	.c-location-selector__grid-item-foot {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 0.75rem;
	}

	/* Empty */
	.c-location-selector__empty {
		border-radius: 0.5rem;
		border: 2px dashed var(--color-border-primary);
		padding: 3rem 1rem;
		text-align: center;
	}

	.c-location-selector__empty-icon {
		width: 3rem;
		height: 3rem;
		color: var(--color-text-tertiary, var(--color-text-secondary));
		margin: 0 auto;
	}

	.c-location-selector__empty-title {
		margin: 0.5rem 0 0;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.c-location-selector__empty-text {
		margin: 0.25rem 0 0;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}
</style>
