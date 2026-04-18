<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import { Button } from '$stylist';
  import { createZoomToolbarState } from '$stylist/control/function/state/zoom-toolbar';
  import type { SlotZoomToolbar as ZoomToolbarProps } from '$stylist/control/interface/slot/zoom-toolbar';

const ZoomIn = 'zoom-in';
const ZoomOut = 'zoom-out';
const RotateCcw = 'rotate-ccw';

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
  }: ZoomToolbarProps = $props();

  const state = createZoomToolbarState({
    zoomLevel,
    minZoom,
    maxZoom,
    step,
    class: hostClass,
    buttonClass,
    onZoomChange,
    showReset,
    showPercentage
  });
</script>

<div class={state.rootClass} {...restProps}>
  <Button
    variant="ghost"
    size="sm"
    onclick={state.zoomOut}
    aria-label="Zoom out"
    disabled={state.currentZoom <= minZoom}
    class={state.firstButtonClass}
  >
    <BaseIcon name={ZoomOut} class="h-4 w-4" />
  </Button>
  
  {#if showPercentage}
    <div class={state.percentageClass}>
      {Math.round(state.currentZoom)}%
    </div>
  {/if}
  
  <Button
    variant="ghost"
    size="sm"
    onclick={state.zoomIn}
    aria-label="Zoom in"
    disabled={state.currentZoom >= maxZoom}
    class={state.buttonClass}
  >
    <BaseIcon name={ZoomIn} class="h-4 w-4" />
  </Button>
  
  {#if showReset}
    <div class="border-l border-[var(--color-border-primary)]"></div>
    <Button
      variant="ghost"
      size="sm"
      onclick={state.resetZoom}
      aria-label="Reset zoom"
      class={state.buttonClass}
    >
      <BaseIcon name={RotateCcw} class="h-4 w-4" />
    </Button>
  {/if}
</div>



