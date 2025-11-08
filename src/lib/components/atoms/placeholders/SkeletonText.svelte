<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Snippet = any;

  /**
   * Заглушка в виде строки текста
   *
   * @param width - Ширина заглушки (в процентах или пикселях)
   * @param className - Дополнительные CSS классы
   * @returns Анимированная заглушка текста
   */
  type Props = {
    width?: string;
    className?: string;
    content?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    width = '100%',
    className = '',
    content,
    ...restProps
  }: Props = $props();

  let style = $derived(`width: ${width};`);
</script>

<div
  class="h-4 bg-[--color-bg-tertiary] rounded-md animate-pulse {className}"
  style={style}
  {...restProps}
>
  {#if content}
    {@render content()}
  {/if}
</div>