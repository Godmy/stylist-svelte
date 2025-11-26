<script lang="ts">
  import type { Snippet } from 'svelte';

  import type { ParagraphProps } from './types';
  import {
    DEFAULT_PARAGRAPH_SIZE,
    DEFAULT_PARAGRAPH_MUTED
  } from './constant';
  import { ParagraphStyleManager } from './styles';

  /**
   * Paragraph component - Renders a block of text with consistent styling.
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state.
   * - Open/Closed: Extendable through properties but closed for modification.
   * - Liskov Substitution: Can be substituted with other similar components.
   * - Interface Segregation: Small focused interface.
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions.
   *
   * @param size - Size of the paragraph text.
   * @param muted - If true, the paragraph text will be muted.
   * @param children - The content of the paragraph.
   * @param class - Additional CSS classes.
   * @returns A styled paragraph element.
   */
  let {
    size = DEFAULT_PARAGRAPH_SIZE,
    muted = DEFAULT_PARAGRAPH_MUTED,
    children,
    class: className = '',
    ...restProps
  }: ParagraphProps = $props();

  let classes = $derived(
    ParagraphStyleManager.getParagraphClasses(size, muted, className)
  );
</script>

<p class={classes} {...restProps}>
  {@render children?.()}
</p>