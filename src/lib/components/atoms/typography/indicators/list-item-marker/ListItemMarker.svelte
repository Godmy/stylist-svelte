<script lang="ts">
  import { Icon } from '$lib/components/atoms';
  import type { ListItemMarkerProps } from './types';
  import {
    DEFAULT_MARKER_TYPE,
    DEFAULT_MARKER_VALUE,
    DEFAULT_MARKER_COLOR,
    DEFAULT_MARKER_SIZE
  } from './constant';
  import { ListItemMarkerStyleManager } from './styles';

  /**
   * ListItemMarker component - Displays a marker for list items, supporting bullets, numbers, or icons.
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state.
   * - Open/Closed: Extendable through properties but closed for modification.
   * - Liskov Substitution: Can be substituted with other similar components.
   * - Interface Segregation: Small focused interface.
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions.
   *
   * @param type - Type of the list marker ('bullet' | 'number' | 'icon').
   * @param value - Value for the marker (e.g., number for ordered list or icon name).
   * @param color - Color of the marker.
   * @param size - Size of the marker.
   * @param class - Additional CSS classes.
   * @returns A styled list item marker element.
   */
  const {
    type = DEFAULT_MARKER_TYPE,
    value = DEFAULT_MARKER_VALUE,
    color = DEFAULT_MARKER_COLOR,
    size = DEFAULT_MARKER_SIZE,
    class: className = ''
  }: ListItemMarkerProps = $props();

  let markerClasses = $derived(
    ListItemMarkerStyleManager.getMarkerClasses(color, size, className)
  );
  let bulletClasses = $derived(
    ListItemMarkerStyleManager.getBulletClasses(size)
  );
</script>

<span class={markerClasses}>
  {#if type === 'bullet'}
    <span class={bulletClasses}></span>
  {:else if type === 'number'}
    {value}
  {:else if type === 'icon' && typeof value === 'string'}
    <Icon name={value} size={size} />
  {/if}
</span>