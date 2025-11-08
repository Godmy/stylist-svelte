<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Snippet = any;

  /**
   * Круглая заглушка (для аватаров, иконок)
   *
   * @param size - Размер в пикселях
   * @param className - Дополнительные CSS классы
   * @returns Круглая анимированная заглушка
   */
  type Props = {
    size?: number;
    className?: string;
    content?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    size = 40,
    className = '',
    content,
    ...restProps
  }: Props = $props();

  let style = $derived(`width: ${size}px; height: ${size}px;`);
</script>

<div
  class="rounded-full bg-[--color-bg-tertiary] animate-pulse {className}"
  style={style}
  {...restProps}
>
  {#if content}
    {@render content()}
  {/if}
</div>