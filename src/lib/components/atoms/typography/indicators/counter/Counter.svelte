<script lang="ts">
  import type { CounterProps } from './types';
  import {
    DEFAULT_COUNTER_COUNT,
    DEFAULT_COUNTER_MAX,
    DEFAULT_COUNTER_VARIANT,
    DEFAULT_COUNTER_SIZE
  } from './constant';
  import { CounterStyleManager } from './styles';

  /**
   * Counter component - Displays a numerical counter, often used for notifications or counts.
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state.
   * - Open/Closed: Extendable through properties but closed for modification.
   * - Liskov Substitution: Can be substituted with other similar components.
   * - Interface Segregation: Small focused interface.
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions.
   *
   * @param count - The numerical value of the counter.
   * @param max - Maximum number to display; if `count` exceeds this, `max+` is shown.
   * @param variant - Color scheme variant of the counter.
   * @param size - Size of the counter.
   * @param class - Additional CSS classes.
   * @returns A styled counter element.
   */
  const {
    count = DEFAULT_COUNTER_COUNT,
    max = DEFAULT_COUNTER_MAX,
    variant = DEFAULT_COUNTER_VARIANT,
    size = DEFAULT_COUNTER_SIZE,
    class: className = ''
  }: CounterProps = $props();

  const displayCount = $derived(count > max ? `${max}+` : count);

  let classes = $derived(
    CounterStyleManager.getCounterClasses(variant, size, className)
  );
</script>

<span class={classes}>
  {displayCount}
</span>