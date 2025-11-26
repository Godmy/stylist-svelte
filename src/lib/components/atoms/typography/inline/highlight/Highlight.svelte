<script lang="ts">
  import type { Snippet } from 'svelte';

  import type { HighlightProps } from './types';
  import { HighlightStyleManager } from './styles';

  /**
   * Highlight component - Renders text with a highlight effect.
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state.
   * - Open/Closed: Extendable through properties but closed for modification.
   * - Liskov Substitution: Can be substituted with other similar components.
   * - Interface Segregation: Small focused interface.
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions.
   *
   * @param children - The content to highlight.
   * @param class - Additional CSS classes.
   * @returns A styled highlighted text element.
   */
  let {
    children,
    class: className = '',
    ...restProps
  }: HighlightProps = $props();

  let classes: string = $derived(
    HighlightStyleManager.getHighlightClasses(className)
  );
</script>

<mark class={classes} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</mark>