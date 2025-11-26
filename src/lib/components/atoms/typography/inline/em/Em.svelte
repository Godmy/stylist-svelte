<script lang="ts">
  import type { Snippet } from 'svelte';

  import type { EmProps } from './types';
  import { EmStyleManager } from './styles';

  /**
   * Em component - Represents emphasized text.
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state.
   * - Open/Closed: Extendable through properties but closed for modification.
   * - Liskov Substitution: Can be substituted with other similar components.
   * - Interface Segregation: Small focused interface.
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions.
   *
   * @param children - The content of the emphasized text.
   * @param class - Additional CSS classes.
   * @returns An accessible, styled emphasized text element.
   */
  let {
    children,
    class: className = '',
    ...restProps
  }: EmProps = $props();

  let classes: string = $derived(
    EmStyleManager.getEmClasses(className)
  );
</script>

<em class={classes} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</em>