<script lang="ts">
  import { createPlaygroundDrawingOverlayState } from '$stylist/development/function/state/playground-drawing-overlay';
  import type { PlaygroundDrawingOverlayProps } from '$stylist/development/type/struct/playground-drawing-overlay-props';
  let props: PlaygroundDrawingOverlayProps = $props();
  const state = createPlaygroundDrawingOverlayState(props);
</script>

<style>
  .drawing-overlay {
    position: fixed;
    inset: 0;
    z-index: var(--z-index-layer9998);
    pointer-events: none;
  }

  .drawing-canvas {
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: auto;
    cursor: crosshair;
  }
</style>

<div class="drawing-overlay">
  <canvas
    bind:this={state.canvasElement}
    class="drawing-canvas"
    onpointerdown={state.handlePointerDown}
    onpointermove={state.handlePointerMove}
    onpointerup={state.handlePointerUp}
  ></canvas>
</div>
