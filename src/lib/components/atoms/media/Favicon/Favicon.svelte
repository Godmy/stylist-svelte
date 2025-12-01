<script lang="ts">
  import type { HTMLImgAttributes } from 'svelte/elements';
  import type { IFaviconProps } from './types';

  /**
   * Favicon component - Displays a favicon for a given URL
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles favicon rendering
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other favicon components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param url - URL to extract favicon from
   * @param size - Size of the favicon in pixels
   * @param class - Additional CSS classes
   * @param content - Snippet content for fallback display
   * @param error - Whether there was an error loading the favicon
   * @param onError - Callback when favicon errors
   * @returns An accessible, styled favicon element
   */
  type Props = IFaviconProps & HTMLImgAttributes & {
    error?: boolean;
    onError?: () => void;
  };

  let {
    url,
    size = 16,
    class: className = '',
    content,
    error = false,
    onError,
    ...restProps
  }: Props = $props();

  let faviconUrl = $derived(() => {
    if (!url) return null;
    // Generate favicon URL from the provided URL
    try {
      const parsedUrl = new URL(url);
      return `${parsedUrl.protocol}//${parsedUrl.hostname}/favicon.ico`;
    } catch (e) {
      return null;
    }
  });

  let safeFaviconUrl = $derived(faviconUrl() || undefined);

  function handleError() {
    if (onError) {
      onError();
    }
  }

  // Generate CSS classes using utility classes
  let imageClass = $derived(`w-[${size}px] h-[${size}px] ${className}`);
  let fallbackClass = $derived(`w-[${size}px] h-[${size}px] flex items-center justify-center text-xs font-bold bg-[--color-background-muted] text-[--color-text-secondary] rounded ${className}`);
</script>

{#if faviconUrl() && !error}
  <img
    src={safeFaviconUrl}
    width={size}
    height={size}
    class={imageClass}
    onerror={handleError}
    {...restProps}
  />
{:else}
  <div class={fallbackClass}>
    {#if content}
      {@render content()}
    {:else}
      ?
    {/if}
  </div>
{/if}