<script lang="ts">
  import type { Snippet } from 'svelte';

  import type { LinkProps } from './types';
  import {
    DEFAULT_LINK_VARIANT,
    DEFAULT_LINK_SIZE,
    DEFAULT_LINK_DISABLED,
    DEFAULT_LINK_UNDERLINE
  } from './constant';
  import { LinkStyleManager } from './styles';

  /**
   * Link component - A styled hyperlink with various style options.
   * If `children` is provided, it will be rendered; otherwise, `text` will be used.
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state.
   * - Open/Closed: Extendable through properties but closed for modification.
   * - Liskov Substitution: Can be substituted with other similar components.
   * - Interface Segregation: Small focused interface.
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions.
   *
   * @param variant - Style variant of the link.
   * @param size - Size of the link.
   * @param disabled - Disabled state of the link.
   * @param underline - Whether to underline the link.
   * @param href - URL for the link.
   * @param target - Target window/frame for the link.
   * @param text - Text content of the link.
   * @param children - Slot content for the link (alternative to `text`).
   * @param class - Additional CSS classes.
   * @returns An accessible, styled link element.
   */
  let {
    variant = DEFAULT_LINK_VARIANT,
    size = DEFAULT_LINK_SIZE,
    disabled = DEFAULT_LINK_DISABLED,
    underline = DEFAULT_LINK_UNDERLINE,
    href,
    target,
    text,
    children,
    class: className = '',
    ...restProps
  }: LinkProps = $props();

  let classes = $derived(
    LinkStyleManager.getLinkClasses(variant, size, disabled, underline, className)
  );
</script>

<a href={href} class={classes} target={target} {...restProps}>
  {#if children}
    {@render children()}
  {:else if text}
    {text}
  {/if}
</a>