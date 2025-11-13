<script lang="ts">
  import type { ComponentType } from 'svelte';
  import { playgroundStore, type ViewportSize } from '../stores/playground.svelte';
  import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-svelte';

  interface Props {
    component?: ComponentType | null;
    props?: Record<string, any>;
    children?: any;
  }

  let { component = null, props = {}, children }: Props = $props();

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
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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

    <!-- Zoom controls -->
    <div class="flex items-center gap-1 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 rounded-lg p-1 shadow-sm">
      <button
        onclick={() => playgroundStore.zoomOut()}
        class="p-2 rounded-md hover:bg-white dark:hover:bg-gray-600 transition-all hover:scale-110 active:scale-95 group"
        title="Zoom out"
      >
        <ZoomOut class="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
      </button>
      <span class="text-xs font-mono font-bold text-gray-700 dark:text-gray-300 min-w-[3.5rem] text-center px-2">
        {Math.round(playgroundStore.uiState.zoom * 100)}%
      </span>
      <button
        onclick={() => playgroundStore.zoomIn()}
        class="p-2 rounded-md hover:bg-white dark:hover:bg-gray-600 transition-all hover:scale-110 active:scale-95 group"
        title="Zoom in"
      >
        <ZoomIn class="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
      </button>
      <div class="w-px h-4 bg-gray-300 dark:bg-gray-600 mx-1"></div>
      <button
        onclick={() => playgroundStore.resetZoom()}
        class="p-2 rounded-md hover:bg-white dark:hover:bg-gray-600 transition-all hover:scale-110 active:scale-95 group"
        title="Reset zoom"
      >
        <RotateCcw class="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-all group-hover:rotate-180" />
      </button>
    </div>

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
  <div class="flex-1 overflow-auto p-8 flex items-center justify-center">
    <div
      class="canvas-zoom"
      style="transform: scale({playgroundStore.uiState.zoom}); transform-origin: center;"
    >
      <div
        class="canvas-frame rounded-2xl shadow-2xl relative {backgroundClass} border-2 border-gray-200/50 dark:border-gray-700/50"
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
