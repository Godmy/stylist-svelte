<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { X, Loader2 } from 'lucide-svelte';
  import type { ICloseButtonProps } from './types';
  import {
    getCloseButtonCombinedClasses,
    getLoaderClasses,
    getIconClasses
  } from './styles';

  /**
   * CloseButton component - A standardized close button (X icon)
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles close button rendering and state
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other button components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param size - Size of the button ('sm' | 'md' | 'lg')
   * @param variant - Visual style of the button ('solid' | 'outline' | 'ghost')
   * @param disabled - Whether the button is disabled
   * @param loading - Whether the button is in a loading state
   * @param class - Additional CSS classes
   * @returns A standardized close button with X icon
   */
  let {
    size = 'md',
    variant = 'ghost',
    disabled = false,
    loading = false,
    class: className = '',
    ...restProps
  }: ICloseButtonProps = $props();

  let buttonClasses = $derived(getCloseButtonCombinedClasses(size, variant, disabled, loading, className));
  let loaderClasses = $derived(getLoaderClasses(size));
  let iconClasses = $derived(getIconClasses());
</script>

<button
  {...restProps}
  class={buttonClasses}
  aria-label="Close"
  aria-busy={loading}
  disabled={disabled || loading}
>
  {#if loading}
    <Loader2 class={loaderClasses} aria-hidden="true" />
  {:else}
    <X class={iconClasses} />
  {/if}
</button>