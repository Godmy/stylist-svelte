<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';
	import { Button } from '$lib';
	import { createRoutePlannerState } from '$stylist/geo/function/state/route-planner';
	import type { RoutePlannerLocation } from '$stylist/geo/type/struct/route-planner';

	let props = $props();
	const state = createRoutePlannerState(props);
</script>

<div
	class={`route-planner ${props.class ?? ''}`}
	style={`width: ${state.width};`}
	{...state.restProps}
>
	<div class="flex flex-col gap-6 md:flex-row">
		<div class="space-y-6 md:w-1/3">
			<div>
				<h2 class="flex items-center text-xl font-bold text-[var(--color-text-primary)]">
					<BaseIcon name="route" class="mr-2 h-5 w-5 text-[var(--color-primary-500)]" />
					Plan Your Route
				</h2>
				<p class="text-sm text-[var(--color-text-secondary)]">Enter your start and end locations</p>
			</div>

			{#if state.showTravelMode}
				<div class="flex space-x-2">
					{#each state.travelModes as mode}
						<button
							type="button"
							class={`flex-1 rounded-md px-4 py-2 text-sm font-medium ${
								state.selectedTravelMode === mode
									? 'border border-[var(--color-primary-300)] bg-[var(--color-primary-100)] text-[var(--color-primary-700)]'
									: 'border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)]'
							}`}
							onclick={() => state.handleModeChange(mode)}
						>
							{mode.charAt(0).toUpperCase() + mode.slice(1)}
						</button>
					{/each}
				</div>
			{/if}

			<div class="space-y-4">
				<div>
					<label
						for="start-location-input"
						class="mb-1 block text-sm font-medium text-[var(--color-text-primary)]"
						>Start SlotLocation</label
					>
					<div class="flex">
						<input
							id="start-location-input"
							type="text"
							class={`block w-full min-w-0 flex-1 rounded-l-md border-[var(--color-border-primary)] px-3 py-2 focus:border-[var(--color-primary-500)] focus:ring-blue-500 focus:outline-none sm:text-sm ${props.inputClass ?? ''}`}
							placeholder="Starting point"
							value={state.selectedStartLocation?.address || ''}
						/>
						<button
							type="button"
							class="inline-flex items-center rounded-r-md border border-l-0 border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] px-4 text-sm font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)] focus:border-[var(--color-primary-500)] focus:ring-1 focus:ring-blue-500 focus:outline-none"
						>
							<BaseIcon name="map-pin" class="h-5 w-5 text-[var(--color-text-secondary)]" />
						</button>
					</div>
				</div>

				<div>
					<label
						for="end-location-input"
						class="mb-1 block text-sm font-medium text-[var(--color-text-primary)]"
						>End SlotLocation</label
					>
					<div class="flex">
						<input
							id="end-location-input"
							type="text"
							class={`block w-full min-w-0 flex-1 rounded-l-md border-[var(--color-border-primary)] px-3 py-2 focus:border-[var(--color-primary-500)] focus:ring-blue-500 focus:outline-none sm:text-sm ${props.inputClass ?? ''}`}
							placeholder="Destination"
							value={state.selectedEndLocation?.address || ''}
						/>
						<button
							type="button"
							class="inline-flex items-center rounded-r-md border border-l-0 border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] px-4 text-sm font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)] focus:border-[var(--color-primary-500)] focus:ring-1 focus:ring-blue-500 focus:outline-none"
						>
							<BaseIcon name="navigation" class="h-5 w-5 text-[var(--color-success-500)]" />
						</button>
					</div>
				</div>

				<div>
					<div class="flex items-center justify-between">
						<label
							for="waypoints-input"
							class="mb-1 block text-sm font-medium text-[var(--color-text-primary)]"
							>Waypoints</label
						>
						<button
							type="button"
							class="text-sm text-[var(--color-primary-600)] hover:text-[var(--color-primary-500)]"
							onclick={state.handleAddWaypoint}
						>
							+ Add
						</button>
					</div>

					{#if state.selectedWaypoints.length > 0}
						<div class="mt-2 space-y-2">
							{#each state.selectedWaypoints as waypoint, i}
								<div
									class="flex items-center justify-between rounded border border-[var(--color-border-primary)] p-2"
								>
									<div class="flex items-center">
										<div class="rounded bg-[var(--color-background-secondary)] p-2">
											<BaseIcon name="map-pin" class="h-4 w-4 text-[var(--color-text-secondary)]" />
										</div>
										<div class="ml-2">
											<div class="text-sm font-medium text-[var(--color-text-primary)]">
												{waypoint.name}
											</div>
											<div class="text-xs text-[var(--color-text-secondary)]">
												{waypoint.address}
											</div>
										</div>
									</div>
									<button
										type="button"
										class="text-[var(--color-text-tertiary)] hover:text-[var(--color-danger-500)]"
										onclick={() => state.handleRemoveWaypoint(i)}
									>
										<BaseIcon name="x" class="h-4 w-4" />
									</button>
								</div>
							{/each}
						</div>
					{/if}

					<div class="mt-2 flex">
						<input
							type="text"
							class={`block w-full min-w-0 flex-1 rounded-l-md border-[var(--color-border-primary)] px-3 py-2 focus:border-[var(--color-primary-500)] focus:ring-blue-500 focus:outline-none sm:text-sm ${props.inputClass ?? ''}`}
							placeholder="Add waypoint..."
							value={state.searchQuery}
							oninput={(e) => (state.searchQuery = (e.target as HTMLInputElement).value)}
						/>
						<button
							type="button"
							class="inline-flex items-center rounded-r-md border border-l-0 border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] px-3 text-sm font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)] focus:border-[var(--color-primary-500)] focus:ring-1 focus:ring-blue-500 focus:outline-none"
							onclick={state.handleAddWaypoint}
						>
							<BaseIcon name="plus" class="h-4 w-4" />
						</button>
					</div>
				</div>
			</div>

			<Button
				variant="primary"
				class="w-full"
				onclick={state.calculateRoute}
				disabled={!state.selectedStartLocation || !state.selectedEndLocation}
			>
				<BaseIcon name="route" class="mr-2 h-5 w-5" />
				Calculate Route
			</Button>

			{#if state.showRouteOptions && props.routeOptions && props.routeOptions.length > 0}
				<div>
					<h3 class="mb-3 text-lg font-medium text-[var(--color-text-primary)]">Route Options</h3>
					<div class="space-y-3">
						{#each props.routeOptions as option}
							<div
								class={`cursor-pointer rounded-lg border p-4 transition-all ${
									state.selectedRouteId === option.id
										? 'border-[var(--color-primary-500)] bg-[var(--color-primary-50)]'
										: 'border-[var(--color-border-primary)] hover:bg-[var(--color-background-secondary)]'
								} ${props.optionClass ?? ''}`}
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
								<div class="flex items-center justify-between">
									<div>
										<h4 class="font-medium text-[var(--color-text-primary)]">{option.name}</h4>
										<div class="mt-1 flex items-center text-sm text-[var(--color-text-secondary)]">
											<BaseIcon name="clock" class="mr-1 h-4 w-4" />
											<span>{Math.floor(option.duration / 60)}h {option.duration % 60}m</span>
											<span class="mx-2">•</span>
											<span>{option.distance} km</span>
										</div>
									</div>
									<div class="text-right">
										<p class="text-sm font-medium text-[var(--color-text-primary)]">
											{state.formatCurrency(option.cost)}
										</p>
										<div class="mt-1 flex space-x-1">
											{#if option.tolls}
												<span
													class="inline-flex items-center rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800"
													>Tolls</span
												>
											{/if}
											{#if option.highways}
												<span
													class="inline-flex items-center rounded-full bg-[var(--color-primary-100)] px-2 py-0.5 text-xs font-medium text-[var(--color-primary-800)]"
													>Highway</span
												>
											{/if}
											{#if option.ecoFriendly}
												<span
													class="inline-flex items-center rounded-full bg-[var(--color-success-100)] px-2 py-0.5 text-xs font-medium text-[var(--color-success-800)]"
													>Eco</span
												>
											{/if}
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
			<div class="md:w-2/3">
				<div class="overflow-hidden rounded-lg border" style={`height: ${state.height}`}>
					<div class="relative h-full w-full [background-image:var(--gradient-forest)]">
						{#each Array(20) as _, i}
							<div
								class="absolute h-px w-full bg-[var(--color-background-tertiary)] opacity-[var(--opacity-20)]"
								style={`top: ${i * 5}%`}
							></div>
							<div
								class="absolute h-full w-px bg-[var(--color-background-tertiary)] opacity-[var(--opacity-20)]"
								style={`left: ${i * 5}%`}
							></div>
						{/each}

						{#if state.selectedStartLocation}
							<div
								class="absolute z-[var(--z-index-docked)] flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-[var(--color-success-500)] text-[var(--color-text-inverse)] shadow-lg"
								style="top: 30%; left: 20%;"
							>
								<BaseIcon name="map-pin" class="h-5 w-5" />
							</div>
							<div
								class="absolute rounded bg-[var(--color-background-primary)] px-2 py-1 text-sm font-medium shadow"
								style="top: 25%; left: 25%;"
							>
								Start
							</div>
						{/if}

						{#if state.selectedEndLocation}
							<div
								class="absolute z-[var(--z-index-docked)] flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-[var(--color-danger-500)] text-[var(--color-text-inverse)] shadow-lg"
								style="top: 70%; left: 80%;"
							>
								<BaseIcon name="navigation" class="h-5 w-5" />
							</div>
							<div
								class="absolute rounded bg-[var(--color-background-primary)] px-2 py-1 text-sm font-medium shadow"
								style="top: 65%; left: 75%;"
							>
								Destination
							</div>
						{/if}

						{#if state.selectedWaypoints.length > 0}
							{#each state.selectedWaypoints as waypoint, i}
								{@const position = {
									top: 30 + (i + 1) * (40 / (state.selectedWaypoints.length + 1)) + '%',
									left: 20 + (i + 1) * (60 / (state.selectedWaypoints.length + 1)) + '%'
								}}
								<div
									class="absolute z-[var(--z-index-docked)] flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] shadow-lg"
									style={`top: ${position.top}; left: ${position.left};`}
								>
									<BaseIcon name="map-pin" class="h-4 w-4" />
								</div>
								<div
									class="absolute rounded bg-[var(--color-background-primary)] px-2 py-0.5 text-xs shadow"
									style="top: calc(${position.top} - 20px); left: calc(${position.left} + 15px);"
								>
									{waypoint.name}
								</div>
							{/each}
						{/if}

						{#if state.selectedStartLocation && state.selectedEndLocation}
							<svg class="pointer-events-none absolute inset-0 h-full w-full">
								<path
									d="M 20% 30% Q 40% 20% 50% 50% T 80% 70%"
									stroke="var(--color-primary-500)"
									stroke-width="4"
									fill="none"
									stroke-dasharray="8,4"
								/>
							</svg>
						{/if}

						<div class="absolute top-4 right-4 flex flex-col space-y-2">
							<Button
								variant="secondary"
								size="sm"
								onclick={state.handleZoomIn}
								aria-label="Zoom in"
							>
								<BaseIcon name="plus" class="h-4 w-4" />
							</Button>
							<Button
								variant="secondary"
								size="sm"
								onclick={state.handleZoomOut}
								aria-label="Zoom out"
							>
								<BaseIcon name="minus" class="h-4 w-4" />
							</Button>
							<Button
								variant="secondary"
								size="sm"
								onclick={state.handleResetView}
								aria-label="Reset view"
							>
								<BaseIcon name="rotate-ccw" class="h-4 w-4" />
							</Button>
						</div>
					</div>
				</div>

				{#if state.showDirections && state.selectedRouteId && props.routeOptions && props.routeOptions.length > 0}
					<div class="mt-4 overflow-hidden rounded-lg border">
						<div class="border-b bg-[var(--color-background-secondary)] px-4 py-3">
							<h3 class="text-lg font-medium text-[var(--color-text-primary)]">Directions</h3>
						</div>
						<div class="p-4">
							<div class="space-y-3">
								<div class="flex items-start">
									<div class="mt-0.5 flex-shrink-0">
										<div
											class="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary-500)] text-xs text-[var(--color-text-inverse)]"
										>
											1
										</div>
									</div>
									<div class="ml-3">
										<p class="text-sm font-medium text-[var(--color-text-primary)]">
											Start at {state.selectedStartLocation?.name || 'Start Point'}
										</p>
										<p class="mt-1 text-sm text-[var(--color-text-secondary)]">
											Head north on Main Street toward Oak Avenue
										</p>
									</div>
								</div>
								<div class="flex items-start">
									<div class="mt-0.5 flex-shrink-0">
										<div
											class="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary-500)] text-xs text-[var(--color-text-inverse)]"
										>
											2
										</div>
									</div>
									<div class="ml-3">
										<p class="text-sm font-medium text-[var(--color-text-primary)]">
											Turn right onto Oak Avenue
										</p>
										<p class="mt-1 text-sm text-[var(--color-text-secondary)]">
											Continue straight for 0.5 miles
										</p>
									</div>
								</div>
								<div class="flex items-start">
									<div class="mt-0.5 flex-shrink-0">
										<div
											class="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary-500)] text-xs text-[var(--color-text-inverse)]"
										>
											3
										</div>
									</div>
									<div class="ml-3">
										<p class="text-sm font-medium text-[var(--color-text-primary)]">
											Arrive at {state.selectedEndLocation?.name || 'Destination'}
										</p>
										<p class="mt-1 text-sm text-[var(--color-text-secondary)]">
											You have reached your destination
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				{/if}
			</div>
		{/if}
	</div>
</div>
