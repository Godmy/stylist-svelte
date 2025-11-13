<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { Loader2 } from 'lucide-svelte';
  import type { Snippet } from 'svelte';

  import type { IButtonProps } from './types';
  import { ButtonStyleManager } from './styles';

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
  type Props = IButtonProps & HTMLButtonAttributes;

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