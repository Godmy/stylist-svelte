<script lang="ts">
	import type { PreziSceneContract } from '$stylist/architecture/type/struct/prezi-scene/prezi-scene-contract';
	import { usePreziState } from '$stylist/architecture/function/state/prezi-scene/use-prezi-state.svelte';
	import PresenterNodeShell from '$stylist/architecture/svelte/molecule/canvas/presenter-node-shell/index.svelte';
	import { Minimap, Icon } from '$stylist';
	import { Grid } from '$stylist/layout';

	const contract: PreziSceneContract = $props();
	const preziState = usePreziState(contract);

	let viewportElement: HTMLDivElement | null = null;

	// Отслеживаем размер вьюпорта через ResizeObserver
	$effect(() => {
		if (!viewportElement) return;
		const el = viewportElement;
		preziState.setViewportSize(el.clientWidth, el.clientHeight);

		const observer = new ResizeObserver(() => {
			preziState.setViewportSize(el.clientWidth, el.clientHeight);
		});
		observer.observe(el);
		return () => observer.disconnect();
	});

	// Синхронизация controlled selectedNodeId
	$effect(() => {
		if (contract.selectedNodeId !== undefined) {
			if (contract.selectedNodeId === null) {
				preziState.selectNode(null);
			} else {
				const node = preziState.nodes.find((n) => n.id === contract.selectedNodeId);
				if (node) preziState.selectNode(node);
			}
		}
	});

	// Camera для нод: x/y/zoom = 0/0/1, т.к. ноды живут внутри world-div,
	// который уже несёт CSS-трансформ. depth и viewport нужны для semantic zoom.
	const nodeCamera = $derived({
		x: 0,
		y: 0,
		zoom: 1,
		depth: preziState.camera.depth,
		viewportWidth: preziState.viewportWidth,
		viewportHeight: preziState.viewportHeight
	});
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<section
	class="prezi-scene"
	class:is-panning={preziState.isPanning}
	{...preziState.restProps}
