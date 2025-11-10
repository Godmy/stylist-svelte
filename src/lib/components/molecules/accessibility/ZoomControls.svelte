<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { ZoomIn, ZoomOut, RotateCcw, Plus, Minus } from 'lucide-svelte';

  type Props = {
    initialValue?: number;
    minZoom?: number;
    maxZoom?: number;
    step?: number;
    showPercentage?: boolean;
    onChange?: (zoomLevel: number) => void;
    class?: string;
    controlsClass?: string;
    indicatorClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    initialValue = 100, // percentage
    minZoom = 50,
    maxZoom = 200,
    step = 10,
    showPercentage = true,
    onChange,
    class: className = '',
    controlsClass = '',
    indicatorClass = '',
    ...restProps
  }: Props = $props();

  let zoomLevel = $state(initialValue);

  function zoomIn() {
    if (zoomLevel < maxZoom) {
      zoomLevel = Math.min(zoomLevel + step, maxZoom);
      applyZoom();
    }
  }

  function zoomOut() {
    if (zoomLevel > minZoom) {
      zoomLevel = Math.max(zoomLevel - step, minZoom);
      applyZoom();
    }
  }

  function resetZoom() {
    zoomLevel = initialValue;
    applyZoom();
  }

  function applyZoom() {
    // Apply the zoom transformation to the main content container
    const contentContainer = document.querySelector('.content-container') as HTMLElement || document.body;
    contentContainer.style.transform = `scale(${zoomLevel / 100})`;
    contentContainer.style.transformOrigin = 'top left';
    contentContainer.style.width = `${100 * (100 / zoomLevel)}%`;
    contentContainer.style.height = `${100 * (100 / zoomLevel)}%`;
    
    if (onChange) {
      onChange(zoomLevel);
    }
  }

  // Initialize zoom
  $effect(() => {
    applyZoom();
  });
</script>

<div class={`fixed bottom-4 right-4 flex flex-col items-end ${className}`} {...restProps}>
  <div class="mb-2">
    <div class={`flex items-center px-3 py-2 bg-white rounded-full shadow-lg border ${indicatorClass}`}>
      <span class="text-sm font-medium text-gray-700">
        {showPercentage ? `${zoomLevel}%` : zoomLevel}
      </span>
    </div>
  </div>
  
  <div class={`flex flex-col rounded-full bg-white shadow-lg border ${controlsClass}`}>
    <button
      type="button"
      class="p-3 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-t-full"
      onclick={zoomIn}
      aria-label="Zoom in"
      disabled={zoomLevel >= maxZoom}
    >
      <ZoomIn class="h-5 w-5" />
    </button>
    
    <button
      type="button"
      class="p-3 text-gray-700 hover:text-gray-900 hover:bg-gray-100"
      onclick={resetZoom}
      aria-label="Reset zoom"
    >
      <RotateCcw class="h-5 w-5" />
    </button>
    
    <button
      type="button"
      class="p-3 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-b-full"
      onclick={zoomOut}
      aria-label="Zoom out"
      disabled={zoomLevel <= minZoom}
    >
      <ZoomOut class="h-5 w-5" />
    </button>
  </div>
  
  <div class="mt-2 text-xs text-gray-500 text-right">
    <div>Zoom controls</div>
    <div class="flex space-x-1">
      <kbd class="px-2 py-1 text-xs rounded border bg-gray-100">Ctrl</kbd>
      <span>+</span>
      <kbd class="px-2 py-1 text-xs rounded border bg-gray-100">-</kbd>
    </div>
  </div>
</div>