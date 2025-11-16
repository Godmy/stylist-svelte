<script lang="ts">
  import type { FaviconProps } from './type';
  import { DEFAULT_FALLBACK_ICON, DEFAULT_FAVICON_SIZE, FAVICON_FILE_NAME } from './constant';
  import { generateFaviconUrl, getFallbackClasses, getFaviconImageClasses } from './util';

  const {
    url,
    size = DEFAULT_FAVICON_SIZE,
    className = '',
    content,
    ...restProps
  }: FaviconProps = $props();

  const faviconUrl = generateFaviconUrl(url);
  let imageError = $state(false);

  function handleError() {
    imageError = true;
  }
</script>

{#if faviconUrl && !imageError}
  <img
    src={faviconUrl}
    width={size}
    height={size}
    class={getFaviconImageClasses(className)}
    onerror={handleError}
    {...restProps}
  />
{:else}
  <div class={getFallbackClasses(size, className)}>
    {#if content}
      {@render content()}
    {:else}
      {DEFAULT_FALLBACK_ICON}
    {/if}
  </div>
{/if}