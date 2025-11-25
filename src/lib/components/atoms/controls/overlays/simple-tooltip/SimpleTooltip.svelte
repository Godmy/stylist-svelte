<script lang="ts">
  import type { ISimpleTooltipProps } from './types';
  import { SimpleTooltipStyleManager } from './styles';
  import './SimpleTooltip.css';

  /**
   * SimpleTooltip component - A tooltip overlay that displays additional information
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles tooltip rendering and state
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

  let internalVisible = $state(visible);

  // Handle visibility prop changes
  $effect(() => {
    internalVisible = visible;
  });

  let positionClasses = $derived(SimpleTooltipStyleManager.getPositionClasses(position));
  let arrowClasses = $derived(SimpleTooltipStyleManager.getArrowClasses(position));
  let baseClasses = $derived(SimpleTooltipStyleManager.getBaseClasses(`${positionClasses} ${className}`));
</script>

{#if internalVisible}
  <div class={baseClasses} role="tooltip" {...restProps}>
    {content}
    <div class={arrowClasses}></div>
  </div>
{/if}
