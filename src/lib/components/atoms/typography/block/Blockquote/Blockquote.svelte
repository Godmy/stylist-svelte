<script lang="ts">
  import type { HTMLBlockquoteAttributes } from 'svelte/elements';
  import type { IBlockquoteProps } from './types';
  import { BlockquoteStyleManager } from './styles';
  import { DEFAULT_WITH_BORDER, DEFAULT_WITH_BACKGROUND, FOOTER_PREFIX } from './constant';

  /**
   * Blockquote component - A styled blockquote element for quotations
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles blockquote rendering and styling
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other blockquote components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param children - Content of the blockquote
   * @param cite - Source URL for the quotation
   * @param withBorder - Whether to include border styling
   * @param withBackground - Whether to include background styling
   * @param class - Additional CSS classes
   * @returns An accessible, styled blockquote element
   */
  type Props = IBlockquoteProps & HTMLBlockquoteAttributes;

  let {
    cite = '',
    withBorder = DEFAULT_WITH_BORDER,
    withBackground = DEFAULT_WITH_BACKGROUND,
    class: className = '',
    children
  }: Props = $props();

  let blockquoteClasses = $derived(
    BlockquoteStyleManager.getBlockquoteClasses(withBorder, withBackground, className)
  );
  let footerClasses = $derived(BlockquoteStyleManager.getFooterClasses());
</script>

<blockquote class={blockquoteClasses} cite={cite}>
  {@render children()}
  {#if cite}
    <footer class={footerClasses}>
      {FOOTER_PREFIX}{cite}
    </footer>
  {/if}
</blockquote>