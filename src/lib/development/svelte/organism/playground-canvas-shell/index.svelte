<script lang="ts">
  import RecipePlaygroundDeviceFrame from '../playground-device-frame/index.svelte';
  import RecipePlaygroundErrorBoundary from '../playground-error-boundary/index.svelte';
  import { createPlaygroundCanvasShellState } from '$stylist/development/function/state/playground-canvas-shell';
  import type { PlaygroundCanvasShellProps } from '$stylist/development/type/struct/playground-canvas-shell-props';
  let props: PlaygroundCanvasShellProps = $props();
  const state = createPlaygroundCanvasShellState(props);
</script>

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
    background: var(--gradient-custom182);
  }

  :global(.dark) .canvas-container {
    background: var(--gradient-custom172);
  }

  .canvas-frame {
    transition: all var(--duration-300) var(--easing-ease-standard);
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
</style>

<div class="flex-1 flex flex-col canvas-container bg-gradient-to-br from-[var(--playground-gradient-light-from,var(--color-background-primary))] via-[var(--playground-gradient-light-via,var(--color-background-secondary))] to-[var(--playground-gradient-light-to,var(--color-background-secondary))] dark:from-[var(--playground-gradient-dark-from,var(--color-text-primary))] dark:via-[var(--playground-gradient-dark-via,var(--color-text-primary))] dark:to-[var(--playground-gradient-dark-to,var(--color-text-primary))] overflow-hidden">
  <div
    bind:this={state.canvasContainer}
    class="flex-1 overflow-auto p-8 flex relative"
    class:panning={state.isPanning}
    onpointerdown={state.handlePointerDown}
    onpointermove={state.handlePointerMove}
    onpointerup={state.handlePointerUp}
    onwheel={state.handleWheel}
  >
    <div class="w-full min-h-full flex items-center justify-center">
      <div
        class="canvas-zoom"
        style="transform: translate({state.panX}px, {state.panY}px) scale({state.zoom}); transform-origin: center; transition: {state.isPanning ? 'none' : 'transform var(--duration-300) var(--easing-ease-standard)'};"
      >
        {#if state.showDeviceFrame && state.viewport !== 'fullscreen'}
          <RecipePlaygroundDeviceFrame device={state.viewport}>
            <div class="relative w-full h-full {state.backgroundClass}">
              {#if state.showGrid}
                <div class="grid-overlay absolute inset-0 pointer-events-none rounded-[2.5rem]"></div>
              {/if}
              <div class="relative z-[var(--z-index-docked)] p-8">
                <RecipePlaygroundErrorBoundary component={state.component} props={state.componentProps}>
                  {#if state.children}
                    {@render state.children()}
                  {/if}
                </RecipePlaygroundErrorBoundary>
              </div>
            </div>
          </RecipePlaygroundDeviceFrame>
        {:else}
          <div
            class="canvas-frame rounded-2xl shadow-2xl relative overflow-hidden {state.backgroundClass} border-2 border-gray-200/50 dark:border-gray-700/50 pointer-events-auto"
            style="width: {state.currentViewportWidth}; min-height: 400px;"
          >
            {#if state.showGrid}
              <div class="grid-overlay absolute inset-0 pointer-events-none rounded-2xl"></div>
            {/if}
            <div class="relative z-[var(--z-index-docked)] p-8">
              <RecipePlaygroundErrorBoundary component={state.component} props={state.componentProps}>
                {#if state.children}
                  {@render state.children()}
                {/if}
              </RecipePlaygroundErrorBoundary>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
