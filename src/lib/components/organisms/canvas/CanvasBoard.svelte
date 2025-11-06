<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import type { DrawingTool, DrawingOptions } from '$lib/types';
  
  type Point = {
    x: number;
    y: number;
  };

  // Props
  let { 
    width = 800,
    height = 600,
    lineWidth = 2,
    strokeColor = '#000000',
    drawingTool = 'pen' as DrawingTool
  } = $props();

  // Local state
  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null;
  let isDrawing = $state(false);
  let lastX = $state(0);
  let lastY = $state(0);

  onMount(() => {
    if (canvas) {
      ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.lineWidth = lineWidth;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = strokeColor;
      }
      
      // Set canvas resolution
      canvas.width = width;
      canvas.height = height;
    }
  });

  // Handle window resize
  const handleResize = () => {
    if (canvas && ctx) {
      canvas.width = width;
      canvas.height = height;
      // Optionally redraw content here if preserving drawing is needed
    }
  };

  window.addEventListener('resize', handleResize);
  
  onDestroy(() => {
    window.removeEventListener('resize', handleResize);
  });

  // Update canvas properties when props change
  $effect(() => {
    if (ctx) {
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = strokeColor;
    }
  });

  function startDrawing(e: MouseEvent) {
    const { offsetX, offsetY } = e;
    isDrawing = true;
    [lastX, lastY] = [offsetX, offsetY];
  }

  function draw(e: MouseEvent) {
    if (!isDrawing || !ctx) return;
    
    const { offsetX, offsetY } = e;
    
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
    
    [lastX, lastY] = [offsetX, offsetY];
  }

  function stopDrawing() {
    if (isDrawing) {
      isDrawing = false;
    }
  }

  // Function to clear the canvas
  export function clearCanvas() {
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  // Function to save canvas as image
  export function saveAsImage(format: 'png' | 'jpeg' | 'webp' = 'png'): string {
    if (canvas) {
      return canvas.toDataURL(`image/${format}`);
    }
    return '';
  }

  // Function to load image onto canvas
  export function loadImage(src: string) {
    const img = new Image();
    img.onload = () => {
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
      }
    };
    img.src = src;
  }
  
  // Make properties available to parent components
  export { canvas, ctx };
</script>

<style>
  .canvas-board {
    display: block;
    border: 1px solid #ccc;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    background-color: white;
    cursor: crosshair;
  }
</style>

<canvas
  bind:this={canvas}
  class="canvas-board"
  width={width}
  height={height}
  onmousedown={startDrawing}
  onmousemove={draw}
  onmouseup={stopDrawing}
  onmouseout={stopDrawing}
  onblur={stopDrawing}
></canvas>