<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Snippet = any;

  /**
   * Компонент для отображения иконки сайта (фавиконки) по URL
   *
   * @param url - URL сайта, откуда нужно получить фавиконку
   * @param size - Размер иконки (в пикселях)
   * @param className - Дополнительные CSS классы
   * @returns Иконка сайта в виде изображения
   */
  type Props = {
    url?: string;
    size?: number;
    className?: string;
    content?: Snippet;
  } & HTMLAttributes<HTMLImageElement>;

  const {
    url,
    size = 16,
    className = '',
    content,
    ...restProps
  }: Props = $props();

  const faviconUrl = $derived((() => {
    if (!url) return '';
    
    try {
      const parsedUrl = new URL(url);
      return `${parsedUrl.protocol}//${parsedUrl.host}/favicon.ico`;
    } catch (e) {
      return '';
    }
  })());

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
    class={`inline-block align-middle ${className}`}
    onerror={handleError}
    {...restProps}
  />
{:else}
  <div class={`inline-flex items-center justify-center align-middle w-[${size}px] h-[${size}px] text-[${size * 0.6}px] bg-[--color-bg-tertiary] text-[--color-text-tertiary] rounded-sm ${className}`}
  >
    {#if content}
      {@render content()}
    {:else}
      🌐
    {/if}
  </div>
{/if}