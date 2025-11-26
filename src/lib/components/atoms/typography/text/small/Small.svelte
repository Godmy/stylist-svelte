<script lang="ts">
  import type { Snippet } from 'svelte';

  import type { SmallProps } from './types';
  import { SmallStyleManager } from './styles';

  /**
   * Small component - Renders text that represents side-comments and small print.
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state.
   * - Open/Closed: Extendable through properties but closed for modification.
   * - Liskov Substitution: Can be substituted with other similar components.
   * - Interface Segregation: Small focused interface.
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions.
   *
   * @param children - The content of the small text.
   * @param class - Additional CSS classes.
   * @returns An accessible, styled small text element.
   */
  let {
    children,
    class: className = '',
    ...restProps
  }: SmallProps = $props();

  let classes = $derived(
    SmallStyleManager.getSmallClasses(className)
  );
</script>

<small class={classes} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</small>
