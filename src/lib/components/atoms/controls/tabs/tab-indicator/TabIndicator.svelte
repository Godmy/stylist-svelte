<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  import type { ITabIndicatorProps } from './types';

  /**
   * TabIndicator component - Visual marker that highlights the active tab
   *
   * Following SOLID principles:
   * - Single Responsibility: Only renders the indicator element
   * - Open/Closed: Extendable via props without modifying the component
   * - Liskov Substitution: Can replace other indicators with the same interface
   * - Interface Segregation: Minimal, focused inputs
   * - Dependency Inversion: Depends on abstractions (types) rather than concretions
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

  // Define color classes
  let colorClass = $derived(() => {
    switch(color) {
      case 'primary': return 'bg-[--color-primary-500]';
      case 'secondary': return 'bg-[--color-secondary-500]';
      case 'success': return 'bg-[--color-success-500]';
      case 'warning': return 'bg-[--color-warning-500]';
      case 'danger': return 'bg-[--color-danger-500]';
      default: return 'bg-[--color-primary-500]';
    }
  });

  let indicatorClasses = $derived(`h-0.5 ${colorClass} transition-all duration-200 ${className}`);
  let indicatorStyle = $derived(`width: ${width}; left: ${left};`);
</script>

<div
  class={indicatorClasses}
  style={indicatorStyle}
  role="presentation"
  aria-hidden="true"
  {...restProps}
></div>
