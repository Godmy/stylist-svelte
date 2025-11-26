<script lang="ts">
  import type { Snippet } from 'svelte';

  import type { CaptionProps } from './types';
  import { DEFAULT_CAPTION_MUTED } from './constant';
  import { CaptionStyleManager } from './styles';

  /**
   * Caption component - Displays a small, descriptive text, often for figures or tables.
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state.
   * - Open/Closed: Extendable through properties but closed for modification.
   * - Liskov Substitution: Can be substituted with other similar components.
   * - Interface Segregation: Small focused interface.
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions.
   *
   * @param muted - If true, the caption text will be muted.
   * @param children - The content of the caption.
   * @param class - Additional CSS classes.
   * @returns A styled caption element.
   */
  let {
    muted = DEFAULT_CAPTION_MUTED,
    children,
    class: className = '',
    ...restProps
  }: CaptionProps = $props();

  let classes = $derived(
    CaptionStyleManager.getCaptionClasses(muted, className)
  );
</script>

<div class={classes} {...restProps}>
  {@render children?.()}
</div>