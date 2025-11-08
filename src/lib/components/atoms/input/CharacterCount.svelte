<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Snippet = any;

  /**
   * Индикатор текущее/макс для полей ввода
   *
   * @param current - Текущее количество символов
   * @param max - Максимальное количество символов
   * @param showPercentage - Показывать процент заполнения
   * @param className - Дополнительные CSS классы
   * @returns Индикатор количества символов с цветовой индикацией
   */
  type Props = {
    current?: number;
    max?: number;
    showPercentage?: boolean;
    className?: string;
    content?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    current = 0,
    max = 100,
    showPercentage = false,
    className = '',
    content,
    ...restProps
  }: Props = $props();

  let percentage = $derived(max > 0 ? Math.min(100, (current / max) * 100) : 0);
  let ratio = $derived(current / max);
  
  let colorClass = $derived(() => {
    if (ratio > 0.9) return 'text-[--color-danger-600] dark:text-[--color-danger-400]';
    if (ratio > 0.75) return 'text-[--color-warning-600] dark:text-[--color-warning-400]';
    return 'text-[--color-text-tertiary] dark:text-[--color-text-tertiary]';
  });

  let message = $derived(showPercentage 
    ? `${Math.round(percentage)}% (${current}/${max})` 
    : `${current}/${max}`
  );

  let classes = $derived(`text-sm ${colorClass} ${className}`);
</script>

<div class={classes} {...restProps}>
  {#if content}
    {@render content()}
  {:else}
    {message}
  {/if}
</div>