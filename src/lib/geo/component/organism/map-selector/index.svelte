<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import Button from '$stylist/control/component/atom/button/index.svelte';
	import { createMapSelectorState } from '$stylist/geo/function/state/map-selector/index.svelte';

	let props = $props();
	const state = createMapSelectorState(props);
</script>

<div
	class="c-map-selector {props.class ?? ''}"
	style={`width: ${props.width ?? '100%'}; height: ${props.height ?? '400px'};`}
	{...state.restProps}
>
	{#if state.showSearch}
		<div class="c-map-selector__search">
			<div class="c-map-selector__search-icon-wrap">
				<BaseIcon name="search" class="c-map-selector__icon" />
			</div>
			<input
				type="text"
				class="c-map-selector__search-input {props.searchClass ?? ''}"
				placeholder="Search for places..."
				value={state.searchQuery}
				oninput={(e) => (state.searchQuery = (e.target as HTMLInputElement).value)}
				onkeypress={(e) => e.key === 'Enter' && state.handleSearch()}
			/>
			<button class="c-map-selector__search-btn" onclick={state.handleSearch}>
				<BaseIcon name="search" class="c-map-selector__icon" />
			</button>
		</div>
	{/if}

	<div class="c-map-selector__map-wrap {props.mapClass ?? ''}">
		<div
			class="c-map-selector__map"
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
			<div class="c-map-selector__map-bg"></div>

			<div class="c-map-selector__center-pin"></div>

			{#if state.showMarkers}
				{#each state.locations as location}
					{@const pos = state.calculateMarkerPosition(location)}
					<div
						class="c-map-selector__marker"
						style={`left: ${pos.x}%; top: ${pos.y}%; z-index: var(--z-index-layer20, 20);`}
						onclick={(e) => state.handleMarkerClickEvent(location, e)}
						title={location.name}
						role="button"
						tabindex={0}
						onkeydown={(e: KeyboardEvent) => state.handleMarkerKeyDown(location, e)}
					>
						<BaseIcon name="map-pin" class="c-map-selector__marker-icon" />
						{#if pos.y > 50}
							<div class="c-map-selector__marker-label">{location.name}</div>
						{/if}
					</div>
				{/each}
			{/if}
		</div>

		{#if state.showZoomControls}
			<div class="c-map-selector__controls {props.controlsClass ?? ''}">
				<Button variant="secondary" size="sm" onclick={state.handleZoomIn} aria-label="Zoom in">
					<BaseIcon name="plus" class="_c1" />
				</Button>
				<Button variant="secondary" size="sm" onclick={state.handleZoomOut} aria-label="Zoom out">
					<BaseIcon name="minus" class="_c1" />
				</Button>
				<Button
					variant="secondary"
					size="sm"
					onclick={state.handleResetView}
					aria-label="Reset view"
				>
					<BaseIcon name="rotate-ccw" class="_c1" />
				</Button>
			</div>
		{/if}

		{#if state.showCurrentLocation}
			<div class="c-map-selector__location-btn">
				<Button
					variant="secondary"
					size="sm"
					onclick={state.handleCurrentLocation}
					aria-label="Show current location"
				>
					<BaseIcon name="navigation" class="_c1" />
				</Button>
			</div>
		{/if}

		<div class="c-map-selector__readout">
			<div>Zoom: {state.currentZoom}</div>
			<div>Center: {state.currentCenter.lat.toFixed(4)}, {state.currentCenter.lng.toFixed(4)}</div>
		</div>
	</div>
</div>

<style>
	.c-map-selector {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.c-map-selector__search {
		position: relative;
		z-index: var(--z-index-docked, 10);
		display: flex;
		align-items: center;
	}

	.c-map-selector__search-icon-wrap {
		pointer-events: none;
		position: absolute;
		inset-block: 0;
		left: 0;
		display: flex;
		align-items: center;
		padding-left: 0.75rem;
	}

	.c-map-selector__icon {
		width: 1.25rem;
		height: 1.25rem;
		color: var(--color-text-tertiary, var(--color-text-secondary));
	}

	.c-map-selector__search-input {
		display: block;
		width: 100%;
		border-radius: 0.375rem;
		border: 1px solid var(--color-border-primary);
		background: var(--color-background-primary);
		padding: 0.5rem 2.5rem;
		font-size: 0.875rem;
	}

	.c-map-selector__search-input:focus {
		outline: none;
		border-color: var(--color-primary-500);
		box-shadow: 0 0 0 1px var(--color-primary-500);
	}

	.c-map-selector__search-btn {
		position: absolute;
		right: 0;
		inset-block: 0;
		display: flex;
		align-items: center;
		padding-inline: 0.75rem;
		background: none;
		border: none;
		cursor: pointer;
		color: var(--color-text-secondary);
	}

	.c-map-selector__search-btn:hover {
		color: var(--color-text-primary);
	}

	.c-map-selector__map-wrap {
		position: relative;
		flex: 1;
		overflow: hidden;
		border-radius: 0.5rem;
		border: 1px solid var(--color-border-primary);
	}

	.c-map-selector__map {
		position: relative;
		width: 100%;
		height: 100%;
		background: var(--color-primary-50, var(--color-background-secondary));
		cursor: grab;
	}

	.c-map-selector__map:active {
		cursor: grabbing;
	}

	.c-map-selector__map-bg {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(var(--color-background-tertiary, rgb(0 0 0 / 0.05)) 1px, transparent 1px),
			linear-gradient(
				90deg,
				var(--color-background-tertiary, rgb(0 0 0 / 0.05)) 1px,
				transparent 1px
			),
			var(
				--gradient-forest,
				linear-gradient(135deg, var(--color-primary-100, #dbeafe), var(--color-primary-50, #eff6ff))
			);
		background-size:
			10% 10%,
			10% 10%,
			100% 100%;
		opacity: 0.3;
	}

	.c-map-selector__center-pin {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 1rem;
		height: 1rem;
		transform: translate(-50%, -50%);
		border-radius: 9999px;
		border: 2px solid var(--color-background-primary);
		background: var(--color-danger-500);
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
		z-index: var(--z-index-docked, 10);
	}

	.c-map-selector__marker {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 1.5rem;
		height: 1.5rem;
		transform: translate(-50%, -50%);
		border-radius: 9999px;
		border: 2px solid var(--color-background-primary);
		background: var(--color-primary-500);
		color: var(--color-text-inverse);
		cursor: pointer;
		box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
	}

	.c-map-selector__marker-icon {
		width: 1rem;
		height: 1rem;
	}

	.c-map-selector__marker-label {
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translate(-50%, 0.25rem);
		border-radius: 0.25rem;
		background: var(--color-background-primary);
		padding: 0.25rem 0.5rem;
		font-size: 0.75rem;
		white-space: nowrap;
		box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
	}

	.c-map-selector__controls {
		position: absolute;
		top: 1rem;
		right: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.c-map-selector__location-btn {
		position: absolute;
		right: 1rem;
		bottom: 1rem;
	}

	.c-map-selector__readout {
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
