<script lang="ts">
  import type { HTMLImgAttributes } from 'svelte/elements';
  import type { IImageProps } from './types';
  import { ImageStyleManager } from './styles';
  import { DEFAULT_LOADING_STRATEGY } from './constant';

  /**
   * Image component - A flexible image component with fallback and loading states
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles image rendering and state
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other image components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param src - Source URL of the image
   * @param alt - Alternative text for the image
   * @param fallback - Fallback image URL in case of load error
   * @param loading - Loading strategy ('lazy' | 'eager')
   * @param width - Width of the image
   * @param height - Height of the image
   * @param class - Additional CSS classes
   * @param content - Snippet content to show while loading
   * @returns An accessible, styled image element
   */
  type Props = IImageProps & HTMLImgAttributes;

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
  }: Props = $props();

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

  let imageSource = $derived(imageError && fallback ? fallback : src);

  let imageClass = $derived(ImageStyleManager.getAllClasses(className, imageLoaded));
  let containerClass = $derived(ImageStyleManager.getContainerClasses());
  let wrapperClass = $derived(ImageStyleManager.getWrapperClasses());
</script>

<div class={containerClass}>
  {#if content && !imageLoaded && !imageError}
    <div class={wrapperClass}>
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