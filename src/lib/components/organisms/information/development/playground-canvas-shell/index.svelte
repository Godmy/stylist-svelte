<script lang="ts">
  import type { ComponentType, Snippet } from 'svelte';
  import PlaygroundDeviceFrame from '../playground-device-frame/index.svelte';
  import PlaygroundErrorBoundary from '../playground-error-boundary/index.svelte';

  type ViewportSize = 'mobile' | 'tablet' | 'desktop' | 'fullscreen';
  type BackgroundType = 'white' | 'gray' | 'dark' | 'transparent';

  interface Props {
    component?: ComponentType | null;
    props?: Record<string, any>;
    children?: Snippet;
    viewport?: ViewportSize;
    zoom?: number;
    background?: BackgroundType;
    showGrid?: boolean;
    showDeviceFrame?: boolean;
    onZoomChange?: (zoom: number) => void;
  }

  let {
    component = null,
    props = {},
    children,
    viewport = 'desktop',
    zoom = 1,
    background = 'gray',
    showGrid = false,
    showDeviceFrame = false,
    onZoomChange
  }: Props = $props();

  let panX = $state(0);
  let panY = $state(0);
  let isPanning = $state(false);
  let lastPointerX = $state(0);
  let lastPointerY = $state(0);
  let canvasContainer: HTMLDivElement;

  const viewportSizes: Record<ViewportSize, string> = {
    mobile: '375px',
    tablet: '768px',
    desktop: '1440px',
    fullscreen: '100%'
  };

  const backgroundClasses: Record<BackgroundType, string> = {
    white: 'bg-white',
    gray: 'bg-gray-50 dark:bg-gray-900',
    dark: 'bg-gray-900',
    transparent: 'bg-transparent'
  };

  const currentViewportWidth = $derived(viewportSizes[viewport]);
  const backgroundClass = $derived(backgroundClasses[background] ?? backgroundClasses.gray);

  function handlePointerDown(e: PointerEvent) {
    if (e.button === 1 || (e.button === 0 && e.shiftKey)) {
      e.preventDefault();
      isPanning = true;
      lastPointerX = e.clientX;
      lastPointerY = e.clientY;
      if (canvasContainer) {
        canvasContainer.setPointerCapture(e.pointerId);
        canvasContainer.style.cursor = 'grabbing';
      }
    }
  }

  function handlePointerMove(e: PointerEvent) {
    if (!isPanning) return;
    e.preventDefault();
    panX += e.clientX - lastPointerX;
    panY += e.clientY - lastPointerY;
    lastPointerX = e.clientX;
    lastPointerY = e.clientY;
  }

  function handlePointerUp(e: PointerEvent) {
    if (!isPanning) return;
    isPanning = false;
    if (canvasContainer) {
      canvasContainer.releasePointerCapture(e.pointerId);
      canvasContainer.style.cursor = '';
    }
  }

  function handleWheel(e: WheelEvent) {
    if (!onZoomChange || (!e.ctrlKey && !e.metaKey)) return;
    e.preventDefault();
    const delta = -e.deltaY * 0.001;
    const newZoom = Math.max(0.1, Math.min(5, zoom + delta));
    if (newZoom !== zoom) onZoomChange(newZoom);
  }
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
    bind:this={canvasContainer}
    class="flex-1 overflow-auto p-8 flex relative"
    class:panning={isPanning}
    onpointerdown={handlePointerDown}
    onpointermove={handlePointerMove}
    onpointerup={handlePointerUp}
    onwheel={handleWheel}
  >
    <div class="w-full min-h-full flex items-center justify-center">
      <div
        class="canvas-zoom"
        style="transform: translate({panX}px, {panY}px) scale({zoom}); transform-origin: center; transition: {isPanning ? 'none' : 'transform var(--duration-300) var(--easing-ease-standard)'};"
      >
        {#if showDeviceFrame && viewport !== 'fullscreen'}
          <PlaygroundDeviceFrame device={viewport}>
            <div class="relative w-full h-full {backgroundClass}">
              {#if showGrid}
                <div class="grid-overlay absolute inset-0 pointer-events-none rounded-[2.5rem]"></div>
              {/if}
              <div class="relative z-[var(--z-index-docked)] p-8">
                <PlaygroundErrorBoundary {component} {props}>
                  {#if children}
                    {@render children()}
                  {/if}
                </PlaygroundErrorBoundary>
              </div>
            </div>
          </PlaygroundDeviceFrame>
        {:else}
          <div
            class="canvas-frame rounded-2xl shadow-2xl relative overflow-hidden {backgroundClass} border-2 border-gray-200/50 dark:border-gray-700/50 pointer-events-auto"
            style="width: {currentViewportWidth}; min-height: 400px;"
          >
            {#if showGrid}
              <div class="grid-overlay absolute inset-0 pointer-events-none rounded-2xl"></div>
            {/if}
            <div class="relative z-[var(--z-index-docked)] p-8">
              <PlaygroundErrorBoundary {component} {props}>
                {#if children}
                  {@render children()}
                {/if}
              </PlaygroundErrorBoundary>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>


