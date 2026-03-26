<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Icon as BaseIcon } from '$stylist';
const ChevronLeft = 'chevron-left';
const ChevronRight = 'chevron-right';
const X = 'x';

  import { ImageGalleryStyleManager } from '$stylist/information/class/style-manager/image-gallery';
  import type { IImageItem, IImageGalleryProps } from '$stylist/information/interface/image-gallery';

  /**
   * @component ImageGallery
   * @description РљРѕРјРїРѕРЅРµРЅС‚ РіР°Р»РµСЂРµРё РёР·РѕР±СЂР°Р¶РµРЅРёР№ СЃ РІРѕР·РјРѕР¶РЅРѕСЃС‚СЊСЋ РЅР°РІРёРіР°С†РёРё Рё РїРѕР»РЅРѕСЌРєСЂР°РЅРЅРѕРіРѕ РїСЂРѕСЃРјРѕС‚СЂР°
   *
   * РЎР»РµРґСѓРµС‚ РїСЂРёРЅС†РёРїР°Рј SOLID:
   * - SRP: РљРѕРјРїРѕРЅРµРЅС‚ РѕС‚РІРµС‡Р°РµС‚ С‚РѕР»СЊРєРѕ Р·Р° РѕС‚РѕР±СЂР°Р¶РµРЅРёРµ Рё РЅР°РІРёРіР°С†РёСЋ РїРѕ РёР·РѕР±СЂР°Р¶РµРЅРёСЏРј
   * - OCP: Р›РµРіРєРѕ СЂР°СЃС€РёСЂСЏРµРј С‡РµСЂРµР· РїСЂРѕРїСЃС‹
   * - LSP: РџРѕРґРґРµСЂР¶РёРІР°РµС‚ РїРѕРґСЃС‚Р°РЅРѕРІРєСѓ СЂР°Р·Р»РёС‡РЅС‹С… С‚РёРїРѕРІ РёР·РѕР±СЂР°Р¶РµРЅРёР№
   * - ISP: РџСЂРµРґРѕСЃС‚Р°РІР»СЏРµС‚ РјРёРЅРёРјР°Р»СЊРЅРѕ РЅРµРѕР±С…РѕРґРёРјС‹Р№ РёРЅС‚РµСЂС„РµР№СЃ РІР·Р°РёРјРѕРґРµР№СЃС‚РІРёСЏ
   * - DIP: Р—Р°РІРёСЃРёС‚ РѕС‚ Р°Р±СЃС‚СЂР°РєС†РёР№ (С‚РёРїС‹ Рё СЃС‚РёР»Рё), Р° РЅРµ РѕС‚ РґРµС‚Р°Р»РµР№ СЂРµР°Р»РёР·Р°С†РёРё
   */
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
  }: IImageGalleryProps = $props();

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

<div class={ImageGalleryStyleManager.getHostClasses(className)} {...restProps}>
  {#if images.length > 0}
    <div class="relative">
      <!-- Main image display -->
      <div class={ImageGalleryStyleManager.getImageContainerClasses(imageClass)}
        onclick={() => openFullscreen(currentIndex)}
        onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && openFullscreen(currentIndex)}
        role="button"
        tabindex="0"
      >
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt || `Gallery image ${currentIndex + 1}`}
          class={ImageGalleryStyleManager.getImageClasses(imageClass)}
        />

        <!-- Navigation arrows -->
        {#if images.length > 1}
          <button
            type="button"
            class={ImageGalleryStyleManager.getLeftNavigationButtonClasses(navigationClass)}
            onclick={prevImage}
            aria-label="Previous image"
          >
            <BaseIcon name={ChevronLeft} class="h-6 w-6" />
          </button>

          <button
            type="button"
            class={ImageGalleryStyleManager.getRightNavigationButtonClasses(navigationClass)}
            onclick={nextImage}
            aria-label="Next image"
          >
            <BaseIcon name={ChevronRight} class="h-6 w-6" />
          </button>
        {/if}

        <!-- Image counter -->
        <div class={ImageGalleryStyleManager.getImageCounterClasses()}>
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <!-- Caption -->
      {#if showCaptions && images[currentIndex].caption}
        <div class={ImageGalleryStyleManager.getCaptionClasses(captionClass)}>
          {images[currentIndex].caption}
        </div>
      {/if}

      <!-- Thumbnails -->
      {#if showThumbnails && images.length > 1}
        <div class={ImageGalleryStyleManager.getThumbnailsContainerClasses()}>
          {#each images as img, index}
            <div
              class={ImageGalleryStyleManager.getThumbnailClasses(index === currentIndex, thumbnailClass)}
              onclick={() => goToImage(index)}
              onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && goToImage(index)}
              role="button"
              tabindex="0"
            >
              <img
                src={img.src}
                alt={img.alt || `Thumbnail ${index + 1}`}
                class={ImageGalleryStyleManager.getThumbnailImageClasses()}
              />
            </div>
          {/each}
        </div>
      {/if}
    </div>
  {/if}

  <!-- Fullscreen overlay -->
  {#if isFullscreen}
    <div class={ImageGalleryStyleManager.getFullscreenOverlayClasses()}>
      <button
        type="button"
        class={ImageGalleryStyleManager.getFullscreenCloseButtonClasses()}
        onclick={closeFullscreen}
        aria-label="Close fullscreen"
      >
        <BaseIcon name={X} class="h-6 w-6" />
      </button>

      <button
        type="button"
        class={ImageGalleryStyleManager.getFullscreenLeftButtonClasses()}
        onclick={prevImage}
        aria-label="Previous image"
      >
        <BaseIcon name={ChevronLeft} class="h-8 w-8" />
      </button>

      <div class={ImageGalleryStyleManager.getFullscreenImageContainerClasses()}>
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt || `Fullscreen image ${currentIndex + 1}`}
          class={ImageGalleryStyleManager.getFullscreenImageClasses()}
        />

        {#if showCaptions && images[currentIndex].caption}
          <div class={ImageGalleryStyleManager.getFullscreenCaptionClasses(captionClass)}>
            {images[currentIndex].caption}
          </div>
        {/if}

        <div class={ImageGalleryStyleManager.getFullscreenCounterClasses()}>
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <button
        type="button"
        class={ImageGalleryStyleManager.getFullscreenRightButtonClasses()}
        onclick={nextImage}
        aria-label="Next image"
      >
        <BaseIcon name={ChevronRight} class="h-8 w-8" />
      </button>
    </div>
  {/if}
</div>






