<script lang="ts">
  import type { Snippet } from 'svelte';

  import type { InlineCodeProps } from './types';
  import { DEFAULT_INLINE_CODE_VARIANT } from './constant';
  import { InlineCodeStyleManager } from './styles';

  /**
   * InlineCode component - Displays inline code snippets.
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state.
   * - Open/Closed: Extendable through properties but closed for modification.
   * - Liskov Substitution: Can be substituted with other similar components.
   * - Interface Segregation: Small focused interface.
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions.
   *
   * @param variant - Variant style.
   * @param children - Content of the inline code.
   * @param class - Additional CSS classes.
   * @returns An accessible, styled inline code element.
   */
  let {
    variant = DEFAULT_INLINE_CODE_VARIANT,
    children,
    class: className = '',
    ...restProps
  }: InlineCodeProps = $props();

  let classes = $derived(
    InlineCodeStyleManager.getInlineCodeClasses(variant, className)
  );
</script>

{#if children}
  <code {...restProps} class={classes}>
    {@render children()}
  </code>
{/if}