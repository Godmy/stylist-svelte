<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { IIconWrapperProps, IconWrapperSize, IconVariant, IconShape, IconColor } from './types';
  import { IconWrapperStyleManager } from './styles';
  import { ICON_WRAPPER_DEFAULT_SIZE, ICON_WRAPPER_DEFAULT_VARIANT, ICON_WRAPPER_DEFAULT_SHAPE, ICON_WRAPPER_DEFAULT_COLOR } from './constant';

  /**
   * IconWrapper component - A wrapper for icons with customizable appearance
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles icon wrapper rendering and state
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other wrapper components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param size - Size of the wrapper ('sm' | 'md' | 'lg')
   * @param variant - Visual style of the wrapper ('solid' | 'outline' | 'ghost')
   * @param shape - Shape of the wrapper ('circle' | 'square' | 'rounded')
   * @param color - Color scheme of the wrapper ('primary' | 'secondary' | 'success' | 'warning' | 'danger')
   * @param content - Snippet content to render inside the wrapper
   * @param class - Additional CSS classes
   * @returns An accessible, styled icon wrapper element
   */
  type Props = IIconWrapperProps & HTMLAttributes<HTMLDivElement>;

  let {
    size = ICON_WRAPPER_DEFAULT_SIZE,
    variant = ICON_WRAPPER_DEFAULT_VARIANT,
    shape = ICON_WRAPPER_DEFAULT_SHAPE,
    color = ICON_WRAPPER_DEFAULT_COLOR,
    content,
    class: className = '',
    ...restProps
  }: Props = $props();

  let classes = $derived(IconWrapperStyleManager.getAllClasses(
    size,
    shape,
    variant,
    color,
    className
  ));
</script>

<div class={classes} {...restProps}>
  {#if content}
    {@render content()}
  {/if}
</div>