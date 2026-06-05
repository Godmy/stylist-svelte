<script lang="ts">
	import RecipePlaygroundDeviceFrame from '../playground-device-frame/index.svelte';
	import RecipePlaygroundErrorBoundary from '../playground-error-boundary/index.svelte';
	import createPlaygroundCanvasShellState from '$stylist/playground/function/state/playground-canvas-shell/index.svelte';
	import type { PlaygroundCanvasShellProps } from '$stylist/playground/type/struct/playground-canvas-shell-props';
	let props: PlaygroundCanvasShellProps = $props();
	const state = createPlaygroundCanvasShellState(props);
</script>

<div class="canvas-container flex flex-1 flex-col overflow-hidden">
	<div
		bind:this={state.canvasContainer}
		class="relative flex flex-1 overflow-auto p-8"
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

		<div class="flex min-h-full w-full items-center justify-center">
			<div
				class="canvas-zoom"
				style="transform: translate({state.panX}px, {state.panY}px) scale({state.zoom}); transform-origin: center; transition: {state.isPanning
					? 'none'
					: 'transform var(--duration-300) var(--easing-ease-standard)'};"
			>
				{#if state.showDeviceFrame && state.viewport !== 'fullscreen'}
					<RecipePlaygroundDeviceFrame device={state.viewport}>
						<div class="relative h-full w-full {state.backgroundClass}">
							{#if state.showGrid}
								<div
									class="grid-overlay pointer-events-none absolute inset-0 rounded-[2.5rem]"
								></div>
							{/if}
							<div class="relative z-[var(--z-index-docked)] p-8">
								<RecipePlaygroundErrorBoundary
									component={state.component}
									props={state.componentProps}
								>
									{#if state.children}
										{#if state.children}{@render state.children()}{/if}
									{/if}
								</RecipePlaygroundErrorBoundary>
							</div>
						</div>
					</RecipePlaygroundDeviceFrame>
				{:else}
					<div
						class="canvas-frame relative overflow-hidden rounded-2xl shadow-2xl {state.backgroundClass} pointer-events-auto border-2 border-gray-200/50 dark:border-gray-700/50"
						style="width: {state.currentViewportWidth}; min-height: 400px;"
					>
						{#if state.showGrid}
							<div class="grid-overlay pointer-events-none absolute inset-0 rounded-2xl"></div>
						{/if}
						<div class="relative z-[var(--z-index-docked)] p-8">
							<RecipePlaygroundErrorBoundary
								component={state.component}
								props={state.componentProps}
							>
								{#if state.children}
									{#if state.children}{@render state.children()}{/if}
								{/if}
							</RecipePlaygroundErrorBoundary>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
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

	.canvas-container {
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
</style>
