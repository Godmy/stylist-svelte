<script lang="ts">
	import type { RoutePlannerStateProps } from '$stylist/geo/interface/recipe/route-planner';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import Button from '$stylist/control/component/atom/button/index.svelte';
	import createRoutePlannerState from '$stylist/geo/function/state/route-planner/index.svelte';

	let props: RoutePlannerStateProps = $props();
	const state = createRoutePlannerState(props);
</script>

<div
	class="c-route-planner {props.class ?? ''}"
	style={`width: ${state.width};`}
	{...state.restProps}
>
	<div class="c-route-planner__layout">
		<div class="c-route-planner__sidebar">
			<div>
				<h2 class="c-route-planner__heading">
					<BaseIcon name="route" class="c-route-planner__heading-icon" />
					Plan Your Route
				</h2>
				<p class="c-route-planner__heading-sub">Enter your start and end locations</p>
			</div>

			{#if state.showTravelMode}
				<div class="c-route-planner__mode-tabs">
					{#each state.travelModes as mode}
						<button
							type="button"
							class="c-route-planner__mode-btn {state.selectedTravelMode === mode
								? 'c-route-planner__mode-btn--active'
								: ''}"
							onclick={() => state.handleModeChange(mode)}
						>
							{mode.charAt(0).toUpperCase() + mode.slice(1)}
						</button>
					{/each}
				</div>
			{/if}

			<div class="c-route-planner__inputs">
				<div class="c-route-planner__input-group">
					<label for="start-location-input" class="c-route-planner__label">Start Location</label>
					<div class="c-route-planner__input-row">
						<input
							id="start-location-input"
							type="text"
							class="c-route-planner__input {props.inputClass ?? ''}"
							placeholder="Starting point"
							value={state.selectedStartLocation?.address || ''}
						/>
						<button type="button" class="c-route-planner__input-action">
							<BaseIcon name="map-pin" class="c-route-planner__input-icon" />
						</button>
					</div>
				</div>

				<div class="c-route-planner__input-group">
					<label for="end-location-input" class="c-route-planner__label">End Location</label>
					<div class="c-route-planner__input-row">
						<input
							id="end-location-input"
							type="text"
							class="c-route-planner__input {props.inputClass ?? ''}"
							placeholder="Destination"
							value={state.selectedEndLocation?.address || ''}
						/>
						<button type="button" class="c-route-planner__input-action">
							<BaseIcon
								name="navigation"
								class="c-route-planner__input-icon c-route-planner__input-icon--nav"
							/>
						</button>
					</div>
				</div>

				<div class="c-route-planner__input-group">
					<div class="c-route-planner__waypoints-head">
						<label for="waypoint-location-input" class="c-route-planner__label">Waypoints</label>
						<button
							type="button"
							class="c-route-planner__add-link"
							onclick={state.handleAddWaypoint}>+ Add</button
						>
					</div>
					{#if state.selectedWaypoints.length > 0}
						<div class="c-route-planner__waypoints">
							{#each state.selectedWaypoints as waypoint, i}
								<div class="c-route-planner__waypoint">
									<div class="c-route-planner__waypoint-inner">
										<div class="c-route-planner__waypoint-icon-wrap">
											<BaseIcon name="map-pin" class="c-route-planner__waypoint-icon" />
										</div>
										<div>
											<div class="c-route-planner__waypoint-name">{waypoint.name}</div>
											<div class="c-route-planner__waypoint-addr">{waypoint.address}</div>
										</div>
									</div>
									<button
										type="button"
										class="c-route-planner__waypoint-remove"
										onclick={() => state.handleRemoveWaypoint(i)}
									>
										<BaseIcon name="x" class="c-route-planner__waypoint-remove-icon" />
									</button>
								</div>
							{/each}
						</div>
					{/if}
					<div class="c-route-planner__input-row">
						<input
							id="waypoint-location-input"
							type="text"
							class="c-route-planner__input {props.inputClass ?? ''}"
							placeholder="Add waypoint..."
							value={state.searchQuery}
							oninput={(e) => (state.searchQuery = (e.target as HTMLInputElement).value)}
						/>
						<button
							type="button"
							class="c-route-planner__input-action"
							onclick={state.handleAddWaypoint}
						>
							<BaseIcon name="plus" class="c-route-planner__input-icon" />
						</button>
					</div>
				</div>
			</div>

			<Button
				variant="primary"
				class="c-route-planner__calculate-btn"
				onclick={state.calculateRoute}
				disabled={!state.selectedStartLocation || !state.selectedEndLocation}
			>
				<BaseIcon name="route" class="c-route-planner__btn-icon" />
				Calculate Route
			</Button>

			{#if state.showRouteOptions && props.routeOptions && props.routeOptions.length > 0}
				<div>
					<h3 class="c-route-planner__section-title">Route Options</h3>
					<div class="c-route-planner__route-options">
						{#each props.routeOptions as option}
							<div
								class="c-route-planner__route-option {state.selectedRouteId === option.id
									? 'c-route-planner__route-option--active'
									: ''} {props.optionClass ?? ''}"
								onclick={() => state.handleRouteSelect(option.id)}
								onkeydown={(e: KeyboardEvent) => {
									if (e.key === 'Enter' || e.key === ' ') {
										e.preventDefault();
										state.handleRouteSelect(option.id);
									}
								}}
								role="button"
								tabindex={0}
							>
								<div class="c-route-planner__option-head">
									<div>
										<h4 class="c-route-planner__option-name">{option.name}</h4>
										<div class="c-route-planner__option-meta">
											<BaseIcon name="clock" class="c-route-planner__option-icon" />
											<span>{Math.floor(option.duration / 60)}h {option.duration % 60}m</span>
											<span class="c-route-planner__dot">•</span>
											<span>{option.distance} km</span>
										</div>
									</div>
									<div class="c-route-planner__option-cost">
										<p class="c-route-planner__option-price">{state.formatCurrency(option.cost)}</p>
										<div class="c-route-planner__option-tags">
											{#if option.tolls}<span
													class="c-route-planner__tag c-route-planner__tag--toll">Tolls</span
												>{/if}
											{#if option.highways}<span
													class="c-route-planner__tag c-route-planner__tag--highway">Highway</span
												>{/if}
											{#if option.ecoFriendly}<span
													class="c-route-planner__tag c-route-planner__tag--eco">Eco</span
												>{/if}
										</div>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/if}
		</div>

		{#if state.localShowMap}
			<div class="c-route-planner__map-panel">
				<div class="c-route-planner__map-wrap" style={`height: ${state.height}`}>
					<div class="c-route-planner__map-bg"></div>
					{#if state.selectedStartLocation}
						<div
							class="c-route-planner__pin c-route-planner__pin--start"
							style="top: 30%; left: 20%;"
						>
							<BaseIcon name="map-pin" class="c-route-planner__pin-icon" />
						</div>
						<div class="c-route-planner__pin-label" style="top: 25%; left: 25%;">Start</div>
					{/if}
					{#if state.selectedEndLocation}
						<div
							class="c-route-planner__pin c-route-planner__pin--end"
							style="top: 70%; left: 80%;"
						>
							<BaseIcon name="navigation" class="c-route-planner__pin-icon" />
						</div>
						<div class="c-route-planner__pin-label" style="top: 65%; left: 75%;">Destination</div>
					{/if}
					{#each state.selectedWaypoints as waypoint, i}
						{@const top = 30 + (i + 1) * (40 / (state.selectedWaypoints.length + 1))}
						{@const left = 20 + (i + 1) * (60 / (state.selectedWaypoints.length + 1))}
						<div
							class="c-route-planner__pin c-route-planner__pin--waypoint"
							style={`top: ${top}%; left: ${left}%;`}
						>
							<BaseIcon name="map-pin" class="c-route-planner__pin-icon" />
						</div>
					{/each}
					{#if state.selectedStartLocation && state.selectedEndLocation}
						<svg class="c-route-planner__route-line"
							><path
								d="M 20% 30% Q 40% 20% 50% 50% T 80% 70%"
								stroke="var(--color-primary-500)"
								stroke-width="4"
								fill="none"
								stroke-dasharray="8,4"
							/></svg
						>
					{/if}
					<div class="c-route-planner__controls">
						<Button variant="secondary" size="sm" onclick={state.handleZoomIn} aria-label="Zoom in"
							><BaseIcon name="plus" class="_c1" /></Button
						>
						<Button
							variant="secondary"
							size="sm"
							onclick={state.handleZoomOut}
							aria-label="Zoom out"><BaseIcon name="minus" class="_c1" /></Button
						>
						<Button
							variant="secondary"
							size="sm"
							onclick={state.handleResetView}
							aria-label="Reset view"><BaseIcon name="rotate-ccw" class="_c1" /></Button
						>
					</div>
				</div>

				{#if state.showDirections && state.selectedRouteId}
					<div class="c-route-planner__directions">
						<div class="c-route-planner__directions-head">
							<h3 class="c-route-planner__section-title">Directions</h3>
						</div>
						<div class="c-route-planner__steps">
							<div class="c-route-planner__step">
								<div class="c-route-planner__step-num">1</div>
								<div>
									<p class="c-route-planner__step-title">
										Start at {state.selectedStartLocation?.name ?? 'Start Point'}
									</p>
									<p class="c-route-planner__step-desc">
										Head north on Main Street toward Oak Avenue
									</p>
								</div>
							</div>
							<div class="c-route-planner__step">
								<div class="c-route-planner__step-num">2</div>
								<div>
									<p class="c-route-planner__step-title">Turn right onto Oak Avenue</p>
									<p class="c-route-planner__step-desc">Continue straight for 0.5 miles</p>
								</div>
							</div>
							<div class="c-route-planner__step">
								<div class="c-route-planner__step-num">3</div>
								<div>
									<p class="c-route-planner__step-title">
										Arrive at {state.selectedEndLocation?.name ?? 'Destination'}
									</p>
									<p class="c-route-planner__step-desc">You have reached your destination</p>
								</div>
							</div>
						</div>
					</div>
				{/if}
			</div>
		{/if}
	</div>
</div>

<style>
	.c-route-planner__layout {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
	@media (min-width: 768px) {
		.c-route-planner__layout {
			flex-direction: row;
		}
	}

	.c-route-planner__sidebar {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
	@media (min-width: 768px) {
		.c-route-planner__sidebar {
			width: 33.333%;
		}
	}

	.c-route-planner__heading {
		display: flex;
		align-items: center;
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--color-text-primary);
		margin: 0;
	}
	.c-route-planner__heading-icon {
		width: 1.25rem;
		height: 1.25rem;
		margin-right: 0.5rem;
		color: var(--color-primary-500);
	}
	.c-route-planner__heading-sub {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
		margin: 0.25rem 0 0;
	}

	.c-route-planner__mode-tabs {
		display: flex;
		gap: 0.5rem;
	}
	.c-route-planner__mode-btn {
		flex: 1;
		border-radius: 0.375rem;
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		font-weight: 500;
		border: 1px solid var(--color-border-primary);
		background: var(--color-background-primary);
		color: var(--color-text-primary);
		cursor: pointer;
	}
	.c-route-planner__mode-btn:hover {
		background: var(--color-background-secondary);
	}
	.c-route-planner__mode-btn--active {
		border-color: var(--color-primary-300, var(--color-primary-500));
		background: color-mix(in srgb, var(--color-primary-500) 10%, transparent);
		color: var(--color-primary-700, var(--color-primary-600));
	}

	.c-route-planner__inputs {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.c-route-planner__input-group {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	.c-route-planner__label {
		display: block;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin-bottom: 0.25rem;
	}
	.c-route-planner__input-row {
		display: flex;
	}
	.c-route-planner__input {
		flex: 1;
		min-width: 0;
		border-radius: 0.375rem 0 0 0.375rem;
		border: 1px solid var(--color-border-primary);
		border-right: none;
		padding: 0.5rem 0.75rem;
		font-size: 0.875rem;
	}
	.c-route-planner__input:focus {
		outline: none;
		border-color: var(--color-primary-500);
		box-shadow: 0 0 0 1px var(--color-primary-500);
	}
	.c-route-planner__input-action {
		display: inline-flex;
		align-items: center;
		border-radius: 0 0.375rem 0.375rem 0;
		border: 1px solid var(--color-border-primary);
		background: var(--color-background-secondary);
		padding-inline: 1rem;
		cursor: pointer;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}
	.c-route-planner__input-icon {
		width: 1.25rem;
		height: 1.25rem;
		color: var(--color-text-secondary);
	}
	.c-route-planner__input-icon--nav {
		color: var(--color-success-500);
	}

	.c-route-planner__waypoints-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.c-route-planner__add-link {
		font-size: 0.875rem;
		color: var(--color-primary-600);
		background: none;
		border: none;
		cursor: pointer;
	}
	.c-route-planner__add-link:hover {
		color: var(--color-primary-500);
	}
	.c-route-planner__waypoints {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-top: 0.5rem;
	}
	.c-route-planner__waypoint {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-radius: 0.25rem;
		border: 1px solid var(--color-border-primary);
		padding: 0.5rem;
	}
	.c-route-planner__waypoint-inner {
		display: flex;
		align-items: center;
	}
	.c-route-planner__waypoint-icon-wrap {
		border-radius: 0.25rem;
		background: var(--color-background-secondary);
		padding: 0.5rem;
	}
	.c-route-planner__waypoint-icon {
		width: 1rem;
		height: 1rem;
		color: var(--color-text-secondary);
	}
	.c-route-planner__waypoint-name {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin-left: 0.5rem;
	}
	.c-route-planner__waypoint-addr {
		font-size: 0.75rem;
		color: var(--color-text-secondary);
		margin-left: 0.5rem;
	}
	.c-route-planner__waypoint-remove {
		background: none;
		border: none;
		cursor: pointer;
		color: var(--color-text-tertiary, var(--color-text-secondary));
	}
	.c-route-planner__waypoint-remove:hover {
		color: var(--color-danger-500);
	}
	.c-route-planner__waypoint-remove-icon {
		width: 1rem;
		height: 1rem;
	}

	.c-route-planner__calculate-btn {
		width: 100%;
	}
	.c-route-planner__btn-icon {
		width: 1.25rem;
		height: 1.25rem;
		margin-right: 0.5rem;
	}

	.c-route-planner__section-title {
		font-size: 1.125rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin: 0 0 0.75rem;
	}
	.c-route-planner__route-options {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.c-route-planner__route-option {
		cursor: pointer;
		border-radius: 0.5rem;
		border: 1px solid var(--color-border-primary);
		padding: 1rem;
		transition: background var(--duration-150, 150ms) ease;
	}
	.c-route-planner__route-option:hover {
		background: var(--color-background-secondary);
	}
	.c-route-planner__route-option--active {
		border-color: var(--color-primary-500);
		background: color-mix(in srgb, var(--color-primary-500) 5%, transparent);
	}
	.c-route-planner__option-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.c-route-planner__option-name {
		font-weight: 500;
		color: var(--color-text-primary);
		margin: 0;
	}
	.c-route-planner__option-meta {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
		margin-top: 0.25rem;
	}
	.c-route-planner__option-icon {
		width: 1rem;
		height: 1rem;
	}
	.c-route-planner__dot {
		margin-inline: 0.25rem;
	}
	.c-route-planner__option-cost {
		text-align: right;
	}
	.c-route-planner__option-price {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin: 0;
	}
	.c-route-planner__option-tags {
		display: flex;
		gap: 0.25rem;
		margin-top: 0.25rem;
		justify-content: flex-end;
	}
	.c-route-planner__tag {
		display: inline-flex;
		align-items: center;
		border-radius: 9999px;
		padding: 0.125rem 0.5rem;
		font-size: 0.75rem;
		font-weight: 500;
	}
	.c-route-planner__tag--toll {
		background: #fef3c7;
		color: #92400e;
	}
	.c-route-planner__tag--highway {
		background: color-mix(in srgb, var(--color-primary-500) 12%, transparent);
		color: var(--color-primary-700, var(--color-primary-600));
	}
	.c-route-planner__tag--eco {
		background: color-mix(in srgb, var(--color-success-500) 12%, transparent);
		color: var(--color-success-700, var(--color-success-600));
	}

	@media (min-width: 768px) {
		.c-route-planner__map-panel {
			width: 66.666%;
		}
	}
	.c-route-planner__map-wrap {
		position: relative;
		overflow: hidden;
		border-radius: 0.5rem;
		border: 1px solid var(--color-border-primary);
	}
	.c-route-planner__map-bg {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(rgb(0 0 0 / 0.04) 1px, transparent 1px),
			linear-gradient(90deg, rgb(0 0 0 / 0.04) 1px, transparent 1px),
			linear-gradient(135deg, var(--color-primary-100, #dbeafe), var(--color-primary-50, #eff6ff));
		background-size:
			5% 5%,
			5% 5%,
			100% 100%;
	}
	.c-route-planner__pin {
		position: absolute;
		z-index: var(--z-index-docked, 10);
		display: flex;
		width: 2rem;
		height: 2rem;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		transform: translate(-50%, -50%);
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
		color: var(--color-text-inverse);
	}
	.c-route-planner__pin--start {
		background: var(--color-success-500);
	}
	.c-route-planner__pin--end {
		background: var(--color-danger-500);
	}
	.c-route-planner__pin--waypoint {
		background: var(--color-primary-500);
		width: 1.5rem;
		height: 1.5rem;
	}
	.c-route-planner__pin-icon {
		width: 1.25rem;
		height: 1.25rem;
	}
	.c-route-planner__pin-label {
		position: absolute;
		border-radius: 0.25rem;
		background: var(--color-background-primary);
		padding: 0.25rem 0.5rem;
		font-size: 0.875rem;
		font-weight: 500;
		box-shadow: 0 1px 2px rgb(0 0 0 / 0.05);
	}
	.c-route-planner__route-line {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}
	.c-route-planner__controls {
		position: absolute;
		top: 1rem;
		right: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.c-route-planner__directions {
		margin-top: 1rem;
		overflow: hidden;
		border-radius: 0.5rem;
		border: 1px solid var(--color-border-primary);
	}
	.c-route-planner__directions-head {
		border-bottom: 1px solid var(--color-border-primary);
		background: var(--color-background-secondary);
		padding: 0.75rem 1rem;
	}
	.c-route-planner__steps {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.c-route-planner__step {
		display: flex;
		align-items: flex-start;
	}
	.c-route-planner__step-num {
		flex-shrink: 0;
		display: flex;
		width: 1.5rem;
		height: 1.5rem;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		background: var(--color-primary-500);
		color: var(--color-text-inverse);
		font-size: 0.75rem;
		margin-top: 0.125rem;
	}
	.c-route-planner__step-title {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin: 0 0 0 0.75rem;
	}
	.c-route-planner__step-desc {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
		margin: 0.25rem 0 0 0.75rem;
	}

	._c1 {
		height: 1rem;
		width: 1rem;
	}
</style>
