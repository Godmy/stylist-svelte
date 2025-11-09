<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { Loader2 } from 'lucide-svelte';

  import type { Snippet } from 'svelte';

  /**
   * Button component - A flexible button component with various styles and states
   * 
   * @param variant - Visual style of the button ('primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link')
   * @param size - Size of the button ('sm' | 'md' | 'lg')
   * @param disabled - Whether the button is disabled
   * @param loading - Whether the button is in a loading state
   * @param block - Whether the button should span the full width of its container
   * @param content - Snippet content for the button (if not using default text content)
   * @returns An accessible, styled button element
   */
  type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link';
  type ButtonSize = 'sm' | 'md' | 'lg';

  type Props = {
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    loading?: boolean;
    block?: boolean;
    children?: Snippet;
    onclick?: (event: MouseEvent) => void;
  } & HTMLButtonAttributes;

  let {
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    block = false,
    class: className = '',
    children,
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
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }[size]);

  let disabledClass = $derived((disabled || loading)
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : '');

  let blockClass = $derived(block ? 'w-full' : '');

  let classes = $derived(`inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] focus:ring-offset-2 ${variantClasses} ${sizeClasses} ${disabledClass} ${blockClass} ${className}`);
</script>

<button 
  {...restProps} 
  class={classes}
  aria-busy={loading}
  disabled={disabled || loading}
>
  {#if loading}
    <Loader2 class="animate-spin -ml-1 mr-2 h-4 w-4" aria-hidden="true" />
  {/if}

  {#if children}
    {@render children()}
  {:else if loading}
    Loading...
  {/if}
</button>
