<script lang="ts">
	import type { RecipeShellCanvas } from '$stylist/playground/interface/recipe/shell-canvas';
	import RecipeDeviceFrame from '$stylist/playground/component/organism/device-frame/index.svelte';
	import RecipeErrorBoundary from '$stylist/development/component/organism/error-boundary/index.svelte';
	import { createShellCanvasState } from '$stylist/playground/function/state/shell-canvas/index.svelte';
	let props: RecipeShellCanvas = $props();
	const state = createShellCanvasState(props);
</script>

<div class="canvas-container">
	<div
		bind:this={state.canvasContainer}
		class="cs-canvas-area"
		class:panning={state.isPanning}
		onpointerdown={state.handlePointerDown}
		onpointermove={state.handlePointerMove}
		onpointerup={state.handlePointerUp}
		onwheel={state.handleWheel}
	>
		<div class="canvas-meta">
			<span class="canvas-chip">zoom {Math.round(state.zoom * 100)}%</span>
			<span class="canvas-chip">{state.viewport}</span>
			{#if state.showGrid}
				<span class="canvas-chip canvas-chip--accent">grid</span>
			{/if}
		</div>

		<div class="cs-canvas-center">
			<div
				class="canvas-zoom"
				style="transform: translate({state.panX}px, {state.panY}px) scale({state.zoom}); transform-origin: center; transition: {state.isPanning
					? 'none'
					: 'transform var(--duration-300) var(--easing-ease-standard)'};"
			>
				{#if state.showDeviceFrame && state.viewport !== 'fullscreen'}
					<RecipeDeviceFrame device={state.viewport}>
						<div class="cs-device-content {state.backgroundClass}">
							{#if state.showGrid}
								<div class="grid-overlay _c1"></div>
							{/if}
							<div class="cs-inner-content">
								<RecipeErrorBoundary
									component={state.component}
									props={state.componentProps}
								>
									{#if state.children}
										{#if state.children}{@render state.children()}{/if}
									{/if}
								</RecipeErrorBoundary>
							</div>
						</div>
					</RecipeDeviceFrame>
				{:else}
					<div
						class="canvas-frame {state.backgroundClass}"
						style="width: {state.currentViewportWidth}; min-height: 400px;"
					>
						{#if state.showGrid}
							<div class="grid-overlay _c2"></div>
						{/if}
						<div class="cs-inner-content">
							<RecipeErrorBoundary
								component={state.component}
								props={state.componentProps}
							>
								{#if state.children}
									{#if state.children}{@render state.children()}{/if}
								{/if}
							</RecipeErrorBoundary>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	.cs-bg--white {
		background-color: #ffffff;
	}
	.cs-bg--gray {
		background-color: #f9fafb;
	}
	@media (prefers-color-scheme: dark) {
		.cs-bg--gray {
			background-color: #111827;
		}
	}
	.cs-bg--dark {
		background-color: #111827;
	}
	.cs-bg--transparent {
		background-color: transparent;
	}
	.grid-overlay {
		background-image: var(--gradient-custom112);
		background-size: 20px 20px;
		animation: grid-fade-in var(--duration-300) var(--animation-ease-out);
	}

	@keyframes grid-fade-in {
		from {
			opacity: var(--opacity-0);
		}
		to {
			opacity: var(--opacity-100);
		}
	}

	.canvas-zoom {
		will-change: transform;
	}

	.cs-canvas-area {
		position: relative;
		display: flex;
		flex: 1;
		overflow: auto;
		padding: 2rem;
	}
	.cs-canvas-center {
		display: flex;
		min-height: 100%;
		width: 100%;
		align-items: center;
		justify-content: center;
	}
	.cs-device-content {
		position: relative;
		height: 100%;
		width: 100%;
	}
	.cs-inner-content {
		position: relative;
		z-index: var(--z-index-docked);
		padding: 2rem;
	}
	.canvas-container {
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		background:
			radial-gradient(
				circle at top right,
				color-mix(in srgb, var(--playground-accent, var(--color-warning-500)) 10%, transparent),
				transparent 35%
			),
			linear-gradient(
				180deg,
				color-mix(in srgb, var(--color-background-secondary) 92%, white 8%),
				var(--color-background-primary)
			);
	}

	:global(.dark) .canvas-container {
		background:
			radial-gradient(
				circle at top right,
				color-mix(in srgb, var(--playground-accent, var(--color-warning-500)) 12%, transparent),
				transparent 35%
			),
			linear-gradient(
				180deg,
				color-mix(in srgb, var(--color-background-primary) 88%, black 12%),
				var(--color-background-primary)
			);
	}

	.canvas-frame {
		position: relative;
		overflow: hidden;
		border-radius: 1rem;
		box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
		pointer-events: auto;
		border: 2px solid rgb(229 231 235 / 0.5);
		transition: all var(--duration-300) var(--easing-ease-standard);
		background-image: linear-gradient(
			180deg,
			color-mix(in srgb, var(--color-background-primary) 96%, white 4%),
			var(--color-background-primary)
		);
	}

	.canvas-frame:hover {
		box-shadow: var(--shadow-custom30);
	}

	@media (prefers-color-scheme: dark) {
		.canvas-frame {
			border-color: rgb(55 65 81 / 0.5);
		}
	}
	:global(.dark) .canvas-frame:hover {
		box-shadow: var(--shadow-custom31);
	}

	.panning {
		cursor: grab;
		user-select: none;
	}

	.panning:active {
		cursor: grabbing;
	}

	.canvas-meta {
		position: absolute;
		top: 1rem;
		left: 1rem;
		z-index: var(--z-index-docked);
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.canvas-chip {
		display: inline-flex;
		align-items: center;
		padding: 0.42rem 0.75rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 84%, transparent);
		border-radius: 999px;
		background: color-mix(in srgb, var(--color-background-primary) 84%, transparent);
		backdrop-filter: blur(12px);
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--color-text-secondary);
		box-shadow: 0 8px 18px rgb(15 23 42 / 0.08);
	}

	.canvas-chip--accent {
		color: var(--playground-accent, var(--color-warning-600));
	}

	._c1 {
		pointer-events: none;
		position: absolute;
		inset: 0;
		border-radius: 2.5rem;
	}
	._c2 {
		pointer-events: none;
		position: absolute;
		inset: 0;
		border-radius: 1rem;
	}
</style>
