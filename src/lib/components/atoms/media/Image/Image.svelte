<script lang="ts">
  import type { ImageProps } from './type';
  import { DEFAULT_LOADING_STRATEGY, CONTAINER_CLASSES, IMAGE_WRAPPER_CLASSES } from './constant';
  import { getImageSrc, getImageClasses } from './util';

  let {
    src,
    alt = '',
    fallback,
    loading = DEFAULT_LOADING_STRATEGY,
    width,
    height,
    class: className = '',
    content,
    ...restProps
  }: ImageProps = $props();

  let imageError = $state(false);
  let imageLoaded = $state(false);

  function handleError() {
    if (fallback && !imageError) {
      imageError = true;
    }
  }

  function handleLoad() {
    imageLoaded = true;
  }

  // Get the source for the image (original or fallback)
  const imageSource = $derived(getImageSrc(src, fallback, imageError));

  // Get the classes for the image
  const imageClass = $derived(getImageClasses(className, imageLoaded));
</script>

<div class={CONTAINER_CLASSES}>
  {#if content && !imageLoaded && !imageError}
    <div class={IMAGE_WRAPPER_CLASSES}>
      {@render content()}
    </div>
  {/if}

  <img
    src={imageSource}
    alt={alt}
    loading={loading}
    width={width}
    height={height}
    class={imageClass}
    onerror={handleError}
    onload={handleLoad}
    {...restProps}
  />
</div>