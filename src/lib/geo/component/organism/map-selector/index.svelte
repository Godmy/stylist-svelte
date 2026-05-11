<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';
	import { Button } from '$stylist/control';
	import { createMapSelectorState } from '$stylist/geo/function/state/map-selector';
	import type { MapSelectorLocation } from '$stylist/geo/type/struct/map-selector';

	let props = $props();
	const state = createMapSelectorState(props);
</script>

<div
	class={`c-map-selector ${props.class ?? ''}`}
	style={`width: ${props.width ?? '100%'}; height: ${props.height ?? '400px'};`}
	{...state.restProps}
>
	{#if state.showSearch}
		<div class="relative z-[var(--z-index-docked)] mb-4">
			<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<BaseIcon name="search" class="h-5 w-5 text-[var(--color-text-tertiary)]" />
			</div>
			<input
				type="text"
				class={`block w-full rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] py-2 pr-3 pl-10 leading-5 placeholder-gray-500 focus:border-[var(--color-primary-500)] focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:outline-none sm:text-sm ${props.searchClass ?? ''}`}
				placeholder="Search for places..."
				value={state.searchQuery}
				oninput={(e) => (state.searchQuery = (e.target as HTMLInputElement).value)}
				onkeypress={(e) => e.key === 'Enter' && state.handleSearch()}
			/>
			<button
				class="absolute inset-y-0 right-0 flex items-center px-3 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
				onclick={state.handleSearch}
			>
				<BaseIcon name="search" class="h-5 w-5" />
			</button>
		</div>
	{/if}

	<div
		class={`relative overflow-hidden rounded-lg border border-[var(--color-border-primary)] ${props.mapClass ?? ''}`}
	>
		<div
			class="relative h-full w-full bg-[var(--color-primary-50)]"
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
			<div class="absolute inset-0 [background-image:var(--gradient-forest)]">
				{#each Array(10) as _, i}
					<div
						class="absolute h-px w-full bg-[var(--color-background-tertiary)] opacity-[var(--opacity-30)]"
						style={`top: ${i * 10}%`}
					></div>
					<div
						class="absolute h-full w-px bg-[var(--color-background-tertiary)] opacity-[var(--opacity-30)]"
						style={`left: ${i * 10}%`}
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

			<div
				class="absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-[var(--color-background-primary)] bg-[var(--color-danger-500)] shadow-lg"
				style="z-index: var(--z-index-docked);"
			></div>

			{#if state.showMarkers}
				{#each state.locations as location}
					{@const pos = state.calculateMarkerPosition(location)}
					<div
						class="absolute flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full border-2 border-[var(--color-background-primary)] bg-[var(--color-primary-500)] text-xs text-[var(--color-text-inverse)] shadow-md"
						style={`left: ${pos.x}%; top: ${pos.y}%; z-index: var(--z-index-layer20);`}
						onclick={(e) => state.handleMarkerClickEvent(location, e)}
						title={location.name}
						role="button"
						tabindex={0}
						onkeydown={(e: KeyboardEvent) => state.handleMarkerKeyDown(location, e)}
					>
						<BaseIcon name="map-pin" class="h-4 w-4" />
						{#if pos.y > 50}
							<div
								class="absolute top-full left-1/2 mt-1 -translate-x-1/2 transform rounded bg-[var(--color-background-primary)] px-2 py-1 text-xs whitespace-nowrap shadow-md"
							>
								{location.name}
							</div>
						{/if}
					</div>
				{/each}
			{/if}
		</div>

		{#if state.showZoomControls}
			<div class={`absolute top-4 right-4 flex flex-col space-y-2 ${props.controlsClass ?? ''}`}>
				<Button variant="secondary" size="sm" onclick={state.handleZoomIn} aria-label="Zoom in">
					<BaseIcon name="plus" class="h-4 w-4" />
				</Button>
				<Button variant="secondary" size="sm" onclick={state.handleZoomOut} aria-label="Zoom out">
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
		{/if}

		{#if state.showCurrentLocation}
			<div class="absolute right-4 bottom-4">
				<Button
					variant="secondary"
					size="sm"
					onclick={state.handleCurrentLocation}
					aria-label="Show current location"
				>
					<BaseIcon name="navigation" class="h-4 w-4" />
				</Button>
			</div>
		{/if}

		<div
			class="absolute bottom-4 left-4 rounded-md bg-[var(--color-background-primary)]/80 px-3 py-2 text-sm backdrop-blur-sm"
		>
			<div>Zoom: {state.currentZoom}</div>
			<div>Center: {state.currentCenter.lat.toFixed(4)}, {state.currentCenter.lng.toFixed(4)}</div>
		</div>
	</div>
</div>
