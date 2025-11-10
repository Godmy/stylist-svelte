<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { ChevronLeft, ChevronRight, X, Grid } from 'lucide-svelte';

  type ImageItem = {
    id: string;
    src: string;
    alt?: string;
    caption?: string;
  };

  type Props = {
    images: ImageItem[];
    showThumbnails?: boolean;
    autoPlay?: boolean;
    autoPlayInterval?: number; // in milliseconds
    showCaptions?: boolean;
    class?: string;
    imageClass?: string;
    thumbnailClass?: string;
    navigationClass?: string;
    captionClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    images = [],
    showThumbnails = true,
    autoPlay = false,
    autoPlayInterval = 5000,
    showCaptions = true,
    class: className = '',
    imageClass = '',
    thumbnailClass = '',
    navigationClass = '',
    captionClass = '',
    ...restProps
  }: Props = $props();

  let currentIndex = $state(0);
  let isFullscreen = $state(false);
  let autoPlayTimer: number | null = null;

  // Auto-play functionality
  $effect(() => {
    if (autoPlay) {
      autoPlayTimer = window.setInterval(() => {
        nextImage();
      }, autoPlayInterval) as unknown as number;
    } else if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }

    // Clean up on component destroy
    return () => {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
      }
    };
  });

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  function goToImage(index: number) {
    currentIndex = index;
  }

  function openFullscreen(index: number) {
    currentIndex = index;
    isFullscreen = true;
  }

  function closeFullscreen() {
    isFullscreen = false;
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (isFullscreen) {
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'Escape') {
        closeFullscreen();
      }
    }
  }

  $effect(() => {
    if (isFullscreen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when fullscreen
    } else {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  });
</script>

<div class={`w-full ${className}`} {...restProps}>
  {#if images.length > 0}
    <div class="relative">
      <!-- Main image display -->
      <div class="relative overflow-hidden rounded-lg"
        onclick={() => openFullscreen(currentIndex)}
        onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && openFullscreen(currentIndex)}
        role="button"
        tabindex="0"
      >
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt || `Gallery image ${currentIndex + 1}`}
          class={`w-full h-auto object-cover ${imageClass}`}
        />
        
        <!-- Navigation arrows -->
        {#if images.length > 1}
          <button
            type="button"
            class={`absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 ${navigationClass}`}
            onclick={prevImage}
            aria-label="Previous image"
          >
            <ChevronLeft class="h-6 w-6" />
          </button>
          
          <button
            type="button"
            class={`absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 ${navigationClass}`}
            onclick={nextImage}
            aria-label="Next image"
          >
            <ChevronRight class="h-6 w-6" />
          </button>
        {/if}
        
        <!-- Image counter -->
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-sm px-3 py-1 rounded-full">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      
      <!-- Caption -->
      {#if showCaptions && images[currentIndex].caption}
        <div class={`mt-2 text-center text-gray-600 ${captionClass}`}>
          {images[currentIndex].caption}
        </div>
      {/if}
      
      <!-- Thumbnails -->
      {#if showThumbnails && images.length > 1}
        <div class="flex overflow-x-auto mt-4 space-x-2 py-2">
          {#each images as img, index}
                        <div
                          class={`flex-shrink-0 cursor-pointer rounded-md overflow-hidden border-2 ${
                            index === currentIndex ? 'border-blue-500' : 'border-transparent'
                          } ${thumbnailClass}`}
                          onclick={() => goToImage(index)}
                          onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && goToImage(index)}
                          role="button"
                          tabindex="0"
                        >              <img
                src={img.src}
                alt={img.alt || `Thumbnail ${index + 1}`}
                class="w-16 h-16 object-cover"
              />
            </div>
          {/each}
        </div>
      {/if}
    </div>
  {/if}

  <!-- Fullscreen overlay -->
  {#if isFullscreen}
    <div class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <button
        type="button"
        class="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-gray-800"
        onclick={closeFullscreen}
        aria-label="Close fullscreen"
      >
        <X class="h-6 w-6" />
      </button>
      
      <button
        type="button"
        class="absolute left-4 text-white p-2 rounded-full hover:bg-gray-800"
        onclick={prevImage}
        aria-label="Previous image"
      >
        <ChevronLeft class="h-8 w-8" />
      </button>
      
      <div class="flex flex-col items-center max-w-4xl max-h-full">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt || `Fullscreen image ${currentIndex + 1}`}
          class="max-h-[80vh] object-contain"
        />
        
        {#if showCaptions && images[currentIndex].caption}
          <div class={`mt-4 text-center text-white ${captionClass}`}>
            {images[currentIndex].caption}
          </div>
        {/if}
        
        <div class="mt-4 text-white text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      
      <button
        type="button"
        class="absolute right-4 text-white p-2 rounded-full hover:bg-gray-800"
        onclick={nextImage}
        aria-label="Next image"
      >
        <ChevronRight class="h-8 w-8" />
      </button>
    </div>
  {/if}
</div>