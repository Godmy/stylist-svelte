<script lang="ts">
  import type { Snippet } from 'svelte';

  import type { HeadingProps, HeadingSize, HeadingLevel } from './types';
  import { DEFAULT_HEADING_SIZE } from './constant';
  import { HeadingStyleManager } from './styles';

  /**
   * Heading component - Renders semantic HTML heading elements (h1-h6) with consistent styling.
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state.
   * - Open/Closed: Extendable through properties but closed for modification.
   * - Liskov Substitution: Can be substituted with other similar components.
   * - Interface Segregation: Small focused interface.
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions.
   *
   * @param children - The content of the heading.
   * @param size - Visual size of the heading (h1-h6), used for styling if `level` is not specified.
   * @param level - Semantic level of the heading (1-6), used for the HTML tag.
   * @param class - Additional CSS classes.
   * @returns An accessible, styled heading element.
   */
  let {
    children,
    size = DEFAULT_HEADING_SIZE,
    level,
    class: className = '',
    ...restProps
  }: HeadingProps = $props();

  const headingTag = $derived(HeadingStyleManager.getHeadingTag(size, level));

  let classes = $derived(
    HeadingStyleManager.getHeadingClasses(size, level, className)
  );
</script>

<svelte:element this={headingTag} class={classes} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</svelte:element>