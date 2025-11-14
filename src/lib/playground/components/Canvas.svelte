<script lang="ts">
  import type { ComponentType } from 'svelte';
  import { playgroundStore, type ViewportSize } from '../stores/playground.svelte';
  import { ZoomIn, ZoomOut, RotateCcw, Move, Maximize2 } from 'lucide-svelte';

  interface Props {
    component?: ComponentType | null;
    props?: Record<string, any>;
    children?: any;
  }

  let { component = null, props = {}, children }: Props = $props();

  // Pan & Zoom state
  let panX = $state(0);
  let panY = $state(0);
  let isPanning = $state(false);
  let lastPointerX = $state(0);
  let lastPointerY = $state(0);
  let canvasContainer: HTMLDivElement;

  // Viewport sizes mapping
  const viewportSizes: Record<ViewportSize, string> = {
    mobile: '375px',
    tablet: '768px',
    desktop: '1440px',
    fullscreen: '100%'
  };

  // Get current viewport width
  const currentViewportWidth = $derived(viewportSizes[playgroundStore.state.viewport]);

  // Background classes
  const backgroundClasses: Record<string, string> = {
    white: 'bg-white',
    gray: 'bg-gray-50 dark:bg-gray-900',
    dark: 'bg-gray-900',
    transparent: 'bg-transparent'
  };

  const backgroundClass = $derived(backgroundClasses[playgroundStore.uiState.background]);

  // Pan handlers
  function handlePointerDown(e: PointerEvent) {
    // Only pan with middle mouse button or space + left click
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
    if (isPanning) {
      e.preventDefault();
      const deltaX = e.clientX - lastPointerX;
      const deltaY = e.clientY - lastPointerY;
      panX += deltaX;
      panY += deltaY;
      lastPointerX = e.clientX;
      lastPointerY = e.clientY;
    }
  }

  function handlePointerUp(e: PointerEvent) {
    if (isPanning) {
      isPanning = false;
      if (canvasContainer) {
        canvasContainer.releasePointerCapture(e.pointerId);
        canvasContainer.style.cursor = '';
      }
    }
  }

  // Wheel zoom (with ctrl/cmd)
  function handleWheel(e: WheelEvent) {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const delta = -e.deltaY * 0.001;
      const newZoom = Math.max(0.1, Math.min(5, playgroundStore.uiState.zoom + delta));

      if (newZoom !== playgroundStore.uiState.zoom) {
        playgroundStore.uiState.zoom = newZoom;
      }
    }
  }

  // Reset view
  function resetView() {
    panX = 0;
    panY = 0;
    playgroundStore.resetZoom();
  }

  // Fit to view
  function fitToView() {
    panX = 0;
    panY = 0;
    playgroundStore.uiState.zoom = 1;
  }
</script>

