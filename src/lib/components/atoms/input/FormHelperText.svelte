<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Snippet = any;

  /**
   * Текст-подсказка под полем ввода
   *
   * @param text - Текст подсказки
   * @param variant - Вариант ('default' | 'info' | 'success' | 'warning' | 'danger')
   * @param className - Дополнительные CSS классы
   * @returns Текст подсказки с соответствующим стилем
   */
  type Variant = 'default' | 'info' | 'success' | 'warning' | 'danger';

  type Props = {
    text?: string;
    variant?: Variant;
    className?: string;
    content?: Snippet;
  } & HTMLAttributes<HTMLParagraphElement>;

  const {
    text = '',
    variant = 'default',
    className = '',
    content,
    ...restProps
  }: Props = $props();

  const variantClasses = $derived({
    default: 'text-[--color-text-secondary]',
    info: 'text-[--color-primary-600] dark:text-[--color-primary-400]',
    success: 'text-[--color-success-600] dark:text-[--color-success-400]',
    warning: 'text-[--color-warning-600] dark:text-[--color-warning-400]',
    danger: 'text-[--color-danger-600] dark:text-[--color-danger-400]'
  }[variant]);

  const classes = $derived(`mt-1 text-sm ${variantClasses} ${className}`);
</script>

<p class={classes} {...restProps}>
  {#if content}
    {@render content()}
  {:else}
    {text}
  {/if}
</p>