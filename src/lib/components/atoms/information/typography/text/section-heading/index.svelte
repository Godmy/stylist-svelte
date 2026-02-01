<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  import type { HeadingProps } from '$stylist/design-system/typography';

  /**
   * SectionHeading component - Displays a section heading text with various levels and styles.
   *
   * @param variant - Visual style variant
   * @param size - Size of the section heading ('sm' | 'md' | 'lg')
   * @param disabled - Whether the section heading is disabled
   * @param block - Whether the section heading should span the full width
   * @param children - Snippet content for the section heading (if not using default text content)
   * @returns An accessible, styled section heading element
   */

  let props: HeadingProps & HTMLAttributes<HTMLElement> & { children?: Snippet } = $props();

  const variant = $derived(props.variant ?? 'default');
  const size = $derived(props.size ?? 'lg');
  const disabled = $derived(props.disabled ?? false);
  const block = $derived(props.block ?? false);
  const children = $derived(props.children);

  const classes = $derived(
    `text-2xl font-bold ${disabled ? 'text-gray-400' : 'text-gray-900'} ${block ? 'block' : ''} ${props.class ?? ''}`.trim()
  );
</script>

<h1
  {...props}
  class={classes}
>
  {#if children}
    {@render children()}
  {/if}
</h1>