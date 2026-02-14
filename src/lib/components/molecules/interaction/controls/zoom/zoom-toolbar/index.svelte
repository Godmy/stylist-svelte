<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-svelte';
  import { Button } from '$stylist/components/atoms';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    zoomLevel?: number;
    minZoom?: number;
    maxZoom?: number;
    step?: number;
    class?: string;
    buttonClass?: string;
    onZoomChange?: (zoomLevel: number) => void;
    showReset?: boolean;
    showPercentage?: boolean;
  };

  let {
    zoomLevel = 100,
    minZoom = 50,
    maxZoom = 200,
    step = 10,
    class: hostClass = '',
    buttonClass = '',
    onZoomChange,
    showReset = true,
    showPercentage = true,
    ...restProps
  }: Props = $props();

  let currentZoom = $state(zoomLevel);

  $effect(() => {
    currentZoom = zoomLevel;
  });

  function zoomIn() {
    const newZoom = Math.min(currentZoom + step, maxZoom);
    currentZoom = newZoom;
    onZoomChange?.(newZoom);
  }

  function zoomOut() {
    const newZoom = Math.max(currentZoom - step, minZoom);
    currentZoom = newZoom;
    onZoomChange?.(newZoom);
  }

  function resetZoom() {
    currentZoom = 100;
    onZoomChange?.(100);
  }
</script>

<div class={`zoom-controls flex items-center border border-gray-300 rounded-md ${hostClass}`} {...restProps}>
  <Button
    variant="ghost"
    size="sm"
    onclick={zoomOut}
    aria-label="Zoom out"
    disabled={currentZoom <= minZoom}
    class={`border-r border-gray-300 ${buttonClass}`}
  >
    <ZoomOut class="h-4 w-4" />
  </Button>
  
  {#if showPercentage}
    <div class="px-3 py-1 text-sm font-medium min-w-[50px] text-center">
      {Math.round(currentZoom)}%
    </div>
  {/if}
  
  <Button
    variant="ghost"
    size="sm"
    onclick={zoomIn}
    aria-label="Zoom in"
    disabled={currentZoom >= maxZoom}
    class={`border-l border-gray-300 ${buttonClass}`}
  >
    <ZoomIn class="h-4 w-4" />
  </Button>
  
  {#if showReset}
    <div class="border-l border-gray-300"></div>
    <Button
      variant="ghost"
      size="sm"
      onclick={resetZoom}
      aria-label="Reset zoom"
      class={`border-l border-gray-300 ${buttonClass}`}
    >
      <RotateCcw class="h-4 w-4" />
    </Button>
  {/if}
</div>
