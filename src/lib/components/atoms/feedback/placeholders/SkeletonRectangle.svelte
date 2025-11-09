<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Snippet = any;

  /**
   * Прямоугольная заглушка (для изображений, карточек)
   *
   * @param width - Ширина в пикселях
   * @param height - Высота в пикселях
   * @param className - Дополнительные CSS классы
   * @returns Прямоугольная анимированная заглушка
   */
  type Props = {
    width?: number;
    height?: number;
    className?: string;
    content?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    width = 120,
    height = 80,
    className = '',
    content,
    ...restProps
  }: Props = $props();

  let style = $derived(`width: ${width}px; height: ${height}px;`);
</script>

<div
  class="bg-[--color-bg-tertiary] rounded-md animate-pulse {className}"
  style={style}
  {...restProps}
>
  {#if content}
    {@render content()}
  {/if}
</div>