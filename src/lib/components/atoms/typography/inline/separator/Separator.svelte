<script lang="ts">
  import type { SeparatorProps, SeparatorOrientation } from './types';
  import {
    DEFAULT_SEPARATOR_ORIENTATION,
    DEFAULT_SEPARATOR_DECORATIVE
  } from './constant';
  import { SeparatorStyleManager } from './styles';

  /**
   * Separator component - A visual divider for grouping or separating content.
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state.
   * - Open/Closed: Extendable through properties but closed for modification.
   * - Liskov Substitution: Can be substituted with other similar components.
   * - Interface Segregation: Small focused interface.
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions.
   *
   * @param orientation - Orientation of the separator ('horizontal' or 'vertical').
   * @param decorative - Indicates if the separator is decorative (uses a `div` instead of `hr`).
   * @param class - Additional CSS classes.
   * @returns A styled separator element.
   */
  const {
    orientation = DEFAULT_SEPARATOR_ORIENTATION,
    decorative = DEFAULT_SEPARATOR_DECORATIVE,
    class: className = ''
  }: SeparatorProps = $props();

  let classes = $derived(
    SeparatorStyleManager.getSeparatorClasses(orientation, className)
  );
</script>

{#if decorative}
  <div class={classes}></div>
{:else}
  <hr class={classes} />
{/if}