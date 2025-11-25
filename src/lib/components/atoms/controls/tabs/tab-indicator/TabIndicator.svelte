<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  import type { ITabIndicatorProps } from './types';
  import { TabIndicatorStyleManager } from './styles';

  /**
   * TabIndicator component - Visual marker that highlights the active tab
   *
   * Following SOLID principles:
   * - Single Responsibility: Only renders the indicator element
   * - Open/Closed: Extendable via props without modifying the component
   * - Liskov Substitution: Can replace other indicators with the same interface
   * - Interface Segregation: Minimal, focused inputs
   * - Dependency Inversion: Depends on a style manager abstraction
   *
   * @param left - CSS left offset for the indicator
   * @param width - CSS width for the indicator
   * @param color - Color token for the indicator
   * @param class - Additional CSS classes
   * @returns An animated bar that tracks tab selection
   */
  type Props = ITabIndicatorProps & HTMLAttributes<HTMLDivElement>;

  let {
    left = '0px',
    width = '0px',
    color = 'primary',
    class: className = '',
    ...restProps
  }: Props = $props();

  let indicatorClasses = $derived(TabIndicatorStyleManager.getClasses(color, className));
  let indicatorStyle = $derived(TabIndicatorStyleManager.getStyle(width, left));
</script>

<div
  class={indicatorClasses}
  style={indicatorStyle}
  role="presentation"
  aria-hidden="true"
  {...restProps}
></div>
