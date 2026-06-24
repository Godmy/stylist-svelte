<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import Button from '$stylist/control/component/atom/button/index.svelte';
	import { createMapWithMarkersState } from '$stylist/geo/function/state/map-with-markers/index.svelte';

	let props = $props();
	const state = createMapWithMarkersState(props);
</script>

<div class="c-map-with-markers {props.class ?? ''}" {...state.restProps}>
	<div class="c-map-with-markers__body">
		{#if state.showSearch}
			<div class="c-map-with-markers__search">
				<div class="c-map-with-markers__search-icon-wrap">
					<BaseIcon name="search" class="c-map-with-markers__icon" />
				</div>
				<input
					type="text"
					class="c-map-with-markers__search-input"
					placeholder="Search for places..."
					value={state.searchQuery}
					oninput={(e) => (state.searchQuery = (e.target as HTMLInputElement).value)}
				/>
			</div>
		{/if}

		<div
			class="c-map-with-markers__map {props.mapClass ?? ''}"
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
			<div class="c-map-with-markers__map-bg"></div>

			{#each state.markers as marker}
				{@const xOffset =
					(marker.lng - state.currentView.center.lng) *
						10000 *
						Math.pow(2, state.currentView.zoom - 10) +
					state.mapOffset.x}
				{@const yOffset =
					(state.currentView.center.lat - marker.lat) *
						10000 *
						Math.pow(2, state.currentView.zoom - 10) +
					state.mapOffset.y}
				<div
					class="c-map-with-markers__marker {props.markerClass ?? ''}"
					style={`left: calc(50% + ${xOffset}px); top: calc(50% + ${yOffset}px); z-index: var(--z-index-docked, 10);`}
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
						class="c-map-with-markers__marker-inner {state.hoveredMarker === marker.id
							? 'c-map-with-markers__marker-inner--hovered'
							: ''}"
					>
						<div
							class="c-map-with-markers__marker-pin c-map-with-markers__marker-pin--{marker.size ??
								'md'}"
							style={marker.color ? `background-color: ${marker.color}` : undefined}
						>
							<BaseIcon
								name="map-pin"
								class="c-map-with-markers__marker-icon c-map-with-markers__marker-icon--{marker.size ??
									'md'}"
							/>
						</div>

						{#if state.hoveredMarker === marker.id && marker.title}
							<div class="c-map-with-markers__tooltip">
								<div class="c-map-with-markers__tooltip-title">{marker.title}</div>
								{#if marker.description}
									<div class="c-map-with-markers__tooltip-desc">{marker.description}</div>
								{/if}
							</div>
						{/if}
					</div>
				</div>
			{/each}

			<div class="c-map-with-markers__controls">
				{#if state.showZoomControls}
					<Button variant="secondary" size="sm" onclick={state.handleZoomIn} aria-label="Zoom in">
						<BaseIcon name="plus" class="_c1" />
					</Button>
					<Button variant="secondary" size="sm" onclick={state.handleZoomOut} aria-label="Zoom out">
						<BaseIcon name="minus" class="_c1" />
					</Button>
				{/if}
				{#if state.showCurrentLocation}
					<Button
						variant="secondary"
						size="sm"
						onclick={state.handleCurrentLocation}
						aria-label="Current location"
					>
						<BaseIcon name="locate" class="_c1" />
					</Button>
				{/if}
				{#if state.showResetView}
					<Button
						variant="secondary"
						size="sm"
						onclick={state.handleResetView}
						aria-label="Reset view"
					>
						<BaseIcon name="rotate-ccw" class="_c1" />
					</Button>
				{/if}
			</div>

			<div class="c-map-with-markers__readout">
				{#if state.showScale}
					<div>Scale: 1:{Math.round(Math.pow(2, 20 - state.currentView.zoom) * 100)}m</div>
				{/if}
				<div>Zoom: {state.currentView.zoom}</div>
			</div>
		</div>
	</div>
</div>

<style>
	.c-map-with-markers__body {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.c-map-with-markers__search {
		position: relative;
		margin-bottom: 1rem;
	}

	.c-map-with-markers__search-icon-wrap {
		pointer-events: none;
		position: absolute;
		inset-block: 0;
		left: 0;
		display: flex;
		align-items: center;
		padding-left: 0.75rem;
	}

	.c-map-with-markers__icon {
		width: 1.25rem;
		height: 1.25rem;
		color: var(--color-text-tertiary, var(--color-text-secondary));
	}

	.c-map-with-markers__search-input {
		display: block;
		width: 100%;
		border-radius: 0.375rem;
		border: 1px solid var(--color-border-primary);
		background: var(--color-background-primary);
		padding: 0.5rem 0.75rem 0.5rem 2.5rem;
		font-size: 0.875rem;
	}

	.c-map-with-markers__search-input:focus {
		outline: none;
		border-color: var(--color-primary-500);
		box-shadow: 0 0 0 1px var(--color-primary-500);
	}

	.c-map-with-markers__map {
		position: relative;
		flex: 1;
		overflow: hidden;
		border-radius: 0.5rem;
		border: 1px solid var(--color-border-primary);
		height: 31.25rem;
		cursor: grab;
	}

	.c-map-with-markers__map:active {
		cursor: grabbing;
	}

	.c-map-with-markers__map-bg {
		position: absolute;
		inset: 0;
		background-color: var(--color-primary-50, var(--color-background-secondary));
		background-image:
			linear-gradient(rgb(0 0 0 / 0.04) 1px, transparent 1px),
			linear-gradient(90deg, rgb(0 0 0 / 0.04) 1px, transparent 1px);
		background-size: 5% 5%;
	}

	.c-map-with-markers__marker {
		position: absolute;
		transform: translate(-50%, -50%);
		cursor: pointer;
	}

	.c-map-with-markers__marker-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		transition: transform var(--duration-150, 150ms) ease;
	}

	.c-map-with-markers__marker-inner--hovered {
		transform: scale(1.1);
	}

	.c-map-with-markers__marker-pin {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		border: 2px solid var(--color-background-primary);
		background: var(--color-primary-500);
		color: var(--color-text-inverse);
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
	}

	.c-map-with-markers__marker-pin--sm {
		width: 1.5rem;
		height: 1.5rem;
	}
	.c-map-with-markers__marker-pin--md {
		width: 2rem;
		height: 2rem;
	}
	.c-map-with-markers__marker-pin--lg {
		width: 2.5rem;
		height: 2.5rem;
	}

	.c-map-with-markers__marker-icon--sm {
		width: 1rem;
		height: 1rem;
	}
	.c-map-with-markers__marker-icon--md {
		width: 1.25rem;
		height: 1.25rem;
	}
	.c-map-with-markers__marker-icon--lg {
		width: 1.5rem;
		height: 1.5rem;
	}

	.c-map-with-markers__tooltip {
		position: absolute;
		top: 100%;
		z-index: var(--z-index-popover, 1500);
		margin-top: 0.5rem;
		border-radius: 0.25rem;
		background: var(--color-background-primary);
		padding: 0.5rem 0.75rem;
		font-size: 0.875rem;
		white-space: nowrap;
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
	}

	.c-map-with-markers__tooltip-title {
		font-weight: 500;
	}
	.c-map-with-markers__tooltip-desc {
		color: var(--color-text-secondary);
	}

	.c-map-with-markers__controls {
		position: absolute;
		top: 1rem;
		right: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.c-map-with-markers__readout {
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
