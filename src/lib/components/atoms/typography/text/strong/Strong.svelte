<script lang="ts">
  import type { Snippet } from 'svelte';

  import type { StrongProps } from './types';
  import { StrongStyleManager } from './styles';

  /**
   * Strong component - Renders text that represents strong importance.
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state.
   * - Open/Closed: Extendable through properties but closed for modification.
   * - Liskov Substitution: Can be substituted with other similar components.
   * - Interface Segregation: Small focused interface.
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions.
   *
   * @param children - The content of the strong text.
   * @param class - Additional CSS classes.
   * @returns An accessible, styled strong text element.
   */
  let {
    children,
    class: className = '',
    ...restProps
  }: StrongProps = $props();

  let classes = $derived(
    StrongStyleManager.getStrongClasses(className)
  );
</script>

<strong class={classes} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</strong>
