<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';
	import { Button } from '$lib';
	import { createMapWithMarkersState } from '$stylist/geo/function/state/map-with-markers';

	let props = $props();
	const state = createMapWithMarkersState(props);
</script>

<div class={`map-with-markers ${props.class ?? ''}`} {...state.restProps}>
	<div class="flex h-full flex-col">
		{#if state.showSearch}
			<div class="mb-4">
				<div class="relative">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<BaseIcon name="search" class="h-5 w-5 text-[var(--color-text-tertiary)]" />
					</div>
					<input
						type="text"
						class="block w-full rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] py-2 pr-3 pl-10 leading-5 placeholder-gray-500 focus:border-[var(--color-primary-500)] focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:outline-none sm:text-sm"
						placeholder="Search for places..."
						value={state.searchQuery}
						oninput={(e) => (state.searchQuery = (e.target as HTMLInputElement).value)}
					/>
				</div>
			</div>
		{/if}

		<div
			class={`relative overflow-hidden rounded-lg border border-[var(--color-border-primary)] ${props.mapClass ?? ''}`}
			style="height: 500px;"
			onclick={state.handleMapClick}
			onmousedown={state.handleMouseDown}
			onmousemove={state.handleMouseMove}
			onmouseup={state.handleMouseUp}
			onmouseleave={state.handleMouseUp}
			role="button"
			tabindex={0}
			onkeydown={(e: KeyboardEvent) =>
				state.handleKeyDown(e, () => state.handleMapClick(e as unknown as MouseEvent))}
		>
			<div class="absolute inset-0 bg-[var(--color-primary-50)]">
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

				<div
					class="absolute h-1/4 w-1/3 rounded-lg bg-[var(--color-primary-200)] opacity-[var(--opacity-50)]"
					style="top: 20%; left: 30%;"
				></div>
				<div
					class="absolute h-1/5 w-1/5 rounded-full bg-[var(--color-primary-200)] opacity-[var(--opacity-50)]"
					style="top: 60%; left: 20%;"
				></div>
				<div
					class="absolute h-1 w-full bg-[var(--color-neutral-400)] opacity-[var(--opacity-40)]"
					style="top: 30%;"
				></div>
				<div
					class="absolute h-full w-1 bg-[var(--color-neutral-400)] opacity-[var(--opacity-40)]"
					style="left: 40%;"
				></div>
				<div
					class="absolute h-1/6 w-1/4 rounded bg-[var(--color-success-200)] opacity-[var(--opacity-60)]"
					style="top: 50%; left: 60%;"
				></div>
			</div>

			{#each state.markers as marker}
				<div
					class={`absolute z-[var(--z-index-docked)] -translate-x-1/2 -translate-y-1/2 transform cursor-pointer ${props.markerClass ?? ''}`}
					style={`left: calc(50% + ${(marker.lng - state.currentView.center.lng) * 10000 * Math.pow(2, state.currentView.zoom - 10) + state.mapOffset.x}px); top: calc(50% + ${(state.currentView.center.lat - marker.lat) * 10000 * Math.pow(2, state.currentView.zoom - 10) + state.mapOffset.y}px);`}
					onclick={(e) => state.handleMarkerClick(marker, e)}
					onmouseover={() => (state.hoveredMarker = marker.id)}
					onmouseout={() => (state.hoveredMarker = null)}
					onfocus={() => (state.hoveredMarker = marker.id)}
					onblur={() => (state.hoveredMarker = null)}
					role="button"
					tabindex={0}
					onkeydown={(e: KeyboardEvent) => state.handleMarkerKeyDown(marker, e)}
				>
					<div
						class={`flex flex-col items-center ${state.hoveredMarker === marker.id ? 'scale-110' : ''} transition-transform`}
					>
						<div
							class={`flex items-center justify-center rounded-full ${
								marker.size === 'sm' ? 'h-6 w-6' : marker.size === 'lg' ? 'h-10 w-10' : 'h-8 w-8'
							} ${
								marker.color || 'bg-[var(--color-primary-500)]'
							} border-2 border-[var(--color-background-primary)] shadow-lg`}
						>
							<BaseIcon
								name="map-pin"
								class={`${
									marker.size === 'sm' ? 'h-4 w-4' : marker.size === 'lg' ? 'h-6 w-6' : 'h-5 w-5'
								} text-[var(--color-text-inverse)]`}
							/>
						</div>

						{#if state.hoveredMarker === marker.id && marker.title}
							<div
								class="absolute top-full z-[var(--z-index-popover)] mt-2 rounded bg-[var(--color-background-primary)] px-3 py-2 text-sm whitespace-nowrap shadow-lg"
							>
								<div class="font-medium">{marker.title}</div>
								{#if marker.description}
									<div class="text-[var(--color-text-secondary)]">{marker.description}</div>
								{/if}
							</div>
						{/if}
					</div>
				</div>
			{/each}

			<div class="absolute top-4 right-4 flex flex-col space-y-2">
				{#if state.showZoomControls}
					<Button variant="secondary" size="sm" onclick={state.handleZoomIn} aria-label="Zoom in">
						<BaseIcon name="plus" class="h-4 w-4" />
					</Button>
					<Button variant="secondary" size="sm" onclick={state.handleZoomOut} aria-label="Zoom out">
						<BaseIcon name="minus" class="h-4 w-4" />
					</Button>
				{/if}

				{#if state.showCurrentLocation}
					<Button
						variant="secondary"
						size="sm"
						onclick={state.handleCurrentLocation}
						aria-label="Current location"
					>
						<BaseIcon name="locate" class="h-4 w-4" />
					</Button>
				{/if}

				{#if state.showResetView}
					<Button
						variant="secondary"
						size="sm"
						onclick={state.handleResetView}
						aria-label="Reset view"
					>
						<BaseIcon name="rotate-ccw" class="h-4 w-4" />
					</Button>
				{/if}
			</div>

			<div
				class="absolute bottom-4 left-4 rounded-md bg-[var(--color-background-primary)]/80 px-3 py-2 text-sm backdrop-blur-sm"
			>
				{#if state.showScale}
					<div>Scale: 1:{Math.round(Math.pow(2, 20 - state.currentView.zoom) * 100)}m</div>
				{/if}
				<div>Zoom: {state.currentView.zoom}</div>
			</div>
		</div>
	</div>
</div>
