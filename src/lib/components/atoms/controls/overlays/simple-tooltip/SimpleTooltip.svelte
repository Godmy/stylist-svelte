<script lang="ts">
  import type { ISimpleTooltipProps } from './types';

  /**
   * SimpleTooltip component - A tooltip overlay that displays additional information
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles tooltip rendering
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other overlay components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param position - Position of the tooltip relative to its anchor ('top' | 'right' | 'bottom' | 'left')
   * @param visible - Whether the tooltip is visible
   * @param content - The content to display in the tooltip
   * @param class - Additional CSS classes
   * @returns A tooltip overlay that displays additional information
   */
  type Props = ISimpleTooltipProps;

  let {
    position = 'top',
    visible = false,
    content = '',
    class: className = '',
    ...restProps
  }: Props = $props();

  // Define position classes using utility classes
  let positionClasses = $derived(() => {
    switch(position) {
      case 'top': return 'bottom-full left-1/2 -translate-x-1/2 mb-2';
      case 'right': return 'left-full top-1/2 -translate-y-1/2 ml-2';
      case 'bottom': return 'top-full left-1/2 -translate-x-1/2 mt-2';
      case 'left': return 'right-full top-1/2 -translate-y-1/2 mr-2';
      default: return 'bottom-full left-1/2 -translate-x-1/2 mb-2';
    }
  });

  // Define arrow classes using utility classes
  let arrowClasses = $derived(() => {
    switch(position) {
      case 'top': return 'absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[--color-tooltip-bg]';
      case 'right': return 'absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-[--color-tooltip-bg]';
      case 'bottom': return 'absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-[--color-tooltip-bg]';
      case 'left': return 'absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-[--color-tooltip-bg]';
      default: return 'absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[--color-tooltip-bg]';
    }
  });

  // Combine all classes
  let baseClasses = $derived(`absolute z-50 px-3 py-2 text-sm font-medium rounded-lg shadow-sm bg-[--color-tooltip-bg] text-[--color-text-inverse] ${positionClasses()} ${className}`);
</script>

{#if visible}
  <div class={baseClasses} role="tooltip" {...restProps}>
    {content}
    <div class={arrowClasses()}></div>
  </div>
{/if}
