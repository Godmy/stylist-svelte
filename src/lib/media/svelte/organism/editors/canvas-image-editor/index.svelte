<script lang="ts">
  import { createCanvasImageEditorState } from '$stylist/media/function/state/canvas-image-editor';
  import type { CanvasImageEditorRecipe } from '$stylist/media/interface/recipe/canvas-image-editor';

  let props: CanvasImageEditorRecipe = $props();
  const vm = createCanvasImageEditorState(props);

  let canvasRef: HTMLCanvasElement | null = null;
  let image: HTMLImageElement | null = null;
  let imageLoaded = $state(false);
  let currentCropArea = $state({ x: 0, y: 0, width: 0, height: 0 });

  // Load image when src changes
  $effect(() => {
    if (vm.src) {
      image = new Image();
      image.onload = () => {
        imageLoaded = true;
        drawImage();
      };
      image.src = vm.src;
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
    ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);
    ctx.drawImage(image, 0, 0, canvasRef.width, canvasRef.height);
  }

  // Apply filter to canvas
  function applyFilter() {
    if (!canvasRef || !image) return;
    const ctx = canvasRef.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);

    let filterString = '';
    switch (vm.filter) {
      case 'grayscale': filterString += 'grayscale(100%) '; break;
      case 'sepia': filterString += 'sepia(100%) '; break;
      case 'invert': filterString += 'invert(100%) '; break;
      case 'blur': filterString += 'blur(2px) '; break;
      case 'brightness': filterString += `brightness(${vm.brightness}%) `; break;
      case 'contrast': filterString += `contrast(${vm.contrast}%) `; break;
      case 'saturate': filterString += `saturate(${vm.saturation}%) `; break;
      case 'hue-rotate': filterString += `hue-rotate(${vm.hue}deg) `; break;
      default: break;
    }

    ctx.filter = filterString.trim();
    ctx.drawImage(image!, 0, 0, canvasRef.width, canvasRef.height);
    ctx.filter = 'none';
  }

  // Crop image based on cropArea
  function cropImage() {
    if (!canvasRef || !image) return;
    const ctx = canvasRef.getContext('2d');
    if (!ctx) return;

    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    if (!tempCtx) return;

    tempCanvas.width = currentCropArea.width;
    tempCanvas.height = currentCropArea.height;

    tempCtx.drawImage(
      image,
      currentCropArea.x, currentCropArea.y,
      currentCropArea.width, currentCropArea.height,
      0, 0,
      currentCropArea.width, currentCropArea.height
    );

    ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);
    ctx.drawImage(tempCanvas, 0, 0, canvasRef.width, canvasRef.height);
    image.src = tempCanvas.toDataURL();
  }
</script>

<canvas
  bind:this={canvasRef}
  width={vm.width}
  height={vm.height}
  class={vm.canvasClasses}
  {...vm.restProps}
  aria-label="Canvas image editor"
></canvas>
