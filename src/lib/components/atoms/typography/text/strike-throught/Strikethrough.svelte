<script lang="ts">
  import type { Snippet } from 'svelte';

  import type { StrikethroughProps } from './types';
  import { DEFAULT_STRIKETHROUGH_ARIA_HIDDEN } from './constant';
  import { StrikethroughStyleManager } from './styles';

  /**
   * Strikethrough component - Renders text with a strikethrough effect.
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state.
   * - Open/Closed: Extendable through properties but closed for modification.
   * - Liskov Substitution: Can be substituted with other similar components.
   * - Interface Segregation: Small focused interface.
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions.
   *
   * @param children - The content to display with strikethrough.
   * @param class - Additional CSS classes.
   * @param ariaHidden - Indicates that the element and all of its descendants are not visible or perceivable to any user.
   * @returns An accessible, styled strikethrough text element.
   */
  let {
    children,
    class: className = '',
    ariaHidden = DEFAULT_STRIKETHROUGH_ARIA_HIDDEN,
    ...restProps
  }: StrikethroughProps = $props();

  let classes = $derived(
    StrikethroughStyleManager.getStrikethroughClasses(className)
  );
</script>

<s class={classes} aria-hidden={ariaHidden} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</s>
