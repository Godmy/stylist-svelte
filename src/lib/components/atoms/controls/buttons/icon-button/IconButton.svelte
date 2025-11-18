<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { Loader2 } from 'lucide-svelte';
  import type { Snippet } from 'svelte';

  import type { IIconButtonProps } from './types';
  import { IconButtonStyleManager } from './styles';

  /**
   * IconButton component - A button that primarily displays an icon
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles icon button rendering and state
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other button components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param variant - Visual style of the button ('primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link')
   * @param size - Size of the button ('sm' | 'md' | 'lg')
   * @param disabled - Whether the button is disabled
   * @param loading - Whether the button is in a loading state
   * @param icon - The icon to display in the button
   * @param ariaLabel - Accessible label for the button
   * @param class - Additional CSS classes
   * @returns An accessible, styled icon button element
   */
  type Props = IIconButtonProps;

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

  let classes = $derived(IconButtonStyleManager.getAllClasses(
    variant,
    size,
    disabled,
    loading,
    className
  ));
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