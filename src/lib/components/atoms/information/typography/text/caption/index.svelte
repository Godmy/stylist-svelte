<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  import type { CaptionProps } from '$stylist/design-system/attributes';
  import { getCaptionClasses } from '$stylist/design-system/presets';
  import { buildClasses } from '$stylist/utils/classes';
  import { computeAriaLabel } from '$stylist/utils/aria';

  /**
   * Caption component - Displays a small, descriptive text, often for figures or tables.
   *
   * @param variant - Visual style variant
   * @param size - Size of the caption ('sm' | 'md' | 'lg')
   * @param disabled - Whether the caption is disabled
   * @param block - Whether the caption should span the full width
   * @param children - Snippet content for the caption (if not using default text content)
   * @returns An accessible, styled caption element
   */

  let props: CaptionProps & HTMLAttributes<HTMLElement> & { children?: Snippet } = $props();

  const variant = $derived(props.variant ?? 'default');
  const size = $derived(props.size ?? 'md');
  const disabled = $derived(props.disabled ?? false);
  const block = $derived(props.block ?? false);
  const children = $derived(props.children);

  const classes = $derived(
    getCaptionClasses(props.class ?? '')
  );

  const ariaLabel = $derived(
    computeAriaLabel(props.ariaLabel, props as Record<string, unknown>, '')
  );

  const attrs = $derived({
    'aria-label': ariaLabel || undefined,
  });
</script>

<div
  {...props}
  class={classes}
  {...attrs}
>
  {#if children}
    {@render children()}
  {/if}
</div>