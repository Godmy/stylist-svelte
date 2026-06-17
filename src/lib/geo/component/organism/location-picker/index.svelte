<script lang="ts">
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	import Button from '$stylist/control/component/atom/button/index.svelte';
	import { createLocationPickerState } from '$stylist/geo/function/state/location-picker/index.svelte';
	import { geoHandleKeyDown } from '$stylist/geo/function/script/handle-key-down';
	import type { RecipeLocationPicker } from '$stylist/geo/interface/recipe/location-picker';

	let props: RecipeLocationPicker = $props();
	const state = createLocationPickerState(props);
</script>

<div class="c-location-picker {props.class ?? ''}" {...state.restProps}>
	{#if state.showSearch}
		<div class="c-location-picker__search-wrap">
			<div class="c-location-picker__search-icon-wrap">
				<BaseIcon name="search" class="c-location-picker__search-icon" />
			</div>
			<input
				type="text"
				class="c-location-picker__search-input"
				placeholder="Search for a place..."
				value={state.searchQuery}
				oninput={(e) => (state.searchQuery = (e.target as HTMLInputElement).value)}
				onkeypress={(e) => e.key === 'Enter' && state.handleSearch()}
			/>
			<button class="c-location-picker__search-btn" onclick={state.handleSearch}>
				<BaseIcon name="search" class="c-location-picker__search-icon" />
			</button>
		</div>
	{/if}

	<div class="c-location-picker__map-wrap">
		<div
			class="c-location-picker__map {props.mapClass ?? ''}"
			onclick={state.handleMapClick}
			role="button"
			tabindex={0}
			onkeydown={(e: KeyboardEvent) =>
				geoHandleKeyDown(e, () => state.handleMapClick(e as unknown as MouseEvent))}
		>
			<div class="c-location-picker__map-bg">
				{#each state.markers as marker}
					{@const pos = state.coordsToPixel(
						marker.coordinates,
						state.mapDimensions.width,
						state.mapDimensions.height
					)}
					<div
						class="c-location-picker__marker {state.selectedMarker === marker.id
							? 'c-location-picker__marker--selected'
							: ''}"
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
							class="c-location-picker__marker-icon {state.selectedMarker === marker.id
								? 'c-location-picker__marker-icon--selected'
								: ''}"
						/>
						{#if state.selectedMarker === marker.id || marker.title}
							<div class="c-location-picker__marker-tooltip">
								{marker.title || `Marker ${marker.id}`}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>

		<div class="c-location-picker__zoom-controls">
			<Button
				variant="secondary"
				size="sm"
				onclick={state.handleZoomIn}
				disabled={state.currentZoom >= state.maxZoom}
			>
				<BaseIcon name="plus" class="_c1" />
			</Button>
			<Button
				variant="secondary"
				size="sm"
				onclick={state.handleZoomOut}
				disabled={state.currentZoom <= state.minZoom}
			>
				<BaseIcon name="minus" class="_c1" />
			</Button>
			<Button variant="secondary" size="sm" onclick={state.handleResetView}>
				<BaseIcon name="rotate-ccw" class="_c1" />
			</Button>
			{#if state.showCurrentLocation}
				<Button variant="secondary" size="sm" onclick={state.handleCurrentLocation}>
					<BaseIcon name="crosshair" class="_c1" />
				</Button>
			{/if}
		</div>

		{#if state.showCoordinates}
			<div class="c-location-picker__coords">
				<div>Lat: {state.currentCenter.lat.toFixed(4)}</div>
				<div>Lng: {state.currentCenter.lng.toFixed(4)}</div>
				<div>Zoom: {state.currentZoom}</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.c-location-picker {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.c-location-picker__search-wrap {
		position: relative;
		display: flex;
		align-items: center;
	}

	.c-location-picker__search-icon-wrap {
		pointer-events: none;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		padding-left: 0.75rem;
	}

	.c-location-picker__search-icon {
		width: 1.25rem;
		height: 1.25rem;
		color: var(--color-text-tertiary, var(--color-text-secondary));
	}

	.c-location-picker__search-input {
		display: block;
		width: 100%;
		border-radius: 0.375rem;
		border: 1px solid var(--color-border-primary);
		background: var(--color-background-primary);
		padding: 0.5rem 2.5rem;
		font-size: 0.875rem;
		line-height: 1.25;
	}

	.c-location-picker__search-input:focus {
		outline: none;
		border-color: var(--color-primary-500);
		box-shadow: 0 0 0 1px var(--color-primary-500);
	}

	.c-location-picker__search-btn {
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		padding-right: 0.75rem;
		background: none;
		border: none;
		cursor: pointer;
	}

	.c-location-picker__map-wrap {
		position: relative;
		overflow: hidden;
		border-radius: 0.5rem;
		border: 1px solid var(--color-border-primary);
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.c-location-picker__map {
		position: relative;
		cursor: crosshair;
		background: var(--color-primary-50, var(--color-background-secondary));
		width: 100%;
		height: 25rem;
	}

	.c-location-picker__map-bg {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(var(--color-background-tertiary) 1px, transparent 1px),
			linear-gradient(90deg, var(--color-background-tertiary) 1px, transparent 1px),
			var(
				--gradient-forest,
				linear-gradient(135deg, var(--color-primary-100), var(--color-primary-50))
			);
		background-size:
			10% 10%,
			10% 10%,
			100% 100%;
		opacity: 0.85;
	}

	.c-location-picker__marker {
		position: absolute;
		transform: translate(-50%, -50%);
		cursor: pointer;
		z-index: var(--z-index-base, 0);
	}

	.c-location-picker__marker--selected {
		z-index: var(--z-index-docked, 10);
	}

	.c-location-picker__marker-icon {
		width: 1.5rem;
		height: 1.5rem;
		fill: currentColor;
		color: var(--color-primary-600);
	}

	.c-location-picker__marker-icon--selected {
		transform: scale(1.25);
		color: var(--color-danger-600);
	}

	.c-location-picker__marker-tooltip {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, -100%);
		margin-top: -0.25rem;
		border-radius: 0.25rem;
		background: var(--color-background-primary);
		padding: 0.25rem 0.5rem;
		font-size: 0.75rem;
		white-space: nowrap;
		box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
	}

	.c-location-picker__zoom-controls {
		position: absolute;
		top: 1rem;
		right: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.c-location-picker__coords {
		position: absolute;
		bottom: 1rem;
		left: 1rem;
		border-radius: 0.375rem;
		background: rgb(255 255 255 / 0.8);
		padding: 0.5rem 0.75rem;
		font-size: 0.875rem;
		backdrop-filter: blur(4px);
	}

	._c1 {
		height: 1rem;
		width: 1rem;
	}
</style>
