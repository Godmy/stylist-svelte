<script lang="ts">
  import type { Snippet } from 'svelte';

  import type { TextProps, TextType } from './types';
  import {
    DEFAULT_TEXT_AS,
    DEFAULT_TEXT_SIZE,
    DEFAULT_TEXT_MUTED,
    DEFAULT_TEXT_BOLD,
    DEFAULT_TEXT_ITALIC
  } from './constant';
  import { TextStyleManager } from './styles';

  /**
   * Text component - A flexible component for rendering various text elements (p, span, div, label) with styling options.
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state.
   * - Open/Closed: Extendable through properties but closed for modification.
   * - Liskov Substitution: Can be substituted with other similar components.
   * - Interface Segregation: Small focused interface.
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions.
   *
   * @param children - The content of the text element.
   * @param as - HTML element to render the text as ('p', 'span', 'div', 'label').
   * @param size - Size of the text.
   * @param class - Additional CSS classes.
   * @param muted - If true, the text will be muted.
   * @param bold - If true, the text will be bold.
   * @param italic - If true, the text will be italic.
   * @returns An accessible, styled text element.
   */
  const {
    children,
    as = DEFAULT_TEXT_AS,
    size = DEFAULT_TEXT_SIZE,
    class: className = '',
    muted = DEFAULT_TEXT_MUTED,
    bold = DEFAULT_TEXT_BOLD,
    italic = DEFAULT_TEXT_ITALIC,
    ...restProps
  }: TextProps = $props();

  let classes = $derived(
    TextStyleManager.getTextClasses(size, muted, bold, italic, className)
  );
</script>

{#if as === 'p'}
  <p class={classes} {...restProps}>
    {#if children}
      {@render children()}
    {/if}
  </p>
{:else if as === 'span'}
  <span class={classes} {...restProps}>
    {#if children}
      {@render children()}
    {/if}
  </span>
{:else if as === 'div'}
  <div class={classes} {...restProps}>
    {#if children}
      {@render children()}
    {/if}
  </div>
{:else if as === 'label'}
  <label class={classes} {...restProps}>
    {#if children}
      {@render children()}
    {/if}
  </label>
{/if}