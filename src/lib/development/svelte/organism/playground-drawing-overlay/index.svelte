<script lang="ts">
  import { createPlaygroundDrawingOverlayState } from '$stylist/development/function/state/playground-drawing-overlay';

  interface Props {
    drawColor?: string;
    onClose?: () => void;
  }

  let props: Props = $props();
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
