<script lang="ts">
  import type { HTMLCanvasAttributes } from 'svelte/elements';

  // Types
  export type CropArea = {
    x: number;
    y: number;
    width: number;
    height: number;
  };

  type Props = {
    width?: number;
    height?: number;
    src?: string;
    cropEnabled?: boolean;
    filter?: 'none' | 'grayscale' | 'sepia' | 'invert' | 'blur';
    cropArea?: CropArea;
  } & HTMLCanvasAttributes;

  let {
    width = 800,
    height = 600,
    src,
    cropEnabled = false,
    filter = 'none',
    cropArea = { x: 0, y: 0, width: 0, height: 0 },
    ...restProps
  }: Props = $props();

  let canvasRef: HTMLCanvasElement | null = null;
  let image: HTMLImageElement | null = null;
  let imageLoaded = $state(false);
  let currentCropArea = $state({ ...cropArea });

  // Load image when src changes
  $effect(() => {
    if (src) {
      image = new Image();
      image.onload = () => {
        imageLoaded = true;
        drawImage();
      };
      image.src = src;
    }
  });

  // Draw image on canvas when it's loaded
  $effect(() => {
    if (canvasRef && image && imageLoaded) {
      drawImage();
    }
  });

  // Apply filter when it changes
  $effect(() => {
    if (canvasRef && imageLoaded) {
      applyFilter();
    }
  });

  // Draw image to canvas
  function drawImage() {
    if (!canvasRef || !image) return;
    
    const ctx = canvasRef.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);
    
    // Draw image
    ctx.drawImage(image, 0, 0, canvasRef.width, canvasRef.height);
  }

  // Apply filter to canvas
  function applyFilter() {
    if (!canvasRef || !image) return;
    
    const ctx = canvasRef.getContext('2d');
    if (!ctx) return;

    // Clear canvas first
    ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);

    // Apply filter
    switch (filter) {
      case 'grayscale':
        ctx.filter = 'grayscale(100%)';
        break;
      case 'sepia':
        ctx.filter = 'sepia(100%)';
        break;
      case 'invert':
        ctx.filter = 'invert(100%)';
        break;
      case 'blur':
        ctx.filter = 'blur(2px)';
        break;
      default:
        ctx.filter = 'none';
        break;
    }

    // Draw image with filter
    ctx.drawImage(image!, 0, 0, canvasRef.width, canvasRef.height);
    
    // Reset filter
    ctx.filter = 'none';
  }

  // Crop image based on cropArea
  function cropImage() {
    if (!canvasRef || !image) return;
    
    const ctx = canvasRef.getContext('2d');
    if (!ctx) return;

    // Create temporary canvas for cropped image
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    if (!tempCtx) return;

    // Set size of temporary canvas to crop dimensions
    tempCanvas.width = currentCropArea.width;
    tempCanvas.height = currentCropArea.height;

    // Draw the cropped portion of the original image to the temporary canvas
    tempCtx.drawImage(
      image,
      currentCropArea.x, 
      currentCropArea.y, 
      currentCropArea.width, 
      currentCropArea.height,
      0, 
      0, 
      currentCropArea.width, 
      currentCropArea.height
    );

    // Clear main canvas and draw the cropped image
    ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);
    ctx.drawImage(tempCanvas, 0, 0, canvasRef.width, canvasRef.height);

    // Update image reference
    image.src = tempCanvas.toDataURL();
  }

  // Update crop area when it changes
  $effect(() => {
    currentCropArea = { ...cropArea };
  });
</script>

<canvas
  bind:this={canvasRef}
  width={width}
  height={height}
  class="border border-gray-300 rounded-md"
  {...restProps}
></canvas>