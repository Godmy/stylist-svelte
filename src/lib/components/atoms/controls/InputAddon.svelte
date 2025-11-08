<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Snippet = any;

  /**
   * Префикс или суффикс для поля ввода (иконка, текст)
   *
   * @param position - Позиция ('left' | 'right')
   * @param variant - Вариант стиля ('solid' | 'ghost')
   * @param content - Содержимое (иконка или текст)
   * @returns Обертка для добавления содержимого к полю ввода
   */
  type Position = 'left' | 'right';
  type Variant = 'solid' | 'ghost';

  type Props = {
    position?: Position;
    variant?: Variant;
    content?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  const {
    position = 'left',
    variant = 'solid',
    content,
    class: className = '',
    ...restProps
  }: Props = $props();

  const positionClasses = $derived({
    left: 'pr-3 border-r border-[--color-border-secondary]',
    right: 'pl-3 border-l border-[--color-border-secondary]'
  }[position]);

  const variantClasses = $derived({
    solid: 'bg-[--color-bg-secondary] text-[--color-text-secondary]',
    ghost: 'bg-transparent text-[--color-text-secondary]'
  }[variant]);

  const classes = $derived(`flex items-center justify-center min-w-[2rem] text-sm ${positionClasses} ${variantClasses} ${className}`);
</script>

<div class={classes} {...restProps}>
  {#if content}
    {@render content()}
  {/if}
</div>