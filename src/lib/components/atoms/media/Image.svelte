<script lang="ts">
  import type { HTMLImgAttributes } from 'svelte/elements';

  type Snippet = any;

  /**
   * Улучшенный компонент изображения с поддержкой ленивой загрузки и заглушек
   *
   * @param src - URL изображения
   * @param alt - Альтернативный текст
   * @param fallback - URL заглушки, если изображение не загрузилось
   * @param loading - Стратегия загрузки ('lazy' | 'eager')
   * @param width - Ширина изображения
   * @param height - Высота изображения
   * @param content - Содержимое, отображаемое при загрузке
   * @returns Изображение с возможностью отображения заглушки при ошибке
   */
  type Props = {
    src?: string;
    alt?: string;
    fallback?: string;
    loading?: 'lazy' | 'eager';
    width?: number | string;
    height?: number | string;
    content?: Snippet;
  } & HTMLImgAttributes;

  let {
    src,
    alt = '',
    fallback,
    loading = 'lazy',
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
</script>

<div class="relative inline-block overflow-clip">
  {#if content && !imageLoaded && !imageError}
    <div class="flex items-center justify-center w-full h-full">
      {@render content()}
    </div>
  {/if}
  
  <img
    src={imageError && fallback ? fallback : src}
    alt={alt}
    loading={loading}
    width={width}
    height={height}
    class={`block max-w-full h-auto object-cover {className} ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
    onerror={handleError}
    onload={handleLoad}
    {...restProps}
  />
</div>