>
	{#if preziState.showHeader}
		<header class="prezi-scene__header">
			<div class="prezi-scene__header-content">
				{#if preziState.title}
					<h2 class="prezi-scene__title">{preziState.title}</h2>
				{/if}
				{#if preziState.subtitle}
					<p class="prezi-scene__subtitle">{preziState.subtitle}</p>
				{/if}
			</div>

			<div class="prezi-scene__controls">
				<div class="prezi-scene__control-group">
					<button
						type="button"
						class="prezi-scene__control-button"
						title="Zoom out"
						onclick={() => preziState.setCamera({ zoom: Math.max(preziState.minZoom, preziState.camera.zoom / 1.2) })}
						disabled={!preziState.zoomEnabled || preziState.camera.zoom <= preziState.minZoom}
					>
						<Icon name="minus" />
					</button>
					<span class="prezi-scene__zoom-level">{Math.round(preziState.camera.zoom * 100)}%</span>
					<button
						type="button"
						class="prezi-scene__control-button"
						title="Zoom in"
						onclick={() => preziState.setCamera({ zoom: Math.min(preziState.maxZoom, preziState.camera.zoom * 1.2) })}
						disabled={!preziState.zoomEnabled || preziState.camera.zoom >= preziState.maxZoom}
					>
						<Icon name="plus" />
					</button>
				</div>

				<div class="prezi-scene__control-group">
					<button
						type="button"
						class="prezi-scene__control-button"
						title="Reset view"
						onclick={preziState.resetCamera}
					>
						<Icon name="rotate-ccw" />
					</button>
				</div>

				<div class="prezi-scene__control-group">
					<button
						type="button"
						class="prezi-scene__control-button"
						title="Toggle grid"
						onclick={preziState.toggleGrid}
						aria-pressed={preziState.showGrid}
					>
						<Icon name="grid-3x3" />
					</button>
					<button
						type="button"
						class="prezi-scene__control-button"
						title="Toggle minimap"
						onclick={preziState.toggleMinimap}
						aria-pressed={preziState.showMinimap}
					>
						<Icon name="map" />
					</button>
				</div>
			</div>
		</header>
	{/if}

	<div class="prezi-scene__viewport-container">
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<div
			class="prezi-scene__viewport"
			bind:this={viewportElement}
			role="application"
			aria-label="Prezi scene viewport"
			aria-keyshortcuts="ArrowLeft ArrowRight ArrowUp ArrowDown + - 0 Escape"
			tabindex="0"
			onwheel={(event) => preziState.handleWheel(event, viewportElement?.getBoundingClientRect())}
			onpointerdown={preziState.handlePointerDown}
			onpointermove={preziState.handlePointerMove}
			onpointerup={preziState.handlePointerUp}
			onpointerleave={preziState.handlePointerUp}
			onkeydown={preziState.handleKeyDown}
			onclick={() => viewportElement?.focus()}
		>
			{#if preziState.showGrid}
				<Grid class="prezi-scene__grid" />
			{/if}

			<!-- World: единый CSS-трансформ. Ноды внутри — raw world-координаты. -->
			<div
				class="prezi-scene__world"
				class:prezi-scene__world--animating={preziState.isAnimating}
				style="transform: translate({preziState.camera.x}px, {preziState.camera.y}px) scale({preziState.camera.zoom});"
			>
				{#each preziState.nodes as node (node.id)}
					<PresenterNodeShell
						{node}
						camera={nodeCamera}
						selected={node.id === preziState.selectedNodeId}
						onselect={() => preziState.focusNode(node)}
					/>
				{/each}
			</div>
		</div>

		{#if preziState.showMinimap}
			<div class="prezi-scene__minimap">
				<Minimap
					nodes={preziState.nodes.map((node) => ({
						id: node.id,
						x: node.position.x,
						y: node.position.y,
						width: 200,
						height: 120,
						color: node.accent,
						selected: node.id === preziState.selectedNodeId
					}))}
					zoom={preziState.camera.zoom}
					offset={{
						x: -preziState.camera.x / preziState.camera.zoom,
						y: -preziState.camera.y / preziState.camera.zoom
					}}
					width={200}
					height={140}
					showZoomControls={false}
					showViewport={true}
				/>
			</div>
		{/if}

		{#if preziState.showInspector && preziState.selectedNode}
			<aside class="prezi-scene__inspector">
				<div class="prezi-scene__inspector-header">
					<h3 class="prezi-scene__inspector-title">{preziState.selectedNode.title}</h3>
					<button
						type="button"
						class="prezi-scene__inspector-close"
						onclick={() => preziState.selectNode(null)}
						aria-label="Close inspector"
					>
						<Icon name="x" />
					</button>
				</div>

				<div class="prezi-scene__inspector-content">
					{#if preziState.selectedNode.label}
						<div class="prezi-scene__inspector-field">
							<span class="prezi-scene__inspector-label">Label</span>
							<span class="prezi-scene__inspector-value">{preziState.selectedNode.label}</span>
						</div>
					{/if}

					{#if preziState.selectedNode.description}
						<div class="prezi-scene__inspector-field">
							<span class="prezi-scene__inspector-label">Description</span>
							<p class="prezi-scene__inspector-value">{preziState.selectedNode.description}</p>
						</div>
					{/if}

					<div class="prezi-scene__inspector-field">
						<span class="prezi-scene__inspector-label">Depth</span>
						<span class="prezi-scene__inspector-value">{preziState.selectedNode.depth}</span>
					</div>

					<div class="prezi-scene__inspector-field">
						<span class="prezi-scene__inspector-label">Position</span>
						<span class="prezi-scene__inspector-value">
							x: {Math.round(preziState.selectedNode.position.x)}, y: {Math.round(preziState.selectedNode.position.y)}
						</span>
					</div>

					<div class="prezi-scene__inspector-field">
						<span class="prezi-scene__inspector-label">Accent</span>
						<span
							class="prezi-scene__inspector-color"
							style="background-color: {preziState.selectedNode.accent};"
						></span>
					</div>

					{#if preziState.selectedNode.children && preziState.selectedNode.children.length > 0}
						<div class="prezi-scene__inspector-field">
							<span class="prezi-scene__inspector-label">Children</span>
							<span class="prezi-scene__inspector-value">{preziState.selectedNode.children.length}</span>
						</div>
					{/if}
				</div>
			</aside>
		{/if}
	</div>

	{#if preziState.selectedNode}
		<div class="prezi-scene__status-bar">
			<span>Selected: {preziState.selectedNode.title}</span>
			<span class="prezi-scene__divider">•</span>
			<span>Depth: {preziState.camera.depth}</span>
			<span class="prezi-scene__divider">•</span>
			<span>Zoom: {Math.round(preziState.camera.zoom * 100)}%</span>
			<span class="prezi-scene__divider">•</span>
			<span>
				Position: ({Math.round(preziState.camera.x)}, {Math.round(preziState.camera.y)})
			</span>
		</div>
	{/if}
</section>

<style>
	.prezi-scene {
		position: relative;
		display: flex;
		flex-direction: column;
		height: 100%;
		min-height: 600px;
		background: var(--color-background-primary, #ffffff);
		border-radius: var(--border-radius-xl, 1rem);
		border: 1px solid var(--color-border-primary, #e5e7eb);
		overflow: hidden;
	}

	/* ─── Header ─── */

	.prezi-scene__header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: 1rem 1.25rem;
		border-bottom: 1px solid var(--color-border-primary, #e5e7eb);
		background: var(--color-background-secondary, #f9fafb);
		flex-shrink: 0;
	}

	.prezi-scene__header-content {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.prezi-scene__title {
		margin: 0;
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--color-text-primary, #111827);
	}

	.prezi-scene__subtitle {
		margin: 0;
		font-size: 0.875rem;
		color: var(--color-text-secondary, #6b7280);
	}

	.prezi-scene__controls {
		display: flex;
		gap: 0.75rem;
		align-items: center;
	}

	.prezi-scene__control-group {
		display: flex;
		gap: 0.25rem;
		align-items: center;
	}

	.prezi-scene__control-button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		border: 1px solid var(--color-border-primary, #e5e7eb);
		border-radius: var(--border-radius-md, 0.375rem);
		background: var(--color-background-primary, #ffffff);
		color: var(--color-text-primary, #111827);
		cursor: pointer;
		transition:
			background-color 0.15s ease,
			border-color 0.15s ease;
	}

	.prezi-scene__control-button:hover:not(:disabled) {
		background: var(--color-background-hover, #f3f4f6);
		border-color: var(--color-border-secondary, #d1d5db);
	}

	.prezi-scene__control-button[aria-pressed='true'] {
		background: var(--color-background-active, #e5e7eb);
		border-color: var(--color-border-secondary, #d1d5db);
	}

	.prezi-scene__control-button:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}

	.prezi-scene__zoom-level {
		min-width: 3rem;
		text-align: center;
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--color-text-secondary, #6b7280);
	}

	/* ─── Viewport ─── */

	.prezi-scene__viewport-container {
		position: relative;
		flex: 1;
		overflow: hidden;
	}

	.prezi-scene__viewport {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
		cursor: grab;
		outline: none;
		-webkit-user-select: none;
		user-select: none;
	}

	.prezi-scene__viewport:active,
	.prezi-scene.is-panning .prezi-scene__viewport {
		cursor: grabbing;
	}

	/* ─── World: единый GPU-layer для всех нод ─── */

	.prezi-scene__world {
		position: absolute;
		top: 0;
		left: 0;
		transform-origin: 0 0;
		will-change: transform;
		/* Во время drag/scroll — без задержки */
		transition: none;
	}

	/* Prezi-анимация: плавный zoom-to-node (CSS делает всё тяжёлое) */
	.prezi-scene__world--animating {
		transition: transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	.prezi-scene__grid {
		position: absolute;
		inset: 0;
		pointer-events: none;
		opacity: 0.5;
	}

	/* ─── Minimap ─── */

	.prezi-scene__minimap {
		position: absolute;
		bottom: 1rem;
		left: 1rem;
		z-index: 10;
		border-radius: var(--border-radius-lg, 0.5rem);
		overflow: hidden;
		box-shadow: var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1));
	}

	/* ─── Inspector ─── */

	.prezi-scene__inspector {
		position: absolute;
		top: 1rem;
		right: 1rem;
		width: 280px;
		max-height: calc(100% - 2rem);
		background: var(--color-background-primary, #ffffff);
		border: 1px solid var(--color-border-primary, #e5e7eb);
		border-radius: var(--border-radius-lg, 0.5rem);
		box-shadow: var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
		overflow: hidden;
		z-index: 20;
		display: flex;
		flex-direction: column;
	}

	.prezi-scene__inspector-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.75rem 1rem;
		border-bottom: 1px solid var(--color-border-primary, #e5e7eb);
		background: var(--color-background-secondary, #f9fafb);
		flex-shrink: 0;
	}

	.prezi-scene__inspector-title {
		margin: 0;
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-text-primary, #111827);
	}

	.prezi-scene__inspector-close {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 1.5rem;
		height: 1.5rem;
		border: none;
		border-radius: var(--border-radius-md, 0.375rem);
		background: transparent;
		color: var(--color-text-secondary, #6b7280);
		cursor: pointer;
		transition: background-color 0.15s ease;
	}

	.prezi-scene__inspector-close:hover {
		background: var(--color-background-hover, #f3f4f6);
		color: var(--color-text-primary, #111827);
	}

	.prezi-scene__inspector-content {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		overflow-y: auto;
	}

	.prezi-scene__inspector-field {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.prezi-scene__inspector-label {
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-text-tertiary, #9ca3af);
	}

	.prezi-scene__inspector-value {
		font-size: 0.875rem;
		color: var(--color-text-primary, #111827);
	}

	.prezi-scene__inspector-value p {
		margin: 0;
		line-height: 1.5;
	}

	.prezi-scene__inspector-color {
		display: inline-block;
		width: 1.5rem;
		height: 1.5rem;
		border-radius: var(--border-radius-md, 0.375rem);
		border: 1px solid var(--color-border-primary, #e5e7eb);
	}

	/* ─── Status bar ─── */

	.prezi-scene__status-bar {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		padding: 0.5rem 1rem;
		border-top: 1px solid var(--color-border-primary, #e5e7eb);
		background: var(--color-background-secondary, #f9fafb);
		font-size: 0.75rem;
		color: var(--color-text-secondary, #6b7280);
		flex-shrink: 0;
	}

	.prezi-scene__divider {
		color: var(--color-border-primary, #e5e7eb);
	}
</style>
