<script lang="ts">
  import type { DotProps } from './types';
  import {
    DEFAULT_DOT_COLOR,
    DEFAULT_DOT_SIZE
  } from './constant';
  import { DotStyleManager } from './styles';

  /**
   * Dot component - Displays a small colored dot, often used as an indicator.
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state.
   * - Open/Closed: Extendable through properties but closed for modification.
   * - Liskov Substitution: Can be substituted with other similar components.
   * - Interface Segregation: Small focused interface.
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions.
   *
   * @param color - Color of the dot.
   * @param size - Size of the dot.
   * @param class - Additional CSS classes.
   * @returns A styled dot element.
   */
  const {
    color = DEFAULT_DOT_COLOR,
    size = DEFAULT_DOT_SIZE,
    class: className = ''
  }: DotProps = $props();

  let classes = $derived(
    DotStyleManager.getDotClasses(color, size, className)
  );
</script>

<span class={classes}></span>