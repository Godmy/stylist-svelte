<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  import type { IInputAddonProps } from './types';
  import { InputAddonStyleManager } from './styles';

  /**
   * InputAddon component - Prefix or suffix for an input field (icon, text)
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles input addon rendering
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other addon components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param position - Position ('left' | 'right')
   * @param variant - Style variant ('solid' | 'ghost')
   * @param children - Content to display in the addon
   * @param class - Additional CSS classes
   * @returns Wrapper to add content to an input field
   */
  type Props = IInputAddonProps;

  let {
    position = 'left',
    variant = 'solid',
    children,
    class: className = '',
    ...restProps
  }: Props = $props();

  let classes = $derived(InputAddonStyleManager.getAllClasses(
    position,
    variant,
    className
  ));
</script>

<div class={classes} {...restProps}>
  {@render children?.()}
</div>