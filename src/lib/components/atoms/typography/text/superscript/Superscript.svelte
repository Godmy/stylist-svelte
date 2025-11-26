<script lang="ts">
  import type { Snippet } from 'svelte';

  import type { SuperscriptProps } from './types';
  import { SuperscriptStyleManager } from './styles';

  /**
   * Superscript component - Renders superscript text.
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state.
   * - Open/Closed: Extendable through properties but closed for modification.
   * - Liskov Substitution: Can be substituted with other similar components.
   * - Interface Segregation: Small focused interface.
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions.
   *
   * @param children - The content of the superscript text.
   * @param class - Additional CSS classes.
   * @returns An accessible, styled superscript text element.
   */
  let {
    children,
    class: className = '',
    ...restProps
  }: SuperscriptProps = $props();

  let classes = $derived(
    SuperscriptStyleManager.getSuperscriptClasses(className)
  );
</script>

<sup class={classes} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</sup>