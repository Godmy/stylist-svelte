<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { HTMLCanvasAttributes } from 'svelte/elements';

  type CanvasClearedEvent = {};
  type ExposeMethodsEvent = { clear: () => void };

  const dispatch = createEventDispatcher<{
    'canvas-cleared': CanvasClearedEvent;
    'expose-methods': ExposeMethodsEvent;
  }>();

  type Props = {
    width?: number;
    height?: number;
    drawingEnabled?: boolean;
    tool?: 'pen' | 'eraser' | 'select';
    strokeColor?: string;
    strokeWidth?: number;
    backgroundColor?: string;
  } & HTMLCanvasAttributes;

  let {
    width = 800,
    height = 600,
    drawingEnabled = true,
    tool = 'pen',
    strokeColor = '#000000',
    strokeWidth = 2,
    backgroundColor = '#ffffff',
    ...restProps
  } = $props() as Props;

  let canvasRef: HTMLCanvasElement | null = null;
  let isDrawing = $state(false);

  // Initialize the canvas when it's mounted
  $effect(() => {
    if (canvasRef) {
      const ctx = canvasRef.getContext('2d');
      if (ctx) {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvasRef.width, canvasRef.height);
      }
    }
  });

  function startDrawing(e: MouseEvent) {
    if (!drawingEnabled || !canvasRef) return;
    
    const ctx = canvasRef.getContext('2d');
    if (!ctx) return;

    isDrawing = true;
    ctx.beginPath();
    
    const rect = canvasRef.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.moveTo(x, y);
  }

  function draw(e: MouseEvent) {
    if (!isDrawing || !canvasRef) return;
    
    const ctx = canvasRef.getContext('2d');
    if (!ctx) return;

    const rect = canvasRef.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineWidth = strokeWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    if (tool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.strokeStyle = 'rgba(0,0,0,1)';
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = strokeColor;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  }

  function stopDrawing() {
    if (!canvasRef) return;
    const ctx = canvasRef.getContext('2d');
    if (ctx) {
      ctx.closePath();
    }
    isDrawing = false;
  }

  function clearCanvas() {
    if (!canvasRef) return;
    const ctx = canvasRef.getContext('2d');
    if (ctx) {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvasRef.width, canvasRef.height);
    }
    // Dispatch event to notify parent
    dispatch('canvas-cleared', {});
  }

  // Expose methods to parent components via events
  function exposeMethods() {
    // Methods are exposed via events since $bindable is not compatible with runes
    dispatch('expose-methods', {
      clear: clearCanvas
    });
  }

  $effect(() => {
    exposeMethods();
  });
</script>

<canvas
  bind:this={canvasRef}
  width={width}
  height={height}
  class="border border-gray-300 rounded-md"
  onmousedown={startDrawing}
  onmousemove={draw}
  onmouseup={stopDrawing}
  onmouseleave={stopDrawing}
  {...restProps}
></canvas>
