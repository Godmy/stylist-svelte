<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Snippet = any;

  /**
   * Образец цвета (квадрат)
   *
   * @param color - HEX, RGB или название цвета
   * @param size - Размер квадрата (в пикселях)
   * @param className - Дополнительные CSS классы
   * @returns Квадратный образец цвета с границей
   */
  type Props = {
    color?: string;
    size?: number;
    className?: string;
    content?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    color = '#0ea5e9', // По умолчанию - Indigo 500
    size = 32,
    className = '',
    content,
    ...restProps
  }: Props = $props();

  let style = $derived(`background-color: ${color}; width: ${size}px; height: ${size}px;`);
</script>

<div
  class="rounded-md border border-[--color-border-primary] shadow-sm {className}"
  style={style}
  {...restProps}
>
  {#if content}
    <div class="w-full h-full flex items-center justify-center">
      {@render content()}
    </div>
  {/if}
</div>