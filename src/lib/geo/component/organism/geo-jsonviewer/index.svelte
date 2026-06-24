<script lang="ts">
	import Button from '$stylist/control/component/atom/button/index.svelte';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import createGeoJSONViewerState from '$stylist/geo/function/state/geo-jsonviewer/index.svelte';
	import { geoHandleKeyDown } from '$stylist/geo/function/script/handle-key-down';

	const Globe = 'globe';
	const Download = 'download';
	const Upload = 'upload';
	const Plus = 'plus';
	const Minus = 'minus';
	const RotateCcw = 'rotate-ccw';
	const X = 'x';

	let props = $props();
	const state = createGeoJSONViewerState(props);
</script>

<div class={state.hostClasses} {...state.restProps}>
	<div class="c-geo-jsonviewer__body">
		{#if state.showLayers}
			<div class={state.layersPanelClasses}>
				<div class="c-geo-jsonviewer__layers-head">
					<h3 class="c-geo-jsonviewer__layers-title">Layers</h3>
					<label class={state.fileUploadButtonClasses}>
						<BaseIcon name={Upload} class="c-geo-jsonviewer__upload-icon" />
						Upload GeoJSON
						<input
							type="file"
							class="c-geo-jsonviewer__file-input"
							accept=".geojson,.json"
							onchange={state.handleFileUpload}
						/>
					</label>
				</div>

				<div class="c-geo-jsonviewer__layers-list">
					{#each state.currentLayers as layer}
						<div class={state.layerControlItemClasses}>
							<div class="c-geo-jsonviewer__layer-left">
								<input
									type="checkbox"
									checked={layer.visible}
									onchange={() => state.toggleLayerVisibility(layer.id)}
									class={state.layerVisibilityCheckboxClasses}
									style={state.layerVisibilityCheckboxStyles}
								/>
								<span class="c-geo-jsonviewer__layer-name">{layer.name}</span>
							</div>
							<div class="c-geo-jsonviewer__layer-right">
								<input
									type="range"
									min="0"
									max="1"
									step="0.1"
									value={layer.opacity}
									oninput={(e) =>
										state.changeLayerOpacity(
											layer.id,
											parseFloat((e.target as HTMLInputElement).value)
										)}
									class={state.layerOpacitySliderClasses}
								/>
								<div
									class="c-geo-jsonviewer__layer-color"
									style={`background-color: ${layer.color}`}
									title={layer.color}
								></div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		<div class={state.mapContainerClasses}>
			<div
				class="c-geo-jsonviewer__map-inner"
				onclick={state.handleMapClick}
				style={state.isDragging ? 'cursor: grabbing' : 'cursor: grab'}
				role="button"
				tabindex={0}
				onkeydown={(e: KeyboardEvent) =>
					geoHandleKeyDown(e, () => state.handleMapClick(e as unknown as MouseEvent))}
			>
				<svg width="100%" height="100%" class={state.svgClasses} viewBox="0 0 100 100">
					<defs>
						<pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
							<path
								d="M 5 0 L 0 0 0 5"
								fill="none"
								stroke="var(--color-border-primary)"
								stroke-width="0.5"
							/>
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#grid)" />

					{#each state.currentLayers as layer}
						{#if layer.visible}
							{#each layer.data.features as feature}
								{@const geometry = feature.geometry}

								{#if geometry.type === 'Point'}
									{@const [lng, lat] = geometry.coordinates as [number, number]}
									{@const position = state.calculatePixelPosition(lng, lat)}
									<circle
										cx={position.x}
										cy={position.y}
										r={6}
										style={state.getPointStyles(layer.color, layer.opacity)}
										class={state.geometryElementClasses}
										onclick={(e) => state.handleFeatureClick(feature, e)}
										role="button"
										tabindex={-1}
										onkeydown={(e: KeyboardEvent) => state.handleFeatureKeyDown(feature, e)}
									/>
								{/if}

								{#if geometry.type === 'Polygon'}
									{#each geometry.coordinates as ring}
										{@const points = ring
											.map(([lng, lat]: [number, number]) => {
												const pos = state.calculatePixelPosition(lng, lat);
												return `${pos.x},${pos.y}`;
											})
											.join(' ')}
										<polygon
											{points}
											style={state.getPolygonStyles(layer.color, layer.opacity)}
											class={state.geometryElementClasses}
											onclick={(e) => state.handleFeatureClick(feature, e)}
											role="button"
											tabindex={-1}
											onkeydown={(e: KeyboardEvent) => state.handleFeatureKeyDown(feature, e)}
										/>
									{/each}
								{/if}

								{#if geometry.type === 'LineString'}
									{@const points = geometry.coordinates
										.map(([lng, lat]) => {
											const pos = state.calculatePixelPosition(lng, lat);
											return `${pos.x},${pos.y}`;
										})
										.join(' ')}
									<polyline
										{points}
										fill="none"
										style={state.getLineStringStyles(layer.color, layer.opacity)}
										class={state.geometryElementClasses}
										onclick={(e) => state.handleFeatureClick(feature, e)}
										role="button"
										tabindex={-1}
										onkeydown={(e: KeyboardEvent) => state.handleFeatureKeyDown(feature, e)}
									/>
								{/if}
							{/each}
						{/if}
					{/each}
				</svg>
			</div>

			{#if state.showControls}
				<div class="c-geo-jsonviewer__controls">
					<Button variant="secondary" size="sm" onclick={state.handleZoomIn}>
						<BaseIcon name={Plus} class="_c1" />
					</Button>
					<Button variant="secondary" size="sm" onclick={state.handleZoomOut}>
						<BaseIcon name={Minus} class="_c1" />
					</Button>
					<Button variant="secondary" size="sm" onclick={state.handleResetView}>
						<BaseIcon name={RotateCcw} class="_c1" />
					</Button>
				</div>
			{/if}
		</div>

		{#if state.selectedFeature && state.selectedFeature.properties}
			<div class={state.featureInfoPanelClasses}>
				<div class="c-geo-jsonviewer__feature-head">
					<h3 class="c-geo-jsonviewer__feature-title">Selected Feature</h3>
					<Button variant="ghost" size="sm" onclick={() => (state.selectedFeature = null)}>
						<BaseIcon name={X} class="_c1" />
					</Button>
				</div>
				<div class="c-geo-jsonviewer__feature-grid">
					{#each Object.entries(state.selectedFeature.properties) as [key, value]}
						<div class="c-geo-jsonviewer__feature-field">
							<span class="c-geo-jsonviewer__feature-key">{key}</span>
							<span class="c-geo-jsonviewer__feature-value">{String(value)}</span>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.c-geo-jsonviewer {
		height: 100%;
	}

	.c-geo-jsonviewer__body {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.c-geo-jsonviewer__layers-panel {
		margin-bottom: 1rem;
		padding: 1rem;
		border-radius: 0.5rem;
		background: var(--color-background-secondary);
	}

	.c-geo-jsonviewer__layers-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 0.75rem;
	}

	.c-geo-jsonviewer__layers-title {
		font-size: 1.125rem;
		font-weight: 500;
		margin: 0;
	}

	.c-geo-jsonviewer__upload-btn {
		position: relative;
		cursor: pointer;
		border-radius: 0.375rem;
		font-size: 0.875rem;
		font-weight: 500;
		padding: 0.375rem 0.75rem;
		background: var(--color-background-primary);
		color: var(--color-text-primary);
		border: 1px solid var(--color-border-primary);
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
	}

	.c-geo-jsonviewer__upload-btn:hover {
		background: var(--color-background-secondary);
	}

	.c-geo-jsonviewer__upload-icon {
		width: 1rem;
		height: 1rem;
	}

	.c-geo-jsonviewer__file-input {
		display: none;
	}

	.c-geo-jsonviewer__layers-list {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		max-height: 15rem;
		overflow-y: auto;
	}

	.c-geo-jsonviewer__layer-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem;
		border-radius: 0.25rem;
		border: 1px solid var(--color-border-primary);
		background: var(--color-background-primary);
	}

	.c-geo-jsonviewer__layer-left {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.c-geo-jsonviewer__layer-right {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.c-geo-jsonviewer__layer-name {
		font-size: 0.875rem;
	}

	.c-geo-jsonviewer__layer-checkbox {
		width: 1rem;
		height: 1rem;
		border-radius: 0.25rem;
	}

	.c-geo-jsonviewer__layer-slider {
		width: 4rem;
	}

	.c-geo-jsonviewer__layer-color {
		width: 1rem;
		height: 1rem;
		border-radius: 9999px;
	}

	.c-geo-jsonviewer__map {
		flex: 1;
		position: relative;
		border-radius: 0.5rem;
		overflow: hidden;
		border: 1px solid var(--color-border-primary);
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.c-geo-jsonviewer__map-inner {
		width: 100%;
		height: 100%;
	}

	.c-geo-jsonviewer__svg {
		overflow: visible;
	}

	.c-geo-jsonviewer__geometry {
		cursor: pointer;
		transition: opacity var(--duration-120, 120ms) ease;
	}

	.c-geo-jsonviewer__geometry:hover {
		opacity: 0.9;
	}

	.c-geo-jsonviewer__controls {
		position: absolute;
		top: 1rem;
		right: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.c-geo-jsonviewer__control-btn {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.c-geo-jsonviewer__feature-panel {
		margin-top: 1rem;
		padding: 1rem;
		border-radius: 0.5rem;
		border: 1px solid var(--color-border-primary);
		background: var(--color-background-primary);
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.c-geo-jsonviewer__feature-head {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}

	.c-geo-jsonviewer__feature-title {
		font-size: 1.125rem;
		font-weight: 500;
		margin: 0;
	}

	.c-geo-jsonviewer__feature-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.5rem;
		margin-top: 0.75rem;
	}

	.c-geo-jsonviewer__feature-field {
		display: flex;
		flex-direction: column;
		gap: 0.125rem;
	}

	.c-geo-jsonviewer__feature-key {
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}

	.c-geo-jsonviewer__feature-value {
		font-size: 0.875rem;
		color: var(--color-text-primary);
	}

	._c1 {
		height: 1rem;
		width: 1rem;
	}
</style>
