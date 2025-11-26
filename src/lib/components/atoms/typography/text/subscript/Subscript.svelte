<script lang="ts">
  import type { Snippet } from 'svelte';

  import type { SubscriptProps } from './types';
  import { SubscriptStyleManager } from './styles';

  /**
   * Subscript component - Renders subscript text.
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state.
   * - Open/Closed: Extendable through properties but closed for modification.
   * - Liskov Substitution: Can be substituted with other similar components.
   * - Interface Segregation: Small focused interface.
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions.
   *
   * @param children - The content of the subscript text.
   * @param class - Additional CSS classes.
   * @returns An accessible, styled subscript text element.
   */
  let {
    children,
    class: className = '',
    ...restProps
  }: SubscriptProps = $props();

  let classes = $derived(
    SubscriptStyleManager.getSubscriptClasses(className)
  );
</script>

<sub class={classes} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</sub>
