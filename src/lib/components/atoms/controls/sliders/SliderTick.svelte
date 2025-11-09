<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Snippet = any;

  /**
   * Одна отметка на шкале RangeSlider
   *
   * @param value - Значение отметки
   * @param position - Процентная позиция на шкале
   * @param active - Активна ли отметка (в диапазоне)
   * @param label - Текст метки (опционально)
   * @param className - Дополнительные CSS классы
   * @returns Отметка на шкале слайдера
   */
  type Props = {
    value?: number;
    position?: number;
    active?: boolean;
    label?: string;
    className?: string;
    content?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    value = 0,
    position = 0,
    active = false,
    label,
    className = '',
    content,
    ...restProps
  }: Props = $props();

  let style = $derived(`left: ${position}%;`);
  let activeClass = $derived(active ? 'bg-[--color-primary-600]' : 'bg-[--color-neutral-400]');

  let classes = $derived(`absolute top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full ${activeClass} ${className}`);
</script>

<div
  class={classes}
  style={style}
  {...restProps}
>
  {#if label || content}
    <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs text-[--color-text-secondary] whitespace-nowrap">
      {#if content}
        {@render content()}
      {:else}
        {label || value}
      {/if}
    </div>
  {/if}
</div>