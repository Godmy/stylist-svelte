<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { ChevronLeft, ChevronRight, X, ZoomIn, RotateCw, Image as ImageIcon } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';

  type ProductImage = {
    id: string;
    url: string;
    alt?: string;
    thumbnailUrl?: string;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    images: ProductImage[];
    class?: string;
    galleryClass?: string;
    mainImageClass?: string;
    thumbnailClass?: string;
    showThumbnails?: boolean;
    showZoom?: boolean;
    showFullscreen?: boolean;
    enableLightbox?: boolean;
    aspectRatio?: string; // e.g. '1/1', '4/3', '16/9'
    onImageChange?: (image: ProductImage, index: number) => void;
    startIndex?: number;
  };

  let {
    images = [],
    class: hostClass = '',
    galleryClass = '',
    mainImageClass = '',
    thumbnailClass = '',
    showThumbnails = true,
    showZoom = true,
    showFullscreen = true,
    enableLightbox = true,
    aspectRatio = '1/1',
    onImageChange,
    startIndex = 0,
    ...restProps
  }: Props = $props();

  let currentIndex = $state(startIndex);

  function goToPrev() {
    if (currentIndex > 0) {
      currentIndex--;
      onImageChange?.(images[currentIndex], currentIndex);
    } else if (images.length > 0) {
      currentIndex = images.length - 1;
      onImageChange?.(images[currentIndex], currentIndex);
    }
  }

  function goToNext() {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      onImageChange?.(images[currentIndex], currentIndex);
    } else if (images.length > 0) {
      currentIndex = 0;
      onImageChange?.(images[currentIndex], currentIndex);
    }
  }

  function selectImage(index: number) {
    currentIndex = index;
    onImageChange?.(images[currentIndex], currentIndex);
  }

  function handleMainImageClick() {
    if (enableLightbox) {
      // In a real implementation, this would open a modal lightbox
      console.log('Opening lightbox for image:', images[currentIndex]);
    }
  }

  function handleMainImageKeyDown(event: KeyboardEvent) {
    if (!enableLightbox) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleMainImageClick();
    }
  }
</script>

<div class={`product-gallery ${hostClass}`} {...restProps}>
  {#if images.length > 0}
    <div class={`relative ${galleryClass}`}>
      <!-- Main image display -->
      <svelte:element
        this={enableLightbox ? 'button' : 'div'}
        type={enableLightbox ? 'button' : undefined}
        class={`relative overflow-hidden rounded-lg bg-gray-100 cursor-pointer ${
          enableLightbox ? 'cursor-zoom-in' : ''
        } ${mainImageClass}`}
        style={`aspect-ratio: ${aspectRatio};`}
        onclick={enableLightbox ? handleMainImageClick : undefined}
        aria-label={enableLightbox ? 'Open image preview' : undefined}
        onkeydown={enableLightbox ? handleMainImageKeyDown : undefined}
        role={enableLightbox ? 'button' : undefined}
      >
        <img 
          src={images[currentIndex].url}
          alt={images[currentIndex].alt || `Product image ${currentIndex + 1}`}
          class="w-full h-full object-cover object-center"
        />
        
        <!-- Overlay controls -->
        <div class="absolute inset-0 flex items-center justify-between p-4 opacity-0 hover:opacity-100 transition-opacity">
          <Button 
            variant="secondary" 
            size="sm" 
            class="rounded-full p-2 shadow-md"
            onclick={goToPrev}
            disabled={currentIndex <= 0 && images.length > 1}
          >
            <ChevronLeft class="h-5 w-5" />
          </Button>
          
          <Button 
            variant="secondary" 
            size="sm" 
            class="rounded-full p-2 shadow-md"
            onclick={goToNext}
            disabled={currentIndex >= images.length - 1 && images.length > 1}
          >
            <ChevronRight class="h-5 w-5" />
          </Button>
        </div>
        
        <!-- Image counter -->
        <div class="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
          {currentIndex + 1}/{images.length}
        </div>
      </svelte:element>
      
      <!-- Thumbnails -->
      {#if showThumbnails && images.length > 1}
        <div class="flex overflow-x-auto py-3 space-x-2 mt-3 hide-scrollbar">
          {#each images as image, index}
            <button
              type="button"
              class={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${
                index === currentIndex 
                  ? 'border-blue-500 ring-2 ring-blue-200' 
                  : 'border-gray-200'
              } ${thumbnailClass}`}
              onclick={() => selectImage(index)}
              aria-label={`View image ${index + 1}`}
            >
              <img 
                src={image.thumbnailUrl || image.url}
                alt={image.alt || `Thumbnail ${index + 1}`}
                class="w-full h-full object-cover object-center"
              />
            </button>
          {/each}
        </div>
      {/if}
      
      <!-- Additional controls -->
      <div class="flex justify-center space-x-2 mt-3">
        {#if showZoom}
          <Button variant="outline" size="sm">
            <ZoomIn class="h-4 w-4 mr-1" />
            Zoom
          </Button>
        {/if}
        
        {#if showFullscreen}
          <Button variant="outline" size="sm">
            <RotateCw class="h-4 w-4 mr-1" />
            Fullscreen
          </Button>
        {/if}
      </div>
    </div>
  {:else}
    <div class="flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-lg">
      <div class="text-gray-400 mb-2">
        <ImageIcon class="h-12 w-12 mx-auto" />
      </div>
      <p class="text-gray-500">No images available</p>
    </div>
  {/if}
</div>

<style>
  .hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  
  .hide-scrollbar::-webkit-scrollbar {
    display: none;  /* Chrome, Safari, Opera*/
  }
</style>
