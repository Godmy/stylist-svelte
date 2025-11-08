<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Snippet = any;

  /**
   * Контейнер для иконки, задающий ей фон, форму и размеры
   *
   * @param size - Размер контейнера ('sm' | 'md' | 'lg')
   * @param variant - Вариант стиля ('solid' | 'outline' | 'ghost')
   * @param shape - Форма ('circle' | 'square' | 'rounded')
   * @param color - Цветовая схема ('primary' | 'secondary' | 'success' | 'warning' | 'danger')
   * @param content - Содержимое (иконка)
   * @returns Контейнер с заданными стилями для иконки
   */
  type IconSize = 'sm' | 'md' | 'lg';
  type IconVariant = 'solid' | 'outline' | 'ghost';
  type IconShape = 'circle' | 'square' | 'rounded';
  type IconColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

  type Props = {
    size?: IconSize;
    variant?: IconVariant;
    shape?: IconShape;
    color?: IconColor;
    content?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  const {
    size = 'md',
    variant = 'solid',
    shape = 'circle',
    color = 'primary',
    content,
    class: className = '',
    ...restProps
  }: Props = $props();

  const sizeClasses = $derived({
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-10 h-10 text-base'
  }[size]);

  const shapeClasses = $derived({
    circle: 'rounded-full',
    square: 'rounded-none',
    rounded: 'rounded-md'
  }[shape]);

  const colorClasses = $derived(() => {
    switch (variant) {
      case 'solid':
        return {
          primary: 'bg-[--color-primary-600] text-[--color-text-inverse]',
          secondary: 'bg-[--color-secondary-600] text-[--color-text-inverse]',
          success: 'bg-[--color-success-600] text-[--color-text-inverse]',
          warning: 'bg-[--color-warning-500] text-[--color-text-inverse]',
          danger: 'bg-[--color-danger-600] text-[--color-text-inverse]'
        }[color];
      case 'outline':
        return {
          primary: 'bg-transparent border border-[--color-primary-600] text-[--color-primary-600]',
          secondary: 'bg-transparent border border-[--color-secondary-600] text-[--color-secondary-600]',
          success: 'bg-transparent border border-[--color-success-600] text-[--color-success-600]',
          warning: 'bg-transparent border border-[--color-warning-500] text-[--color-warning-500]',
          danger: 'bg-transparent border border-[--color-danger-600] text-[--color-danger-600]'
        }[color];
      case 'ghost':
        return {
          primary: 'bg-[--color-primary-100] text-[--color-primary-600] dark:bg-[--color-primary-900] dark:text-[--color-primary-200]',
          secondary: 'bg-[--color-secondary-100] text-[--color-secondary-600] dark:bg-[--color-secondary-900] dark:text-[--color-secondary-200]',
          success: 'bg-[--color-success-100] text-[--color-success-600] dark:bg-[--color-success-900] dark:text-[--color-success-200]',
          warning: 'bg-[--color-warning-100] text-[--color-warning-600] dark:bg-[--color-warning-900] dark:text-[--color-warning-200]',
          danger: 'bg-[--color-danger-100] text-[--color-danger-600] dark:bg-[--color-danger-900] dark:text-[--color-danger-200]'
        }[color];
      default:
        return '';
    }
  });

  const classes = $derived(`${sizeClasses} inline-flex items-center justify-center ${shapeClasses} ${colorClasses} ${className}`);
</script>

<div class={classes} {...restProps}>
  {#if content}
    {@render content()}
  {/if}
</div>