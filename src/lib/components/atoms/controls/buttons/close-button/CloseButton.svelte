<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { X } from 'lucide-svelte';

  import type { ICloseButtonProps } from './types';
  import { CloseButtonStyleManager } from './styles';

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
   * @param class - Additional CSS classes
   * @returns A standardized close button with X icon
   */
  type Props = ICloseButtonProps;

  let {
    size = 'md',
    variant = 'ghost',
    class: className = '',
    ...restProps
  }: Props = $props();

  let classes = $derived(CloseButtonStyleManager.getAllClasses(
    size,
    variant,
    className
  ));
</script>

<button
  {...restProps}
  class={classes}
  aria-label="Close"
>
  <X class="w-full h-full" />
</button>