<style>
  .grid-overlay {
    background-image:
      linear-gradient(rgba(99, 102, 241, 0.15) 1px, transparent 1px),
      linear-gradient(90deg, rgba(99, 102, 241, 0.15) 1px, transparent 1px);
    background-size: 20px 20px;
    animation: grid-fade-in 0.3s ease-out;
  }

  @keyframes grid-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .canvas-zoom {
    will-change: transform;
  }

  .canvas-container {
    background:
      radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.05) 0%, transparent 50%);
  }

  :global(.dark) .canvas-container {
    background:
      radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.08) 0%, transparent 50%);
  }

  .canvas-frame {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .canvas-frame:hover {
    box-shadow:
      0 20px 25px -5px rgba(99, 102, 241, 0.1),
      0 10px 10px -5px rgba(99, 102, 241, 0.04);
  }

  :global(.dark) .canvas-frame:hover {
    box-shadow:
      0 20px 25px -5px rgba(99, 102, 241, 0.2),
      0 10px 10px -5px rgba(99, 102, 241, 0.1);
  }

  .panning {
    cursor: grab;
    user-select: none;
  }

  .panning:active {
    cursor: grabbing;
  }
</style>

<div class="flex-1 flex flex-col canvas-container bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden">
  <!-- Canvas controls -->
  <div class="canvas-controls p-3 flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm">
    <!-- Background selector -->
    <div class="flex items-center gap-2 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 rounded-lg px-3 py-2 shadow-sm">
      <span class="text-xs font-semibold text-gray-600 dark:text-gray-400">BG:</span>
      <select
        value={playgroundStore.uiState.background}
        onchange={(e) => playgroundStore.setBackground(e.currentTarget.value as any)}
        class="text-xs bg-transparent border-none focus:outline-none text-gray-900 dark:text-white font-medium cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
      >
        <option value="white">White</option>
        <option value="gray">Gray</option>
        <option value="dark">Dark</option>
        <option value="transparent">Transparent</option>
      </select>
    </div>

    <!-- Pan & Zoom controls -->
    <div class="flex items-center gap-1 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 rounded-lg p-1 shadow-sm">
      <button
        onclick={() => playgroundStore.zoomOut()}
        class="p-2 rounded-md hover:bg-white dark:hover:bg-gray-600 transition-all hover:scale-110 active:scale-95 group"
        title="Zoom out (Ctrl + -)"
      >
        <ZoomOut class="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
      </button>
      <span class="text-xs font-mono font-bold text-gray-700 dark:text-gray-300 min-w-[3.5rem] text-center px-2">
        {Math.round(playgroundStore.uiState.zoom * 100)}%
      </span>
      <button
        onclick={() => playgroundStore.zoomIn()}
        class="p-2 rounded-md hover:bg-white dark:hover:bg-gray-600 transition-all hover:scale-110 active:scale-95 group"
        title="Zoom in (Ctrl + +)"
      >
        <ZoomIn class="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
      </button>
    </div>

    <!-- View controls -->
    <div class="flex items-center gap-1 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 rounded-lg p-1 shadow-sm">
      <button
        onclick={fitToView}
        class="p-2 rounded-md hover:bg-white dark:hover:bg-gray-600 transition-all hover:scale-110 active:scale-95 group"
        title="Fit to view"
      >
        <Maximize2 class="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" />
      </button>
      <button
        onclick={resetView}
        class="p-2 rounded-md hover:bg-white dark:hover:bg-gray-600 transition-all hover:scale-110 active:scale-95 group"
        title="Reset view (Ctrl + 0)"
      >
        <RotateCcw class="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-all group-hover:rotate-180" />
      </button>
    </div>

    <!-- Pan info (when panning) -->
    {#if panX !== 0 || panY !== 0}
      <div class="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 px-3 py-2 rounded-lg shadow-sm border border-blue-200/50 dark:border-blue-700/50">
        <Move class="w-3 h-3 text-blue-600 dark:text-blue-400" />
        <span class="text-xs font-mono font-semibold text-blue-700 dark:text-blue-300">
          {Math.round(panX)}, {Math.round(panY)}
        </span>
      </div>
    {/if}

    <!-- Viewport info -->
    {#if playgroundStore.state.viewport !== 'fullscreen'}
      <div class="ml-auto flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 px-3 py-2 rounded-lg shadow-sm border border-indigo-200/50 dark:border-indigo-700/50">
        <div class="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
        <span class="text-xs font-mono font-bold text-indigo-700 dark:text-indigo-300">
          {currentViewportWidth}
        </span>
      </div>
    {/if}
  </div>

  <!-- Canvas area -->
  <div
    bind:this={canvasContainer}
    class="flex-1 overflow-hidden p-8 flex items-center justify-center relative"
    class:panning={isPanning}
    onpointerdown={handlePointerDown}
    onpointermove={handlePointerMove}
    onpointerup={handlePointerUp}
    onwheel={handleWheel}
  >
    <!-- Pan instruction hint -->
    {#if !isPanning && panX === 0 && panY === 0}
      <div class="absolute top-4 left-1/2 -translate-x-1/2 bg-gray-900/80 dark:bg-gray-100/80 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs text-white dark:text-gray-900 font-medium opacity-50 hover:opacity-100 transition-opacity pointer-events-none z-10">
        💡 Shift + Drag to pan • Ctrl + Scroll to zoom
      </div>
    {/if}

    <div
      class="canvas-zoom"
      style="transform: translate({panX}px, {panY}px) scale({playgroundStore.uiState.zoom}); transform-origin: center; transition: {isPanning ? 'none' : 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'};"
    >
      <div
        class="canvas-frame rounded-2xl shadow-2xl relative {backgroundClass} border-2 border-gray-200/50 dark:border-gray-700/50 pointer-events-auto"
        class:grid-overlay={playgroundStore.uiState.showGrid}
        style="width: {currentViewportWidth}; min-height: 400px;"
      >
        <!-- Component render area -->
        <div class="p-8">
          {#if component}
            {@const DynamicComponent = component}
            <DynamicComponent {...props} />
          {:else if children}
            {@render children()}
          {:else}
            <div class="flex items-center justify-center h-64 text-gray-400 dark:text-gray-600">
              <div class="text-center">
                <p class="text-sm">No component loaded</p>
                <p class="text-xs mt-1">Select a component from the sidebar</p>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
