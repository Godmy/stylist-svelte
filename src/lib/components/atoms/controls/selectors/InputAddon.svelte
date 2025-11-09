<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  /**
   * Prefix or suffix for an input field (icon, text)
   *
   * @param position - Position ('left' | 'right')
   * @param variant - Style variant ('solid' | 'ghost')
   * @returns Wrapper to add content to an input field
   */
  type Position = 'left' | 'right';
  type Variant = 'solid' | 'ghost';

  type Props = {
    position?: Position;
    variant?: Variant;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  const {
    position = 'left',
    variant = 'solid',
    children,
    class: className = '',
    ...restProps
  }: Props = $props();

  const positionClasses = $derived({
    left: 'pr-3 border-r border-[--color-border-secondary] dark:border-[--color-border-primary]',
    right: 'pl-3 border-l border-[--color-border-secondary] dark:border-[--color-border-primary]'
  }[position]);

  const variantClasses = $derived({
    solid: 'bg-[--color-bg-secondary] text-[--color-text-secondary] dark:bg-[--color-bg-tertiary] dark:text-[--color-text-tertiary]',
    ghost: 'bg-transparent text-[--color-text-secondary] dark:text-[--color-text-tertiary]'
  }[variant]);

  const classes = $derived(`flex items-center justify-center min-w-[2rem] text-sm ${positionClasses} ${variantClasses} ${className}`);
</script>

<div class={classes} {...restProps}>
  {@render children?.()}
</div>