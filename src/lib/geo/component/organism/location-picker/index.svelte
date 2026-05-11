<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';
	import { Button } from '$stylist/control';
	import { createLocationPickerState } from '$stylist/geo/function/state/location-picker';
	import { geoHandleKeyDown } from '$stylist/geo/function/script/handle-key-down';
	import type { MapMarker } from '$stylist/geo/type/struct/location-picker';

	let props = $props();
	const state = createLocationPickerState(props);
</script>

<div class={`c-location-picker ${props.class ?? ''}`} {...state.restProps}>
	{#if state.showSearch}
		<div class="relative mb-4">
			<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<BaseIcon name="search" class="h-5 w-5 text-[var(--color-text-tertiary)]" />
			</div>
			<input
				type="text"
				class="block w-full rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] py-2 pr-3 pl-10 leading-5 placeholder-gray-500 focus:border-[var(--color-primary-500)] focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:outline-none sm:text-sm"
				placeholder="Search for a place..."
				value={state.searchQuery}
				oninput={(e) => (state.searchQuery = (e.target as HTMLInputElement).value)}
				onkeypress={(e) => e.key === 'Enter' && state.handleSearch()}
			/>
			<button
				class="absolute inset-y-0 right-0 flex items-center pr-3"
				onclick={state.handleSearch}
			>
				<BaseIcon
					name="search"
					class="h-5 w-5 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]"
				/>
			</button>
		</div>
	{/if}

	<div
		class="relative overflow-hidden rounded-lg border border-[var(--color-border-primary)] shadow-sm"
	>
		<div
			class={`relative cursor-crosshair bg-[var(--color-primary-50)] ${props.mapClass ?? ''}`}
			style={`width: 100%; height: 400px;`}
			onclick={state.handleMapClick}
			role="button"
			tabindex={0}
			onkeydown={(e: KeyboardEvent) =>
				geoHandleKeyDown(e, () => state.handleMapClick(e as unknown as MouseEvent))}
		>
			<div class="absolute inset-0 [background-image:var(--gradient-forest)]">
				{#each Array(10).fill(0) as _, i}
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
					class="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-[var(--color-background-primary)] bg-[var(--color-danger-500)]"
					style={`left: 50%; top: 50%;`}
				></div>
			</div>

			{#each state.markers as marker}
				{@const pos = state.coordsToPixel(
					marker.coordinates,
					state.mapDimensions.width,
					state.mapDimensions.height
				)}
				<div
					class={`absolute -translate-x-1/2 -translate-y-1/2 transform cursor-pointer ${
						state.selectedMarker === marker.id
							? 'z-[var(--z-index-docked)]'
							: 'z-[var(--z-index-base)]'
					}`}
					style={`left: ${pos.x}px; top: ${pos.y}px;`}
					onclick={(e) => {
						e.stopPropagation();
						state.handleMarkerClick(marker);
					}}
					role="button"
					tabindex={0}
					onkeydown={(e: KeyboardEvent) => state.handleMarkerKeyDown(marker, e)}
				>
					<BaseIcon
						name="map-pin"
						class={`h-6 w-6 ${
							state.selectedMarker === marker.id
								? 'scale-125 fill-current text-[var(--color-danger-600)]'
								: 'fill-current text-[var(--color-primary-600)]'
						}`}
					/>
					{#if state.selectedMarker === marker.id || marker.title}
						<div
							class="absolute -top-8 left-1/2 -translate-x-1/2 transform rounded bg-[var(--color-background-primary)] px-2 py-1 text-xs whitespace-nowrap shadow-md"
						>
							{marker.title || `Marker ${marker.id}`}
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<div class="absolute top-4 right-4 flex flex-col space-y-2">
			<Button
				variant="secondary"
				size="sm"
				onclick={state.handleZoomIn}
				disabled={state.currentZoom >= state.maxZoom}
			>
				<BaseIcon name="plus" class="h-4 w-4" />
			</Button>
			<Button
				variant="secondary"
				size="sm"
				onclick={state.handleZoomOut}
				disabled={state.currentZoom <= state.minZoom}
			>
				<BaseIcon name="minus" class="h-4 w-4" />
			</Button>
			<Button variant="secondary" size="sm" onclick={state.handleResetView}>
				<BaseIcon name="rotate-ccw" class="h-4 w-4" />
			</Button>
			{#if state.showCurrentLocation}
				<Button variant="secondary" size="sm" onclick={state.handleCurrentLocation}>
					<BaseIcon name="crosshair" class="h-4 w-4" />
				</Button>
			{/if}
		</div>

		{#if state.showCoordinates}
			<div
				class="absolute bottom-4 left-4 rounded-md bg-[var(--color-background-primary)]/80 px-3 py-2 text-sm backdrop-blur-sm"
			>
				<div>Lat: {state.currentCenter.lat.toFixed(4)}</div>
				<div>Lng: {state.currentCenter.lng.toFixed(4)}</div>
				<div>Zoom: {state.currentZoom}</div>
			</div>
		{/if}
	</div>
</div>
