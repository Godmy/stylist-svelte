<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { Loader2 } from 'lucide-svelte';

  type Snippet = any; // Placeholder for now

  /**
   * Icon Button component - A button that primarily displays an icon
   *
   * @param variant - Visual style of the button ('primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link')
   * @param size - Size of the button ('sm' | 'md' | 'lg')
   * @param disabled - Whether the button is disabled
   * @param loading - Whether the button is in a loading state
   * @param icon - The icon to display in the button
   * @param ariaLabel - Accessible label for the button
   * @returns An accessible, styled icon button element
   */
  type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link';
  type ButtonSize = 'sm' | 'md' | 'lg';

  type Props = {
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    loading?: boolean;
    icon?: Snippet;
    ariaLabel: string; // Required for accessibility
  } & HTMLButtonAttributes;

  let {
    variant = 'ghost',
    size = 'md',
    disabled = false,
    loading = false,
    icon,
    ariaLabel,
    class: className = '',
    ...restProps
  }: Props = $props();

  let variantClasses = $derived({
    primary: 'bg-[--color-primary-600] hover:bg-[--color-primary-700] text-[--color-text-inverse]',
    secondary: 'bg-[--color-secondary-100] hover:bg-[--color-secondary-200] text-[--color-text-primary] dark:bg-[--color-secondary-700] dark:hover:bg-[--color-secondary-600] dark:text-[--color-text-inverse]',
    success: 'bg-[--color-success-600] hover:bg-[--color-success-700] text-[--color-text-inverse]',
    warning: 'bg-[--color-warning-500] hover:bg-[--color-warning-600] text-[--color-text-inverse]',
    danger: 'bg-[--color-danger-600] hover:bg-[--color-danger-700] text-[--color-text-inverse]',
    ghost: 'bg-transparent hover:bg-[--color-secondary-100] text-[--color-text-primary] border border-[--color-border-primary] dark:hover:bg-[--color-secondary-700] dark:text-[--color-text-inverse] dark:border-[--color-border-primary]',
    link: 'bg-transparent hover:bg-[--color-secondary-100] text-[--color-primary-600] underline dark:hover:bg-[--color-secondary-700] dark:text-[--color-primary-400]'
  }[variant]);

  let sizeClasses = $derived({
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-3'
  }[size]);

  let disabledClass = $derived((disabled || loading)
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : '');

  let classes = $derived(`inline-flex items-center justify-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] focus:ring-offset-2 ${variantClasses} ${sizeClasses} ${disabledClass} ${className}`);
</script>

<button
  {...restProps}
  class={classes}
  aria-label={ariaLabel}
  aria-busy={loading}
  disabled={disabled || loading}
>
  {#if loading}
    <Loader2 class="animate-spin h-4 w-4" aria-hidden="true" />
  {:else if icon}
    {@render icon()}
  {/if}
</button>