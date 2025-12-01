<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { Loader2 } from 'lucide-svelte';
  import type { Snippet } from 'svelte';

  import type { IButtonProps } from './types';
  import { ButtonStyleManager } from './styles';
  import './Button.css';

  /**
   * Button component - A flexible button component with various styles and states
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other button components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param variant - Visual style of the button ('primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link')
   * @param size - Size of the button ('sm' | 'md' | 'lg')
   * @param disabled - Whether the button is disabled
   * @param loading - Whether the button is in a loading state
   * @param block - Whether the button should span the full width of its container
   * @param content - Snippet content for the button (if not using default text content)
   * @returns An accessible, styled button element
   */
  let {
    variant = 'primary',
    size = 'md',
    ariaLabel = '',
    loadingLabel = 'Loading...',
    disabled = false,
    loading = false,
    block = false,
    class: className = '',
    type = 'button',
    children,
    ...restProps
  }: IButtonProps & HTMLButtonAttributes = $props();

  const computedAriaLabel = $derived(
    ariaLabel ||
      (typeof (restProps as Record<string, unknown>)['aria-label'] === 'string'
        ? (restProps as Record<string, string>)['aria-label']
        : '')
  );

  let classes = $derived(ButtonStyleManager.getAllClasses(
    variant,
    size,
    disabled,
    loading,
    block,
    className
  ));
</script>

<button
  {...restProps}
  type={type}
  class={classes}
  aria-busy={loading}
  aria-live={loading ? 'polite' : undefined}
  aria-label={computedAriaLabel || undefined}
  disabled={disabled || loading}
>
  {#if loading}
    <Loader2 class="animate-spin button-loader" aria-hidden="true" />
    <span class="sr-only">{loadingLabel}</span>
  {/if}

  {#if children}
    {@render children()}
  {:else if loading}
    Loading...
  {/if}
</button>
