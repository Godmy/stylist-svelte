<script lang="ts">
  import type { HTMLImgAttributes } from 'svelte/elements';
  import type { IFaviconProps } from './types';
  import { FaviconStyleManager } from './styles';

  /**
   * Favicon component - Displays a favicon for a given URL
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles favicon rendering and state
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other favicon components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param url - URL to extract favicon from
   * @param size - Size of the favicon in pixels
   * @param class - Additional CSS classes
   * @param content - Snippet content for fallback display
   * @returns An accessible, styled favicon element
   */
  type Props = IFaviconProps & HTMLImgAttributes;

  let {
    url,
    size = 16,
    class: className = '',
    content,
    ...restProps
  }: Props = $props();

  let imageError = $state(false);

  let faviconUrl = $derived(() => {
    if (!url) return null;
    return FaviconStyleManager.generateFaviconUrl(url);
  });

  let safeFaviconUrl = $derived(faviconUrl() || undefined);

  function handleError() {
    imageError = true;
  }
</script>

{#if faviconUrl() && !imageError}
  <img
    src={safeFaviconUrl}
    width={size}
    height={size}
    class={FaviconStyleManager.getImageClasses(className)}
    onerror={handleError}
    {...restProps}
  />
{:else}
  <div class={FaviconStyleManager.getFallbackClasses(size, className)}>
    {#if content}
      {@render content()}
    {:else}
      ?
    {/if}
  </div>
{/if}