<script lang="ts">
  import type { Snippet } from 'svelte';

  import type { CountBadgeProps } from './types';
  import {
    DEFAULT_COUNT_BADGE_COUNT,
    DEFAULT_COUNT_BADGE_MAX,
    DEFAULT_COUNT_BADGE_SHOW_ZERO
  } from './constant';
  import { CountBadgeStyleManager } from './styles';

  /**
   * CountBadge component - Displays a numerical badge, often used for notifications or counts.
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state.
   * - Open/Closed: Extendable through properties but closed for modification.
   * - Liskov Substitution: Can be substituted with other similar components.
   * - Interface Segregation: Small focused interface.
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions.
   *
   * @param count - The numerical value to display.
   * @param max - Maximum number to display; if `count` exceeds this, `max+` is shown.
   * @param showZero - Whether to show the badge if `count` is zero.
   * @param children - Slot content (if other elements need to be inserted).
   * @param class - Additional CSS classes.
   * @returns A styled count badge element.
   */
  let {
    count = DEFAULT_COUNT_BADGE_COUNT,
    max = DEFAULT_COUNT_BADGE_MAX,
    showZero = DEFAULT_COUNT_BADGE_SHOW_ZERO,
    children,
    class: className = '',
    ...restProps
  }: CountBadgeProps = $props();

  let displayValue = $derived(
    count > max ? `${max}+` : count.toString()
  );

  let classes = $derived(
    CountBadgeStyleManager.getCountBadgeClasses(className)
  );
</script>

{#if showZero || count > 0}
  <span class={classes} {...restProps}>
    {displayValue}
  </span>
{/if}