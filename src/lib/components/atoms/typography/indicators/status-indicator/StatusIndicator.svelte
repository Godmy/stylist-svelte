<script lang="ts">
  import type { Snippet } from 'svelte';

  import type { StatusIndicatorProps, IndicatorStatus } from './types';
  import {
    DEFAULT_STATUS_INDICATOR_STATUS,
    STATUS_TEXT_MAP
  } from './constant';
  import { StatusIndicatorStyleManager } from './styles';

  /**
   * StatusIndicator component - Displays a status indicator (e.g., online, offline) with an optional label.
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state.
   * - Open/Closed: Extendable through properties but closed for modification.
   * - Liskov Substitution: Can be substituted with other similar components.
   * - Interface Segregation: Small focused interface.
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions.
   *
   * @param status - The status of the indicator ('online' | 'offline' | 'away' | 'busy').
   * @param label - A textual label for the indicator. If not provided, a default based on status will be used.
   * @param children - Slot content (if other elements need to be inserted).
   * @param class - Additional CSS classes for the container.
   * @returns A styled status indicator element.
   */
  let {
    status = DEFAULT_STATUS_INDICATOR_STATUS,
    label,
    children,
    class: className = '',
    ...restProps
  }: StatusIndicatorProps = $props();

  let displayedLabel = $derived(label || STATUS_TEXT_MAP[status]);
  let containerClasses = $derived(StatusIndicatorStyleManager.getContainerClasses(className));
  let dotClasses = $derived(StatusIndicatorStyleManager.getDotClasses(status));
</script>

<span class={containerClasses} {...restProps}>
  <span class={dotClasses}></span>
  <span>{displayedLabel}</span>
</span>