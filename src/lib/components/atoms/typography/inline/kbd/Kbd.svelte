<script lang="ts">
  import type { Snippet } from 'svelte';

  import type { KbdProps } from './types';
  import { KbdStyleManager } from './styles';

  /**
   * Kbd component - Displays keyboard input.
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state.
   * - Open/Closed: Extendable through properties but closed for modification.
   * - Liskov Substitution: Can be substituted with other similar components.
   * - Interface Segregation: Small focused interface.
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions.
   *
   * @param children - The content of the keyboard input.
   * @param class - Additional CSS classes.
   * @returns An accessible, styled keyboard input element.
   */
  let {
    children,
    class: className = '',
    ...restProps
  }: KbdProps = $props();

  let classes = $derived(
    KbdStyleManager.getKbdClasses(className)
  );
</script>

{#if children}
  <kbd class={classes} {...restProps}>
    {@render children()}
  </kbd>
{/if}
