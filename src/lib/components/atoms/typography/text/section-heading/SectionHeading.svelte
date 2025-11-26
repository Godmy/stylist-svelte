<script lang="ts">
  import type { Snippet } from 'svelte';

  import type { SectionHeadingProps, SectionHeadingLevel } from './types';
  import {
    DEFAULT_SECTION_HEADING_LEVEL,
    DEFAULT_SECTION_HEADING_SIZE
  } from './constant';
  import { SectionHeadingStyleManager } from './styles';

  /**
   * SectionHeading component - Renders a semantic HTML heading element for sections with consistent styling.
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state.
   * - Open/Closed: Extendable through properties but closed for modification.
   * - Liskov Substitution: Can be substituted with other similar components.
   * - Interface Segregation: Small focused interface.
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions.
   *
   * @param level - Semantic level of the heading (1-6) for the HTML tag.
   * @param size - Visual size of the heading ('sm' | 'md' | 'lg' | 'xl').
   * @param children - The content of the section heading.
   * @param class - Additional CSS classes.
   * @returns An accessible, styled section heading element.
   */
  let {
    level = DEFAULT_SECTION_HEADING_LEVEL,
    size = DEFAULT_SECTION_HEADING_SIZE,
    children,
    class: className = '',
    ...restProps
  }: SectionHeadingProps = $props();

  let Tag = $derived(`h${level}` as const);

  let classes = $derived(
    SectionHeadingStyleManager.getSectionHeadingClasses(size, className)
  );
</script>

<svelte:element this={Tag} class={classes} {...restProps}>
  {@render children?.()}
</svelte:element>