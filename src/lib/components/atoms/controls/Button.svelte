<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { Loader2 } from 'lucide-svelte';

  type Snippet = any; // Placeholder for now

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
    content?: Snippet; // Add content prop
  } & HTMLButtonAttributes;

  let {
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    block = false,
    class: className = '',
    content, // Destructure content
    ...restProps
  }: Props = $props();

  let variantClasses = $derived({
    primary: 'bg-[--stylist-button-primary-bg] hover:bg-[--stylist-button-primary-hover-bg] text-[--stylist-button-primary-text]',
    secondary: 'bg-[--stylist-button-secondary-bg] hover:bg-[--stylist-button-secondary-hover-bg] text-[--stylist-button-secondary-text]',
    success: 'bg-[--stylist-button-success-bg] hover:bg-[--stylist-button-success-hover-bg] text-[--stylist-button-success-text]',
    warning: 'bg-[--stylist-button-warning-bg] hover:bg-[--stylist-button-warning-hover-bg] text-[--stylist-button-warning-text]',
    danger: 'bg-[--stylist-button-danger-bg] hover:bg-[--stylist-button-danger-hover-bg] text-[--stylist-button-danger-text]',
    ghost: 'bg-[--stylist-button-ghost-bg] hover:bg-[--stylist-button-ghost-hover-bg] text-[--stylist-button-ghost-text] border border-[--stylist-button-ghost-border]',
    link: 'bg-[--stylist-button-link-bg] hover:bg-[--stylist-button-link-hover-bg] text-[--stylist-button-link-text] underline'
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

  let classes = $derived(`inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[--stylist-button-focus-ring] focus:ring-offset-2 ${variantClasses} ${sizeClasses} ${disabledClass} ${blockClass} ${className}`);
</script>

<button {...restProps} class={classes}>
  {#if loading}
    <Loader2 class="animate-spin -ml-1 mr-2 h-4 w-4" />
  {/if}

  {#if content}
    {@render content()}
  {:else if loading}
    Loading...
  {/if}
</button>
