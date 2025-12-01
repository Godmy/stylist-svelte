<script lang="ts">
  import type { HTMLImgAttributes } from 'svelte/elements';
  import type { IImageProps } from './types';
  import { DEFAULT_LOADING_STRATEGY } from './constant';

  /**
   * Image component - A flexible image component with fallback and loading states
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles image rendering
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
   * @param loaded - Whether the image has loaded
   * @param error - Whether there was an error loading the image
   * @param onLoad - Callback when image loads
   * @param onError - Callback when image errors
   * @returns An accessible, styled image element
   */
  type Props = IImageProps & HTMLImgAttributes & {
    loaded?: boolean;
    error?: boolean;
    onLoad?: () => void;
    onError?: () => void;
  };

  let {
    src,
    alt = '',
    fallback,
    loading = DEFAULT_LOADING_STRATEGY,
    width,
    height,
    class: className = '',
    content,
    loaded = false,
    error = false,
    onLoad,
    onError,
    ...restProps
  }: Props = $props();

  function handleError() {
    if (onError) {
      onError();
    }
  }

  function handleLoad() {
    if (onLoad) {
      onLoad();
    }
  }

  let imageSource = $derived(error && fallback ? fallback : src);

  // Generate CSS classes using utility classes
  let imageClass = $derived(`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`);
  let containerClass = $derived('relative inline-block');
  let wrapperClass = $derived('absolute inset-0 flex items-center justify-center');
</script>

<div class={containerClass}>
  {#if content && !loaded && !error}
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